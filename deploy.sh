#!/bin/bash

echo "🚀 Deploying Restaurant App to Vercel..."
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Installing Vercel CLI...${NC}"
    npm install -g vercel
fi

# Deploy Backend
echo -e "${YELLOW}Deploying Backend...${NC}"
cd Backend
vercel --prod --env MONGO_URI --env JWT_SECRET --env FRONTEND_URL

if [ $? -ne 0 ]; then
    echo -e "${RED}Backend deployment failed!${NC}"
    exit 1
fi

BACKEND_URL=$(vercel list 2>/dev/null | grep -oP 'https://\S+' | head -1)
echo -e "${GREEN}Backend deployed: $BACKEND_URL${NC}"

cd ../

# Deploy Frontend
echo -e "${YELLOW}Deploying Frontend...${NC}"
cd Frontend
vercel --prod --env VITE_API_BASE_URL=$BACKEND_URL/api

if [ $? -ne 0 ]; then
    echo -e "${RED}Frontend deployment failed!${NC}"
    exit 1
fi

FRONTEND_URL=$(vercel list 2>/dev/null | grep -oP 'https://\S+' | head -1)
echo -e "${GREEN}Frontend deployed: $FRONTEND_URL${NC}"

cd ../

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}Backend: $BACKEND_URL${NC}"
echo -e "${GREEN}Frontend: $FRONTEND_URL${NC}"
