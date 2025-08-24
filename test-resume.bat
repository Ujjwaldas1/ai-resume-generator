@echo off
echo ========================================
echo TESTING RESUME GENERATION
echo ========================================
echo.

echo 1. Testing backend health...
curl -s http://localhost:8080/api/v1/resume/health
if %errorlevel% neq 0 (
    echo ✗ Backend is not running. Please start it first.
    pause
    exit /b 1
)
echo ✓ Backend is running

echo.
echo 2. Testing Ollama connection...
ollama list | findstr tinyllama
if %errorlevel% neq 0 (
    echo ✗ TinyLlama not found. Please run: ollama pull tinyllama:latest
    pause
    exit /b 1
)
echo ✓ TinyLlama is available

echo.
echo 3. Testing AI response...
echo Testing with sample prompt...
ollama run tinyllama:latest "Generate a professional IT job resume in JSON format based on the following description. I'm Ujjwal Das. I'm passionate about coding and problem-solving, with a strong interest in algorithms and software development." --num-gpu 0

echo.
echo ========================================
echo TEST COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Open your browser to: http://localhost:5173
echo 2. Go to Generate Resume page
echo 3. Enter your description and try again
echo 4. The form should now populate with your name and data
echo.
pause
