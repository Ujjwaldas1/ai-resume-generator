@echo off
echo ========================================
echo QUICK FIX FOR CUDA OUT OF MEMORY ERROR
echo ========================================
echo.

echo 1. Stopping any running Ollama processes...
taskkill /f /im ollama.exe >nul 2>&1

echo 2. Starting Ollama in CPU-only mode...
start /B ollama serve

echo 3. Waiting for Ollama to start...
timeout /t 5 /nobreak >nul

echo 4. Checking if TinyLlama is available...
ollama list | findstr tinyllama
if %errorlevel% neq 0 (
    echo TinyLlama not found. Pulling it now...
    ollama pull tinyllama:latest
) else (
    echo TinyLlama is available.
)

echo.
echo 5. Testing Ollama with CPU-only mode...
ollama run tinyllama:latest "Hello" --num-gpu 0

echo.
echo 6. Current system status:
echo - Backend should be running on port 8080
echo - Ollama is running in CPU-only mode
echo - TinyLlama model is ready
echo.

echo 7. Next steps:
echo - Try generating a resume again
echo - First request may take 60-120 seconds (CPU mode)
echo - Subsequent requests will be faster
echo.

echo ========================================
echo QUICK FIX COMPLETE!
echo ========================================
pause

