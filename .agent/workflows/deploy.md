---
description: how to deploy the Next.js application to Vercel
---

### 1. Push Code to GitHub
Ensure all your latest changes are committed and pushed to a GitHub repository.

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/log in with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import your repository from the list.

### 3. Configure and Deploy
- Vercel automatically detects Next.js settings.
- Click **"Deploy"**.
- Your site will be live on a `*.vercel.app` URL in minutes.

### 4. Alternative: Local Deployment (Vercel CLI)
// turbo
1. Install Vercel CLI: `npm i -g vercel`
2. Run deployment: `vercel`
3. Follow the terminal prompts to link and deploy.

### 5. Production Build Testing
To test the production build locally before deploying:
// turbo
1. Build the project: `npm run build`
2. Start the production server: `npm run start`
