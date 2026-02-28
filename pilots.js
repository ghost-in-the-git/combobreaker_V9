/**
 * ALL PILOT ITEMS
 *
 * Guild mercenary pilots — 30 total, 3 per tier.
 * T1 (+1 ALL) through T10 (+10 ALL).
 * Merged into ITEMS at load time.
 */

const BROKER_TIERS = [
    { tier: 1, label: "T1 Pilots", stat: 1 },
    { tier: 2, label: "T2 Pilots", stat: 2 },
    { tier: 3, label: "T3 Pilots", stat: 3 },
    { tier: 4, label: "T4 Pilots", stat: 4 },
    { tier: 5, label: "T5 Pilots", stat: 5 },
    { tier: 6, label: "T6 Pilots", stat: 6 },
    { tier: 7, label: "T7 Pilots", stat: 7 },
    { tier: 8, label: "T8 Pilots", stat: 8 },
    { tier: 9, label: "T9 Pilots", stat: 9 },
    { tier: 10, label: "T10 Pilots", stat: 10 }
];

const ALL_PILOTS = [

    // ==================== TIER 1 — +1 ALL ====================
    {
        name: "Washout [+1 ALL]",
        type: "pilot",
        desc: "Failed the academy entrance exam twice. Learned to fly in a junkyard. The sync is rough, but at least the seat's not empty.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 300,
        zone: "guild",
        tier: 1
    },
    {
        name: "Drifter [+1 ALL]",
        type: "pilot",
        desc: "No home port, no allegiance. Sleeps in whatever cockpit will have him. The sync barely registers, but he shows up on time.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 300,
        zone: "guild",
        tier: 1
    },
    {
        name: "Scrub [+1 ALL]",
        type: "pilot",
        desc: "Got kicked out of a civilian hauler crew for sleeping on shift. Somehow still alive. That counts for something in this line of work.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 300,
        zone: "guild",
        tier: 1
    },

    // ==================== TIER 2 — +2 ALL ====================
    {
        name: "Scab Jockey [+2 ALL]",
        type: "pilot",
        desc: "Picks up work nobody else wants. Smells like coolant and bad decisions. Surprisingly hard to kill.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 47,
        droppedBy: [],
        cost: 450,
        zone: "guild",
        tier: 2
    },
    {
        name: "Grease Rat [+2 ALL]",
        type: "pilot",
        desc: "Grew up under a mech chassis. Knows more about neural links than half the engineers who build them. Cheap and reliable.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 47,
        droppedBy: [],
        cost: 450,
        zone: "guild",
        tier: 2
    },
    {
        name: "Runt [+2 ALL]",
        type: "pilot",
        desc: "Smallest pilot on the roster. Fits into cockpits that would crush anyone else. What she lacks in presence she makes up for in sync stability.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 47,
        droppedBy: [],
        cost: 450,
        zone: "guild",
        tier: 2
    },

    // ==================== TIER 3 — +3 ALL ====================
    {
        name: "Hired Gun [+3 ALL]",
        type: "pilot",
        desc: "A freelancer with a short resume and a shorter attention span. Syncs fast, fights sloppy, charges less than the rest.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 45,
        droppedBy: [],
        cost: 650,
        zone: "guild",
        tier: 3
    },
    {
        name: "Patchwork [+3 ALL]",
        type: "pilot",
        desc: "Half his neural implants are aftermarket. The other half are held in with solder and hope. Somehow the sync holds together.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 45,
        droppedBy: [],
        cost: 650,
        zone: "guild",
        tier: 3
    },
    {
        name: "Dustrunner [+3 ALL]",
        type: "pilot",
        desc: "Made a name running convoys through the wastelands. Quick reflexes, steady hands, and a habit of talking to the mech like it can hear her.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 45,
        droppedBy: [],
        cost: 650,
        zone: "guild",
        tier: 3
    },

    // ==================== TIER 4 — +4 ALL ====================
    {
        name: "Contract Runner [+4 ALL]",
        type: "pilot",
        desc: "Works on retainer for three different outfits. Doesn't talk about any of them. Clean sync, no questions asked.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 900,
        zone: "guild",
        tier: 4
    },
    {
        name: "Switchblade [+4 ALL]",
        type: "pilot",
        desc: "Former pit fighter who transitioned to mech piloting. Treats every engagement like a cage match. The sync runs hot but never breaks.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 900,
        zone: "guild",
        tier: 4
    },
    {
        name: "Longhaul [+4 ALL]",
        type: "pilot",
        desc: "Spent years running deep-route cargo through contested space. Never lost a shipment. Calm under fire, steady on the link.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 900,
        zone: "guild",
        tier: 4
    },

    // ==================== TIER 5 — +5 ALL ====================
    {
        name: "Licensed Mercenary [+5 ALL]",
        type: "pilot",
        desc: "Guild-certified. Bonded and insured. Has a laminated card and everything. The sync calibration alone is worth the price.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 39,
        droppedBy: [],
        cost: 1200,
        zone: "guild",
        tier: 5
    },
    {
        name: "Hardline [+5 ALL]",
        type: "pilot",
        desc: "Ex-military. Dishonourably discharged for insubordination. Still fights like she's got a squad behind her. The sync is textbook-perfect.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 39,
        droppedBy: [],
        cost: 1200,
        zone: "guild",
        tier: 5
    },
    {
        name: "Nomad [+5 ALL]",
        type: "pilot",
        desc: "No fixed address, no loyalty, no hesitation. Piloted frames on four continents and two orbital rings. The sync adapts to anything.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 39,
        droppedBy: [],
        cost: 1200,
        zone: "guild",
        tier: 5
    },

    // ==================== TIER 6 — +6 ALL ====================
    {
        name: "Bonded Operative [+6 ALL]",
        type: "pilot",
        desc: "Neural sync specialist. Interfaces with damaged rigs that would fry a normal operator. Charges by the hour and worth every second.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 36,
        droppedBy: [],
        cost: 1550,
        zone: "guild",
        tier: 6
    },
    {
        name: "Coldsnap [+6 ALL]",
        type: "pilot",
        desc: "Never raises her voice. Never flinches. Biometrics flatline during combat like she's asleep. The mech moves with eerie precision.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 36,
        droppedBy: [],
        cost: 1550,
        zone: "guild",
        tier: 6
    },
    {
        name: "Burnout [+6 ALL]",
        type: "pilot",
        desc: "Fried three neural rigs before the Guild would take him. Now he's dialled in. The sync runs ragged but the output is undeniable.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 36,
        droppedBy: [],
        cost: 1550,
        zone: "guild",
        tier: 6
    },

    // ==================== TIER 7 — +7 ALL ====================
    {
        name: "Syndicate Ace [+7 ALL]",
        type: "pilot",
        desc: "Former corporate strike team. Burned every bridge on the way out and took the classified sync protocols with her. Your mech will feel like it's thinking ahead of you.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 33,
        droppedBy: [],
        cost: 1950,
        zone: "guild",
        tier: 7
    },
    {
        name: "Voidrunner [+7 ALL]",
        type: "pilot",
        desc: "Flew deep-space salvage runs alone for six years. Came back different. Doesn't blink enough. Syncs with rigs that haven't been calibrated in decades like it's nothing.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 33,
        droppedBy: [],
        cost: 1950,
        zone: "guild",
        tier: 7
    },
    {
        name: "Kingpin [+7 ALL]",
        type: "pilot",
        desc: "Ran an underground fight ring for years. Every pilot in his stable answered to him. Now he answers to no one. The sync carries an authority the mech can feel.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 33,
        droppedBy: [],
        cost: 1950,
        zone: "guild",
        tier: 7
    },

    // ==================== TIER 8 — +8 ALL ====================
    {
        name: "Black List Pilot [+8 ALL]",
        type: "pilot",
        desc: "No name. No dossier. The Broker keeps this one in a locked drawer. Neural sync rate is military black-project grade. Whatever this pilot did before, it wasn't legal.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 30,
        droppedBy: [],
        cost: 2400,
        zone: "guild",
        tier: 8
    },
    {
        name: "Ironclad [+8 ALL]",
        type: "pilot",
        desc: "Took a direct hit to the cockpit and kept fighting for forty minutes before anyone noticed the breach. Half her spine is titanium now. She says the mech feels lighter than she does.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 30,
        droppedBy: [],
        cost: 2400,
        zone: "guild",
        tier: 8
    },
    {
        name: "Warghost [+8 ALL]",
        type: "pilot",
        desc: "Survivor of the Ashfall Campaign. Every pilot in her squadron died. She kept fighting for three days alone. The debrief is still classified.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 30,
        droppedBy: [],
        cost: 2400,
        zone: "guild",
        tier: 8
    },

    // ==================== TIER 9 — +9 ALL ====================
    {
        name: "Razor [+9 ALL]",
        type: "pilot",
        desc: "Cuts corners, cuts throats, cuts response time in half. The Guild doesn't ask where she trained. The results speak loud enough.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 27,
        droppedBy: [],
        cost: 2900,
        zone: "guild",
        tier: 9
    },
    {
        name: "Phantom Circuit [+9 ALL]",
        type: "pilot",
        desc: "Shows up on no scanner. Military records list him as deceased in three jurisdictions. The neural interface reads his brainwaves as static, but the mech moves like it's alive.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 27,
        droppedBy: [],
        cost: 2900,
        zone: "guild",
        tier: 9
    },
    {
        name: "Terminus [+9 ALL]",
        type: "pilot",
        desc: "Last assignment before retirement — every time. Has been 'retiring' for eleven years. The sync rate climbs every time like the frame is begging her to stay.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 27,
        droppedBy: [],
        cost: 2900,
        zone: "guild",
        tier: 9
    },

    // ==================== TIER 10 — +10 ALL ====================
    {
        name: "Deadbolt [+10 ALL]",
        type: "pilot",
        desc: "Once locked in, he doesn't eject. Rode a burning frame into a warzone and walked out carrying the reactor. The sync doesn't just hold — it refuses to let go.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 24,
        droppedBy: [],
        cost: 3450,
        zone: "guild",
        tier: 10
    },
    {
        name: "Null Frequency [+10 ALL]",
        type: "pilot",
        desc: "Communicates through the neural link and nothing else. No voice. No gestures. Plugs in, fights, unplugs, leaves. The mech runs at specs that shouldn't be possible without hardware mods.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 24,
        droppedBy: [],
        cost: 3450,
        zone: "guild",
        tier: 10
    },
    {
        name: "Archon [+10 ALL]",
        type: "pilot",
        desc: "Designed sync protocols that three governments now use as standard. Left the lab, stole a rig, and never came back. The neural link doesn't just connect — it overwrites.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 24,
        droppedBy: [],
        cost: 3450,
        zone: "guild",
        tier: 10
    }
];
