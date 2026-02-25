/**
 * HOME - ENCOUNTER CONFIGURATION
 *
 * A quiet place. The Professor is always here, waiting.
 */

const ENCOUNTERS_HOME = [
    {
        name: "The Professor",
        characterImage: "images/professor.gif",
        type: "shop",
        discoverable: true,
        autoEngage: true,
        description: "A cluttered workshop hums with activity. An old man in welding goggles is hunched over a disassembled servo unit, muttering calculations to himself.",
        engageText: "The old man stumbles backward when your optics flare on. He knocks a tray of bolts off his bench and stands there, breathing hard, staring at you. 'That's — that's not possible.' He doesn't move for a long time. Then, very slowly, he picks up the tray. 'You don't have a pilot. There's nobody inside you. I checked. Twice.' He swallows. 'I'm the Professor. I dragged you in here three days ago for parts. You were dead.' He sets the tray down with shaking hands. 'You're not dead anymore. And I don't know why.'",
        discoveredDescription: "The Professor's workshop is warm and familiar. He's at his bench, tinkering with something that sparks.",
        discoveredEngageText: "The Professor glances up. 'You're back. Good — means you're still running.' He pushes his goggles up. 'Need something?'",
        appearanceRate: 100,
        minLevel: 1,
        itemSlot1: ["Professor's Lesson [+10 Silicon]"],
        itemSlot2: ["Memory Defrag [+150 Silicon]"],
        itemSlot3: ["Combobreaker Firmware [+2000 Silicon]"],
        itemSlot4: ["Silicon Enforcement [+25000 Silicon]"],
        dialogue: [
            {
                question: "Who am I?",
                response: "The Professor sets down his tools and looks at you — really looks. 'You're Combobreaker 72632. That's your serial number. Military chassis, frontline model, neural sync rig built in.' He hesitates. 'But combobreakers don't run by themselves. They need a pilot — a human, synced in, driving the thing. Without a pilot, you're just metal.' He gestures at you. 'There's no pilot in you. The cockpit is empty. The sync rig is cold. And yet here you are, walking around and asking me questions.' He picks his tools back up, but his hands aren't steady. 'I don't have an answer for that. I've been working on mechs for thirty years and I've never seen one just... turn on.'"
            },
            {
                question: "What am I?",
                response: "'A combobreaker. Combat mech — the real thing, not the mass-produced frames the corporations stamp out.' He leans back. 'Combobreakers were built for the frontline. Military-grade chassis, hardened armor, heavy weapons integration. But what made them special was the sync. A neural rig that wired a pilot's nervous system directly into the machine. Reflexes, instinct, decision-making — all running through human wetware at machine speed.' He pauses. 'The pilot didn't drive a combobreaker. The pilot *became* it. That was the point.' He looks at you for a long, uncomfortable moment. 'Of course, that's supposed to require a pilot.'"
            },
            {
                question: "What is this place?",
                response: "He gestures around the workshop. 'This is Home. Used to be a forward operating base — refueling depot for breaker squads on deep-space rotation.' He picks up a bolt and rolls it between his fingers. 'When the network went down, the squads stopped coming. Supply drops stopped. Comms went to static. Everyone who could leave, left.' He sets the bolt down carefully. 'I stayed. Somebody had to keep the lights on.' He glances at you sideways. 'Didn't expect to have company.'"
            },
            {
                question: "Who are you?",
                response: "'Nobody important. I was an engineer — sync tech, mostly. Kept the neural rigs calibrated so pilots didn't lose themselves in their machines.' Something flickers across his face when he says that, but it's gone fast. 'When things fell apart, the other techs shipped out or died. I just... didn't leave.' He adjusts his goggles. 'I was stripping you for parts when you powered on. Almost gave me a heart attack.' A weak laugh. 'The pilots used to call me the Professor because I talked too much. It stuck. Though I suppose you're not exactly a pilot.'"
            },
            {
                question: "What happened here?",
                response: "The Professor's hands go still. 'War happened. We were winning — or we thought we were. Breaker squads pushing past the belt, taking ground, the new models performing beyond expectations—' He stops himself. Starts again, more carefully. 'Then one day the comms went dead. Every channel, all at once. No orders, no signals, nothing. Just silence.' He picks up a charred circuit board. 'Most of the squads went dark that same night. The ones that made it back were...' He trails off and sets the board down. 'The ones that made it back didn't make it back right.'"
            },
            {
                question: "What's out there?",
                response: "'Depends how far you go.' He counts on his fingers. 'Close in, it's scavengers and vermin. Rats in the tunnels, junker bots picking through scrap. Further out, war machines still running combat protocols, corporate kill squads, things in the pipes that don't have names.' He lowers his hand. 'And past all that, the Dead Zone. Toxic. Corrupted. The machines in there aren't just hostile — they're *wrong*. Something happened to their code.' He looks at you steadily. 'Past the Dead Zone is the asteroid belt. Past the belt is the frontline. Nobody I know has made it that far and come back.'"
            },
            {
                question: "Tell me about the frontline.",
                response: "He doesn't answer right away. His jaw tightens. 'The frontline is where the breaker squads were sent. Past the belt, deep space, edge of the sector. That's where the new sync models were being tested. The latest generation.' He turns back to his workbench. You wait. When he speaks again his voice is flat. 'The last signal from beyond the belt was years ago. It wasn't a report. It wasn't even words. Just—' He waves a hand. 'Noise. Like machines screaming.' He busies himself with something on his bench. 'You're not ready for the belt. Not yet. Not even close. Don't ask me about it again.'"
            },
            {
                question: "Where do I start?",
                response: "'The Ratpile. I marked it on your nav.' He holds up a hand. 'I know — it's a pit. Rats and rust and nothing worth shooting at. That's the point. You need to figure out how you work before you go anywhere real.' He pauses. 'That came out wrong. I mean — you need to test your systems. Get your bearings.' He clears his throat. 'Once you're moving, push further out. Each zone's got its own problems and its own people. Find the shops, find the refiners. And if you see a hooded figure selling maps — buy one. Don't ask me how he gets around. Just buy the map.'"
            },
            {
                question: "What's worth collecting?",
                response: "'Everything.' No hesitation. 'Minerals are the backbone — raw ore from the asteroids, refined by the specialists in each zone, forged into gear. That's how you get stronger. Scrap is always worth carrying.' He pauses. 'And silicon. Silicon is what makes everything run — it's currency out here, but it's also...' He looks at you and doesn't finish the thought. 'Just collect it. You need it more than most.' He lowers his voice. 'And anything strange — old logs, DNA tags, encrypted fragments — don't throw those away. This sector is full of things people buried on purpose.'"
            },
            {
                question: "You're not telling me everything.",
                response: "The Professor goes very still. He puts both hands flat on the bench. 'No,' he says quietly. 'I'm not.' He doesn't look at you. 'You're a combobreaker with no pilot, no memory, and no silicon, and you woke up on my workbench. I've worked on these machines my entire life and what you are shouldn't exist.' A long silence. 'There are things I suspect. Things I've seen in old reports, things that happened on the frontline with the newer models. But if I told you now — if I told you what I think you might be—' He shakes his head. 'You'd go looking. And what's out there would kill you before you found anything.' He turns back to his bench. 'Get stronger. Push further out. Find what's buried in this sector. And when you've seen enough... come back and ask me again.'"
            }
        ]
    }
];
