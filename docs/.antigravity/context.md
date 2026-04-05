# Decisions

- **Folder Path**: Changed from `.helioslauncher` to `.potogames-launcher` for a clean rebranding, even if it means users have to re-download files or sign-in again (unless migration is implemented).
- **Offline Mode**: Planned to use standard offline UUID generation (to be implemented) for compatibility.
- **GPU Acceleration**: Decided to re-enable it to fix transparency artifacts (square corners) and support `backdrop-filter` which are essential for the premium glassmorphism UI.
- **HTML Transparency**: Added explicit root-level transparency to prevent default backgrounds from showing in rounded corners.
