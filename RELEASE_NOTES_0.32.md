# ASHBOUND 0.32.0 — STEELWAKE ALPHA

Steelwake moves the browser playtest toward Steam/PC maturity without changing the core progression balance.

## Added
- Standard Gamepad API gameplay controls: left-stick move, right-stick aim, attack/dash/interact/Ash Burst/potion/menu/pause mappings.
- Controller menu navigation and back behavior.
- Live input-mode indicator and controller-aware interaction prompts.
- Controller rumble toggle and combat feedback where supported.
- Fullscreen/windowed control plus F11 handling.
- Rolling save backup before primary replacement.
- Automatic backup recovery when the primary save is malformed.
- Portable JSON save export/import.
- Existing 0.30/0.31 save-key compatibility with version migration to 32.

## QA
- `node --check` passes.
- 16/16 built-in self-tests pass.
- Headless Chromium smoke test passes with zero recorded JS errors.
- Save recovery and 0.31-style migration tests pass.
- Mocked standard-gamepad movement, aiming, attack, pause, menu navigation and back tests pass.
- Desktop title/settings presentation visually checked.

Canonical source SHA-256: `2350dcad43b567f4cb894aad41e80addab9a00e8ff827ec69e25ad66b85b6120`.
