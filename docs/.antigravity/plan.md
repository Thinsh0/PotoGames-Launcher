# Project Plan - PotoGames Launcher Enhancements

## Phase 1: Robust Logging & Diagnostics (ACTIVE)
- [ ] Implement a custom logging mechanism in `index.js` to capture `stdout` and `stderr` to a `launcher.log` file in the application data directory.
- [ ] Add logic to truncate or filter large HTML/XML responses from logs to prevent "log pollution" during 404/500 errors.
- [ ] Analyze the clean logs to identify the cause of intermittent launcher failures (likely the `refs/heads/` URL issues).

## Phase 2: Performance Optimization (Hachage & Téléchargements)
- [ ] Install `patch-package` and configure `postinstall` script.
- [ ] **Parallel Hashing**: Patch `helios-core`'s `DistributionIndexProcessor` and `MojangIndexProcessor` to use `Promise.all` or a worker pool for file verification.
- [ ] **Parallel Downloads**: Increase the default concurrency (15) in `helios-core`'s `DownloadEngine` if needed, or make it configurable.

## Phase 3: Distribution Refresh Mechanism
- [ ] Modify the "Play" button handler in `landing.js` to perform a forced distribution refresh (ignoring local cache) before each launch attempt.
- [ ] Ensure UI feedback during this refresh (e.g., "Checking for updates...").

## Phase 4: Auto-Update Verification
- [ ] Verify that the previously implemented update system works with the new repository (`Thinsh0/PotoGames-Launcher`).
- [ ] Test the update flow in a local dev environment using `dev-app-update.yml`.

---
## Completed Tasks
- [x] Repository URL migration in `package.json` and `electron-builder.yml`.
- [x] Integration of update notifications in `uicore.js`.
- [x] Core update logic in `index.js`.
