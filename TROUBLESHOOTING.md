# Troubleshooting Guide

## Common Issues and Solutions

### 1. CUDA Out of Memory Error

**Error**: `cudaMalloc failed: out of memory`

**Solutions**:

#### Option A: Use a Smaller Model
1. Edit `resume-ai-backend/src/main/resources/application.properties`
2. Change the model to a smaller one:
   ```properties
   spring.ai.ollama.chat.model=tinyllama:latest
   # or
   spring.ai.ollama.chat.model=llama2:7b
   ```

#### Option B: Use CPU-Only Mode
1. Edit `resume-ai-backend/src/main/resources/application.properties`
2. Uncomment the CPU-only line:
   ```properties
   spring.ai.ollama.chat.options.num-gpu=0
   ```

#### Option C: Free Up GPU Memory
1. Close other GPU-intensive applications (games, video editors, etc.)
2. Restart your computer
3. Check GPU memory usage with `nvidia-smi` (if using NVIDIA GPU)

#### Option D: Increase Virtual Memory
1. Open System Properties → Advanced → Performance Settings
2. Click "Change" under Virtual Memory
3. Increase the page file size

### 2. Ollama Not Running

**Error**: Connection refused or timeout

**Solutions**:
1. Start Ollama service:
   ```bash
   ollama serve
   ```
2. Check if Ollama is running:
   ```bash
   ollama list
   ```
3. Restart Ollama if needed

### 3. Model Not Found

**Error**: Model not found or pull failed

**Solutions**:
1. Pull the required model:
   ```bash
   ollama pull tinyllama:latest
   ```
2. Check available models:
   ```bash
   ollama list
   ```
3. Use the setup script: `setup-ollama.bat`

### 4. Frontend Can't Connect to Backend

**Error**: Network error or CORS issues

**Solutions**:
1. Ensure backend is running on port 8080
2. Check if frontend is trying to connect to the correct URL
3. Verify CORS configuration in backend
4. Check firewall settings

### 5. PDF Generation Fails

**Error**: PDF download doesn't work

**Solutions**:
1. Check browser console for errors
2. Ensure all required dependencies are installed
3. Try a different browser
4. Check if the resume content is properly rendered

### 6. Form Validation Issues

**Error**: Form doesn't submit or validation fails

**Solutions**:
1. Check browser console for JavaScript errors
2. Ensure all required fields are filled
3. Check React Hook Form configuration
4. Verify form data structure

## Performance Optimization

### For Better AI Performance:
1. Use a model that fits your GPU memory
2. Close unnecessary applications
3. Use SSD storage for faster model loading
4. Consider using a dedicated GPU
5. **First request takes 30-60 seconds** (model loading) - subsequent requests are faster
6. Keep Ollama running in background
7. Use `tinyllama:latest` for fastest response times

### For Better Application Performance:
1. Use production builds for frontend
2. Enable compression in backend
3. Use connection pooling for database (if added)
4. Implement caching strategies
5. Run `optimize-performance.bat` for system optimization
6. Check health endpoint: `http://localhost:8080/api/v1/resume/health`

### Loading Time Expectations:
- **First request**: 30-60 seconds (model loading)
- **Subsequent requests**: 10-30 seconds
- **With GPU acceleration**: 5-15 seconds
- **CPU-only mode**: 30-60 seconds

## Model Recommendations

### Based on Hardware:

**Low-end GPU (4GB VRAM or less)**:
- `tinyllama:latest` (recommended)
- `llama2:7b` (if you have 4GB+ VRAM)

**Mid-range GPU (6-8GB VRAM)**:
- `llama2:7b`
- `llama2:13b` (if you have 8GB+ VRAM)

**High-end GPU (12GB+ VRAM)**:
- `deepseek-r1:7b`
- `llama2:70b` (if you have 24GB+ VRAM)

### CPU-Only Mode:
- Use `tinyllama:latest` for best performance
- Expect slower response times
- No GPU memory requirements

## Environment Variables

You can set these environment variables to customize behavior:

```bash
# Force CPU-only mode
export OLLAMA_HOST=0.0.0.0:11434

# Set custom Ollama URL
export OLLAMA_BASE_URL=http://localhost:11434

# Increase Java heap size (if needed)
export JAVA_OPTS="-Xmx4g"
```

## Getting Help

If you're still experiencing issues:

1. Check the logs in both frontend and backend consoles
2. Verify all prerequisites are installed correctly
3. Try the fallback mode (the app will work without AI)
4. Create an issue in the repository with:
   - Error message
   - System specifications
   - Steps to reproduce
   - Logs from both frontend and backend

## Fallback Mode

The application includes a fallback mode that generates a basic resume template when the AI model is unavailable. This ensures the application remains functional even without AI capabilities.
