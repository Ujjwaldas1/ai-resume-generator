# Performance Optimization Checklist

## Before Running the Application

### ✅ System Requirements Check
- [ ] At least 4GB RAM available
- [ ] 2GB free disk space
- [ ] GPU with 2GB+ VRAM (optional, for faster processing)
- [ ] SSD storage (recommended)

### ✅ Software Setup
- [ ] Java 21 installed
- [ ] Node.js 18+ installed
- [ ] Ollama installed and running
- [ ] TinyLlama model downloaded: `ollama pull tinyllama:latest`

### ✅ Performance Optimizations
- [ ] Close unnecessary applications (games, video editors, etc.)
- [ ] Run `optimize-performance.bat` for system optimization
- [ ] Ensure Ollama is running: `ollama serve`
- [ ] Check available models: `ollama list`

## Expected Loading Times

### First Request (Model Loading)
- **With GPU**: 30-60 seconds
- **CPU-only**: 60-120 seconds
- **Low-end system**: 90-180 seconds

### Subsequent Requests
- **With GPU**: 5-15 seconds
- **CPU-only**: 10-30 seconds
- **Low-end system**: 20-45 seconds

## Troubleshooting Slow Loading

### If First Request Takes >2 Minutes:
1. Check if Ollama is running: `ollama list`
2. Verify model is downloaded: `ollama pull tinyllama:latest`
3. Close other applications to free up memory
4. Restart Ollama: `ollama serve`

### If All Requests Are Slow:
1. Switch to smaller model in `application.properties`
2. Enable CPU-only mode if GPU is causing issues
3. Check system resources (CPU, RAM usage)
4. Consider upgrading hardware

### Quick Performance Test:
```bash
# Test Ollama response time
ollama run tinyllama:latest "Hello, how are you?"

# Test backend health
curl http://localhost:8080/api/v1/resume/health
```

## Model Performance Comparison

| Model | Size | Speed | Quality | Memory Usage |
|-------|------|-------|---------|--------------|
| tinyllama:latest | 1.1GB | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| llama2:7b | 3.8GB | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| llama2:13b | 7.3GB | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| deepseek-r1:7b | 4.1GB | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |

## Environment Variables for Performance

Add these to your system environment variables:
```bash
# Force CPU-only mode (if GPU issues)
OLLAMA_HOST=0.0.0.0:11434

# Increase Java heap size
JAVA_OPTS=-Xmx4g

# Optimize for performance
OLLAMA_ORIGINS=*
```

## Monitoring Performance

### Check System Resources:
- **Windows**: Task Manager → Performance tab
- **GPU Memory**: `nvidia-smi` (if using NVIDIA GPU)
- **Ollama Status**: `ollama list`

### Application Logs:
- **Backend**: Check console for model loading messages
- **Frontend**: Check browser console for network requests
- **Ollama**: Check for error messages in terminal

## Quick Fixes

### Immediate Performance Boost:
1. **Use TinyLlama**: Fastest model available
2. **Close Applications**: Free up system resources
3. **Restart Services**: Fresh start often helps
4. **Check Internet**: Ensure stable connection for model downloads

### Long-term Optimization:
1. **Upgrade RAM**: 8GB+ recommended
2. **Use SSD**: Faster model loading
3. **Dedicated GPU**: 4GB+ VRAM for best performance
4. **Keep Ollama Running**: Avoid cold starts

## Support

If performance issues persist:
1. Check the main troubleshooting guide
2. Verify all prerequisites are met
3. Try the fallback mode (works without AI)
4. Contact support with system specifications
