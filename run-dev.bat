@echo off
cd /d "%~dp0"
if not exist node_modules call npm install
start "" http://localhost:3000/crv-7k2p9
call npm run dev
pause
