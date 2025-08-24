Write-Host "Testing Backend Health..." -ForegroundColor Green
try {
    $health = Invoke-RestMethod -Uri "http://localhost:8080/api/v1/resume/health" -Method GET
    Write-Host "✓ Backend Health: $($health.status)" -ForegroundColor Green
} catch {
    Write-Host "✗ Backend Health Failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host "`nTesting Resume Generation..." -ForegroundColor Green
try {
    $body = @{
        userDescription = "Hi, I am Ujjwal Das. I am passionate about coding and problem-solving."
    } | ConvertTo-Json
    
    $response = Invoke-RestMethod -Uri "http://localhost:8080/api/v1/resume/generate" -Method POST -Body $body -ContentType "application/json"
    
    Write-Host "✓ API Call Successful!" -ForegroundColor Green
    Write-Host "Name: $($response.data.personalInformation.fullName)" -ForegroundColor Yellow
    Write-Host "Summary: $($response.data.summary.Substring(0, [Math]::Min(50, $response.data.summary.Length)))..." -ForegroundColor Yellow
    Write-Host "Skills Count: $($response.data.skills.Count)" -ForegroundColor Yellow
    
} catch {
    Write-Host "✗ API Call Failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Response: $($_.Exception.Response)" -ForegroundColor Red
}

Write-Host "`nTest Complete!" -ForegroundColor Green
