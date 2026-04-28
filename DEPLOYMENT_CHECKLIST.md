# Pre-Deployment Checklist

## Backend Checklist
- [ ] Created `.env` file with production values
  - [ ] MONGO_URI is set correctly
  - [ ] JWT_SECRET is a strong random string
  - [ ] FRONTEND_URL matches your Vercel frontend URL
  - [ ] NODE_ENV is set to 'production'
- [ ] Run `npm install` in Backend folder
- [ ] Test locally with `npm run dev`
- [ ] All middleware is working correctly
- [ ] Database connection is tested
- [ ] Rate limiting is appropriate for production
- [ ] CORS is configured correctly
- [ ] Error handling middleware is in place

## Frontend Checklist
- [ ] Created `.env.production` or configured in Vercel settings
  - [ ] VITE_API_BASE_URL points to your backend Vercel URL
- [ ] Run `npm install` in Frontend folder
- [ ] Test build locally: `npm run build`
- [ ] Test preview: `npm run preview`
- [ ] API calls use environment variables
- [ ] Remove hardcoded localhost URLs
- [ ] Authentication tokens are stored in localStorage
- [ ] Error boundaries are in place

## Database Setup
- [ ] MongoDB Atlas account created
- [ ] Database user created
- [ ] IP whitelist configured (or 0.0.0.0/0)
- [ ] Connection string copied
- [ ] Database name verified in connection string
- [ ] Collections are ready (or seeding is configured)

## Vercel Configuration
- [ ] Vercel account created
- [ ] Projects created for both backend and frontend
- [ ] Environment variables added to Vercel dashboard
- [ ] Build settings are correct
- [ ] Domains are configured (optional)
- [ ] Analytics enabled (optional)

## Security
- [ ] JWT_SECRET is strong and unique
- [ ] CORS origins are whitelisted
- [ ] Helmet middleware is enabled
- [ ] Rate limiting is configured
- [ ] Input validation is in place
- [ ] No sensitive data in code

## Testing
- [ ] Backend API responds at `/api/products` (or test endpoint)
- [ ] Frontend loads without errors
- [ ] Login/authentication works
- [ ] API communication works
- [ ] Error handling displays correctly
- [ ] Mobile responsive design works

## Post-Deployment
- [ ] Monitor Vercel logs for errors
- [ ] Test all major features
- [ ] Check analytics and performance
- [ ] Set up monitoring/alerts (optional)
- [ ] Document deployment URLs
- [ ] Share URLs with team
