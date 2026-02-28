# Hello World Multi

A simple Hello World app built with Expo — test on your phone with **Expo Go**, no Android Studio required.

**Try it in your browser:** [https://helloworldmultiv.vercel.app/](https://helloworldmultiv.vercel.app/)

## Prerequisites

- **Node.js** (LTS) — [nodejs.org](https://nodejs.org)
- **Expo Go** app on your phone — [expo.dev/go](https://expo.dev/go)

## Run on your phone

1. **Install dependencies**
   ```powershell
   npm install
   ```

2. **Start the dev server**
   ```powershell
   npx expo start
   ```

3. **Open on your phone**
   - **Android:** In Expo Go, tap "Scan QR code" and scan the QR code from the terminal
   - **iOS:** Open the Camera app and scan the QR code

The app will load on your phone over your local network. Make sure your phone and computer are on the same Wi‑Fi.

## Project structure

```
HelloWorldMulti/
├── app/
│   ├── _layout.tsx   # Root layout
│   └── index.tsx     # Home screen ("Hello World!")
├── app.json
├── package.json
└── tsconfig.json
```

## Demo in browser

**Live demo:** [https://helloworldmultiv.vercel.app/](https://helloworldmultiv.vercel.app/)

**One-click deploy:** [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Friddlertom%2FHelloWorldMulti)

Connect the repo to [Vercel](https://vercel.com) and it will build and host the web version. Anyone can then open the live URL instantly—no install required.

### Auto-deploy on push (GitHub Actions)

The workflow builds and deploys from the **latest commit** (avoids Vercel Git sync issues). Add these GitHub secrets:

1. **Vercel** – [vercel.com/account/tokens](https://vercel.com/account/tokens) → Create Token → copy it
2. **Vercel** – [vercel.com/dashboard](https://vercel.com/dashboard) → Your Project → **Settings** → **General**:
   - **Project ID** – under "Project ID" (e.g. `prj_xxx`)
   - **Team/Org ID** – in the URL when viewing team settings, or under **Settings** → **General** (e.g. `team_xxx`)

3. **GitHub** – Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

   | Name | Value |
   |------|-------|
   | `VERCEL_TOKEN` | Token from step 1 |
   | `VERCEL_ORG_ID` | Team/org ID |
   | `VERCEL_PROJECT_ID` | Project ID |

Each push to `main` will build and deploy the latest code to Vercel.

## Other commands

- `npm run web` — Run in browser locally
- `npm run android` — Open in Android emulator (if installed)
- `npm run ios` — Open in iOS simulator (Mac only)
