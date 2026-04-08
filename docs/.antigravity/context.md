# Context - Bug Fixes (Helios Launcher)

## Decisions

- **AuthManager fix**: Using `window.AuthManager` to avoid `SyntaxError` when the script is loaded multiple times. This is common in Electron apps if `landing.js` is re-executed or included via multiple paths.
- **validateSelectedJvm import**: This function resides in `helios-core/dist/java/JavaGuard`. I will import it from `helios-core` if possible or the specific sub-module.
- **EPERM handling**: Using `try...catch` is the safest way to handle Windows file locks without halting the entire preloading process.

## Architecture Notes

- The launcher uses a classic Helios architecture (Electron).
- Frontend scripts use `require` which implies `nodeIntegration: true`.
