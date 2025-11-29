# WhaleShield v1.3.1 Vercel Deployment Post-Mortem
# Date: 2025-11-29
# Status: SUCCESS

## Summary
This log documents the critical issues and solutions encountered during the deployment of WhaleShield v1.3.1 to Vercel.

## 1. "Invalid vercel.json file provided" Error
- **Issue:** Vercel rejected `vercel.json` even though the syntax looked correct.
- **Cause:** The file was created via PowerShell on Windows, likely introducing BOM or UTF-16 encoding which Vercel's Linux environment could not parse.
- **Solution:** Regenerated the file using Python to ensure strict UTF-8 (no BOM) encoding.
with open('vercel.json', 'w', encoding='utf-8') as f:
json.dump(data, f, indent=2, ensure_ascii=False)

text

## 2. Node.js Version Mismatch
- **Issue:** Build failed with `Error: Node.js Version "18.x" is discontinued`.
- **Cause:** Vercel deprecated Node 18.x. The project did not specify a version, falling back to an old default or conflicting with project settings.
- **Solution:** Explicitly added `engines` to `package.json`.
"engines": { "node": "22.x" }

text

## 3. Repository History & Secrets
- **Issue:** Push rejected due to `.env` files containing secrets in commit history.
- **Solution:** 
1. Nuked `.git` folder to clear history (`Remove-Item .git -Recurse -Force`).
2. Re-initialized repository (`git init`).
3. Force pushed as a fresh "Clean Slate" commit.

## 4. Build Command for API-Only Projects
- **Issue:** Vercel expects a build command (like `npm run build` for Next.js). API-only projects fail if this is missing.
- **Solution:** Added a dummy build script to `package.json`.
"scripts": { "build": "echo 'Build step skipped for API-only project'" }

text

## 5. Final Configuration (Successful)
- **vercel.json:** Minimal config with Crons only.
- **package.json:** Includes `engines` (22.x) and dummy `build` script.
- **Encoding:** All JSON files enforced to UTF-8 via Python script.

This deployment is now running stably with 5-min monitoring and 4-hour reporting intervals.
