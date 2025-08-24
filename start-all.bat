@echo off
echo ========================================
echo STARTING ALL SERVICES
echo ========================================
echo.

echo 1. Stopping any existing services...
taskkill /f /im java.exe >nul 2>&1
taskkill /f /im node.exe >nul 2>&1

echo 2. Starting Ollama...
start /B ollama serve

echo 3. Waiting for Ollama...
timeout /t 5 /nobreak >nul

echo 4. Testing Ollama...
ollama list
if %errorlevel% neq 0 (
    echo ✗ Ollama failed to start
    pause
    exit /b 1
)
echo ✓ Ollama is running

echo 5. Starting Backend (in new window)...
start "Backend" cmd /k "cd /d %~dp0resume-ai-backend && mvn spring-boot:run"

echo 6. Waiting for backend to start...
timeout /t 15 /nobreak >nul

echo 7. Testing backend...
powershell -Command "try { $response = Invoke-RestMethod -Uri 'http://localhost:8080/api/v1/resume/health' -Method GET; Write-Host '✓ Backend is running' } catch { Write-Host '✗ Backend not responding yet - wait longer' }"

echo 8. Starting Frontend (in new window)...
start "Frontend" cmd /k "cd /d %~dp0resume_frontend && npm run dev"

echo.
echo ========================================
echo SERVICES STARTING...
echo ========================================
echo.
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173
echo.
echo IMPORTANT:
echo 1. Wait 30-60 seconds for backend to fully start
echo 2. Check the backend window for "Started ResumeAiBackendApplication"
echo 3. Then try generating a resume
echo.
echo If you see errors, run: test-api.bat
echo.
pause
