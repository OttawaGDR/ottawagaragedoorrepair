@echo off
echo Stopping any Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo Removing .next folder...
if exist .next rmdir /s /q .next

echo Starting Next.js dev server...
echo.
echo When you see "Local: http://localhost:3000" open that URL in your browser.
echo If it says port 3001, use http://localhost:3001 instead.
echo.
npm run dev
pause
