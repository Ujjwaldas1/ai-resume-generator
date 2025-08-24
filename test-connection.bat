@echo off
echo ========================================
echo TESTING FRONTEND-BACKEND CONNECTION
echo ========================================
echo.

echo 1. Testing backend health...
powershell -Command "try { $response = Invoke-RestMethod -Uri 'http://localhost:8080/api/v1/resume/health' -Method GET; Write-Host '✓ Backend Health: ' $response.status } catch { Write-Host '✗ Backend Health Failed: ' $_.Exception.Message }"

echo.
echo 2. Testing resume generation...
powershell -Command "try { $body = @{ userDescription = 'Hi, I am Ujjwal Das. I am passionate about coding.' } | ConvertTo-Json; $response = Invoke-RestMethod -Uri 'http://localhost:8080/api/v1/resume/generate' -Method POST -Body $body -ContentType 'application/json'; Write-Host '✓ API Call Successful!'; Write-Host 'Name: ' $response.data.personalInformation.fullName } catch { Write-Host '✗ API Call Failed: ' $_.Exception.Message }"

echo.
echo 3. Checking frontend port...
netstat -an | findstr :5173
netstat -an | findstr :5174

echo.
echo ========================================
echo CONNECTION TEST COMPLETE
echo ========================================
echo.
echo If backend tests pass but frontend still fails:
echo 1. Check browser console (F12) for errors
echo 2. Try refreshing the page
echo 3. Clear browser cache
echo.
pause
