# build-sequential.ps1
Write-Host "Starting Sequential Build for v2.3.0..." -ForegroundColor Cyan

# Ensure no residual processes are locking the dist folder
Write-Host "Releasing file locks..." -ForegroundColor Yellow
taskkill /F /IM app-builder.exe /T 2>$null
taskkill /F /IM 7za.exe /T 2>$null

# Ensure dist is clean
if (Test-Path dist) {
    Write-Host "Cleaning dist folder..."
    Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
}

# 1. Windows Build
Write-Host "Step 1: Building for Windows..." -ForegroundColor Green
$env:ELECTRON_BUILDER_CACHE="D:\Devs\Minecraft\PotoGames Launcher\Helios\.cache_dist"
npx electron-builder build --win --x64 2>&1 | Tee-Object build_win.log

if ($LASTEXITCODE -ne 0) { 
    Write-Host "Windows build failed!" -ForegroundColor Red
    exit $LASTEXITCODE
}

# 2. Linux Build
Write-Host "Step 2: Building for Linux..." -ForegroundColor Green
npx electron-builder build --linux --x64 2>&1 | Tee-Object build_linux.log

if ($LASTEXITCODE -ne 0) { 
    Write-Host "Linux build failed!" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "Builds completed successfully!" -ForegroundColor Green
