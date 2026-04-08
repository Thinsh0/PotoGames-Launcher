# Context: Exporting the Launcher

## Decisions
- [x] **2026-04-08**: Decided to build for both Windows and Linux simultaneously using `electron-builder build -wl`. This is consistent with the `dist` script in `package.json`.
- [x] **Reasoning**: The user's request explicitly asks for both. The build is being performed on Windows, but `electron-builder` handles cross-platform compilation (or at least packaging for Linux via node-based tools).
- [ ] **Architecture**: The application is an Electron-based Minecraft launcher, using `helios-core` and `ejs` for templating.

## Breaking Changes
- N/A - This is a production build step only.
