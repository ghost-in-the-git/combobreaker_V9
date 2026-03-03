# Mod System Plan

## Concept

Replace the hardcoded 4 combat actions (HEAVY, LIGHT, RANGED, REGEN) with a **mod-driven system**. The player equips 4 mods into slots on the Pilot panel, and those mods determine the 4 buttons that appear in combat. No mods = no actions.

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
        type: 'mod',              // item type for equipment system
        category: 'attack',       // attack | defence | utility
        desc: 'Balanced strike. No fuel cost.',
        image: 'images/mods/light_strike.gif',
        fuel: 0,                  // fuel cost
        atkMult: 1,               // attack multiplier (0 = no attack)
        defMult: 1,               // defence multiplier for the round
        targeting: 'single',      // single | aoe
        cssClass: 'light',        // button colour class
        flavour: [
            "Quick strike. Keep your guard up.",
            "Clean hit. Stay sharp.",
        ],
        dropRate: 30,
        zone: 'zone_scrapyard',
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
        dropRate: 20,
        zone: 'zone_scrapyard',
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
        dropRate: 15,
        zone: 'zone_scrapyard',
    },
    {
        id: 'evade',
        name: 'Evade',
        type: 'mod',
        category: 'defence',
        desc: 'Dodge incoming attacks. No offence this round.',
        image: 'images/mods/evade.gif',
        fuel: 2,
        atkMult: 0,               // no attack
        defMult: 3,               // massive DEF boost
        targeting: 'none',
        cssClass: 'combat-regen', // reuse defensive colour or new one
        flavour: [
            "Thrusters fire. You sidestep the incoming blows.",
            "Evasive manoeuvres. Nothing touches you.",
        ],
        dropRate: 15,
        zone: 'zone_scrapyard',
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
        targeting: 'none',        // no attack, triggers regen
        isRegen: true,            // flag for the regen heal logic
        cssClass: 'combat-regen',
        flavour: [
            "Pull back and reroute power to repair systems.",
            "Defensive posture. Repairs cycling.",
        ],
        dropRate: 20,
        zone: 'zone_scrapyard',
    },
];
```

### Questions to decide:

**Q1: Starting mods** — Does the player start with any mods pre-equipped, or do they need to find/buy them before they can fight? Options:
- a) Start with Light Strike and Repair pre-equipped (safe default)
- b) Start with all 4 slots filled with basic mods
- c) Start empty, first mods given via intro quest

**Q2: Mod drops** — Should mods drop from enemies like regular items and go into the inventory? Or are they a separate loot pool?
- a) Same inventory system as equipment (drop from enemies, appear in storage, equip from dropdown) — simplest, reuses all existing code
- b) Separate mod inventory

**Q3: Empty slots** — If a player has fewer than 4 mods equipped, what happens?
- a) Fewer buttons in combat (could be just 1 button if only 1 mod)
- b) Empty slots get a greyed-out "EMPTY" button
- c) Must have at least 1 mod equipped at all times

**Q4: Duplicate mods** — Can the player equip the same mod in multiple slots?
- a) No, each mod can only go in one slot
- b) Yes, if they have multiple copies in inventory (e.g., two Light Strikes for two slots)

---

## Pilot Panel Changes

Currently the pilot panel has 3 slots:
```
[PILOT dropdown]
[IMPLANT dropdown]
[MINDSYNC dropdown]
```

Adding 4 mod slots:
```
[MOD 1 dropdown]  [MOD 2 dropdown]
[MOD 3 dropdown]  [MOD 4 dropdown]

[PILOT dropdown]
[IMPLANT dropdown]
[MINDSYNC dropdown]
```

The mod dropdowns filter `game.inventory` by `item.type === 'mod'` — same pattern as other equipment slots. Selecting a mod stores its ID/name in `game.equipment.mod1` through `game.equipment.mod4`.

---

## Combat Changes

`awaitCombatAction()` changes from:
```js
const actions = ['heavy', 'light', 'ranged', 'regen'];
```

To reading from the 4 mod slots:
```js
const equippedMods = getEquippedMods(); // returns array of 0-4 mod objects
```

Each button is built from the mod's properties instead of the hardcoded constants. The `ACTION_FUEL_COST`, `ACTION_ATK_MULT`, `ACTION_DEF_MULT`, `ACTION_LABELS`, `ACTION_FLAVOUR` constants can be removed entirely — all that data lives on the mod object.

The attack phase reads `mod.atkMult`, `mod.defMult`, `mod.fuel`, `mod.targeting`, `mod.isRegen` instead of looking up from the old constant objects.

---

## Equipment System Integration

Mods use `type: 'mod'` — a new item type alongside body/legs/arms/weapon/chip/processor/pilot/drill/implant/mindsync.

New equipment slots added to `game.equipment`:
```js
equipment: {
    // ... existing slots ...
    mod1: null,
    mod2: null,
    mod3: null,
    mod4: null,
}
```

`SLOT_LABELS` gets: `mod1: 'MOD 1', mod2: 'MOD 2', mod3: 'MOD 3', mod4: 'MOD 4'`

The existing `updateEquipmentUI()`, `onEquipmentChange()`, `recalculateStats()` functions already loop over all slots — they just need mod slots added. Mods don't give passive stat bonuses (their stats are combat-action properties, not player stats), so `recalculateStats()` can skip them or mods can just have no `stats` object.

Save/load works automatically since it stores item names.

---

## Starter Mods

The 5 mods listed above are the initial set. More can be added to `mods.js` later — zone-specific, boss-dropped, forger-crafted, etc. Some future ideas:
- **Shield Bash** — low damage but stuns enemy for 1 turn
- **Overcharge** — massive damage but costs HP
- **Drain** — low damage, steals HP
- **EMP** — reduces enemy ATK for next round
- **Counter** — no attack, but reflects next hit

---

## Files to Create/Modify

| File | Change |
|------|--------|
| `mods.js` (NEW) | All mod definitions |
| `index.html` | Add `<script src="mods.js">`, add 4 mod dropdowns to pilot panel, update `game.equipment` with mod1-4, update `awaitCombatAction` to read mods, update attack/defence phase to use mod properties, update save/load, remove hardcoded ACTION_* constants |
