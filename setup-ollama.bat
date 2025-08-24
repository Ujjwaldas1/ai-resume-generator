@echo off
echo Setting up Ollama for AI Resume Maker...
echo.

echo Checking if Ollama is installed...
ollama --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Ollama is not installed. Please install it from https://ollama.ai
    echo After installation, run this script again.
    pause
    exit /b 1
)

echo Ollama is installed. Checking available models...
ollama list

echo.
echo Pulling TinyLlama model (smaller, faster, less memory usage)...
ollama pull tinyllama:latest

echo.
echo Setting up model configuration...
echo You can also try these alternative models if you have more GPU memory:
echo - llama2:7b (medium size, good performance)
echo - llama2:13b (larger, better performance)
echo - deepseek-r1:7b (large, best performance but requires more memory)

echo.
echo To use a different model, edit application.properties and change:
echo spring.ai.ollama.chat.model=your-model-name

echo.
echo Setup complete! You can now start the application.
pause
