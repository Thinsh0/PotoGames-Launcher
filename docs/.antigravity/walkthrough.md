# Progress Log

## 2026-04-05
- Initial exploration of project structure and `package.json`.
- Attempted to run `npm start` and captured error: `Cannot read properties of undefined (reading 'loading')` during EJS rendering of `app.ejs`.
- Fixed `langloader.js` to return the ID instead of crashing on missing translation paths.
- Added missing `ejs.landing.selectedServer` keys to `en_US.toml`.
- Changed `const remote` to `var remote` in `uicore.js` to ensure it is globally accessible in the renderer context.
- Verified that `npm start` now launches without crashes.
