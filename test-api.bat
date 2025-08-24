@echo off
echo ========================================
echo TESTING API CONNECTION
echo ========================================
echo.

echo 1. Testing backend health endpoint...
powershell -Command "try { $response = Invoke-RestMethod -Uri 'http://localhost:8080/api/v1/resume/health' -Method GET; Write-Host '✓ Backend Health: ' $response.status } catch { Write-Host '✗ Backend Health Failed: ' $_.Exception.Message }"

echo.
echo 2. Testing resume generation endpoint...
powershell -Command "try { $body = @{ userDescription = 'Hi, I am Ujjwal Das. I am passionate about coding and problem-solving.' } | ConvertTo-Json; $response = Invoke-RestMethod -Uri 'http://localhost:8080/api/v1/resume/generate' -Method POST -Body $body -ContentType 'application/json'; Write-Host '✓ API Call Successful' } catch { Write-Host '✗ API Call Failed: ' $_.Exception.Message }"

echo.
echo 3. Testing Ollama directly...
ollama run tinyllama:latest "Test message" --timeout 30

echo.
echo ========================================
echo DIAGNOSIS COMPLETE
echo ========================================
echo.
echo If you see errors above, the issue is:
echo - Backend not responding: Restart backend
echo - Ollama not responding: Restart Ollama
echo - API call failing: Check CORS or network
echo.
pause
