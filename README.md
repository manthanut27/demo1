# Epicure - Premium Restaurant Ordering & Booking System

A comprehensive, production-ready restaurant web application built with Next.js, featuring elegant design, real-time order tracking, table reservations, and seamless payment integration.

## 🌟 Features

### Core Functionality
- **📱 Responsive Design**: Mobile-first approach with premium visual styling
- **🍽️ Public Menu**: Categories, dish details with photos, ingredients, dietary tags, and chef profiles
- **🛒 Shopping Cart**: Add/remove items, apply promo codes, calculate taxes, order confirmation
- **📊 Real-time Order Tracking**: Live updates from "Received" → "Preparing" → "Ready" → "Out for delivery" → "Completed"
- **📅 Table Reservations**: View available slots, reserve seats, modify/cancel reservations
- **👨‍💼 Admin Dashboard**: Manage orders, update menu, chef profiles, and reservations
- **🔐 Authentication**: Email/password with optional social SSO
- **📧 Notifications**: Email & in-app notifications for bookings and order updates
- **💳 Payments**: Stripe integration with test mode and secure checkout flow

### Technical Highlights
- **⚡ Performance**: Server-side rendering, lazy loading, optimized images
- **🔒 Security**: Input sanitization, CSRF protection, secure authentication
- **♿ Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **🧪 Testing**: Comprehensive unit and integration tests
- **🚀 Deployment**: Docker containers with CI/CD pipeline

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Socket.IO Client** - Real-time communication

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Database management
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication
- **Socket.IO** - Real-time server
- **Stripe** - Payment processing

### DevOps & Testing
- **Jest** - Testing framework
- **Testing Library** - Component testing
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Nginx** - Reverse proxy

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 15+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/restaurant-app.git
   cd restaurant-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/restaurant_app"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Start the Socket.IO server** (in a separate terminal)
   ```bash
   node socket-server.js
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
restaurant-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── menu/              # Menu pages
│   ├── reservations/      # Reservation pages
│   └── checkout/          # Checkout flow
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── forms/            # Form components
├── lib/                  # Utility libraries
│   ├── prisma.ts         # Database client
│   ├── auth.ts           # Authentication config
│   ├── stripe.ts         # Payment processing
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── prisma/               # Database schema & migrations
├── __tests__/            # Test files
├── public/               # Static assets
└── docker-compose.yml    # Docker configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Warm orange tones (#f2740a, #e35800)
- **Secondary**: Cool grays (#64748b, #334155)
- **Accent**: Fresh green (#22c55e, #16a34a)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Monospace**: Fira Code

### Spacing Scale
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)

### Component Library
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Soft shadows with hover effects
- **Forms**: Consistent styling with validation states
- **Badges**: Status indicators with semantic colors
- **Modals**: Backdrop blur with smooth animations

## 🧪 Testing

### Run Tests
```bash
# Unit tests
npm test

# Tests with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

### Test Coverage
- **Components**: Header, forms, cart functionality
- **API Routes**: Order creation, authentication, payments
- **Utilities**: Form validation, currency formatting
- **Integration**: End-to-end user flows

## 🐳 Docker Deployment

### Using Docker Compose
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Build
```bash
# Build the application
docker build -t restaurant-app .

# Run the container
docker run -p 3000:3000 restaurant-app
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Heroku
1. Create a new Heroku app
2. Add PostgreSQL addon
3. Set environment variables
4. Deploy using Heroku Git

### AWS/GCP
1. Use Docker containers
2. Set up managed PostgreSQL
3. Configure load balancer
4. Deploy using container services

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/session` - Get current session

### Menu Endpoints
- `GET /api/menu/categories` - Get all categories
- `GET /api/menu/dishes` - Get dishes with filters
- `GET /api/menu/dishes/[id]` - Get dish details

### Order Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/[id]` - Get order details
- `PATCH /api/orders/[id]` - Update order status

### Reservation Endpoints
- `POST /api/reservations` - Create reservation
- `GET /api/reservations` - Get user reservations
- `PATCH /api/reservations/[id]` - Update reservation
- `DELETE /api/reservations/[id]` - Cancel reservation

### Payment Endpoints
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/webhook` - Stripe webhook handler

## 🔧 Configuration

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"

# Payments
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Real-time
SOCKET_URL="http://localhost:3001"

# Email (optional)
EMAIL_FROM="noreply@epicure.com"
EMAIL_SERVER_HOST="smtp.gmail.com"
```

### Database Configuration
The application uses Prisma ORM with PostgreSQL. Key models:
- **User**: Customer and admin accounts
- **Chef**: Chef profiles and specialties
- **Category**: Menu categories
- **Dish**: Menu items with details
- **Order**: Customer orders with items
- **Reservation**: Table bookings
- **PromoCode**: Discount codes

## 📱 Mobile Responsiveness

The application is fully responsive with:
- **Mobile-first design** approach
- **Touch-friendly** interface elements
- **Optimized images** with lazy loading
- **Progressive Web App** capabilities
- **Offline support** for cached content

## 🔒 Security Features

- **Input sanitization** and validation
- **CSRF protection** for forms
- **Rate limiting** on API endpoints
- **Secure authentication** with NextAuth.js
- **Encrypted data** transmission
- **SQL injection** protection via Prisma
- **XSS prevention** with proper escaping

## 🎯 Performance Optimizations

- **Server-side rendering** for SEO
- **Image optimization** with Next.js Image
- **Code splitting** for faster loading
- **Lazy loading** for non-critical components
- **Database indexing** for query performance
- **Caching strategies** for static content
- **CDN integration** for assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Update documentation as needed
- Follow the established code style
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@epicure.com or create an issue in the GitHub repository.

## 🙏 Acknowledgments

- Design inspiration from modern restaurant websites
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first approach
- Stripe for seamless payment processing
- The open-source community for various packages

---

**Epicure Restaurant** - Where culinary excellence meets digital innovation.
