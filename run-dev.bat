@echo off
cd /d "%~dp0"
if not exist node_modules call npm install
if not exist hub\node_modules (cd hub ^&^& call npm install ^&^& cd ..)
start "" http://localhost:3000/moza
call npm run dev
pause
