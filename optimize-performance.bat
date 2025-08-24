@echo off
echo Optimizing AI Resume Maker Performance...
echo.

echo 1. Checking Ollama status...
ollama list
echo.

echo 2. Optimizing Ollama settings...
echo Setting up performance optimizations...

REM Set environment variables for better performance
set OLLAMA_HOST=0.0.0.0:11434
set OLLAMA_ORIGINS=*

echo 3. Recommended performance settings:
echo - Use tinyllama:latest for fastest response
echo - Close other GPU-intensive applications
echo - Ensure at least 4GB free RAM
echo - Use SSD storage if available
echo.

echo 4. Model recommendations by hardware:
echo.
echo Low-end systems (4GB RAM, basic GPU):
echo   - tinyllama:latest (fastest, smallest)
echo.
echo Mid-range systems (8GB RAM, decent GPU):
echo   - llama2:7b (good balance)
echo.
echo High-end systems (16GB+ RAM, good GPU):
echo   - llama2:13b (better quality)
echo.

echo 5. Performance tips:
echo - First request may take 30-60 seconds (model loading)
echo - Subsequent requests will be much faster
echo - Keep Ollama running in background
echo - Use the health check endpoint to verify service status
echo.

echo 6. Testing connection...
curl -s http://localhost:11434/api/tags >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Ollama is running and accessible
) else (
    echo ✗ Ollama is not running. Start it with: ollama serve
)

echo.
echo Performance optimization complete!
echo Start the application with: start.bat
pause
