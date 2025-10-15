const { createServer } = require('http')
const { Server } = require('socket.io')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

// Store connected users
const connectedUsers = new Map()

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  // Join user to their personal room for order updates
  socket.on('join-user-room', (userId) => {
    socket.join(`user-${userId}`)
    connectedUsers.set(socket.id, userId)
    console.log(`User ${userId} joined their room`)
  })

  // Join admin to admin room for order management
  socket.on('join-admin-room', (adminId) => {
    socket.join('admin-room')
    connectedUsers.set(socket.id, adminId)
    console.log(`Admin ${adminId} joined admin room`)
  })

  // Handle order status updates
  socket.on('update-order-status', async (data) => {
    try {
      const { orderId, status, adminId } = data
      
      // Update order in database
      const order = await prisma.order.update({
        where: { id: orderId },
        data: { status },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          items: {
            include: {
              dish: {
                select: {
                  name: true,
                  preparationTime: true
                }
              }
            }
          }
        }
      })

      // Notify customer about order update
      socket.to(`user-${order.userId}`).emit('order-status-updated', {
        orderId,
        status,
        order: order,
        timestamp: new Date().toISOString()
      })

      // Notify admin about the update
      socket.to('admin-room').emit('order-updated', {
        orderId,
        status,
        order: order,
        updatedBy: adminId,
        timestamp: new Date().toISOString()
      })

      console.log(`Order ${orderId} status updated to ${status}`)
    } catch (error) {
      console.error('Error updating order status:', error)
      socket.emit('error', { message: 'Failed to update order status' })
    }
  })

  // Handle new order notifications
  socket.on('new-order', async (orderData) => {
    try {
      // Notify all admins about new order
      socket.to('admin-room').emit('new-order-received', {
        order: orderData,
        timestamp: new Date().toISOString()
      })

      console.log(`New order received: ${orderData.id}`)
    } catch (error) {
      console.error('Error handling new order:', error)
    }
  })

  // Handle reservation updates
  socket.on('update-reservation-status', async (data) => {
    try {
      const { reservationId, status, adminId } = data
      
      const reservation = await prisma.reservation.update({
        where: { id: reservationId },
        data: { status },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      })

      // Notify customer about reservation update
      socket.to(`user-${reservation.userId}`).emit('reservation-status-updated', {
        reservationId,
        status,
        reservation: reservation,
        timestamp: new Date().toISOString()
      })

      // Notify admin
      socket.to('admin-room').emit('reservation-updated', {
        reservationId,
        status,
        reservation: reservation,
        updatedBy: adminId,
        timestamp: new Date().toISOString()
      })

      console.log(`Reservation ${reservationId} status updated to ${status}`)
    } catch (error) {
      console.error('Error updating reservation status:', error)
      socket.emit('error', { message: 'Failed to update reservation status' })
    }
  })

  // Handle new reservation notifications
  socket.on('new-reservation', async (reservationData) => {
    try {
      // Notify all admins about new reservation
      socket.to('admin-room').emit('new-reservation-received', {
        reservation: reservationData,
        timestamp: new Date().toISOString()
      })

      console.log(`New reservation received: ${reservationData.id}`)
    } catch (error) {
      console.error('Error handling new reservation:', error)
    }
  })

  // Handle disconnect
  socket.on('disconnect', () => {
    const userId = connectedUsers.get(socket.id)
    if (userId) {
      console.log(`User ${userId} disconnected`)
      connectedUsers.delete(socket.id)
    } else {
      console.log(`Socket ${socket.id} disconnected`)
    }
  })
})

// Periodic order status updates (for demonstration)
setInterval(async () => {
  try {
    // Get orders that might need status updates
    const orders = await prisma.order.findMany({
      where: {
        status: {
          in: ['RECEIVED', 'PREPARING']
        },
        createdAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
        }
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    // Simulate automatic status progression for demo purposes
    for (const order of orders) {
      const timeSinceCreated = Date.now() - new Date(order.createdAt).getTime()
      const minutesSinceCreated = timeSinceCreated / (1000 * 60)

      let newStatus = null
      if (order.status === 'RECEIVED' && minutesSinceCreated > 5) {
        newStatus = 'PREPARING'
      } else if (order.status === 'PREPARING' && minutesSinceCreated > 20) {
        newStatus = 'READY'
      }

      if (newStatus) {
        await prisma.order.update({
          where: { id: order.id },
          data: { status: newStatus }
        })

        // Notify customer
        io.to(`user-${order.userId}`).emit('order-status-updated', {
          orderId: order.id,
          status: newStatus,
          order: order,
          timestamp: new Date().toISOString(),
          automatic: true
        })

        // Notify admin
        io.to('admin-room').emit('order-updated', {
          orderId: order.id,
          status: newStatus,
          order: order,
          updatedBy: 'system',
          timestamp: new Date().toISOString(),
          automatic: true
        })

        console.log(`Order ${order.id} automatically updated to ${newStatus}`)
      }
    }
  } catch (error) {
    console.error('Error in periodic order update:', error)
  }
}, 60000) // Run every minute

const PORT = process.env.SOCKET_PORT || 3001
httpServer.listen(PORT, () => {
  console.log(`🚀 Socket.IO server running on port ${PORT}`)
})

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('Shutting down Socket.IO server...')
  await prisma.$disconnect()
  process.exit(0)
})
