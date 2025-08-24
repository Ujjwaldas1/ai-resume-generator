@echo off
echo Starting AI Resume Maker...
echo.

echo Starting Backend (Spring Boot)...
start "Backend" cmd /k "cd resume-ai-backend && mvn spring-boot:run"

echo Waiting for backend to start...
timeout /t 10 /nobreak > nul

echo Starting Frontend (React)...
start "Frontend" cmd /k "cd resume_frontend && npm run dev"

echo.
echo Services are starting...
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit this window...
pause > nul
