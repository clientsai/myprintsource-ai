# Punctual.AI - Deployment Guide

## 🚀 IMMEDIATE DEPLOYMENT STEPS

### Step 1: Configure Supabase (5 minutes)

1. Open your Supabase Dashboard for the "punctual-ai" project
2. Go to **SQL Editor**
3. Copy and paste the ENTIRE contents of `supabase-schema.sql`
4. Click **Run** to create all tables and functions
5. Go to **Settings → API**
6. Copy these keys:
   - `URL`: https://[your-ref].supabase.co
   - `anon` public key
   - `service_role` key (keep secret!)

### Step 2: Set Environment Variables

Create `.env.local` with your actual values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://[your-ref].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Email notifications
RESEND_API_KEY=re_[your-key]
```

### Step 3: Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Step 4: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and add environment variables
```

## ✅ TESTING CHECKLIST

### Web UI Flow Test

1. **Registration**
   - Go to `/register`
   - Create account
   - Login at `/login`

2. **Set Availability**
   - Go to `/availability`
   - Set your weekly hours
   - Save changes

3. **Test Booking**
   - Copy your booking link from dashboard
   - Open in incognito window
   - Select date and time
   - Complete booking

### API Integration Test

Run the test script:

```bash
npm run test:api
```

Or test manually:

```bash
# Get API docs
curl http://localhost:3000/api/v1/docs

# Create booking via API
curl -X POST http://localhost:3000/api/v1/bookings \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test_api_key_123" \
  -d '{
    "user_id": "your-user-id",
    "guest_name": "Test Guest",
    "guest_email": "test@example.com",
    "start_time": "2024-01-20T14:00:00Z",
    "end_time": "2024-01-20T14:30:00Z"
  }'
```

## 🌐 PRODUCTION DEPLOYMENT

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add ALL environment variables
4. Deploy

### Environment Variables for Production

```bash
NEXT_PUBLIC_SUPABASE_URL=[your-supabase-url]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-key]
NEXT_PUBLIC_APP_URL=https://punctual.ai
NEXTAUTH_URL=https://punctual.ai
NEXTAUTH_SECRET=[generate-secure-secret]
RESEND_API_KEY=[your-resend-key]
```

## 🔍 VERIFICATION STEPS

### 1. Database Check
- Go to Supabase Table Editor
- Verify 4 tables exist: `users`, `bookings`, `availabilities`, `event_types`
- Check `api_clients` table has test client

### 2. Web Application
- User can register
- User can set availability
- Booking page works at `/[username]`
- Bookings appear in dashboard

### 3. API Endpoints
- Documentation at `/api/v1/docs`
- Test endpoints with API key
- Verify webhook delivery

## 🆘 TROUBLESHOOTING

### "Supabase connection failed"
- Check environment variables
- Verify Supabase project is active
- Check API keys are correct

### "Build fails"
- Run `npm install`
- Check Node version (>= 18)
- Clear `.next` folder

### "API returns 401"
- Check API key header: `X-API-Key`
- Verify API client exists in database
- Check rate limits

### "Bookings not saving"
- Check Supabase RLS policies
- Verify atomic booking function exists
- Check browser console for errors

## 📱 CLIENTS.AI INTEGRATION

The API is ready for Clients.AI to consume:

1. **Base URL**: `https://punctual.ai/api/v1`
2. **Authentication**: `X-API-Key` header
3. **Documentation**: `/api/v1/docs`

### Key Endpoints for Clients.AI

- `POST /api/v1/users` - Create users
- `POST /api/v1/bookings` - Create bookings
- `POST /api/v1/availability/slots` - Check availability
- `GET /api/v1/bookings` - List bookings

### Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": {...},
  "meta": {...}
}
```

## 🎉 SUCCESS CRITERIA

Your deployment is successful when:

1. ✅ Users can sign up at `/register`
2. ✅ Users can set availability
3. ✅ Public booking page works at `/[username]`
4. ✅ Bookings save without conflicts
5. ✅ Dashboard shows all bookings
6. ✅ API responds to authenticated requests
7. ✅ API documentation is accessible
8. ✅ Clients.AI can create bookings via API

## 📞 SUPPORT

- Check logs in Vercel dashboard
- Monitor Supabase logs
- Test API with: `curl -H "X-API-Key: test_api_key_123" [endpoint]`

---

**Ready to deploy! The system is fully functional.** 🚀