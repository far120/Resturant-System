# Vercel Deployment Quick Start Guide

## Step 1: Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster (free tier available)
3. Create a database user with username and password
4. Whitelist your IP or use `0.0.0.0/0` for development
5. Get your connection string (it should look like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   ```

## Step 2: Prepare Your Local Environment

### 1. Add environment variables

**Backend** - Create `Backend/.env`:
```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
PORT=3002
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Frontend** - Create `Frontend/.env.local`:
```
VITE_API_BASE_URL=http://localhost:3002/api
```

### 2. Test locally
```bash
# Terminal 1 - Backend
cd Backend
npm install
npm run dev

# Terminal 2 - Frontend
cd Frontend
npm install
npm run dev
```

## Step 3: Create Vercel Projects

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy Backend:
   ```bash
   cd Backend
   vercel
   ```
   - Choose "n" for framework preset
   - Choose "." for root directory
   - Follow prompts

3. Deploy Frontend:
   ```bash
   cd Frontend
   vercel
   ```
   - Select Vite as framework
   - Choose "." for root directory
   - Set `VITE_API_BASE_URL` to your backend URL

### Option B: Using GitHub + Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Configure as instructed below

## Step 4: Configure Backend on Vercel

1. Go to Vercel Dashboard → Your Backend Project
2. Click Settings → Environment Variables
3. Add these variables:
   ```
   MONGO_URI = <your-mongodb-connection-string>
   JWT_SECRET = <your-secret-key>
   JWT_EXPIRE = 7d
   COOKIE_EXPIRE = 7
   NODE_ENV = production
   FRONTEND_URL = https://your-frontend-url.vercel.app
   ```

4. Click Settings → Build & Deploy
5. Ensure Build Settings are:
   ```
   Framework Preset: Other
   Build Command: npm install
   Output Directory: (leave empty)
   Install Command: npm install
   Start Command: npm start
   Root Directory: Backend
   ```

## Step 5: Configure Frontend on Vercel

1. Go to Vercel Dashboard → Your Frontend Project
2. Click Settings → Environment Variables
3. Add:
   ```
   VITE_API_BASE_URL = https://your-backend-url.vercel.app/api
   ```

4. Click Settings → Build & Deploy
5. Ensure Build Settings are:
   ```
   Framework: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Root Directory: Frontend
   ```

## Step 6: Deploy

### Using Vercel CLI:
```bash
# Backend
cd Backend
vercel --prod

# Frontend
cd Frontend
vercel --prod
```

### Using GitHub:
Just push to your main branch - Vercel will automatically deploy!

## Step 7: Verify Deployment

1. **Backend** - Test API endpoint:
   ```bash
   curl https://your-backend-url.vercel.app/api/products
   ```

2. **Frontend** - Visit URL in browser:
   ```
   https://your-frontend-url.vercel.app
   ```

3. Check Vercel Dashboard for:
   - Build logs
   - Deployment status
   - Runtime logs

## Common Issues & Solutions

### MongoDB Connection Failed
- **Cause**: IP not whitelisted or wrong connection string
- **Solution**: 
  - Check MongoDB Atlas IP whitelist
  - Use correct connection string format
  - Verify credentials

### "Cannot find module" error
- **Cause**: Dependencies not installed
- **Solution**: Ensure `npm install` runs during build

### CORS errors
- **Cause**: Wrong FRONTEND_URL in backend env
- **Solution**: Set FRONTEND_URL to your actual Vercel frontend URL

### Files not uploading
- **Cause**: Vercel has ephemeral file system
- **Solution**: Use S3 or cloud storage for uploads

### Blank page on frontend
- **Cause**: Wrong API URL or build failed
- **Solution**: 
  - Check console for errors
  - Verify VITE_API_BASE_URL is set
  - Check Vercel build logs

## Monitoring & Logs

Access logs in Vercel:
1. Dashboard → Project → Deployments
2. Click on latest deployment
3. View "Logs" tab

Set up monitoring:
- Enable analytics (free in Vercel)
- Set up error alerts
- Monitor response times

## Auto-Deployment with GitHub

Enable auto-deployment:
1. Connect GitHub to Vercel
2. Each push to main branch triggers deployment
3. Pull requests get preview deployments

## Useful Commands

```bash
# List all deployments
vercel list

# View specific deployment
vercel --prod

# See logs
vercel logs <url>

# Rollback to previous
vercel rollback

# Remove project
vercel remove <project-name>
```

## Next Steps

- Set up custom domain (optional)
- Configure analytics
- Set up CI/CD pipeline for testing
- Monitor performance
- Plan scaling strategy

For more help: [Vercel Docs](https://vercel.com/docs)
