# Deployment Guide

## 🚀 Deploy to Vercel (Recommended - FREE!)

### Method 1: Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/codeforge-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** 🎉
   - Your site is live at `https://your-project.vercel.app`
   - Auto-deploys on every git push
   - Free SSL certificate
   - Free custom domain support

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🌐 Custom Domain Setup

### On Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your domain (e.g., `codeforge.ai`)
4. Update your domain's DNS:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`

5. Wait 5-10 minutes for DNS propagation
6. Done! Your site is now at `codeforge.ai`

## 📊 Analytics Setup

### Vercel Analytics (Free)

```bash
npm install @vercel/analytics
```

Update `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

Add to `app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔗 Update Download Links

Before deploying, update download links in `app/page.tsx`:

```typescript
const handleDownload = (platform: string) => {
  const links = {
    'Windows': 'https://github.com/YOUR_USERNAME/codeforge/releases/latest/download/CodeForge-Windows.msi',
    'Mac': 'https://github.com/YOUR_USERNAME/codeforge/releases/latest/download/CodeForge-Mac.dmg',
    'Linux': 'https://github.com/YOUR_USERNAME/codeforge/releases/latest/download/CodeForge-Linux.AppImage'
  }
  
  window.location.href = links[platform]
}
```

## 📦 Host Installers on GitHub Releases

1. **Build your app**
   ```bash
   cd offline-code-assistant
   npm run tauri build
   ```

2. **Create GitHub Release**
   - Go to your GitHub repo
   - Click "Releases" → "Create a new release"
   - Tag: `v1.0.0`
   - Upload your installers:
     - `CodeForge-Windows.msi`
     - `CodeForge-Mac.dmg`
     - `CodeForge-Linux.AppImage`
   - Publish release

3. **Use Release URLs**
   ```
   https://github.com/USERNAME/REPO/releases/latest/download/CodeForge-Windows.msi
   ```

## 🎬 Add Demo Video

### Option 1: YouTube

1. Upload your demo video to YouTube
2. Get the embed code
3. Replace placeholder in `app/page.tsx`:

```tsx
<iframe
  className="w-full aspect-video rounded-2xl"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Option 2: Self-hosted

```tsx
<video
  className="w-full aspect-video rounded-2xl"
  controls
  poster="/demo-thumbnail.jpg"
>
  <source src="/demo-video.mp4" type="video/mp4" />
</video>
```

## 🎨 Add Screenshots

1. Take screenshots of your app
2. Save in `public/screenshots/`
3. Add to landing page:

```tsx
<img
  src="/screenshots/main-interface.png"
  alt="CodeForge AI Interface"
  className="rounded-xl border-2 border-slate-700 shadow-2xl"
/>
```

## ✅ Pre-Launch Checklist

- [ ] Update download links
- [ ] Add demo video
- [ ] Add screenshots
- [ ] Test all links
- [ ] Test on mobile
- [ ] Setup analytics
- [ ] Custom domain configured
- [ ] SSL working (https)
- [ ] Meta tags updated
- [ ] Social share image added

## 📱 Social Media Setup

### Twitter Card

Add to `app/layout.tsx` metadata:

```typescript
export const metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'CodeForge AI - Your Offline AI Code Assistant',
    description: 'Code faster with AI. 100% private, works offline.',
    images: ['/og-image.png'],
  },
}
```

### Create OG Image

Use [og-image.vercel.app](https://og-image.vercel.app) to create:
- Size: 1200x630px
- Save as `public/og-image.png`

## 🐛 Troubleshooting

### Build fails:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Vercel deployment fails:
- Check `next.config.js` is correct
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Custom domain not working:
- Wait 24 hours for DNS propagation
- Check DNS records are correct
- Clear browser cache

## 📊 Monitor Performance

After deployment:
1. Run Lighthouse audit
2. Check Vercel Analytics
3. Monitor Core Web Vitals
4. Test on real devices

---

Need help? Check [Vercel docs](https://vercel.com/docs) or open an issue!
