@echo off
echo Building project for production...
call npm run build

echo.
echo Build completed!
echo Files are ready in the "out" directory
echo.
echo To deploy to Ionos, upload all files from the "out" directory to your web space.
echo.
echo Press any key to exit...
pause > nul 