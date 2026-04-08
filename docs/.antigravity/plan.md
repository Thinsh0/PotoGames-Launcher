# Implementation Plan - Bug Fixes (Helios Launcher)

This plan outlines the steps to fix three critical bugs in the PotoGames Launcher: UI crash due to variable redeclaration, missing import in settings, and file lock error during native cleanup.

## Tasks

- [x] Task 1: Fix `AuthManager` redeclaration in `landing.js` <!-- id: 0 -->
- [x] Task 2: Fix missing `validateSelectedJvm` import in `settings.js` <!-- id: 1 -->
- [x] Task 3: Handle `EPERM` error during native cleanup <!-- id: 2 -->
- [x] Final Build and Verification <!-- id: 3 -->

## Details

### Task 1: AuthManager Redeclaration
- Source: `app/assets/js/scripts/landing.js`
- Issue: `SyntaxError: Identifier 'AuthManager' has already been declared`
- Fix: Use a safe import strategy checking `window.AuthManager`.

### Task 2: Missing validateSelectedJvm Import
- Source: `app/assets/js/scripts/settings.js`
- Issue: `ReferenceError: validateSelectedJvm is not defined`
- Fix: Add `require` for `validateSelectedJvm` from `helios-core`.

### Task 3: Native Cleanup EPERM
- Source: TBD (likely `app/assets/js/preloader.js`)
- Issue: `EPERM: operation not permitted, unlink '...lwjgl_stb.dll'`
- Fix: Wrap `unlinkSync` in `try...catch` and warn on `EPERM`/`EBUSY`.
