# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js bilingual website to GitHub Pages.

## Configuration Complete ✅

The following changes have been made:

1. **`next.config.ts`** - Configured for static export
2. **`package.json`** - Added export script
3. **`.github/workflows/deploy.yml`** - Created GitHub Actions workflow

## Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/Ashutosh0212/Cwdb_Webpage`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
5. Save the settings

### 2. Push Changes to GitHub

The workflow will automatically trigger when you push to the `bilingual` branch:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin bilingual
```

### 3. Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the workflow running: "Deploy Next.js to GitHub Pages"
3. Wait for it to complete (usually 2-5 minutes)
4. Once complete, your site will be live!

### 4. Access Your Website

After deployment completes, your site will be available at:
- **GitHub Pages URL**: `https://ashutosh0212.github.io/Cwdb_Webpage/`
- **Custom Domain** (if configured): `https://woolboard.in`

## Custom Domain Configuration

Since you have a `CNAME` file with `woolboard.in`:

1. In GitHub Pages settings, add your custom domain: `woolboard.in`
2. Update your DNS records to point to GitHub Pages:
   - **Type**: `CNAME` or `A` records
   - **Value**: Follow GitHub's instructions (usually `username.github.io` or GitHub's IP addresses)
3. Wait for DNS propagation (can take up to 24 hours)

## Important Notes

- The workflow automatically builds and deploys on every push to the `bilingual` branch
- Static export is enabled, so all pages are pre-rendered
- Images are unoptimized for compatibility with static hosting
- The site uses client-side features (language switcher) which work fine with static export

## Troubleshooting

If deployment fails:
1. Check the **Actions** tab for error messages
2. Ensure Node.js version matches (currently set to 20)
3. Verify all dependencies are in `package.json`
4. Check that the `out` directory is generated after build

## Local Testing

To test the static export locally:

```bash
cd cwdb-nextjs
npm run build
npx serve out
```

Then visit `http://localhost:3000` to preview your static site.
