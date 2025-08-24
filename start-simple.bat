@echo off
echo ========================================
echo STARTING SERVICES SIMPLY
echo ========================================
echo.

echo 1. Starting Backend...
cd resume-ai-backend
start "Backend" cmd /k "mvn spring-boot:run"

echo 2. Waiting 10 seconds...
timeout /t 10 /nobreak >nul

echo 3. Starting Frontend...
cd ..\resume_frontend
start "Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo SERVICES STARTED!
echo ========================================
echo.
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173 (or 5174)
echo.
echo Wait 30 seconds for backend to fully start, then try again.
echo.
pause
