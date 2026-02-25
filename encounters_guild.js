/**
 * THE GUILD - ENCOUNTER CONFIGURATION
 *
 * A mercenary pilot guild operating from the deep Undercity tunnels.
 * Pilots sell their services to whoever pays — no loyalty, no questions.
 * You're hiring them to sync with your systems.
 *
 * Uses standard shop slots with zone-filtered pilot items.
 */

const ENCOUNTERS_GUILD = [
    {
        name: "The Broker",
        characterImage: "images/broker.gif",
        type: "shop",
        autoEngage: true,
        description: "A reinforced door marked with a faded crosshair insignia. Behind it, a smoke-filled room lined with pilot dossiers pinned to every wall. A woman sits behind a steel desk, datapad in hand.",
        engageText: "She looks up. Eyes sharp, expression flat. 'You're not a pilot.' She studies your frame — the empty cockpit, the autonomous systems. 'But you're looking for one.' She slides a stack of dossiers across the desk. 'Everyone in here is for hire. No loyalty oaths, no long-term contracts. You pay, they sync, they fight. Simple.' She taps the desk. 'Who do you want?'",
        discoveredDescription: "The Guild's door is open. Smoke curls from inside. The Broker is at her desk, sorting new contracts.",
        discoveredEngageText: "She nods when you enter. 'Back for more muscle? Let's see who's available.'",
        appearanceRate: 100,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "How does this work?",
                response: "'Mercenary pilots. Licensed, unlicensed — I don't check and you don't ask.' She fans out a handful of dossiers. 'They jack into your neural sync rig and run your systems like they were born in the cockpit. Better pilot, better sync, better everything.' She slides them back into a neat stack. 'You're paying for their nervous system, not their personality.'"
            },
            {
                question: "Why would a pilot sync with a mech that has no pilot?",
                response: "She pauses. Sets down her datapad. 'Most won't. That's why you're here and not at a military recruitment office.' She leans back. 'The ones on my books? They've synced with wrecks, stolen frames, black-market chassis held together with welding slag. They don't care what's driving the mech.' A beat. 'They care what's paying them.'"
            },
            {
                question: "Who's the best you've got?",
                response: "'Depends what you mean by best.' She pulls a dossier from the bottom of the stack — thicker than the others, edges worn. 'Best kill count? Best sync rate? Best at staying alive?' She doesn't open it. 'The expensive ones aren't expensive because they're good. They're expensive because they're still here. In this line of work, survival is the only credential that matters.'"
            },
            {
                question: "You run this whole operation alone?",
                response: "'I run the desk. The Guild runs itself.' She gestures at the dossiers covering the walls. 'Pilots register, I match them with jobs, I take a cut. No commanders, no hierarchy, no politics.' She taps a scar on her collarbone. 'I used to fly. Took a round through the cockpit and lost the use of my left hand.' She flexes it — the fingers move, but stiffly. 'Can't sync at combat speed anymore. So I do this.' A thin smile. 'Turns out I'm better at picking pilots than being one.'"
            }
        ]
    }
];
