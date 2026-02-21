@echo off
echo Stopping any existing Node/Next processes...
taskkill /IM node.exe /F 2>nul
timeout /t 2 /nobreak >nul
if exist ".next\dev\lock" del /f ".next\dev\lock" 2>nul
echo.
echo Starting dev server on http://localhost:3005
echo Keep this window open. Press Ctrl+C to stop.
echo.
npm run dev
pause
