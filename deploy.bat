@echo off
echo.
echo 🚀 Deploying Restaurant App to Vercel...
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo Installing Vercel CLI...
    call npm install -g vercel
)

REM Deploy Backend
echo.
echo Deploying Backend...
cd Backend
call vercel --prod
if errorlevel 1 (
    echo Backend deployment failed!
    exit /b 1
)

for /f "tokens=*" %%i in ('vercel list 2^>nul ^| findstr /r "https://"') do (
    set BACKEND_URL=%%i
    goto backend_done
)
:backend_done

echo Backend deployed: %BACKEND_URL%

cd ..

REM Deploy Frontend
echo.
echo Deploying Frontend...
cd Frontend
call vercel --prod --env VITE_API_BASE_URL=%BACKEND_URL%/api
if errorlevel 1 (
    echo Frontend deployment failed!
    exit /b 1
)

for /f "tokens=*" %%i in ('vercel list 2^>nul ^| findstr /r "https://"') do (
    set FRONTEND_URL=%%i
    goto frontend_done
)
:frontend_done

echo Frontend deployed: %FRONTEND_URL%

cd ..

echo.
echo ✅ Deployment complete!
echo Backend: %BACKEND_URL%
echo Frontend: %FRONTEND_URL%
