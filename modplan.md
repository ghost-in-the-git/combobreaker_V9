# Mod System Plan

## Concept

Replace the hardcoded 4 combat actions (HEAVY, LIGHT, RANGED, REGEN) with a **mod-driven system**. The player equips 4 mods into slots on the Pilot panel, and those mods determine the 4 buttons that appear in combat. Empty slots show a greyed-out "EMPTY" button.

---

## Decisions

| Question | Answer |
|----------|--------|
| **Starting mods** | Player starts with none. Sorted separately later. |
| **How to get mods** | Sold by **The Modder**, a unique encounter. Not dropped by enemies. |
| **Empty slots** | Show a greyed-out "EMPTY" button in combat. |
| **Duplicates** | One copy per slot. A mod equipped in slot 1 can't also be in slot 2. |
| **Access** | The Mapmaker in Old Battlefield sells `Map: The Mod Shop`. |

---

## Current State

- 4 hardcoded actions: `heavy`, `light`, `ranged`, `regen`
- Each has: fuel cost, ATK multiplier, DEF multiplier, label, CSS class, flavour text
- Defined as flat objects: `ACTION_FUEL_COST`, `ACTION_ATK_MULT`, `ACTION_DEF_MULT`, `ACTION_LABELS`, `ACTION_FLAVOUR`
- `awaitCombatAction()` loops over `['heavy', 'light', 'ranged', 'regen']` to build buttons
- Pilot panel currently has 3 equipment slots: `pilot`, `implant`, `mindsync`

---

## The Modder — Unique Encounter

Follows the same pattern as The Forge, The Guild, and Mech Graveyard:

### Zone Setup

A new unique zone `modshop` with a single destination:

```js
// LOCATION_MAP_ITEMS
modshop: 'Map: The Mod Shop'

// ZONE_DESTINATIONS
modshop: {
    openWorldName: null,
    openWorldDesc: null,
    destinations: [
        { encounterName: "The Modder", mapItem: "The Mod Shop: The Modder" }
    ]
}
```

### Map Sold By Mapmaker (Old Battlefield)

The Mapmaker in Old Battlefield gets a new item slot:

```js
// encounters_oldbattlefield.js — The Mapmaker entry
itemSlot1: ["Map: Downtown"],
itemSlot2: ["Map: The Forge"],
itemSlot3: ["Map: The Mod Shop"],   // NEW
```

### Story Items Needed

```js
// storyitems.js additions
{ name: "Map: The Mod Shop", category: "map", desc: "Coordinates to a stripped-down workshop..." }
{ name: "The Mod Shop: The Modder", category: "locationmap", desc: "Bay number for The Modder's workshop..." }
```

### Encounter File — encounters_modshop.js

```js
const ENCOUNTERS_MODSHOP = [
    {
        name: "The Modder",
        characterImage: "images/MODDER.gif",
        type: "shop",
        autoEngage: true,
        isModder: true,                    // flag for shop panel logic
        description: "A cluttered workshop...",
        engageText: "...",
        discoveredDescription: "...",
        discoveredEngageText: "...",
        appearanceRate: 100,
        minLevel: 1,
        dialogue: [
            { question: "What are mods?", response: "..." },
            { question: "What do you have?", response: "..." }
        ]
    }
];
```

### Shop Panel Integration

When `isModder` is true, show a modder-specific dropdown selector (like the Broker's tier dropdown):

```html
<div class="modder-selector" id="modder-selector" style="display: none;">
    <select id="modder-category-select">
        <option value="">[SELECT MOD CATEGORY]</option>
        <option value="attack">ATTACK MODS</option>
        <option value="defence">DEFENCE MODS</option>
        <option value="utility">UTILITY MODS</option>
    </select>
</div>
```

`showShopPanel()` adds:
```js
} else if (currentEncounter && currentEncounter.isModder) {
    updateModderDropdown();
    modderSelector.style.display = 'block';
    // hide all other selectors...
}
```

`onModderCategoryChange()` filters `MODS` by category and populates the 4 shop slots. Already-owned mods (in `game.inventory`) are marked as "OWNED".

`buyItem()` adds:
```js
} else if (currentEncounter && currentEncounter.isModder) {
    shopItems[index] = null;
    updateShopUI();
}
```

`hideShopPanel()` adds reset for modder dropdown.

---

## mods.js — Mod Definitions

Each mod is a self-contained combat action:

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
        cost: 50,
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
        id: 'bulwark',
        name: 'Bulwark',
        type: 'mod',
        category: 'defence',
        desc: 'Brace for impact. Maximum defence, no offence.',
        image: 'images/mods/bulwark.gif',
        fuel: 2,
        atkMult: 0,
        defMult: 3,
        targeting: 'none',
        cssClass: 'combat-regen',
        flavour: [
            "Systems locked. Bracing for impact.",
            "Full defensive. Nothing gets through.",
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

## Starter Mods

5 mods to start with. More added later per zone. Future ideas:
- **Shield Bash** — low damage, stuns enemy 1 turn
- **Overcharge** — massive damage, costs HP
- **Drain** — low damage, steals HP
- **EMP** — reduces enemy ATK next round
- **Counter** — no attack, reflects next hit

---

## Element System

Every mod can have an `element` property. Elements affect damage through a weakness/resistance chart.

### Main Elements

| Element | Strong vs | Weak vs |
|---------|-----------|---------|
| **Steel** | Flesh, Cryo | Acid, Volt |
| **Flesh** | Acid, Volt | Steel, Fire |
| **Fire** | Flesh, Steel | Cryo, Acid |
| **Cryo** | Fire, Volt | Steel, Flesh |
| **Acid** | Steel, Flesh | Cryo, Volt |
| **Volt** | Steel, Acid | Cryo, Flesh |

### Special Rivalry

| Element | Strong vs | Weak vs |
|---------|-----------|---------|
| **Light** | Void | Void |
| **Void** | Light | Light |

Light and Void interact normally/neutral with all other elements.

### Defence Interaction

Elements also interact with defence types:

- **Steel, Flesh, Fire** — effective against **Physical** defence
- **Cryo, Acid, Volt** — effective against **Magnetic** defence

### Enemy Element & Defence Type

Every enemy gets two new properties:

```js
element: 'steel',          // steel | flesh | fire | cryo | acid | volt | light | void
defenceType: 'physical',   // physical | magnetic
```

- **`element`** — determines how the enemy's attacks interact with the element chart (and how incoming elemental attacks affect them)
- **`defenceType`** — either `physical` or `magnetic`
  - **Physical** — organic creatures, beasts, unshielded humanoids
  - **Magnetic** — machines, shielded mechs, drones, anything running energy barriers

This means the player has two layers to consider when picking mods:
1. What **element** beats this enemy's element?
2. What **element group** cracks this enemy's defence type?

---

## Files to Create/Modify

| File | Change |
|------|--------|
| `mods.js` (NEW) | All mod definitions |
| `encounters_modshop.js` (NEW) | The Modder encounter definition |
| `index.html` | Add `<script>` tags for new files, add `modshop` zone config, add modder selector HTML, add `isModder` handling to `showShopPanel`/`buyItem`/`hideShopPanel`, add 4 mod dropdowns to pilot panel, update `game.equipment` with mod1-4, update `awaitCombatAction` to read mods, update attack/defence phase to use mod properties, update save/load, remove hardcoded ACTION_* constants |
| `encounters_oldbattlefield.js` | Add `Map: The Mod Shop` to Mapmaker's itemSlot3 |
| `storyitems.js` | Add map and location map items for The Mod Shop |
