# SSS QR – Instructor PWA

A small PWA for snowboard instructors: two QR codes in one place—**WhatsApp contact** and **Buy Me a Coffee**—so students can save your details and tip you. Hosted on Netlify, add to your iOS home screen and use like an app.

## Features

- **WhatsApp contact QR** – Students scan to save your number (handy if someone misses a run or follows the wrong group).
- **Buy Me a Coffee QR** – Students can tip after the lesson or back at the hotel.
- **Build number & update detection** – Each deploy gets a new build ID. When you open the PWA, it checks Netlify; if a newer build exists, a modal asks you to refresh.
- **PWA** – Install to home screen on iOS; runs standalone with no browser chrome.

## Setup

1. **Clone and install**
   ```bash
   cd "SSS QR"
   npm install
   ```

2. **Put your QR images in `public/`**
   - `public/WhatsApp-Brad.jpg` – Your WhatsApp contact QR.
   - `public/BuyMeACoffee-whistlerpeak.png` – Your Buy Me a Coffee QR.

   Your existing `WhatsApp-Brad.jpg` and `BuyMeACoffee-whistlerpeak.png` are already in `public/` so the app works out of the box. If you change filenames, update the paths in `src/App.tsx`.

3. **PWA icons (optional but recommended)**  
   For “Add to Home Screen” icons, add to `public/`:
   - `pwa-192.png` (192×192)
   - `pwa-512.png` (512×512)  

   You can export these from your design tool or use a generator (e.g. [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)).

## Develop

```bash
npm run dev
```

Open the URL shown (e.g. `http://localhost:5173`). Update detection is disabled in dev (no `version.json`).

## Build

```bash
npm run build
```

Output is in `dist/`. The build also writes `dist/version.json` with the current version and build ID so the live app can detect new deploys.

## Deploy to Netlify

1. **Create a Git repo and push**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/sss-qr.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - [Netlify](https://app.netlify.com) → Add new site → Import from Git.
   - Choose the repo; build command: `npm run build`, publish directory: `dist`.
   - Deploy.

3. **Optional: custom domain**  
   In Netlify: Site settings → Domain management.

Each new deploy gets a new build ID. When you open the PWA and a newer build is on Netlify, you’ll see the “Update available” modal and can refresh to get it.

## Version / build number

- **Version** comes from `package.json` (`version`).
- **Build ID** is a timestamp generated at build time (so every Netlify deploy has a new ID).
- The app fetches `version.json` from the deployed site and compares its `buildId` to the one baked into the app. If they differ, the update modal is shown.

## Tech

- **Vite** + **React** + **TypeScript**
- **vite-plugin-pwa** for service worker and manifest
- **Netlify** for hosting and redirects (SPA)

## Future ideas

- Lesson plans and tactics (e.g. a simple reference you can open before or during a lesson).
