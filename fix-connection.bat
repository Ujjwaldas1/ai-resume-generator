@echo off
echo ========================================
echo FIXING CONNECTION ISSUES
echo ========================================
echo.

echo 1. Stopping any running services...
taskkill /f /im java.exe >nul 2>&1
taskkill /f /im node.exe >nul 2>&1

echo 2. Starting Ollama...
start /B ollama serve

echo 3. Waiting for Ollama to start...
timeout /t 3 /nobreak >nul

echo 4. Testing Ollama...
ollama list
if %errorlevel% neq 0 (
    echo ✗ Ollama failed to start
    pause
    exit /b 1
)
echo ✓ Ollama is running

echo 5. Starting backend...
cd resume-ai-backend
start "Backend" cmd /k "mvn spring-boot:run"

echo 6. Waiting for backend to start...
timeout /t 10 /nobreak >nul

echo 7. Testing backend...
powershell -Command "try { $response = Invoke-RestMethod -Uri 'http://localhost:8080/api/v1/resume/health' -Method GET; Write-Host '✓ Backend is running' } catch { Write-Host '✗ Backend not responding yet' }"

echo 8. Starting frontend...
cd ..\resume_frontend
start "Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo SERVICES STARTED!
echo ========================================
echo.
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173
echo.
echo Wait 30 seconds for everything to fully start, then try again.
echo.
pause
