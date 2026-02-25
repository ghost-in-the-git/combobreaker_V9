/**
 * ALL PILOT ITEMS
 *
 * Guild mercenary pilots only (+1 ALL through +20 ALL).
 * Merged into ITEMS at load time.
 */

const ALL_PILOTS = [

    // ==================== GUILD MERCENARY PILOTS ====================
    {
        name: "Washout [+1 ALL]",
        type: "pilot",
        desc: "Failed the academy entrance exam twice. Learned to fly in a junkyard. The sync is rough, but at least the seat's not empty.",
        image: "images/IMAGE.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 300,
        zone: "guild"
    },
    {
        name: "Scab Jockey [+2 ALL]",
        type: "pilot",
        desc: "Picks up work nobody else wants. Smells like coolant and bad decisions. Surprisingly hard to kill.",
        image: "images/IMAGE.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 47,
        droppedBy: [],
        cost: 450,
        zone: "guild"
    },
    {
        name: "Hired Gun [+3 ALL]",
        type: "pilot",
        desc: "A freelancer with a short resume and a shorter attention span. Syncs fast, fights sloppy, charges less than the rest.",
        image: "images/IMAGE.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 45,
        droppedBy: [],
        cost: 650,
        zone: "guild"
    },
    {
        name: "Contract Runner [+4 ALL]",
        type: "pilot",
        desc: "Works on retainer for three different outfits. Doesn't talk about any of them. Clean sync, no questions asked.",
        image: "images/IMAGE.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 900,
        zone: "guild"
    },
    {
        name: "Licensed Mercenary [+5 ALL]",
        type: "pilot",
        desc: "Guild-certified. Bonded and insured. Has a laminated card and everything. The sync calibration alone is worth the price.",
        image: "images/IMAGE.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 39,
        droppedBy: [],
        cost: 1200,
        zone: "guild"
    },
    {
        name: "Bonded Operative [+6 ALL]",
        type: "pilot",
        desc: "Neural sync specialist. Interfaces with damaged rigs that would fry a normal operator. Charges by the hour and worth every second.",
        image: "images/IMAGE.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 36,
        droppedBy: [],
        cost: 1550,
        zone: "guild"
    },
    {
        name: "Syndicate Ace [+7 ALL]",
        type: "pilot",
        desc: "Former corporate strike team. Burned every bridge on the way out and took the classified sync protocols with her. Your mech will feel like it's thinking ahead of you.",
        image: "images/IMAGE.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 33,
        droppedBy: [],
        cost: 1950,
        zone: "guild"
    },
    {
        name: "Black List Pilot [+8 ALL]",
        type: "pilot",
        desc: "No name. No dossier. The Broker keeps this one in a locked drawer. Neural sync rate is military black-project grade. Whatever this pilot did before, it wasn't legal.",
        image: "images/IMAGE.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 30,
        droppedBy: [],
        cost: 2400,
        zone: "guild"
    },
    {
        name: "Razor [+9 ALL]",
        type: "pilot",
        desc: "Cuts corners, cuts throats, cuts response time in half. The Guild doesn't ask where she trained. The results speak loud enough.",
        image: "images/IMAGE.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 27,
        droppedBy: [],
        cost: 2900,
        zone: "guild"
    },
    {
        name: "Deadbolt [+10 ALL]",
        type: "pilot",
        desc: "Once locked in, he doesn't eject. Rode a burning frame into a warzone and walked out carrying the reactor. The sync doesn't just hold — it refuses to let go.",
        image: "images/IMAGE.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 24,
        droppedBy: [],
        cost: 3450,
        zone: "guild"
    },
    {
        name: "Voidrunner [+11 ALL]",
        type: "pilot",
        desc: "Flew deep-space salvage runs alone for six years. Came back different. Doesn't blink enough. Syncs with rigs that haven't been calibrated in decades like it's nothing.",
        image: "images/IMAGE.gif",
        stats: { hp: 11, attack: 11, speed: 11, defence: 11, breaker: 11, mining: 11, regen: 11 },
        dropRate: 21,
        droppedBy: [],
        cost: 4050,
        zone: "guild"
    },
    {
        name: "Ironclad [+12 ALL]",
        type: "pilot",
        desc: "Took a direct hit to the cockpit and kept fighting for forty minutes before anyone noticed the breach. Half her spine is titanium now. She says the mech feels lighter than she does.",
        image: "images/IMAGE.gif",
        stats: { hp: 12, attack: 12, speed: 12, defence: 12, breaker: 12, mining: 12, regen: 12 },
        dropRate: 18,
        droppedBy: [],
        cost: 4700,
        zone: "guild"
    },
    {
        name: "Phantom Circuit [+13 ALL]",
        type: "pilot",
        desc: "Shows up on no scanner. Military records list him as deceased in three different jurisdictions. The neural interface reads his brainwaves as static, but the mech moves like it's alive.",
        image: "images/IMAGE.gif",
        stats: { hp: 13, attack: 13, speed: 13, defence: 13, breaker: 13, mining: 13, regen: 13 },
        dropRate: 16,
        droppedBy: [],
        cost: 5400,
        zone: "guild"
    },
    {
        name: "Warghost [+14 ALL]",
        type: "pilot",
        desc: "Survivor of the Ashfall Campaign. Every pilot in her squadron died. She kept fighting for three days alone. The debrief is still classified. The Broker won't say where he found her.",
        image: "images/IMAGE.gif",
        stats: { hp: 14, attack: 14, speed: 14, defence: 14, breaker: 14, mining: 14, regen: 14 },
        dropRate: 14,
        droppedBy: [],
        cost: 6150,
        zone: "guild"
    },
    {
        name: "Null Frequency [+15 ALL]",
        type: "pilot",
        desc: "Communicates through the neural link and nothing else. No voice. No gestures. Plugs in, fights, unplugs, leaves. The mech runs at specs that shouldn't be possible without hardware mods.",
        image: "images/IMAGE.gif",
        stats: { hp: 15, attack: 15, speed: 15, defence: 15, breaker: 15, mining: 15, regen: 15 },
        dropRate: 12,
        droppedBy: [],
        cost: 6950,
        zone: "guild"
    },
    {
        name: "Terminus [+16 ALL]",
        type: "pilot",
        desc: "Last assignment before retirement — every time. Has been 'retiring' for eleven years. The sync rate climbs every time like the frame is begging her to stay.",
        image: "images/IMAGE.gif",
        stats: { hp: 16, attack: 16, speed: 16, defence: 16, breaker: 16, mining: 16, regen: 16 },
        dropRate: 10,
        droppedBy: [],
        cost: 7800,
        zone: "guild"
    },
    {
        name: "Archon [+17 ALL]",
        type: "pilot",
        desc: "Designed sync protocols that three governments now use as standard. Left the lab, stole a rig, and never came back. The neural link doesn't just connect — it overwrites.",
        image: "images/IMAGE.gif",
        stats: { hp: 17, attack: 17, speed: 17, defence: 17, breaker: 17, mining: 17, regen: 17 },
        dropRate: 9,
        droppedBy: [],
        cost: 8700,
        zone: "guild"
    },
    {
        name: "Omega Frame [+18 ALL]",
        type: "pilot",
        desc: "No one's sure where the pilot ends and the machine begins. Medical scans return errors. The Broker charges triple and says it's a bargain. He's not wrong.",
        image: "images/IMAGE.gif",
        stats: { hp: 18, attack: 18, speed: 18, defence: 18, breaker: 18, mining: 18, regen: 18 },
        dropRate: 7,
        droppedBy: [],
        cost: 9650,
        zone: "guild"
    },
    {
        name: "The Unwritten [+19 ALL]",
        type: "pilot",
        desc: "No file. No intake. No record of payment. The Broker says the name once, quietly, and won't repeat it. When this pilot syncs, every diagnostic tool in the hangar flatlines for six seconds.",
        image: "images/IMAGE.gif",
        stats: { hp: 19, attack: 19, speed: 19, defence: 19, breaker: 19, mining: 19, regen: 19 },
        dropRate: 6,
        droppedBy: [],
        cost: 10650,
        zone: "guild"
    },
    {
        name: "0x00 [+20 ALL]",
        type: "pilot",
        desc: "The zero address. The null pilot. Every system reads the cockpit as empty, but the mech moves anyway. Faster. Harder. Like something that was always inside it finally woke up.",
        image: "images/IMAGE.gif",
        stats: { hp: 20, attack: 20, speed: 20, defence: 20, breaker: 20, mining: 20, regen: 20 },
        dropRate: 5,
        droppedBy: [],
        cost: 11700,
        zone: "guild"
    }
];
