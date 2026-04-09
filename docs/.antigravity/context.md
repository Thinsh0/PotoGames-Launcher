# Context: Version 2.4.0 Release for Auto-Update Testing

## Decisions
- **Version Choice**: The user requested "version 2.4". Following SemVer standards used in the project (2.3.0), I am promoting it to `2.4.0`.
- **Scope**: STRICTly limited to version bump. `helios-core` and other dependencies are left untouched as per "on ne modifie rien d'autre".
- **Build Target**: Windows (`dist:win`) as it's the current environment and primary test case for the user.

## Technical Trade-offs
- No code changes means no risk of functional regression, but also no fixes for pending issues. The goal is purely infrastructure testing (auto-update).
