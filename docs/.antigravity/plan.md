# Implementation Plan: Restoring Application Logo Assets

## Goals
- [x] Identify missing logo references in the UI.
- [x] Restore logo presence on the landing page.
- [x] Add logo to the window title bar for better branding.
- [x] Verify paths and CSS visibility for all logo instances.

## Tasks

### 1. Diagnosis
- [x] Scanned EJS views for logo references.
- [x] Identified that `landing.ejs` was missing the logo element entirely.
- [x] Verified `app.assets.images` contains `logo.png` and `logo_small.png`.

### 2. Implementation
- [x] Updated `app/landing.ejs` to include `#landing_logo_container`.
- [x] Updated `app/frame.ejs` to include `#frameLogo` in the title bar.
- [x] Added CSS rules for new logo elements in `app/assets/css/launcher.css`.
- [x] Verified existing references in `app.ejs`, `welcome.ejs`, and `login.ejs`.

## Verification
- [ ] Visual verification of logo on Startup (app.ejs).
- [ ] Visual verification of logo on Landing Page (landing.ejs).
- [x] Visual verification of logo in Frame (frame.ejs).
- [x] Fix missing shell icons (Start Menu, Taskbar) by generating `build/icon.ico` and `build/icon.png`.
- [x] Update `index.js` to use high-resolution assets for the application window.
- [x] Regenerate final Windows and Linux ZIP artifacts.
