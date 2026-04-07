# Project Context - Decision Log

## Decision: Log File Implementation
### Rational
Users reported "corrupted" logs (likely due to GitHub login pages being logged as HTML). By implementing a custom log file wrapper that captures `stdout` and `stderr` directly in the main process, we can:
1. Ensure all runtime errors are captured, even if they aren't caught by the top-level error handlers.
2. Filter out large HTML/XML chunks from the log to keep it digestible.
3. Path: `launcher.log` in the application's data directory.

## Decision: `patch-package` for `helios-core`
### Rational
The performance improvements (parallel hashing and increased download concurrency) require modifying internal `helios-core` logic. Using `patch-package` allows us to maintain these optimizations across dependency updates without needing to maintain a separate fork.

## Decision: Distribution URL Format
### Rational
The current `raw.githubusercontent.com` URLs with `refs/heads/main` are suspected to be the cause of intermittent check/download failures (404/Login Redirect). We will recommend the standard `raw.githubusercontent.com/Thinsh0/ServerPoto/main/...` format to ensure maximum reliability.

## Decision: Refresh Distro on Play
### Rational
Users previously had to manually clear the cache to update their modpack. By forcing a refresh on each "Play" click, we ensure the launcher always has the latest server configuration from `distribution.json`.
