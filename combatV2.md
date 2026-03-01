# Combat V2 — Player Action System

## Overview

Each combat round, **before breakers roll**, the player picks one of four actions:

```
[HEAVY]  [LIGHT]  [RANGED]  [REGEN]
```

The choice shapes the round — what the player does, what stats matter, and what they sacrifice.

---

## Current Round Flow (V1)

```
1. TURN X announced
2. Breaker procs roll (speed, combo, strike, crush, war)
3. Player attacks (ATK vs enemy DEF, breaker modifiers apply)
4. Enemy attacks back (all remaining enemies, DEF absorbs → HP)
5. Defensive breakers roll per hit (vision, soul, shield)
6. End-of-round regen + painbreaker
7. DEF restores
```

Everything is automatic. Player has no input once combat starts.

---

## Proposed Round Flow (V2)

```
1. TURN X announced
2. [HEAVY] [LIGHT] [RANGED] [REGEN] buttons appear — player picks
3. Action resolves (modifies ATK, DEF, hits, regen for this round)
4. Breaker procs roll (same as before — action choice doesn't replace breakers)
5. Player attacks with action modifiers applied
6. Enemies attack back with action modifiers applied
7. Defensive breakers roll per hit (same)
8. End-of-round regen + painbreaker
9. DEF restores
```

The key change: **the player makes a tactical choice each round** that feeds into the existing combat math.

---

## The Four Actions

### [HEAVY] — All-in power strike

- **ATK multiplier:** 1.5x base damage
- **DEF penalty:** DEF halved this round
- **Hits:** 1 (single target)
- **Regen:** None this round
- **Flavour:** "You drop your guard and swing with everything."

Best for: Finishing off a tough enemy, high-risk burst.

### [LIGHT] — Fast, balanced attack

- **ATK multiplier:** 1x base damage
- **DEF penalty:** None
- **Hits:** 1 (single target)
- **Regen:** Normal end-of-round regen
- **Flavour:** "Quick strike. Keep your guard up."

Best for: Default safe option, consistent damage with full defence.

### [RANGED] — Suppressive spread

- **ATK multiplier:** 0.5x base damage
- **DEF penalty:** None
- **Hits:** All enemies (AoE — each enemy takes the reduced damage)
- **Regen:** Normal end-of-round regen
- **Flavour:** "Weapons free. Hit everything that moves."

Best for: Softening up or finishing groups, works like a manual crushbreaker.

### [LIGHT] vs [RANGED] scaling note

Light rewards single-target focus (full damage, full defence). Ranged sacrifices per-target damage for AoE spread. Against 1 enemy, Light is strictly better. Against 4+, Ranged can outperform in total damage dealt across the wave.

### [REGEN] — Hunker down and repair

- **ATK multiplier:** 0x (no attack this round)
- **DEF bonus:** DEF doubled this round
- **Hits:** 0 (no attack)
- **Regen:** 2x regen stat applied immediately + normal end-of-round regen
- **Flavour:** "You pull back and reroute power to repair systems."

Best for: Surviving a bad round, recovering HP against a large squad.

---

## Action Summary Table

| Action   | ATK     | DEF         | Hits       | Regen              |
|----------|---------|-------------|------------|--------------------|
| HEAVY    | 1.5x   | 0.5x        | 1 (single) | None               |
| LIGHT    | 1.0x   | 1.0x        | 1 (single) | Normal             |
| RANGED   | 0.5x   | 1.0x        | All (AoE)  | Normal             |
| REGEN    | 0x     | 2.0x        | 0 (none)   | 2x regen + normal  |

---

## How Actions Interact With Breakers

Actions apply **before** breaker rolls. Breakers still multiply on top of the action modifiers:

- **HEAVY + Combobreaker:** 1.5x × 2 = 3x damage (devastating)
- **HEAVY + Warbreaker escalation:** 1.5x × 4 = 6x damage (4 strikes)
- **RANGED + Crushbreaker:** Both AoE — crushbreaker still fires on top, stacking AoE
- **REGEN + Shieldbreaker:** 2x DEF doubled again = 4x DEF (fortress mode)
- **REGEN + Painbreaker:** 2x regen + painbreaker heal = massive recovery turn
- **LIGHT + Speedbreaker:** 2 attacks at full damage — best sustained DPS
- **Strikebreaker** ignores enemy DEF regardless of action — works with all four

The breaker system rewards every action type. No choice is a dead-end.

---

## UI Implementation

### Button Layout

Four buttons appear in the chat flow (same pattern as current Engage/Evade buttons):

```html
<div class="action-btn-container combat-actions">
    <button class="action-btn heavy">[HEAVY]</button>
    <button class="action-btn light">[LIGHT]</button>
    <button class="action-btn ranged">[RANGED]</button>
    <button class="action-btn regen">[REGEN]</button>
</div>
```

### Button Styling

Each action gets its own colour from the existing palette:

- **HEAVY:** Red/orange (`#ff4444` border) — danger, aggression
- **LIGHT:** Green (`#00ff88` border) — same as current Engage
- **RANGED:** Blue (`#4488ff` border) — ranged/tactical
- **REGEN:** Yellow/gold (`#ffcc00` border) — recovery/shield

### Flow

1. `battleRound()` pauses at the top and shows the 4 buttons
2. Player clicks one → stored as `wave.chosenAction`
3. Buttons disappear, round proceeds with modifiers applied
4. Next round, buttons reappear

### Timeout / Auto-pick

If the player doesn't choose within **10 seconds**, auto-select `[LIGHT]` (safe default). Show countdown on the buttons or a small timer. This keeps combat flowing and prevents stalling.

---

## Implementation Notes

### What changes in `battleRound()`

1. **Top of function:** await player action choice (show buttons, return a Promise that resolves on click)
2. **Damage calc:** multiply `playerDamage` by action ATK modifier before breakers
3. **Attack loop:** if RANGED, loop over all enemies instead of single target. If REGEN, skip attack entirely
4. **Defence phase:** apply DEF modifier from action before shieldbreaker
5. **Regen phase:** if REGEN, apply 2x regen before painbreaker check. If HEAVY, skip regen
6. **End of round:** no changes to DEF restore

### What stays the same

- Breaker proc logic (unchanged — rolls after action, multiplies on top)
- Enemy attack sequence (unchanged — all enemies still attack each round)
- Visionbreaker / Soulbreaker (unchanged — per-hit defensive rolls)
- End-of-battle rewards, mission tracking, scrap drops
- The Engage/Evade pre-combat buttons (unchanged)

### New state

- `wave.chosenAction` — string: "heavy" | "light" | "ranged" | "regen"
- No persistent state needed — choice resets each round

---

## Open Questions

1. **Should RANGED damage split or duplicate?** Current plan: each enemy takes 0.5x damage individually (not split across count). So 4 enemies each take half damage = 2x total damage dealt. This makes RANGED scale with enemy count.

2. **Should HEAVY crit?** Could add a flat crit chance (e.g. 20%) on HEAVY that deals 2x instead of 1.5x. Adds gambling element. Or keep it clean at 1.5x.

3. **Boss fights:** Single enemy — RANGED becomes pointless (0.5x to one target). Should bosses get a bonus for RANGED? Or is it fine that LIGHT/HEAVY are the boss picks and RANGED is the wave pick?

4. **Speed stat interaction:** Currently speed only affects wave spawn timer. Should speed reduce the action timeout? e.g. base 10s, -0.5s per speed point? Or should speed give a bonus hit on LIGHT?

5. **Flavour messages:** Each action should have 3-5 random combat messages. e.g. HEAVY: "You swing with everything — sparks fly as the impact lands." Keep them short.
