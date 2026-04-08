# Implementation Plan: Export Launcher for Windows and Linux

## Goals
- [x] Build the application for Windows (unpacked exe).
- [x] Build the application for Linux (unpacked x64).
- [x] Ensure binaries are correctly placed and packaged in the `dist` directory.

## Tasks

### 1. Build Process
- [x] Execute `npm run dist` (successfully generated unpacked directories).
- [x] Encountered issues with automated NSIS/AppImage packaging on this environment.
- [x] Implemented manual 7za packaging fallback for both platforms.

### 2. Output Verification
- [x] Check `dist/` folder for Windows artifacts: `PotoGames-Launcher-Windows.zip`.
- [x] Check `dist/` folder for Linux artifacts: `PotoGames-Launcher-Linux.zip`.

## Verification
- [x] Verify file sizes are correct (~144 MiB for Windows, ~122 MiB for Linux).
- [x] Confirm the presence of internal binaries (`PotoGames Launcher.exe` and `potogames-launcher`).
