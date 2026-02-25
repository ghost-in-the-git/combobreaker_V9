/**
 * THE FRONTLINE - ENCOUNTER CONFIGURATION
 *
 * Active military staging ground. The Herald operates from a
 * fortified foxhole, offering a beacon to draw out the Scorched CM-1 Sovereign.
 */

const ENCOUNTERS_FRONTLINE = [
    {
        name: "The Herald",
        characterImage: "images/herald.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman in battered combat armour crouches in a reinforced foxhole. Same build. Same hands — fast, precise, not quite human. She watches the ridge where the Sovereign stands with an expression you haven't seen on her before. Something like grief.",
        engageText: "'It's a command mech. A Sovereign.' She lowers the scope. 'It's been standing on that ridge since the war. Broadcasting orders on eleven channels. Formation changes, rally points, fire missions — all for a squad that's been dead for eighty years.' She holds up a beacon. 'This spoofs a hostile IFF inside its perimeter. A threat to the squad it thinks it still has.'",
        discoveredDescription: "The Herald hunkers in her foxhole, same slight frame. On the ridge, the Sovereign still stands. The uplink still broadcasts. She watches it like she's watching a funeral.",
        discoveredEngageText: "'Still up there. Still commanding. Eleven empty channels and it won't close a single one.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Frontline"],
        itemSlot2: ["Map: Morningstar's Destruction"],
        itemSlot3: [],
        itemSlot4: null,
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts a hostile IFF signature inside the Sovereign's tactical perimeter. A threat to the squad it's still protecting. Its command protocols will override everything — it will move to intercept. First time it's left that ridge in eighty years.'"
            },
            {
                question: "Who are you?",
                response: "'I was their scout.' She finally looks away from the ridge. Her eyes catch light at the wrong angle — too bright, like silicon behind the iris. 'That's Rex up on the ridge. Our CO. Broadcasting orders to a squad that died eighty years ago.' She looks at the beacon in her hand. 'Last one. After this, there's only Morningstar.'"
            }
        ]
    }
];
