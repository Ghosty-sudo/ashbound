# ASHBOUND 0.33.0 — HEARTHWARD ALPHA

Hearthward is a playtest-driven release-parity pass focused on recovery, resource reliability, world solidity, and fairer progression.

## Fixed from human + Sol playtesting
- Added natural HP recovery after several seconds out of danger; recovery is faster in Ashfall town and disabled while threats/bosses are active.
- Fixed a root pickup bug where material, health, and mana drops were missing velocity values and became invalid coordinates during the drop update loop.
- Normal enemies now reliably drop their core crafting material; rarity increases the amount.
- Added clearer material pickup visuals/labels and a stronger pickup magnet.
- Added potion-loop guidance to the tutorial, Slime Fields arrival message, and first-area quest HUD.
- Town buildings now have solid collision while their visible doorways remain usable; dashes obey the same collision and old saves stuck inside a building are recovered to a safe position.
- New journeys now begin at true full HP and mana.
- Health potions have a short cooldown to prevent heal-spam from trivializing combat.
- Pause-menu retreat to town now costs 5% carried gold instead of being a free combat escape.
- Boss-summoned adds are capped, award sharply reduced XP/gold, and cannot be farmed for normal materials/gear.

## Playtest / QA evidence
- 22/22 built-in self-tests pass.
- `node --check` passes.
- Fresh-journey full-vitals check passes.
- Natural regeneration, wall/door collision, and dash collision checks pass.
- Guaranteed Slime Gel pickup was reproduced through the real kill/drop/update pipeline.
- Normal-control playtest completed: enter Slime Fields → kill slimes → collect 2 Gel → harvest Red Herb → return through town doorway → craft Health Potion.
- Mire Mother sustain replay succeeds when using the potions supplied by the repaired crafting loop.
- Full four-area/boss route integrity regression reaches victory and REKINDLE Cycle 1 with retained progression and no recorded JS errors.
- 0.32-style save migration to version 33 passes.
- Malformed-primary save recovery from the rolling backup passes.

Canonical source SHA-256: `831f6ddcb964bbf647cff7237b25ad1441ec24863b7d13020462fee2d33af422`.
Deterministic gzip SHA-256: `9346a4028c03ee272e94762cb67ea897073224fe5f1dcb9438620074809ef8f1`.
