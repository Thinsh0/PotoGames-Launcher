# Plan: Release Version 2.4.1 (Installer Fixes)

The objective is to release version 2.4.1 which addresses the "write errors" reported by some users.

## Tasks
- [x] Update `package.json` version from `2.4.0` to `2.4.1`.
- [x] Update `electron-builder.yml` with robust NSIS settings:
    - [x] Enable `unicode: true` (fix special characters in paths).
    - [x] Set `perMachine: true` (force admin rights to avoid folder permission issues).
    - [x] Synchronize `productName` with `package.json`.
- [ ] Git commit the changes.
- [ ] Run build command to generate release artifacts.
- [ ] Verify the installer elevation prompt on Windows.
- [ ] Trigger GitHub Release.

## Decisions
- **perMachine: true**: Forcing admin rights ensures the installer can write to `C:\Program Files` and bypasses "User folder" protection/AV blocks.
- **Unicode: true**: Essential for users with non-ASCII characters in their Windows profile name.
- **Sync Names**: `PotoGames Launcher` will be the canonical name across all manifest files.

## Log (Moved to walkthrough.md)
