# Player & Enemy Combat Logic Alignment

## Current State — Two Different Damage Systems

Right now the player and enemy use fundamentally different damage models, and the combat log treats them asymmetrically too.

---

### 1. Player Attacking Enemy

**Damage formula:**
```
rawDamage = Math.max(1, player.attack - enemy.defence)
finalDamage = Math.floor(rawDamage * actionMultiplier)
if (finalDamage < 1) finalDamage = 1
```

- Uses `calculateDamage()` which enforces a **minimum of 1** — even if the enemy's defence is way higher than the player's attack, 1 damage always leaks through.
- There's a second `< 1` floor after the action multiplier, so it's impossible to deal 0.
- Breakers can multiply from there (2x combobreaker, 4x warbreaker).

**Combat log:**
```
MECH attacks ENEMY #1 for 25 DMG
```
- Only shows the **final post-reduction number**.
- The player never sees what the enemy's defence absorbed.
- No indication of whether the hit was "good" or barely scratching.

---

### 2. Enemy Attacking Player

**Damage formula:**
```
if (remainingDefence >= enemy.attack):
    defenceReduced by enemy.attack, HP untouched       → 0 HP damage
elif (remainingDefence > 0):
    hpDamage = enemy.attack - remainingDefence          → partial
else:
    hpDamage = enemy.attack                             → full hit
```

- Uses a **pool-based defence system** (DEF is a shield that absorbs hits until depleted).
- No minimum damage floor — if DEF >= attack, **zero HP damage**. The attack is fully blocked.
- DEF is consumed and restored each round.

**Combat log (3 messages for one attack):**
```
ENEMY #1 attacks MECH for 15 DMG          ← raw attack announced
MECH DEF blocks 15 DMG                    ← fully blocked
— or —
MECH DEF absorbs 10 DMG - but 5 DMG is still taken   ← partial block
— or —
MECH takes 15 DMG                         ← no defence left
```
- Shows the **full story**: raw attack, then what defence did, then what got through.
- Much more informative than the player-side log.

---

## The Asymmetries

| Aspect | Player → Enemy | Enemy → Player |
|--------|---------------|----------------|
| **Defence model** | Flat subtraction (`atk - def`) | Pool-based shield (DEF absorbs, depletes) |
| **Minimum damage** | Always 1+ (even if def > atk) | Can be fully blocked to 0 |
| **Log detail** | Single line, post-reduction only | Multi-line: raw attack → defence response → result |
| **Defence visibility** | Enemy DEF is invisible to the player | Player DEF interaction is fully narrated |

---

## Discussion — What Should We Align?

### A. The Minimum Damage Question

Currently a player with 5 ATK hitting an enemy with 50 DEF still deals 1 damage. That means you can always chip enemies down eventually, but it also means enemy defence stats feel less meaningful.

**Options:**
1. **Keep minimum 1 for player** — Prevents softlocks where a player literally can't damage an enemy. Feels arcade-y.
2. **Remove minimum 1, allow 0 damage** — Makes defence meaningful on both sides. Risk: player could get stuck against a tanky enemy with no way to deal damage (unless breakers proc).
3. **Keep minimum 1 but show it clearly** — "MECH attacks for 5 DMG — ENEMY DEF absorbs 4, 1 DMG dealt" so the player understands their attack is barely scratching.

### B. The Combat Log Question

The enemy side has a satisfying flow: announce attack → show defence interaction → show result. The player side just says "25 DMG" with no context.

**Proposed alignment — give player attacks the same narration style:**

Instead of:
```
MECH attacks ENEMY #1 for 25 DMG
```

Something like:
```
MECH attacks ENEMY #1 for 40 DMG
ENEMY DEF absorbs 15 — 25 DMG dealt
```

Or when defence is overwhelmed:
```
MECH attacks ENEMY #1 for 40 DMG
ENEMY DEF(15) shattered — 25 DMG dealt
```

Or when fully blocked (if we allow 0 damage):
```
MECH attacks ENEMY #1 for 5 DMG
ENEMY DEF(50) absorbs all — 0 DMG dealt
```

This would:
- Show the player's **raw attack power** (feels good to see a big number)
- Show what enemy defence did (gives defence stats meaning)
- Show the actual damage dealt (the number that matters)

### C. Should Enemy Defence Be Pool-Based Too?

Right now enemy defence is just a flat stat that reduces every hit. Player DEF is a pool that gets consumed and restored. We could potentially make enemy DEF pool-based too — but that's a much bigger gameplay change and might not be needed. The flat model works fine for enemies since they don't have multi-hit rounds to survive through.

The simpler fix is probably just aligning the **messaging** so both sides feel equally transparent, while keeping the underlying mechanics as-is (or with small tweaks to the min-damage rule).

---

## Summary of Suggested Changes

1. **Combat log alignment**: Give player attacks the same "raw → defence → result" narration that enemy attacks already have.
2. **Min damage decision**: Keep the floor at 1 to avoid softlocks, but make it visible in the log so the player understands their attack was mostly absorbed.
3. **Leave defence models as-is**: Flat reduction for enemies, pool-based for player. They serve different gameplay purposes and that's fine — it just needs to be communicated clearly in the log.
