# Tip Calculator (CI/CD practice app #2)

HTML + CSS + JavaScript app. Pipeline: GitHub Actions (lint + test) then Vercel deploy.

## Locally chalana

```
npm install
npm run lint
npm test
npx serve public
```

## Setup (sirf ek baar)

Ye ek **naya** project hai, isliye naye repo aur naye Vercel project ki zaroorat hai.

1. GitHub par naya khali repo banao (jaise `practice-cicd-2`). README ya .gitignore tick mat karo.
2. Is folder mein terminal kholo aur Vercel project link karo:
   ```
   vercel link
   ```
   - Link to existing project? **No**
   - Project name: `practice-cicd-2` (naya naam)
   - Git repository connect karne ka pooche to **No**
3. `.vercel/project.json` se `orgId` aur `projectId` lo.
4. GitHub repo, Settings, Secrets and variables, Actions, **Secrets** tab mein 3 repository secrets banao:
   - `VERCEL_TOKEN` (wahi token jo pehle banaya tha chal jayega)
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## Practice ka plan (3 commits)

1. **Commit 1:** folder ko jaisa hai waisa GitHub par push karo. Actions tab dekho.
2. **Commit 2:** pehli galti dhoond kar fix karo aur push karo. Actions tab dekho.
3. **Commit 3:** doosri galti dhoond kar fix karo aur push karo. Actions tab dekho.

Har stage ka screenshot lo.

## Push karne ke commands

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TUMHARA-USERNAME/practice-cicd-2.git
git push -u origin main
```
