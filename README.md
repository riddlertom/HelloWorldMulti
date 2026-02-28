# Hello World Multi

A simple Hello World app built with Expo — test on your phone with **Expo Go**, no Android Studio required.

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

## Other commands

- `npm run web` — Run in browser
- `npm run android` — Open in Android emulator (if installed)
- `npm run ios` — Open in iOS simulator (Mac only)
