/**
 * MODS — Combat Action Definitions
 *
 * Each mod is a self-contained combat action that can be equipped
 * into one of 4 mod slots on the Pilot panel. Mods determine the
 * 4 buttons that appear during combat.
 *
 * Properties:
 * - id:        Unique identifier
 * - name:      Display name (also used as inventory key)
 * - type:      Always 'mod' (for inventory filtering)
 * - category:  Shop filter: attack | defence | utility
 * - element:   Element type or null for neutral
 * - desc:      Tooltip / shop description
 * - image:     Path to mod image
 * - fuel:      Fuel cost per use
 * - atkMult:   Attack multiplier (0 = no attack)
 * - defMult:   Defence multiplier for the round
 * - targeting: single | aoe | none
 * - isRegen:   true if this mod doubles HP regen
 * - cssClass:  CSS class for the combat button
 * - flavour:   Array of random flavour messages
 * - cost:      Purchase price in Silicon
 */

const MODS = [
    {
        id: 'light_strike',
        name: 'Light Strike',
        type: 'mod',
        category: 'attack',
        element: null,
        desc: 'Balanced strike. No fuel cost.',
        image: 'images/mods/light_strike.gif',
        fuel: 0,
        atkMult: 1,
        defMult: 1,
        targeting: 'single',
        isRegen: false,
        cssClass: 'light',
        flavour: [
            "Quick strike. Keep your guard up.",
            "Clean hit. Stay sharp.",
            "Measured strike. No wasted motion.",
            "Light and fast. Stay mobile.",
            "Textbook strike. By the numbers."
        ],
        cost: 50
    },
    {
        id: 'heavy_slam',
        name: 'Heavy Slam',
        type: 'mod',
        category: 'attack',
        element: null,
        desc: 'Full power swing. High damage, lower defence.',
        image: 'images/mods/heavy_slam.gif',
        fuel: 5,
        atkMult: 1.5,
        defMult: 0.5,
        targeting: 'single',
        isRegen: false,
        cssClass: 'heavy',
        flavour: [
            "You drop your guard and swing with everything.",
            "Full power. Maximum impact.",
            "Sparks fly as the hammer falls.",
            "All systems routed to weapons.",
            "One shot. Make it count."
        ],
        cost: 100
    },
    {
        id: 'spread_fire',
        name: 'Spread Fire',
        type: 'mod',
        category: 'attack',
        element: null,
        desc: 'Suppressive fire. Hits all enemies.',
        image: 'images/mods/spread_fire.gif',
        fuel: 3,
        atkMult: 0.5,
        defMult: 1,
        targeting: 'aoe',
        isRegen: false,
        cssClass: 'ranged',
        flavour: [
            "Weapons free. Hit everything that moves.",
            "Suppressive fire across the field.",
            "Spreading the pain around.",
            "Targeting all hostiles.",
            "Full spread. Light em all up."
        ],
        cost: 150
    },
    {
        id: 'bulwark',
        name: 'Bulwark',
        type: 'mod',
        category: 'defence',
        element: null,
        desc: 'Brace for impact. Maximum defence, no offence.',
        image: 'images/mods/bulwark.gif',
        fuel: 2,
        atkMult: 0,
        defMult: 3,
        targeting: 'none',
        isRegen: false,
        cssClass: 'combat-regen',
        flavour: [
            "Systems locked. Bracing for impact.",
            "Full defensive. Nothing gets through.",
            "All power to shields.",
            "Hunkered down. Let them try.",
            "Fortress mode engaged."
        ],
        cost: 120
    },
    {
        id: 'repair',
        name: 'Repair',
        type: 'mod',
        category: 'utility',
        element: null,
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
            "Hunkering down. Let the nanites work.",
            "Shields up. Reactor to repairs.",
            "Standing down to recharge."
        ],
        cost: 80
    }
];

// ========== ELEMENT SYSTEM ==========

const ELEMENT_CHART = {
    steel: { strong: ['flesh', 'cryo'], weak: ['acid', 'volt'] },
    flesh: { strong: ['acid', 'volt'], weak: ['steel', 'fire'] },
    fire:  { strong: ['flesh', 'steel'], weak: ['cryo', 'acid'] },
    cryo:  { strong: ['fire', 'volt'], weak: ['steel', 'flesh'] },
    acid:  { strong: ['steel', 'flesh'], weak: ['cryo', 'volt'] },
    volt:  { strong: ['steel', 'acid'], weak: ['cryo', 'flesh'] },
    light: { strong: ['void'], weak: ['void'] },
    void:  { strong: ['light'], weak: ['light'] }
};

const PHYSICAL_ELEMENTS = ['steel', 'flesh', 'fire'];
const MAGNETIC_ELEMENTS = ['cryo', 'acid', 'volt'];

function getElementBonus(attackElement, defenderElement) {
    const chart = ELEMENT_CHART[attackElement];
    if (!chart) return 1;
    if (chart.strong.includes(defenderElement)) return 1.25;
    if (chart.weak.includes(defenderElement)) return 0.75;
    return 1;
}

function getDefenceTypeBonus(attackElement, defenceType) {
    if (defenceType === 'physical' && PHYSICAL_ELEMENTS.includes(attackElement)) return 1.15;
    if (defenceType === 'magnetic' && MAGNETIC_ELEMENTS.includes(attackElement)) return 1.15;
    return 1;
}
