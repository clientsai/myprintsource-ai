# MyPrintSource.com - B2B Print Services Platform

A production-ready print procurement system with quote management, file uploads, and production tracking. Built for businesses that demand color accuracy and on-time delivery.

## 🚀 Quick Start

### 1. Setup Supabase Database

1. Go to [supabase.com](https://supabase.com) and sign in
2. Create a new project called "myprintsource" (or use existing)
3. Go to SQL Editor and run the entire contents of `supabase-schema.sql`
4. Go to Settings → API and copy your keys

### 2. Configure Environment

Copy `.env.local.example` to `.env.local` and add your Supabase keys:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Install and Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✅ Core Features

### Web Application (Complete UI)
- ✅ User registration and authentication
- ✅ Personal quote request page (myprintsource.com/username)
- ✅ Production schedule management interface
- ✅ Dashboard with print job overview
- ✅ Real-time quote status tracking
- ✅ File upload and specifications
- ✅ Order confirmations and tracking
- ✅ Mobile-responsive design

### API for Integration
- ✅ Complete REST API at `/api/v1`
- ✅ API key authentication
- ✅ Rate limiting
- ✅ OpenAPI documentation at `/api/v1/docs`
- ✅ Webhook support for order status
- ✅ All CRUD operations

## 📱 User Flows

### For Print Buyers (Account Holders)
1. Sign up at myprintsource.com/register
2. Set production capacity and deadlines
3. Share quote request link: myprintsource.com/[username]
4. Receive quotes and job status updates

### For Print Requesters (Clients)
1. Visit quote page: myprintsource.com/[username]
2. Upload files and specify requirements
3. Enter project details and deadline
4. Receive quote within 4 business hours

### For Developers (API)
1. Get API key from admin
2. Read docs at /api/v1/docs
3. Make authenticated requests
4. Receive webhooks for quote and production events

## 🔌 API Endpoints

### Authentication
- Header: `X-API-Key: your-api-key`

### Core Endpoints

#### Users
- `GET /api/v1/users` - List all users
- `POST /api/v1/users` - Create user programmatically
- `GET /api/v1/users/{userId}` - Get user details
- `PUT /api/v1/users/{userId}` - Update user
- `DELETE /api/v1/users/{userId}` - Delete user

#### Print Jobs (Bookings)
- `GET /api/v1/bookings` - List print jobs with filters
- `POST /api/v1/bookings` - Create print job request
- `GET /api/v1/bookings/{bookingId}` - Get job details
- `DELETE /api/v1/bookings/{bookingId}` - Cancel print job

#### Production Capacity (Availability)
- `POST /api/v1/availability/slots` - Get available production slots
- `GET /api/v1/users/{userId}/availability` - Get production schedule
- `POST /api/v1/users/{userId}/availability` - Set production capacity

### Example API Usage

```javascript
// Create a print job request via API
const response = await fetch('https://myprintsource.com/api/v1/bookings', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your-api-key'
  },
  body: JSON.stringify({
    user_id: 'print-vendor-id',
    guest_name: 'ABC Corp',
    guest_email: 'procurement@abccorp.com',
    start_time: '2025-01-15T14:00:00Z',  // Delivery deadline
    end_time: '2025-01-15T16:00:00Z',
    notes: '5000 business cards, 4-color offset, coated stock 14pt, bleeds on all sides'
  })
})
```

## 🧪 Testing

### Test Web UI Flow
1. Register a new account
2. Set your production schedule
3. Copy your quote request link
4. Open in incognito/another browser
5. Submit a print job request
6. Check dashboard for the new job

### Test API Integration
```bash
npm run test:api
```

This will test:
- User/account creation via API
- Production capacity checking
- Print job request creation
- Double-scheduling prevention
- Webhook delivery for status updates

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables:
   - All from `.env.local`
   - Set `NEXT_PUBLIC_APP_URL` to your domain
4. Deploy

### Production Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# App
NEXT_PUBLIC_APP_URL=https://myprintsource.com
NEXTAUTH_URL=https://myprintsource.com
NEXTAUTH_SECRET=[generate with: openssl rand -base64 32]

# Email (Optional - for quote notifications)
RESEND_API_KEY=re_your_key

# API
API_RATE_LIMIT=1000
API_KEY_SALT=[generate random]
WEBHOOK_SECRET=[shared with integrations]
```

## 📊 Database Schema

- **users**: Print vendor/buyer profiles and settings
- **bookings**: All print job requests and orders
- **availabilities**: Weekly production capacity schedule
- **event_types**: Different print service types (offset, digital, large format, etc.)
- **api_clients**: API client management
- **api_logs**: API usage tracking

## 🔐 Security Features

- Supabase Row Level Security (RLS)
- API key authentication with SHA256 hashing
- Rate limiting per API client
- Atomic print job operations (no double-scheduling)
- CORS properly configured
- Input validation with Zod schemas

## 🎨 Design System

MyPrintSource brand guidelines:
- Minimal, professional interface
- System fonts (-apple-system)
- Primary color: Forest Green (#1A472A) - reliability & precision
- Secondary: Gold (#D4AF37) - premium quality
- Accent: Red (#E63946) - urgency & rush service
- Generous whitespace
- Subtle animations (200ms ease-out)
- Mobile-first responsive

## 📦 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Dates**: date-fns
- **Deployment**: Vercel

## 🤝 Integration Support

The API is designed for seamless integration with procurement and ERP systems:

1. **Authentication**: Uses `X-API-Key` header (standard REST pattern)
2. **Response Format**: JSON with `success`, `data`, and `meta` fields
3. **Error Handling**: Standard HTTP status codes with error messages
4. **Pagination**: Supports `page` and `limit` parameters
5. **Webhooks**: POST to configured URLs with quote and production status events

## 📝 License

MIT

## 🆘 Support

For quotes, technical support, or integration questions:
- Direct Line: (555) 847-PRINT
- Email: quotes@myprintsource.com
- API Docs: [/api/v1/docs](/api/v1/docs)
- Technical Support: dev@myprintsource.com

---

**Built for precision printing and on-time delivery**