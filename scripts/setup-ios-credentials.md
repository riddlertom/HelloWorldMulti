# iOS Build One-Time Setup

iOS builds require Apple credentials (distribution certificate + provisioning profile). You must run this **once** interactively before CI can build iOS automatically.

## Prerequisites

- **Apple Developer account** (paid, $99/year) - [developer.apple.com](https://developer.apple.com)
- **App registered** in Apple Developer Portal with bundle ID `com.helloworld.demo`

## Setup Steps

1. Open a terminal in the project directory:

   ```bash
   cd c:\src\HelloWorldMulti
   ```

2. Set your Expo token:

   ```powershell
   $env:EXPO_TOKEN = "your-expo-token"
   ```

3. Run the credentials setup:

   ```bash
   npx eas-cli credentials --platform ios
   ```

4. When prompted:
   - Select **production** build profile
   - Choose **Build credentials** → **Set up a new distribution certificate**
   - Log in to your Apple Developer account when prompted
   - Let EAS generate and manage the credentials

5. Credentials are stored on EAS servers. After this, the GitHub Actions workflow will run iOS builds without further setup.

## Verify

After setup, trigger a new release (e.g. push tag `v1.0.1`) to confirm the iOS build completes and the IPA appears in the release.
