@echo off
echo ========================================
echo CHECKING OLLAMA SETUP
echo ========================================
echo.

echo 1. Checking if Ollama is running...
curl -s http://localhost:11434/api/tags >nul 2>&1
if %errorlevel% neq 0 (
    echo ✗ Ollama is NOT running on http://localhost:11434
    echo.
    echo Please start Ollama:
    echo   ollama serve
    echo.
    pause
    exit /b 1
)
echo ✓ Ollama is running

echo.
echo 2. Checking available models...
ollama list

echo.
echo 3. Checking if deepseek-r1:1.5b model is available...
ollama list | findstr "deepseek-r1:1.5b" >nul
if %errorlevel% neq 0 (
    echo ✗ Model 'deepseek-r1:1.5b' is NOT installed
    echo.
    echo Please install it:
    echo   ollama pull deepseek-r1:1.5b
    echo.
    echo OR use a different model by editing:
    echo   resume-ai-backend\src\main\resources\application.properties
    echo   Change: spring.ai.ollama.chat.model=deepseek-r1:1.5b
    echo   To: spring.ai.ollama.chat.model=llama3.2
    echo   (or any other model you have installed)
    echo.
) else (
    echo ✓ Model 'deepseek-r1:1.5b' is available
)

echo.
echo 4. Testing Ollama connection...
ollama run deepseek-r1:1.5b "Hello" --timeout 10
if %errorlevel% neq 0 (
    echo ✗ Failed to test model
) else (
    echo ✓ Model is working
)

echo.
echo ========================================
echo DIAGNOSIS COMPLETE
echo ========================================
pause

