# Mod System Plan

## Concept

Replace the hardcoded 4 combat actions (HEAVY, LIGHT, RANGED, REGEN) with a **mod-driven system**. The player equips 4 mods into slots on the Pilot panel, and those mods determine the 4 buttons that appear in combat. Empty slots show a greyed-out "EMPTY" button.

---

## Decisions

| Question | Answer |
|----------|--------|
| **Starting mods** | Player starts with none. Sorted separately later. |
| **How to get mods** | Sold by **The Modder**, a new encounter type. Not dropped by enemies. |
| **Empty slots** | Show a greyed-out "EMPTY" button in combat. |
| **Duplicates** | One copy per slot. A mod equipped in slot 1 can't also be in slot 2. |

---

## Current State

- 4 hardcoded actions: `heavy`, `light`, `ranged`, `regen`
- Each has: fuel cost, ATK multiplier, DEF multiplier, label, CSS class, flavour text
- Defined as flat objects: `ACTION_FUEL_COST`, `ACTION_ATK_MULT`, `ACTION_DEF_MULT`, `ACTION_LABELS`, `ACTION_FLAVOUR`
- `awaitCombatAction()` loops over `['heavy', 'light', 'ranged', 'regen']` to build buttons
- Pilot panel currently has 3 equipment slots: `pilot`, `implant`, `mindsync`

---

## New Architecture

### mods.js — Mod Definitions

Each mod is an object with all the properties needed to function as a combat action:

```js
const MODS = [
    {
        id: 'light_strike',
        name: 'Light Strike',
        type: 'mod',
        category: 'attack',
        desc: 'Balanced strike. No fuel cost.',
        image: 'images/mods/light_strike.gif',
        fuel: 0,
        atkMult: 1,
        defMult: 1,
        targeting: 'single',       // single | aoe | none
        cssClass: 'light',
        flavour: [
            "Quick strike. Keep your guard up.",
            "Clean hit. Stay sharp.",
        ],
        cost: 50,                  // silicon cost at The Modder
    },
    {
        id: 'heavy_slam',
        name: 'Heavy Slam',
        type: 'mod',
        category: 'attack',
        desc: 'Full power swing. High damage, lower defence.',
        image: 'images/mods/heavy_slam.gif',
        fuel: 5,
        atkMult: 1.5,
        defMult: 0.5,
        targeting: 'single',
        cssClass: 'heavy',
        flavour: [
            "Full power. Maximum impact.",
            "One shot. Make it count.",
        ],
        cost: 100,
    },
    {
        id: 'spread_fire',
        name: 'Spread Fire',
        type: 'mod',
        category: 'attack',
        desc: 'Suppressive fire. Hits all enemies.',
        image: 'images/mods/spread_fire.gif',
        fuel: 3,
        atkMult: 0.5,
        defMult: 1,
        targeting: 'aoe',
        cssClass: 'ranged',
        flavour: [
            "Weapons free. Hit everything that moves.",
            "Full spread. Light em all up.",
        ],
        cost: 150,
    },
    {
        id: 'evade',
        name: 'Evade',
        type: 'mod',
        category: 'defence',
        desc: 'Dodge incoming attacks. No offence this round.',
        image: 'images/mods/evade.gif',
        fuel: 2,
        atkMult: 0,
        defMult: 3,
        targeting: 'none',
        cssClass: 'combat-regen',
        flavour: [
            "Thrusters fire. You sidestep the incoming blows.",
            "Evasive manoeuvres. Nothing touches you.",
        ],
        cost: 120,
    },
    {
        id: 'repair',
        name: 'Repair',
        type: 'mod',
        category: 'utility',
        desc: 'Reroute power to repair systems.',
        image: 'images/mods/repair.gif',
        fuel: 2,
        atkMult: 0,
        defMult: 2,
        targeting: 'none',
        isRegen: true,
        cssClass: 'combat-regen',
        flavour: [
            "Pull back and reroute power to repair systems.",
            "Defensive posture. Repairs cycling.",
        ],
        cost: 80,
    },
];
```

---

## Pilot Panel Changes

Currently:
```
[PILOT dropdown]
[IMPLANT dropdown]
[MINDSYNC dropdown]
```

New layout:
```
[MOD 1 dropdown]  [MOD 2 dropdown]
[MOD 3 dropdown]  [MOD 4 dropdown]

[PILOT dropdown]
[IMPLANT dropdown]
[MINDSYNC dropdown]
```

The mod dropdowns filter `game.inventory` by `item.type === 'mod'`. A mod already equipped in another slot is excluded from the dropdown (no duplicates across slots). Selecting a mod stores its name in `game.equipment.mod1` through `game.equipment.mod4`.

---

## Combat Changes

`awaitCombatAction()` reads the 4 mod slots:
```js
const modSlots = ['mod1', 'mod2', 'mod3', 'mod4'];
```

For each slot:
- **Mod equipped** → button with mod's name, cssClass, fuel cost. Disabled if not enough fuel.
- **No mod** → greyed-out "EMPTY" button, always disabled.

The hardcoded `ACTION_FUEL_COST`, `ACTION_ATK_MULT`, `ACTION_DEF_MULT`, `ACTION_LABELS`, `ACTION_FLAVOUR` constants are removed. The attack phase reads `mod.atkMult`, `mod.defMult`, `mod.fuel`, `mod.targeting`, `mod.isRegen` directly from the resolved mod object.

---

## Equipment System Integration

New equipment slots in `game.equipment`:
```js
mod1: null,
mod2: null,
mod3: null,
mod4: null,
```

`SLOT_LABELS` gets: `mod1: 'MOD 1', mod2: 'MOD 2', mod3: 'MOD 3', mod4: 'MOD 4'`

Mods don't give passive stat bonuses — no `stats` object. `recalculateStats()` skips them naturally.

Save/load works automatically since it stores item names and MODS are looked up by name.

---

## The Modder (new encounter — future)

A new NPC encounter (like the Broker/Forger). Sells mods for silicon. Stock varies by zone. Details TBD — will be its own implementation after the mod system is wired up.

---

## Starter Mods

5 mods to start with. More added later per zone. Future ideas:
- **Shield Bash** — low damage, stuns enemy 1 turn
- **Overcharge** — massive damage, costs HP
- **Drain** — low damage, steals HP
- **EMP** — reduces enemy ATK next round
- **Counter** — no attack, reflects next hit

---

## Files to Create/Modify

| File | Change |
|------|--------|
| `mods.js` (NEW) | All mod definitions |
| `index.html` | Add `<script src="mods.js">`, add 4 mod dropdowns to pilot panel, update `game.equipment` with mod1-4, update `awaitCombatAction` to read mods, update attack/defence phase to use mod properties, update save/load, remove hardcoded ACTION_* constants |
