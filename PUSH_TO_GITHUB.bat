@echo off
setlocal

set "REPO_URL=https://github.com/DaCameraGirl/ANGELA_AI_ACCOUNTABILITY.git"

echo ========================================
echo Publish ANGELA_AI_ACCOUNTABILITY to GitHub
echo ========================================
echo.

cd /d "%~dp0"

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
    echo This folder is not a Git repository.
    echo Aborting.
    echo.
    pause
    exit /b 1
)

echo Working directory:
cd
echo.

echo Configuring remote "origin"...
git remote add origin "%REPO_URL%" >nul 2>&1
if errorlevel 1 (
    git remote set-url origin "%REPO_URL%"
)

echo.
echo Pushing main to origin...
git push -u origin main
if errorlevel 1 (
    echo.
    echo Push failed. Check authentication, repo existence, or remote permissions.
    echo Remote URL: %REPO_URL%
    echo.
    pause
    exit /b 1
)

echo.
echo Push complete:
echo %REPO_URL%
echo.
pause
