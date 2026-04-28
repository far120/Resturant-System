# Vercel Deployment Guide

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository (recommended for automatic deployments)
- MongoDB Atlas account or MongoDB URI

## Backend Deployment Setup

### 1. Prepare Backend for Vercel

The backend is configured to run as a serverless Node.js application on Vercel.

### 2. Environment Variables

Add these environment variables in your Vercel project settings:

```
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
JWT_EXPIRE = 7d
COOKIE_EXPIRE = 7
FRONTEND_URL = your_frontend_vercel_url
NODE_ENV = production
```

### 3. Deploy Backend

#### Option A: Using Vercel CLI

```bash
cd Backend
npm install -g vercel
vercel
```

Follow the prompts and add environment variables when asked.

#### Option B: Using GitHub

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Configure project:
   - Framework Preset: **Other**
   - Root Directory: **Backend**
   - Build Command: **npm install && npm run build** (or skip if not needed)
   - Output Directory: (leave empty)
   - Install Command: **npm install**
   - Start Command: **npm start**
5. Add environment variables in Settings
6. Deploy

## Frontend Deployment Setup

### 1. Update API Configuration

Update your frontend API configuration to use the backend URL.

In `src/services/api.js` or similar:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002/api';
```

### 2. Deploy Frontend

#### Using GitHub

1. Ensure `Frontend` folder has `package.json`
2. Push to GitHub
3. Go to https://vercel.com/new
4. Import repository
5. Configure project:
   - Framework: **Vite**
   - Root Directory: **Frontend**
   - Build Command: **npm run build**
   - Output Directory: **.next** (for Vite, it's `dist`)
6. Add environment variables:
   ```
   VITE_API_URL = your_backend_vercel_url/api
   ```
7. Deploy

#### Using Vercel CLI

```bash
cd Frontend
vercel
```

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
FRONTEND_URL=https://your-frontend.vercel.app
NODE_ENV=production
```

### Frontend (.env.local)
```
VITE_API_URL=https://your-backend.vercel.app/api
VITE_ENV=production
```

## Important Notes

1. **Separate Deployments**: 
   - Deploy backend and frontend as separate Vercel projects
   - This gives you independent URLs for each

2. **CORS Configuration**:
   - Make sure CORS is enabled in your backend (`app.js` already has this)
   - Update the FRONTEND_URL in backend env variables

3. **Database**:
   - Use MongoDB Atlas for cloud hosting
   - Whitelist Vercel IPs or use `0.0.0.0/0` for development

4. **File Uploads**:
   - Vercel serverless functions have `/tmp` for temporary storage
   - For persistent storage, consider AWS S3 or similar

5. **Rate Limiting**:
   - Already configured in your middleware
   - Adjust if needed in `Backend/src/middlewares/rateLimit.js`

## Verifying Deployment

After deployment:

1. Check backend health:
   ```
   curl https://your-backend.vercel.app/api/products
   ```

2. Check frontend loads:
   - Visit https://your-frontend.vercel.app

3. Monitor logs:
   - Go to Vercel dashboard → Settings → Logs

## Troubleshooting

### "Cannot find module" errors
- Run `npm install` in the respective directory
- Check `package.json` is present

### CORS errors
- Verify `FRONTEND_URL` is set in backend env variables
- Check CORS middleware in `Backend/src/app.js`

### MongoDB connection issues
- Verify `MONGO_URI` format
- Check IP whitelist in MongoDB Atlas
- Use `mongodb+srv://` URI format

### Uploads not working
- Vercel serverless functions have ephemeral file systems
- Consider using cloud storage (S3, Azure Blob, etc.)

## Automatic Deployments

To enable automatic deployments on each push:

1. Connect GitHub to Vercel
2. Each push to main/master branch triggers deployment
3. Preview deployments for pull requests

## Support

For more help:
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
