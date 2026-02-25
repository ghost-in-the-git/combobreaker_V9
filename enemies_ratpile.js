/**
 * THE RATPILE - ENEMY CONFIGURATION
 *
 * A festering nest of silicon rats. Weak but numerous.
 * The lowest threat zone — perfect for scraping together XP.
 */

const ENEMIES_RATPILE = [
    {
        name: "Silicon Rat",
        attack: 1,
        defence: 0,
        hp: 1,
        xp: 1,
        appearanceRate: 100,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3,
        scrapChance: 30,
        scrapMin: 1,
        scrapMax: 1
    },
    {
        name: "Bloated Rat",
        attack: 2,
        defence: 0,
        hp: 5,
        xp: 5,
        appearanceRate: 50,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 30,
        scrapMin: 1,
        scrapMax: 1
    }
];
