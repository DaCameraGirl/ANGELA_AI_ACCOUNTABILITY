# Publish `ANGELA_AI_ACCOUNTABILITY` to GitHub

This repo already has Git history locally.

Use these steps to connect it to GitHub and push `main`.

## Current local path

```powershell
C:\Users\enter\OneDrive\Desktop\Life_Stuff\ANGELA_AI_ACCOUNTABILITY
```

## If the GitHub repo does not exist yet

Create a new repository on GitHub with:

- Repository name: `ANGELA_AI_ACCOUNTABILITY`
- Visibility: `Public` or `Private`, whichever you want
- Do **not** initialize with a README, `.gitignore`, or license

Recommended remote URL:

```text
https://github.com/DaCameraGirl/ANGELA_AI_ACCOUNTABILITY.git
```

## Connect the local repo to GitHub

Run these commands in PowerShell from this folder:

```powershell
cd "C:\Users\enter\OneDrive\Desktop\Life_Stuff\ANGELA_AI_ACCOUNTABILITY"

git remote add origin https://github.com/DaCameraGirl/ANGELA_AI_ACCOUNTABILITY.git
git push -u origin main
```

## If `origin` already exists

Update it, then push:

```powershell
git remote set-url origin https://github.com/DaCameraGirl/ANGELA_AI_ACCOUNTABILITY.git
git push -u origin main
```

## Verify

Check:

```text
https://github.com/DaCameraGirl/ANGELA_AI_ACCOUNTABILITY
```

You should see the current repo contents exactly as they exist locally.
