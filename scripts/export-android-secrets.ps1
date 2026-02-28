# Run this script to generate values for GitHub Secrets (Android build credentials)
# Add the output to your repo: Settings -> Secrets and variables -> Actions

$ErrorActionPreference = "Stop"

$keystorePath = "android/keystores/release.keystore"
$credentialsPath = "credentials.json"

if (-not (Test-Path $keystorePath)) {
    Write-Error "Keystore not found at $keystorePath. Run 'expo prebuild' and generate a keystore first."
}
if (-not (Test-Path $credentialsPath)) {
    Write-Error "credentials.json not found. Create it with your keystore details."
}

$keystoreBase64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes((Resolve-Path $keystorePath)))
$credentialsBase64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes((Resolve-Path $credentialsPath)))

Write-Host ""
Write-Host "Add these as GitHub repository secrets:"
Write-Host ""
Write-Host "1. ANDROID_KEYSTORE_BASE64"
Write-Host "   Value: (run the command below to copy)"
Write-Host ""
Write-Host "2. ANDROID_CREDENTIALS_BASE64"
Write-Host "   Value: (run the command below to copy)"
Write-Host ""
Write-Host "--- ANDROID_KEYSTORE_BASE64 ---"
Write-Host $keystoreBase64
Write-Host ""
Write-Host "--- ANDROID_CREDENTIALS_BASE64 ---"
Write-Host $credentialsBase64
Write-Host ""
