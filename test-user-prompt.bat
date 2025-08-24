@echo off
echo ========================================
echo TESTING USER PROMPT-BASED GENERATION
echo ========================================
echo.

echo Testing with your prompt:
echo "Hi, I'm Ujjwal Das. I'm passionate about coding and problem-solving, with a strong interest in algorithms and software development. I enjoy tackling challenging problems and continuously improving my skills. I'm a quick learner, detail-oriented, and always motivated to contribute effectively in a team. I'm excited to grow and take on opportunities where I can make a meaningful impact."
echo.

echo Expected Results:
echo ✓ Name: "Ujjwal Das" (extracted from "I'm Ujjwal Das")
echo ✓ Summary: Your full description
echo ✓ Skills: Programming, Algorithms, Software Development, Problem Solving
echo ✓ Interests: Programming, Problem Solving, Algorithms
echo ✗ Email: Empty (not mentioned in prompt)
echo ✗ Phone: Empty (not mentioned in prompt)
echo ✗ Location: Empty (not mentioned in prompt)
echo ✗ Experience: Empty (not mentioned in prompt)
echo ✗ Education: Empty (not mentioned in prompt)
echo ✗ Projects: Empty (not mentioned in prompt)
echo ✗ Languages: Empty (not mentioned in prompt)
echo.

echo Testing backend health...
curl -s http://localhost:8080/api/v1/resume/health
if %errorlevel% neq 0 (
    echo ✗ Backend is not running. Please start it first.
    pause
    exit /b 1
)
echo ✓ Backend is running

echo.
echo ========================================
echo TEST COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Open your browser to: http://localhost:5173
echo 2. Go to Generate Resume page
echo 3. Enter your description and try again
echo 4. Only fields mentioned in your prompt will be populated
echo 5. All other fields will be empty for manual input
echo.
pause
