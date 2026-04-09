# Context: Version 2.4.1 Release (Critical Installer Fix)

## Decisions
- **Version bump to 2.4.1**: Following 2.4.0, this version targets the "write error" bug fix as requested.
- **Installer robustification**: Implemented Unicode and forced Admin rights via `perMachine: true`.
- **Build Target**: Windows (`dist:win`) as it's the current environment and primary test case for the user.

## Technical Trade-offs
- No code changes means no risk of functional regression, but also no fixes for pending issues. The goal is purely infrastructure testing (auto-update).
