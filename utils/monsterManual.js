const monsterManual = [
    {
        "name": "Aarakocra",
        "size": "M",
        "type": "humanoid (aarakocra)",
        "alignment": "Neutral Good",
        "ac": "12",
        "hp": "13 (3d8)",
        "speed": "walk 20 ft., fly 50 ft.",
        "str": "10",
        "dex": "14",
        "con": "10",
        "int": "11",
        "wis": "12",
        "cha": "11",
        "save": "",
        "skill": "Perception +5",
        "passive": "15",
        "languages": "Auran, Aarakocra",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Dive Attack",
            "text": "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target."
        },
        "action": [
            {
                "name": "Talon",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) slashing damage.",
                "attack": "Talon|+4|1d4+2"
            },
            {
                "name": "Javelin",
                "text": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Javelin|+4|1d6+2"
            },
            {
                "name": "Summon Air Elemental",
                "text": "Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it."
            }
        ],
        "description": "Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.\nEnemies of Elemental Evil. In service to the Wind Dukes of Aaqa, aarakocra scout the planes in search of temples of Elemental Evil. They spy on malign elemental creatures and then either take the fight to those creatures or report back to the Wind Dukes.\nOn the Material Plane, aarakocra create aeries atop the highest mountains, especially peaks near portals to the Elemental Plane of Air. From such heights, aarakocra watch for signs of elemental incursions, as well as for nascent threats to their home plane. Aarakocra prefer to live their lives like the wind-unburdened and ever moving-yet they watch over a region for years if that's what it takes to guard against the incursions of Elemental Evil.\nAarakocra have no concept of political borders or property ownership, and the value of gems, gold, and other precious materials means little to aarakocra. In their eyes, a creature should use what is necessary and then cast what is left on the wind for others to use.\nSearch for the Seven Shards. The Wind Dukes of Aaqa come from a race of elemental beings called the vaati, which once ruled many worlds. A creature known as the Queen of Chaos arose and initiated an interplanar war against vaati rule. To combat the threat, seven vaati heroes combined their powers to create the mighty Rod of Law. In a battle against the queen's greatest general, Mishka the Wolf Spider, a vaati killed Mishka by thrusting the rod into him like a spear. The rod shattered into seven shards that scattered across the multiverse. Aaracokra seek signs of the pieces' locations in order to rebuild what is now known as the Rod of Seven Parts.\nSummoning Air Elementals.\n------\nFive aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.\n------\nSource: Monster Manual p. 12, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "mountain"
    },
    {
        "name": "Aboleth",
        "size": "L",
        "type": "aberration",
        "alignment": "Lawful Evil",
        "ac": "17 (natural armor)",
        "hp": "135 (18d10+36)",
        "speed": "walk 10 ft., swim 40 ft.",
        "str": "21",
        "dex": "9",
        "con": "15",
        "int": "18",
        "wis": "15",
        "cha": "18",
        "save": "Con +6, Int +8, Wis +6",
        "skill": "History +12, Perception +10",
        "passive": "20",
        "languages": "Deep Speech, telepathy 120 ft.",
        "cr": "10",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The aboleth can breathe air and water."
            },
            {
                "name": "Mucous Cloud",
                "text": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
            },
            {
                "name": "Probing Telepathy",
                "text": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The aboleth makes three tentacle attacks."
            },
            {
                "name": "Tentacle",
                "text": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
                "attack": [
                    "Tentacle|+9|2d6+5",
                    "Tentacle||1d12"
                ]
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. 15 (3d6 + 5) bludgeoning damage.",
                "attack": "Tail|+9|3d6+5"
            },
            {
                "name": "Enslave (3/Day)",
                "text": [
                    "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.",
                    "Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The aberration can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The aberration regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The aboleth makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Swipe",
                "text": "The aboleth makes one tail attack."
            },
            {
                "name": "Psychic Drain (Costs 2 Actions)",
                "text": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "When fighting inside its lair, an aboleth can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), the aboleth takes a lair action to cause one of the following effects:",
                    "• The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60 feet of it. While maintaining concentration on this effect, the aboleth can't take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth's phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected.",
                    "• Pools of water within 90 feet of the aboleth surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 14 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. The aboleth can't use this lair action again until it has used a different one.",
                    "• Water in the aboleth's lair magically becomes a conduit for the creature's rage. The aboleth can target any number of creatures it can see in such water within 90 feet of it. A target must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage. The aboleth can't use this lair action again until it has used a different one."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing an aboleth's lair is warped by the creature's presence, which creates one or more of the following effects:",
                    "• Underground surfaces within 1 mile of the aboleth's lair are slimy and wet and are difficult terrain.",
                    "• Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the aboleth that drink such water vomit it within minutes.",
                    "• As an action, the aboleth can create an illusory image of itself within 1 mile of the lair. The copy can appear at any location the aboleth has seen before or in any location a creature charmed by the aboleth can currently see. Once created, the image lasts for as long as the aboleth maintains concentration, as if concentrating on a spell. Although the image is intangible, it looks, sounds, and can move like the aboleth. The aboleth can sense, speak, and use telepathy from the image's position as if present at that position. If the image takes any damage, it disappears.",
                    "If the aboleth dies, the first two effects fade over the course of 3d10 days."
                ]
            }
        ],
        "description": "Before the coming of the gods, aboleths lurked in primordial oceans and underground lakes. They reached out with their minds and seized control of the burgeoning life-forms of the mortal realm, making those creatures their slaves. Their dominance made them like gods. Then the true gods appeared, smashing the aboleths' empire and freeing their slaves. Aboleths have never forgotten.\nEternal Memories. Aboleths have flawless memories. They pass on their knowledge and experience from generation to generation. Thus, the injury of their defeat by the gods remains perfectly preserved in their minds.\nAboleths' minds are treasure troves of ancient lore, recalling moments from prehistory with perfect clarity. They plot patiently and intricately across eons. Few creatures can conceive of the extent of an aboleth's plan.\nGods in the Lake. Aboleths dwell in watery environments, including ocean abysses, deep lakes, and the Elemental Plane of Water. In these domains and the lands that adjoin them, aboleths are like gods, demanding worship and obedience from their subjects. When they consume other creatures, aboleths add the knowledge and experiences of their prey to their eternal memories. Aboleths use their telepathic powers to read the minds of creatures and know their desires. An aboleth uses this knowledge to gain a creature's loyalty, promising to fulfill such wants in exchange for obedience. Within its lair, the aboleth can further use its powers to override senses, granting creatures, such as its followers, the illusion of promised rewards.\nEnemies of the Gods. The aboleths' fall from power is written in stark clarity on their flawless memories, for aboleths never truly die. If an aboleth's body is destroyed, its spirit returns to the Elemental Plane of Water, where a new body coalesces for it over days or months.\nUltimately, aboleths dream of overthrowing the gods and regaining control of the world. Aboleths have had untold eons to plot and to prepare their plans for perfect execution.\nAn Aboleth's Lair. Aboleths lair in subterranean lakes or the rocky depths of the ocean, often surrounded by the ruins of an ancient, fallen aboleth city. An aboleth spends most of its existence underwater, surfacing occasionally to treat with visitors or deranged worshipers.\nSource: Monster Manual p. 13, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Abominable Yeti",
        "size": "H",
        "type": "monstrosity",
        "alignment": "Chaotic Evil",
        "ac": "15 (natural armor)",
        "hp": "137 (11d12+66)",
        "speed": "walk 40 ft., climb 40 ft.",
        "str": "24",
        "dex": "10",
        "con": "22",
        "int": "9",
        "wis": "13",
        "cha": "9",
        "save": "",
        "skill": "Perception +5, Stealth +4",
        "passive": "15",
        "languages": "Yeti",
        "cr": "9",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Fear of Fire",
                "text": "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
            },
            {
                "name": "Keen Smell",
                "text": "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Snow Camouflage",
                "text": "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The yeti can use its Chilling Gaze and makes two claw attacks."
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 14 (2d6 + 7) slashing damage plus 7 (2d6) cold damage.",
                "attack": "Claw|+11|2d6+7"
            },
            {
                "name": "Chilling Gaze",
                "text": "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 18 Constitution saving throw against this magic or take 21 (6d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to this yeti's gaze for 1 hour.",
                "attack": "Chilling Gaze||6d6"
            },
            {
                "name": "Cold Breath (Recharge 6)",
                "text": "The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a DC 18 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
                "attack": "Cold Breath (Recharge 6)||10d8"
            }
        ],
        "description": "A yeti's windborne howl sounds out across remote mountains, striking fear into the hearts of the scattered miners and herders that dwell there. These hulking creatures stalk alpine peaks in a ceaseless hunt for food. Their snow-white fur lets them move like ghosts against the frozen landscape. A yeti's icy simian eyes can freeze its prey in place.\nKeen Hunters. Folk of the high peaks travel in groups and go armed, knowing that yetis can smell living flesh from miles away. When it finds prey, a yeti moves quickly over ice and stone to claim its meal, howling to the thrill of the hunt. Even in a blizzard, the scent of its quarry draws the yeti through the cold and snow.\nYetis hunt in solitude or in small family groups. When creatures flee from a yeti or engage it in battle, other yetis might catch the scent of blood and close in. The territorial yetis fight one another for the spoils of such battles, and yetis slain in the fight are also eaten, amid euphoric howls.\nTerrifying Howlers. Before an avalanche, a blizzard, or a deadly frost, the yetis' howls sweep down the mountain slopes on the icy wind. Some people of the alpine peaks believe that the voices of loved ones killed in avalanches and blizzards sound out in the wails of the yetis, crying warnings of ill omen. More pragmatic folk attest that the yeti's howl is a reminder that, despite the great accomplishments of civilization, the civilized become the hunted in nature's untamed domain.\nBrutal Rampagers. When mountain herds are abundant, yetis stay clear of humanoid realms. Driven by hunger, they attack humanoid settlements in waves, breaking down gates and stockade walls that once might have daunted them, then devouring the creatures within.\nDevious mountain folk sometimes use the yetis as unwitting weapons. A warlord might lay down slaughtered sheep or goats to draw yetis into an enemy's camp, sowing chaos and thinning the ranks before battle. Mountain clan chiefs, wanting to expand their territory, overhunt local game to diminish the yetis' food supplies, inspiring attacks on humanoid settlements that are swiftly annexed in the aftermath.\nAbominable Yetis. An abominable yeti is larger than a normal yeti, standing three times as tall as a human. It typically lives and hunts alone, though a pair of abominable yetis might live together long enough to raise young. These towering yetis are highly territorial and savage, attacking and devouring any warm-blooded creatures they encounter, then scattering the bones across the ice and snow.\nSource: Monster Manual p. 306, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "arctic"
    },
    {
        "name": "Acolyte",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any alignment",
        "ac": "10",
        "hp": "9 (2d8)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "10",
        "con": "10",
        "int": "10",
        "wis": "14",
        "cha": "11",
        "save": "",
        "skill": "Medicine +4, Religion +2",
        "passive": "12",
        "languages": "any one language (usually Common)",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Club",
            "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d4) bludgeoning damage.",
            "attack": "Club|+2|1d4"
        },
        "trait": {
            "name": "Spellcasting",
            "text": [
                "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:",
                "Cantrips (at will): light, sacred flame, thaumaturgy",
                "• 1st level (3 slots): bless, cure wounds, sanctuary"
            ]
        },
        "slots": "3",
        "spells": "light, sacred flame, thaumaturgy, bless, cure wounds, sanctuary",
        "description": "Acolytes are junior members of a clergy, usually answerable to a priest. They perform a variety of functions in a temple and are granted minor spellcasting power by their deities.\nSource: Monster Manual p. 342, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Adult Black Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "19 (natural armor)",
        "hp": "195 (17d12+85)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "23",
        "dex": "14",
        "con": "21",
        "int": "14",
        "wis": "13",
        "cha": "17",
        "save": "Dex +7, Con +10, Wis +6, Cha +8",
        "skill": "Perception +11, Stealth +7",
        "passive": "21",
        "languages": "Common, Draconic",
        "cr": "14",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
                "attack": "Bite|+11|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+11|2d6+6"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. 15 (2d8 + 6) bludgeoning damage.",
                "attack": "Tail|+11|2d8+6"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Acid Breath (Recharge 5-6)",
                "text": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
                "attack": "Acid Breath (Recharge 5-6)||12d8"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Pools of water that the dragon can see within 120 feet of it surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the water and knocked prone.",
                    "• A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the dragon chooses within 120 feet of it. The cloud spreads around corners and remains until the dragon dismisses it as an action, uses this lair action again, or dies. The cloud is lightly obscured. Any creature in the cloud when it appears must make on a DC 15 Constitution saving throw, taking 10 (3d6) piercing damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the cloud takes 10 (3d6) piercing damage.",
                    "• Magical darkness spreads from a point the dragon chooses within 60 feet of it, filling a 15-foot-radius sphere until the dragon dismisses it as an action, uses this lair action again, or dies. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it. If any of the effect's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary black dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are thick with reeking mud.",
                    "• Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes.",
                    "• Fog lightly obscures the land within 6 miles of the lair.",
                    "If the dragon dies, vegetation remains as it has grown, but other effects fade over 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 88, Hoard of the Dragon Queen, Princes of the Apocalypse, Rise of Tiamat, Ghosts of Saltmarsh",
        "environment": "swamp"
    },
    {
        "name": "Adult Blue Dracolich",
        "size": "H",
        "type": "undead",
        "alignment": "Lawful Evil",
        "ac": "19 (natural armor)",
        "hp": "225 (18d12+108)",
        "speed": "walk 40 ft., burrow 30 ft., fly 80 ft.",
        "str": "25",
        "dex": "10",
        "con": "23",
        "int": "16",
        "wis": "15",
        "cha": "19",
        "save": "Dex +6, Con +12, Wis +8, Cha +10",
        "skill": "Perception +14, Stealth +6",
        "passive": "24",
        "languages": "Common, Draconic",
        "cr": "17",
        "resist": "necrotic",
        "immune": "lightning, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, frightened, paralyzed, poisoned",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dracolich fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Magic Resistance",
                "text": "The dracolich has advantage on saving throws against spells and other magical effects."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
                "attack": "Bite|+13|2d10+7"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. 14 (2d6 + 7) slashing damage.",
                "attack": "Claw|+13|2d6+7"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. 16 (2d8 + 7) bludgeoning damage.",
                "attack": "Tail|+13|2d8+7"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Lightning Breath (Recharge 5-6)",
                "text": "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
                "attack": "Lightning Breath (Recharge 5-6)||12d10"
            }
        ],
        "legendary": [
            {
                "text": "The undead can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dracolich makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dracolich makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dracolich beats its tattered wings. Each creature within 10 feet of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Part of the ceiling collapses above one creature that the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) bludgeoning damage and be knocked prone and buried. The buried target is restrained and unable to breathe or stand up. A creature can take an action to make a DC 10 Strength check, ending the buried state on a success.",
                    "• A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "• Lightning arcs, forming a 5-foot-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120 feet of the dragon and 120 feet of each other. Each creature in that line must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) lightning damage."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary blue dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Thunderstorms rage within 6 miles of the lair.",
                    "• Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50 feet, and has an Intelligence and Charisma of 1 (-5).",
                    "• Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distance with a successful DC 20 Wisdom (Perception) check. Otherwise, the first creature to step on the thin crust covering the sinkhole must succeed on a DC 15 Dexterity saving throw or fall 1d6 x 10 feet into the sinkhole.",
                    "If the dragon dies, the dust devils disappear immediately, and the thunderstorms abate within 1d10 days. Any sinkholes remain where they are."
                ]
            }
        ],
        "description": "Even as long-lived as they are, all dragons must eventually die. This thought doesn't sit well with many dragons, some of which allow themselves to be transformed by necromantic energy and ancient rituals into powerful undead dracoliches. Only the most narcissistic dragons choose this path, knowing that by doing so, they sever all ties to their kin and the dragon gods.\nBeyond Death. A dracolich retains its shape and size upon transforming, its skin and scales drawing tight to its bones or sloughing away to leave a skeletal form behind. Its eyes appear as glowing points of light floating in shadowy sockets, hinting at the malevolence of its undead mind.\nThough many dragons pursue vain goals of destruction and dominance, dracoliches are more nefarious than the most evil dragons, driven to rule over all. A dracolich is a fiendishly intelligent tyrant that crafts complex webs of foul schemes, attracting servants motivated by greed and a lust for power. Acting from the shadows and actively plotting to keep its existence a secret, a dracolich is a cunning and challenging foe.\nDracolich Phylacteries. Creating a dracolich requires the cooperation of the dragon and a group of mages or cultists that can perform the proper ritual. During the ritual, the dragon consumes a toxic brew that slays it instantly. The attendant spellcasters then ensnare its spirit and transfer it to a special gemstone that functions like a lich's phylactery. As the dragon's flesh rots away, the spirit inside the gem returns to animate the dragon's bones.\nIf a dracolich's physical form is ever destroyed, its spirit returns to the gem as long as the two are on the same plane. If the gem comes into contact with another dragon's corpse, the dracolich's spirit can take possession of that corpse to become a new dracolich. If the dracolich's spirit gem is taken to another plane, the dracolich's spirit has nowhere to go when its undead body is destroyed and simply passes into the afterlife.\nDracolich Template. Only an ancient or adult true dragon can be transformed into a dracolich. Younger dragons that attempt to undergo the transformation die, as do other creatures that aren't true dragons but possess the dragon type, such as pseudodragons and wyverns. A shadow dragon can't be transformed into a dracolich, for it has already lost too much of its physical form.\nWhen a dragon becomes a dracolich, it retains its statistics except as described below. The dragon loses any trait, such as Amphibious, that assumes a living physiology. The dracolich might retain or lose any or all of its lair actions or inherit new ones, as the DM sees fit.\nType. The dracolich's type changes from dragon to undead, and it no longer requires air, food, drink, or sleep.\nDamage Resistance. The dracolich has resistance to necrotic damage.\nDamage Immunities. The dracolich has immunity to poison. It also retains any immunities it had prior to becoming a dracolich.\nCondition Immunities. The dracolich can't be charmed, frightened, paralyzed, or poisoned. It also doesn't suffer from exhaustion.\nMagic Resistance. The dracolich has advantage on saving throws against spells and other magical effects.\nSource: Monster Manual p. 84, Waterdeep: Dungeon of the Mad Mage",
        "environment": "desert"
    },
    {
        "name": "Adult Blue Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Lawful Evil",
        "ac": "19",
        "hp": "225 (18d12+108)",
        "speed": "walk 40 ft., burrow 30 ft., fly 80 ft.",
        "str": "25",
        "dex": "10",
        "con": "23",
        "int": "16",
        "wis": "15",
        "cha": "19",
        "save": "Dex +5, Con +11, Wis +7, Cha +9",
        "skill": "Perception +12, Stealth +5",
        "passive": "22",
        "languages": "Common, Draconic",
        "cr": "16",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
                "attack": "Bite|+12|2d10+7"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. 14 (2d6 + 7) slashing damage.",
                "attack": "Claw|+12|2d6+7"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. 16 (2d8 + 7) bludgeoning damage.",
                "attack": "Tail|+12|2d8+7"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Lightning Breath (Recharge 5-6)",
                "text": "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
                "attack": "Lightning Breath (Recharge 5-6)||12d10"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Part of the ceiling collapses above one creature that the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) bludgeoning damage and be knocked prone and buried. The buried target is restrained and unable to breathe or stand up. A creature can take an action to make a DC 10 Strength check, ending the buried state on a success.",
                    "• A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "• Lightning arcs, forming a 5-foot-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120 feet of the dragon and 120 feet of each other. Each creature in that line must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) lightning damage."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary blue dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Thunderstorms rage within 6 miles of the lair.",
                    "• Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50 feet, and has an Intelligence and Charisma of 1 (-5).",
                    "• Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distance with a successful DC 20 Wisdom (Perception) check. Otherwise, the first creature to step on the thin crust covering the sinkhole must succeed on a DC 15 Dexterity saving throw or fall 1d6 x 10 feet into the sinkhole.",
                    "If the dragon dies, the dust devils disappear immediately, and the thunderstorms abate within 1d10 days. Any sinkholes remain where they are."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 91, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Ghosts of Saltmarsh, Mythic Odysseys of Theros",
        "environment": "desert, coastal"
    },
    {
        "name": "Adult Brass Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "18 (natural armor)",
        "hp": "172 (15d12+75)",
        "speed": "walk 40 ft., burrow 40 ft., fly 80 ft.",
        "str": "23",
        "dex": "10",
        "con": "21",
        "int": "14",
        "wis": "13",
        "cha": "17",
        "save": "Dex +5, Con +10, Wis +6, Cha +8",
        "skill": "History +7, Perception +11, Persuasion +8, Stealth +5",
        "passive": "21",
        "languages": "Common, Draconic",
        "cr": "13",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage.",
                "attack": "Bite|+11|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+11|2d6+6"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. 15 (2d8 + 6) bludgeoning damage.",
                "attack": "Tail|+11|2d8+6"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Fire Breath. The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.",
                    "• Sleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||13d6"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• A strong wind blows around the dragon. Each creature within 60 feet of the dragon must succeed on a DC 15 Strength saving throw or be pushed 15 feet away from the dragon and knocked prone. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames; such as lanterns, have a 50 percent chance of being extinguished.",
                    "• A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in it must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary brass dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Tracks appear in the sand within 6 miles of the dragon's lair. The tracks lead to safe shelters and hidden water sources, while also leading away from areas that the dragon prefers to remain undisturbed.",
                    "• Images of Large or smaller monsters haunt the desert sands within 1 mile of the dragon's lair. These illusions move and appear real, although they can do no harm. A creature that examines an image from a distance can tell it's an illusion with a successful DC 20 Intelligence (Investigation) check. Any physical interaction with an image reveals it to be an illusion, because objects pass through it.",
                    "• Whenever a creature with an Intelligence of 3 or higher comes within 30 feet of a water source within 1 mile of the dragon's lair, the dragon becomes aware of the creature's presence and location.",
                    "If the dragon dies, the tracks fade in 1d10 days, but the other effects fade immediately."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 105, Ghosts of Saltmarsh",
        "environment": "desert"
    },
    {
        "name": "Adult Bronze Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "19 (natural armor)",
        "hp": "212 (17d12+102)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "25",
        "dex": "10",
        "con": "23",
        "int": "16",
        "wis": "15",
        "cha": "19",
        "save": "Dex +5, Con +11, Wis +7, Cha +9",
        "skill": "Insight +7, Perception +12, Stealth +5",
        "passive": "22",
        "languages": "Common, Draconic",
        "cr": "15",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. 18 (2d10 + 7) piercing damage.",
                "attack": "Bite|+12|2d10+7"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. 14 (2d6 + 7) slashing damage.",
                "attack": "Claw|+12|2d6+7"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. 16 (2d8 + 7) bludgeoning damage.",
                "attack": "Tail|+12|2d8+7"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Lightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
                    "• Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||12d10"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• The dragon creates fog as though it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.",
                    "• A thunderclap originates at a point the dragon can see within 120 feet of it. Each creature within a 20-foot radius centered on that point must make a DC 15 Constitution saving throw or take 5 (1d10) thunder damage and be deafened until the end of its next turn."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary bronze dragon's lair is warped by the dragon's magic.",
                    "• Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.",
                    "• Underwater plants within 6 miles of the dragon's lair take on dazzlingly brilliant hues.",
                    "• Within its lair, the dragon can set illusory sounds, such as soft music and strange echoes, so that they can be heard in various parts of the lair.",
                    "If the dragon dies, changed weather reverts to normal, as described in the spell, and the other effects fade in 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 108, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Essentials Kit: Sleeping Dragon's Wake, Explorer's Guide to Wildemount",
        "environment": "coastal"
    },
    {
        "name": "Adult Copper Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "18 (natural armor)",
        "hp": "184 (16d12+80)",
        "speed": "walk 40 ft., climb 40 ft., fly 80 ft.",
        "str": "23",
        "dex": "12",
        "con": "21",
        "int": "18",
        "wis": "15",
        "cha": "17",
        "save": "Dex +6, Con +10, Wis +7, Cha +8",
        "skill": "Deception +8, Perception +12, Stealth +6",
        "passive": "22",
        "languages": "Common, Draconic",
        "cr": "14",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage.",
                "attack": "Bite|+11|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+11|2d6+6"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. 15 (2d8 + 6) bludgeoning damage.",
                "attack": "Tail|+11|2d8+6"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Acid Breath. The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
                    "• Slowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||12d8"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• The dragon chooses a point on the ground that it can see within 120 feet of it. Stone spikes sprout from the ground in a 20-foot radius centered on that point. The effect is otherwise identical to the spike growth spell and lasts until the dragon uses this lair action again or until the dragon dies.",
                    "• The dragon chooses a 10-foot-square area on the ground that it can see within 120 feet of it. The ground in that area turns into 3-foot-deep mud. Each creature on the ground in that area when the mud appears must succeed on a DC 15 Dexterity saving throw or sink into the mud and become restrained. A creature can take an action to attempt a DC 15 Strength check, freeing itself or another creature within its reach and ending the restrained condition on a success. Moving 1 foot in the mud costs 2 feet of movement. On initiative count 20 on the next round, the mud hardens, and the Strength DC to work free increases to 20."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary copper dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Magic carvings of the dragon's smiling visage can be seen worked into stone terrain and objects within 6 miles of the dragon's lair.",
                    "• Tiny beasts such as rodents and birds that are normally unable to speak gain the magical ability to speak and understand Draconic while within 1 mile of the dragon's lair. These creatures speak well of the dragon, but can't divulge its whereabouts.",
                    "• Intelligent creatures within 1 mile of the dragon's lair are prone to fits of giggling. Even serious matters suddenly seem amusing.",
                    "If the dragon dies, the magic carvings fade over the course of 1d10 days. The other effects end immediately."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 112, Ghosts of Saltmarsh",
        "environment": "hill"
    },
    {
        "name": "Adult Gold Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "19 (natural armor)",
        "hp": "256 (19d12+133)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "27",
        "dex": "14",
        "con": "25",
        "int": "16",
        "wis": "15",
        "cha": "24",
        "save": "Dex +8, Con +13, Wis +8, Cha +13",
        "skill": "Insight +8, Perception +14, Persuasion +13, Stealth +8",
        "passive": "24",
        "languages": "Common, Draconic",
        "cr": "17",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 19 (2d10 + 8) piercing damage.",
                "attack": "Bite|+14|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. 15 (2d6 + 8) slashing damage.",
                "attack": "Claw|+14|2d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+14|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Fire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.",
                    "• Weakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||12d10"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• The dragon glimpses the future, so it has advantage on attack rolls, ability checks, and saving throws until initiative count 20 on the next round.",
                    "• One creature the dragon can see within 120 feet of it must succeed on a DC 15 Charisma saving throw or be banished to a dream plane, a different plane of existence the dragon has imagined into being. To escape, the creature must use its action to make a Charisma check contested by the dragon's. If the creature wins, it escapes the dream plane. Otherwise, the effect ends on initiative count 20 on the next round. When the effect ends, the creature reappears in the space it left or in the nearest unoccupied space if that one is occupied."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary gold dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Whenever a creature that can understand a language sleeps or enters a state of trance or reverie within 6 miles of the dragon's lair, the dragon can establish telepathic contact with that creature and converse with it in its dreams. The creature remembers its conversation with the dragon upon waking.",
                    "• Banks of beautiful, opalescent mist manifest within 6 miles of the dragon's lair. The mist doesn't obscure anything. It assumes haunting forms when evil creatures are near the dragon or other non-evil creatures in the mist, warning such creatures of the danger.",
                    "• Gems and pearls within 1 mile of the dragon's lair sparkle and gleam, shedding dim light in a 5-foot radius.",
                    "If the dragon dies, these effects end immediately."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 114, Ghosts of Saltmarsh, Explorer's Guide to Wildemount",
        "environment": "grassland, forest"
    },
    {
        "name": "Adult Green Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Lawful Evil",
        "ac": "19 (natural armor)",
        "hp": "207 (18d12+90)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "23",
        "dex": "12",
        "con": "21",
        "int": "18",
        "wis": "15",
        "cha": "17",
        "save": "Dex +6, Con +10, Wis +7, Cha +8",
        "skill": "Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6",
        "passive": "22",
        "languages": "Common, Draconic",
        "cr": "15",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage.",
                "attack": "Bite|+11|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+11|2d6+6"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. 15 (2d8 + 6) bludgeoning damage.",
                "attack": "Tail|+11|2d8+6"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Poison Breath (Recharge 5-6)",
                "text": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.",
                "attack": "Poison Breath (Recharge 5-6)||16d6"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Grasping roots and vines erupt in a 20-foot radius centered on a point on the ground that the dragon can see within 120 feet of it. That area becomes difficult terrain, and each creature there must succeed on a DC 15 Strength saving throw or be restrained by the roots and vines. A creature can be freed if it or another creature takes an action to make a DC 15 Strength check and succeeds. The roots and vines wilt away when the dragon uses this lair action again or when the dragon dies.",
                    "• A wall of tangled brush bristling with thorns springs into existence on a solid surface within 120 feet of the dragon. The wall is up to 60 feet long, 10 feet high, and 5 feet thick, and it blocks line of sight. When the wall appears, each creature in its area must make a DC 15 Dexterity saving throw. A creature that fails the save takes 18 (4d8) piercing damage and is pushed 5 feet out of the wall's space, appearing on whichever side of the wall it wants. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature travels through the wall, it must spend 4 feet of movement. Furthermore, a creature in the wall's space must make a DC 15 Dexterity saving throw once each round it's in contact with the wall, taking 18 (4d8) piercing damage on a failed save, or half as much damage on a successful one. Each 10-foot section of wall has AC 5, 15 hit points, vulnerability to fire damage, resistance to bludgeoning and piercing damage, and immunity to psychic damage. The wall sinks back into the ground when the dragon uses this lair action again or when the dragon dies.",
                    "• Magical fog billows around one creature the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Wisdom saving throw or be charmed by the dragon until initiative count 20 on the next round."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary green dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Thickets form labyrinthine passages within 1 mile of the dragon's lair. The thickets act as 10-foot-high, 10-foot-thick walls that block line of sight. Creatures can move through the thickets, with every 1 foot a creature moves costing it 4 feet of movement. A creature in the thickets must make a DC 15 Dexterity saving throw once each round it's in contact with the 'thickets or take 3 (1d6) piercing damage from thorns.",
                    "• Each 10-foot-cube of thickets has AC 5, 30 hit points, resistance to bludgeoning and piercing damage, vulnerability to fire damage, and immunity to psychic and thunder damage.",
                    "• Within 1 mile of its lair, the dragon leaves no physical evidence of its passage unless it wishes to. Tracking it there is impossible except by magical means. In addition, it ignores movement impediments and damage from plants in this area that are neither magical nor creatures, including the thickets described above. The plants remove themselves from the dragon's path.",
                    "• Rodents and birds within 1 mile of the dragon's lair serve as the dragon's eyes and ears. Deer and other large game are strangely absent, hinting at the presence of an unnaturally hungry predator.",
                    "If the dragon dies, the rodents and birds lose their supernatural link to it. The thickets remain, but within 1d10 days, they become mundane plants and normal difficult terrain, losing their thorns."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 94, Rise of Tiamat, Ghosts of Saltmarsh",
        "environment": "forest"
    },
    {
        "name": "Adult Red Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "19 (natural armor)",
        "hp": "256 (19d12+133)",
        "speed": "walk 40 ft., climb 40 ft., fly 80 ft.",
        "str": "27",
        "dex": "10",
        "con": "25",
        "int": "16",
        "wis": "13",
        "cha": "21",
        "save": "Dex +6, Con +13, Wis +7, Cha +11",
        "skill": "Perception +13, Stealth +6",
        "passive": "23",
        "languages": "Common, Draconic",
        "cr": "17",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.",
                "attack": "Bite|+14|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. 15 (2d6 + 8) slashing damage.",
                "attack": "Claw|+14|2d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+14|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Fire Breath (Recharge 5-6)",
                "text": "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.",
                "attack": "Fire Breath (Recharge 5-6)||18d6"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
                    "• A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.",
                    "• Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads a round corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary red dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Small earthquakes are common within 6 miles of the dragon's lair.",
                    "• Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur.",
                    "• Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby.",
                    "If the dragon dies, these effects fade over the course of 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 98, Rise of Tiamat, Tales from the Yawning Portal, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros",
        "environment": "mountain, hill"
    },
    {
        "name": "Adult Silver Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "19 (natural armor)",
        "hp": "243 (18d12+126)",
        "speed": "walk 40 ft., fly 80 ft.",
        "str": "27",
        "dex": "10",
        "con": "25",
        "int": "16",
        "wis": "13",
        "cha": "21",
        "save": "Dex +5, Con +12, Wis +6, Cha +10",
        "skill": "Arcana +8, History +8, Perception +11, Stealth +5",
        "passive": "21",
        "languages": "Common, Draconic",
        "cr": "16",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. 19 (2d10 + 8) piercing damage.",
                "attack": "Bite|+13|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. 15 (2d6 + 8) slashing damage.",
                "attack": "Claw|+13|2d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+13|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Cold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.",
                    "• Paralyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||13d8"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• The dragon creates fog as if it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.",
                    "• A blisteringly cold wind blows through the lair near the dragon. Each creature within 120 feet of the dragon must succeed on a DC 15 Constitution saving throw or take 5 (1d10) cold damage. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50 percent chance of being extinguished."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary silver dragon's lair is warped by the dragon's magic, which creates one or more of the following effects.",
                    "• Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.",
                    "• Within 1 mile of the lair, winds buoy non-evil creatures that fall due to no act of the dragon's or its allies. Such creatures descend at a rate of 60 feet per round and take no falling damage.",
                    "• Given days or longer to work, the dragon can make clouds and fog within its lair as solid as stone, forming structures and other objects as it wishes.",
                    "If the dragon dies, changed weather reverts to normal, as described in the spell, and the other effects fade in 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 117, Storm King's Thunder, Ghosts of Saltmarsh",
        "environment": "mountain, urban"
    },
    {
        "name": "Adult White Dragon",
        "size": "H",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "18 (natural armor)",
        "hp": "200 (16d12+96)",
        "speed": "walk 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft.",
        "str": "22",
        "dex": "10",
        "con": "22",
        "int": "8",
        "wis": "12",
        "cha": "12",
        "save": "Dex +5, Con +11, Wis +6, Cha +6",
        "skill": "Perception +11, Stealth +5",
        "passive": "21",
        "languages": "Common, Draconic",
        "cr": "13",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Ice Walk",
                "text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.",
                "attack": "Bite|+11|2d10+6"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage.",
                "attack": "Claw|+11|2d6+6"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. 15 (2d8 + 6) bludgeoning damage.",
                "attack": "Tail|+11|2d8+6"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Cold Breath (Recharge 5-6)",
                "text": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
                "attack": "Cold Breath (Recharge 5-6)||12d8"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Freezing fog fills a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The fog spreads around corners, and its area is heavily obscured. Each creature in the fog when it appears must make a DC 10 Constitution saving throw, taking 10 (3d6) cold damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the fog takes 10 (3d6) cold damage. A wind of at least 20 miles per hour disperses the fog. The fog otherwise lasts until the dragon uses this lair action again or until the dragon dies.",
                    "• Jagged ice shards fall from the ceiling, striking up to three creatures underneath that the dragon can see within 120 feet of it. The dragon makes one ranged attack roll (+7 to hit) against each target. On a hit, the target takes 10 (3d6) piercing damage.",
                    "• The dragon creates an opaque wall of ice on a solid surface it can see within 120 feet of it. The wall can be up to 30 feet long, 30 feet high, and 1 foot thick. When the wall appears, each creature within its area is pushed 5 feet out of the wall's space; appearing on whichever side of the wall it wants. Each 10-foot section of the wall has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. The wall disappears when the dragon uses this lair action again or when the dragon dies."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary white dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Chilly fog lightly obscures the land within 6 miles of the dragon's lair.",
                    "• Freezing precipitation falls within 6 miles of the dragon's lair, sometimes forming blizzard conditions when the dragon is at rest.",
                    "• Icy walls block off areas in the dragon's lair. Each wall is 6 inches thick, and a 10-foot section has AC 5, 15 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage.",
                    "• If the dragon wishes to move through a wall, it can do so without slowing down. The portion of the wall the dragon moves through is destroyed, however.",
                    "If the dragon dies, the fog and precipitation fade within 1 day. The ice walls melt over the course of 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 101, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount",
        "environment": "arctic"
    },
    {
        "name": "Air Elemental",
        "size": "L",
        "type": "elemental",
        "alignment": "Neutral",
        "ac": "15",
        "hp": "90 (12d10+24)",
        "speed": "fly 90 ft.",
        "str": "14",
        "dex": "20",
        "con": "14",
        "int": "6",
        "wis": "10",
        "cha": "6",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Auran",
        "cr": "5",
        "resist": "lightning, thunder; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Air Form",
            "text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The elemental makes two slam attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 14 (2d8 + 5) bludgeoning damage.",
                "attack": "Slam|+8|2d8+5"
            },
            {
                "name": "Whirlwind (Recharge 4-6)",
                "text": [
                    "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.",
                    "If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
                ],
                "attack": "Whirlwind (Recharge 4-6)||3d8+2"
            }
        ],
        "description": "Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.\nLiving Elements. On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.\nConjured by Magic. Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.\nBound and Shaped. Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.\nElemental Nature. An elemental doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 124, Hoard of the Dragon Queen, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Eberron: Rising from the Last War, Infernal Machine Rebuild, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "mountain, desert"
    },
    {
        "name": "Allosaurus",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "13 (natural armor)",
        "hp": "51 (6d10+18)",
        "speed": "walk 60 ft.",
        "str": "19",
        "dex": "13",
        "con": "17",
        "int": "2",
        "wis": "12",
        "cha": "5",
        "save": "",
        "skill": "Perception +5",
        "passive": "15",
        "languages": "",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Pounce",
            "text": "If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 15 (2d10 + 4) piercing damage.",
                "attack": "Bite|+6|2d10+4"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 8 (1d8 + 4) slashing damage.",
                "attack": "Claw|+6|1d8+4"
            }
        ],
        "description": "The allosaurus is a predator possessing great size, strength, and speed. It can run down almost any prey over open ground, pouncing to pull creatures down with its wicked claws.\nDinosaurs. Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.\nDinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.\nSource: Monster Manual p. 79, Tomb of Annihilation, Waterdeep: Dragon Heist",
        "environment": "grassland"
    },
    {
        "name": "Ancient Black Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "22 (natural armor)",
        "hp": "367 (21d20+147)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "27",
        "dex": "14",
        "con": "25",
        "int": "16",
        "wis": "15",
        "cha": "19",
        "save": "Dex +9, Con +14, Wis +9, Cha +11",
        "skill": "Perception +16, Stealth +9",
        "passive": "26",
        "languages": "Common, Draconic",
        "cr": "21",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.",
                "attack": "Bite|+15|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. 15 (2d6 + 8) slashing damage.",
                "attack": "Claw|+15|2d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+15|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Acid Breath (Recharge 5-6)",
                "text": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.",
                "attack": "Acid Breath (Recharge 5-6)||15d8"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Pools of water that the dragon can see within 120 feet of it surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the water and knocked prone.",
                    "• A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the dragon chooses within 120 feet of it. The cloud spreads around corners and remains until the dragon dismisses it as an action, uses this lair action again, or dies. The cloud is lightly obscured. Any creature in the cloud when it appears must make on a DC 15 Constitution saving throw, taking 10 (3d6) piercing damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the cloud takes 10 (3d6) piercing damage.",
                    "• Magical darkness spreads from a point the dragon chooses within 60 feet of it, filling a 15-foot-radius sphere until the dragon dismisses it as an action, uses this lair action again, or dies. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it. If any of the effect's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary black dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are thick with reeking mud.",
                    "• Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes.",
                    "• Fog lightly obscures the land within 6 miles of the lair.",
                    "If the dragon dies, vegetation remains as it has grown, but other effects fade over 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 87",
        "environment": "swamp"
    },
    {
        "name": "Ancient Blue Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Lawful Evil",
        "ac": "22 (natural armor)",
        "hp": "481 (26d20+208)",
        "speed": "walk 40 ft., burrow 40 ft., fly 80 ft.",
        "str": "29",
        "dex": "10",
        "con": "27",
        "int": "18",
        "wis": "17",
        "cha": "21",
        "save": "Dex +7, Con +15, Wis +10, Cha +12",
        "skill": "Perception +17, Stealth +7",
        "passive": "27",
        "languages": "Common, Draconic",
        "cr": "23",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
                "attack": "Bite|+16|2d10+9"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. 16 (2d6 + 9) slashing damage.",
                "attack": "Claw|+16|2d6+9"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. 18 (2d8 + 9) bludgeoning damage.",
                "attack": "Tail|+16|2d8+9"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Lightning Breath (Recharge 5-6)",
                "text": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
                "attack": "Lightning Breath (Recharge 5-6)||16d10"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Part of the ceiling collapses above one creature that the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) bludgeoning damage and be knocked prone and buried. The buried target is restrained and unable to breathe or stand up. A creature can take an action to make a DC 10 Strength check, ending the buried state on a success.",
                    "• A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "• Lightning arcs, forming a 5-foot-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120 feet of the dragon and 120 feet of each other. Each creature in that line must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) lightning damage."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary blue dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Thunderstorms rage within 6 miles of the lair.",
                    "• Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50 feet, and has an Intelligence and Charisma of 1 (-5).",
                    "• Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distance with a successful DC 20 Wisdom (Perception) check. Otherwise, the first creature to step on the thin crust covering the sinkhole must succeed on a DC 15 Dexterity saving throw or fall 1d6 x 10 feet into the sinkhole.",
                    "If the dragon dies, the dust devils disappear immediately, and the thunderstorms abate within 1d10 days. Any sinkholes remain where they are."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 90, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "desert, coastal"
    },
    {
        "name": "Ancient Brass Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "20 (natural armor)",
        "hp": "297 (17d20+119)",
        "speed": "walk 40 ft., burrow 40 ft., fly 80 ft.",
        "str": "27",
        "dex": "10",
        "con": "25",
        "int": "16",
        "wis": "15",
        "cha": "19",
        "save": "Dex +6, Con +13, Wis +8, Cha +10",
        "skill": "History +9, Perception +14, Persuasion +10, Stealth +6",
        "passive": "24",
        "languages": "Common, Draconic",
        "cr": "20",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. 19 (2d10 + 8) piercing damage.",
                "attack": "Bite|+14|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 15 (2d6 + 8) slashing damage.",
                "attack": "Claw|+14|2d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+14|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons:",
                    "• Fire Breath. The dragon exhales fire in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.",
                    "• Sleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||16d6"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• A strong wind blows around the dragon. Each creature within 60 feet of the dragon must succeed on a DC 15 Strength saving throw or be pushed 15 feet away from the dragon and knocked prone. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames; such as lanterns, have a 50 percent chance of being extinguished.",
                    "• A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in it must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary brass dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Tracks appear in the sand within 6 miles of the dragon's lair. The tracks lead to safe shelters and hidden water sources, while also leading away from areas that the dragon prefers to remain undisturbed.",
                    "• Images of Large or smaller monsters haunt the desert sands within 1 mile of the dragon's lair. These illusions move and appear real, although they can do no harm. A creature that examines an image from a distance can tell it's an illusion with a successful DC 20 Intelligence (Investigation) check. Any physical interaction with an image reveals it to be an illusion, because objects pass through it.",
                    "• Whenever a creature with an Intelligence of 3 or higher comes within 30 feet of a water source within 1 mile of the dragon's lair, the dragon becomes aware of the creature's presence and location.",
                    "If the dragon dies, the tracks fade in 1d10 days, but the other effects fade immediately."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 104",
        "environment": "desert"
    },
    {
        "name": "Ancient Bronze Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "22 (natural armor)",
        "hp": "444 (24d20+192)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "29",
        "dex": "10",
        "con": "27",
        "int": "18",
        "wis": "17",
        "cha": "21",
        "save": "Dex +7, Con +15, Wis +10, Cha +12",
        "skill": "Insight +10, Perception +17, Stealth +7",
        "passive": "27",
        "languages": "Common, Draconic",
        "cr": "22",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. 20 (2d10 + 9) piercing damage.",
                "attack": "Bite|+16|2d10+9"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. 16 (2d6 + 9) slashing damage.",
                "attack": "Claw|+16|2d6+9"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. 18 (2d8 + 9) bludgeoning damage.",
                "attack": "Tail|+16|2d8+9"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Lightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
                    "• Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||16d10"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• The dragon creates fog as though it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.",
                    "• A thunderclap originates at a point the dragon can see within 120 feet of it. Each creature within a 20-foot radius centered on that point must make a DC 15 Constitution saving throw or take 5 (1d10) thunder damage and be deafened until the end of its next turn."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary bronze dragon's lair is warped by the dragon's magic.",
                    "• Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.",
                    "• Underwater plants within 6 miles of the dragon's lair take on dazzlingly brilliant hues.",
                    "• Within its lair, the dragon can set illusory sounds, such as soft music and strange echoes, so that they can be heard in various parts of the lair.",
                    "If the dragon dies, changed weather reverts to normal, as described in the spell, and the other effects fade in 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 107, Ghosts of Saltmarsh",
        "environment": "coastal"
    },
    {
        "name": "Ancient Copper Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "21 (natural armor)",
        "hp": "350 (20d20+140)",
        "speed": "walk 40 ft., climb 40 ft., fly 80 ft.",
        "str": "27",
        "dex": "12",
        "con": "25",
        "int": "20",
        "wis": "17",
        "cha": "19",
        "save": "Dex +8, Con +14, Wis +10, Cha +11",
        "skill": "Deception +11, Perception +17, Stealth +8",
        "passive": "27",
        "languages": "Common, Draconic",
        "cr": "21",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. 19 (2d10 + 8) piercing damage.",
                "attack": "Bite|+15|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. 15 (2d6 + 8) slashing damage.",
                "attack": "Claw|+15|2d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+15|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Acid Breath. The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.",
                    "• Slowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||14d8"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• The dragon chooses a point on the ground that it can see within 120 feet of it. Stone spikes sprout from the ground in a 20-foot radius centered on that point. The effect is otherwise identical to the spike growth spell and lasts until the dragon uses this lair action again or until the dragon dies.",
                    "• The dragon chooses a 10-foot-square area on the ground that it can see within 120 feet of it. The ground in that area turns into 3-foot-deep mud. Each creature on the ground in that area when the mud appears must succeed on a DC 15 Dexterity saving throw or sink into the mud and become restrained. A creature can take an action to attempt a DC 15 Strength check, freeing itself or another creature within its reach and ending the restrained condition on a success. Moving 1 foot in the mud costs 2 feet of movement. On initiative count 20 on the next round, the mud hardens, and the Strength DC to work free increases to 20."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary copper dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Magic carvings of the dragon's smiling visage can be seen worked into stone terrain and objects within 6 miles of the dragon's lair.",
                    "• Tiny beasts such as rodents and birds that are normally unable to speak gain the magical ability to speak and understand Draconic while within 1 mile of the dragon's lair. These creatures speak well of the dragon, but can't divulge its whereabouts.",
                    "• Intelligent creatures within 1 mile of the dragon's lair are prone to fits of giggling. Even serious matters suddenly seem amusing.",
                    "If the dragon dies, the magic carvings fade over the course of 1d10 days. The other effects end immediately."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 110, Baldur's Gate: Descent Into Avernus",
        "environment": "hill"
    },
    {
        "name": "Ancient Gold Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "22 (natural armor)",
        "hp": "546 (28d20+252)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "30",
        "dex": "14",
        "con": "29",
        "int": "18",
        "wis": "17",
        "cha": "28",
        "save": "Dex +9, Con +16, Wis +10, Cha +16",
        "skill": "Insight +10, Perception +17, Persuasion +16, Stealth +9",
        "passive": "27",
        "languages": "Common, Draconic",
        "cr": "24",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. 21 (2d10 + 10) piercing damage.",
                "attack": "Bite|+17|2d10+10"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. 17 (2d6 + 10) slashing damage.",
                "attack": "Claw|+17|2d6+10"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. 19 (2d8 + 10) bludgeoning damage.",
                "attack": "Tail|+17|2d8+10"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Fire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.",
                    "• Weakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||13d10"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• The dragon glimpses the future, so it has advantage on attack rolls, ability checks, and saving throws until initiative count 20 on the next round.",
                    "• One creature the dragon can see within 120 feet of it must succeed on a DC 15 Charisma saving throw or be banished to a dream plane, a different plane of existence the dragon has imagined into being. To escape, the creature must use its action to make a Charisma check contested by the dragon's. If the creature wins, it escapes the dream plane. Otherwise, the effect ends on initiative count 20 on the next round. When the effect ends, the creature reappears in the space it left or in the nearest unoccupied space if that one is occupied."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary gold dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Whenever a creature that can understand a language sleeps or enters a state of trance or reverie within 6 miles of the dragon's lair, the dragon can establish telepathic contact with that creature and converse with it in its dreams. The creature remembers its conversation with the dragon upon waking.",
                    "• Banks of beautiful, opalescent mist manifest within 6 miles of the dragon's lair. The mist doesn't obscure anything. It assumes haunting forms when evil creatures are near the dragon or other non-evil creatures in the mist, warning such creatures of the danger.",
                    "• Gems and pearls within 1 mile of the dragon's lair sparkle and gleam, shedding dim light in a 5-foot radius.",
                    "If the dragon dies, these effects end immediately."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 113",
        "environment": "grassland, forest"
    },
    {
        "name": "Ancient Green Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Lawful Evil",
        "ac": "21 (natural armor)",
        "hp": "385 (22d20+154)",
        "speed": "walk 40 ft., fly 80 ft., swim 40 ft.",
        "str": "27",
        "dex": "12",
        "con": "25",
        "int": "20",
        "wis": "17",
        "cha": "19",
        "save": "Dex +8, Con +14, Wis +10, Cha +11",
        "skill": "Deception +11, Insight +10, Perception +17, Persuasion +11, Stealth +8",
        "passive": "27",
        "languages": "Common, Draconic",
        "cr": "22",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.",
                "attack": "Bite|+15|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. 22 (4d6 + 8) slashing damage.",
                "attack": "Claw|+15|4d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+15|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Poison Breath (Recharge 5-6)",
                "text": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
                "attack": "Poison Breath (Recharge 5-6)||22d6"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Grasping roots and vines erupt in a 20-foot radius centered on a point on the ground that the dragon can see within 120 feet of it. That area becomes difficult terrain, and each creature there must succeed on a DC 15 Strength saving throw or be restrained by the roots and vines. A creature can be freed if it or another creature takes an action to make a DC 15 Strength check and succeeds. The roots and vines wilt away when the dragon uses this lair action again or when the dragon dies.",
                    "• A wall of tangled brush bristling with thorns springs into existence on a solid surface within 120 feet of the dragon. The wall is up to 60 feet long, 10 feet high, and 5 feet thick, and it blocks line of sight. When the wall appears, each creature in its area must make a DC 15 Dexterity saving throw. A creature that fails the save takes 18 (4d8) piercing damage and is pushed 5 feet out of the wall's space, appearing on whichever side of the wall it wants. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature travels through the wall, it must spend 4 feet of movement. Furthermore, a creature in the wall's space must make a DC 15 Dexterity saving throw once each round it's in contact with the wall, taking 18 (4d8) piercing damage on a failed save, or half as much damage on a successful one. Each 10-foot section of wall has AC 5, 15 hit points, vulnerability to fire damage, resistance to bludgeoning and piercing damage, and immunity to psychic damage. The wall sinks back into the ground when the dragon uses this lair action again or when the dragon dies.",
                    "• Magical fog billows around one creature the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Wisdom saving throw or be charmed by the dragon until initiative count 20 on the next round."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary green dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Thickets form labyrinthine passages within 1 mile of the dragon's lair. The thickets act as 10-foot-high, 10-foot-thick walls that block line of sight. Creatures can move through the thickets, with every 1 foot a creature moves costing it 4 feet of movement. A creature in the thickets must make a DC 15 Dexterity saving throw once each round it's in contact with the 'thickets or take 3 (1d6) piercing damage from thorns.",
                    "• Each 10-foot-cube of thickets has AC 5, 30 hit points, resistance to bludgeoning and piercing damage, vulnerability to fire damage, and immunity to psychic and thunder damage.",
                    "• Within 1 mile of its lair, the dragon leaves no physical evidence of its passage unless it wishes to. Tracking it there is impossible except by magical means. In addition, it ignores movement impediments and damage from plants in this area that are neither magical nor creatures, including the thickets described above. The plants remove themselves from the dragon's path.",
                    "• Rodents and birds within 1 mile of the dragon's lair serve as the dragon's eyes and ears. Deer and other large game are strangely absent, hinting at the presence of an unnaturally hungry predator.",
                    "If the dragon dies, the rodents and birds lose their supernatural link to it. The thickets remain, but within 1d10 days, they become mundane plants and normal difficult terrain, losing their thorns."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 93, Storm King's Thunder, Essentials Kit: Dragon of Icespire Peak",
        "environment": "forest"
    },
    {
        "name": "Ancient Red Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "22 (natural armor)",
        "hp": "546 (28d20+252)",
        "speed": "walk 40 ft., climb 40 ft., fly 80 ft.",
        "str": "30",
        "dex": "10",
        "con": "29",
        "int": "18",
        "wis": "15",
        "cha": "23",
        "save": "Dex +7, Con +16, Wis +9, Cha +13",
        "skill": "Perception +16, Stealth +7",
        "passive": "26",
        "languages": "Common, Draconic",
        "cr": "24",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
                "attack": "Bite|+17|2d10+10"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. 17 (2d6 + 10) slashing damage.",
                "attack": "Claw|+17|2d6+10"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. 19 (2d8 + 10) bludgeoning damage.",
                "attack": "Tail|+17|2d8+10"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Fire Breath (Recharge 5-6)",
                "text": "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
                "attack": "Fire Breath (Recharge 5-6)||26d6"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
                    "• A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.",
                    "• Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads a round corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary red dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Small earthquakes are common within 6 miles of the dragon's lair.",
                    "• Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur.",
                    "• Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby.",
                    "If the dragon dies, these effects fade over the course of 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 97, Storm King's Thunder, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "mountain, hill"
    },
    {
        "name": "Ancient Silver Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "22 (natural armor)",
        "hp": "487 (25d20+225)",
        "speed": "walk 40 ft., fly 80 ft.",
        "str": "30",
        "dex": "10",
        "con": "29",
        "int": "18",
        "wis": "15",
        "cha": "23",
        "save": "Dex +7, Con +16, Wis +9, Cha +13",
        "skill": "Arcana +11, History +11, Perception +16, Stealth +7",
        "passive": "26",
        "languages": "Common, Draconic",
        "cr": "23",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": {
            "name": "Legendary Resistance (3/Day)",
            "text": "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. 21 (2d10 + 10) piercing damage.",
                "attack": "Bite|+17|2d10+10"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. 17 (2d6 + 10) slashing damage.",
                "attack": "Claw|+17|2d6+10"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. 19 (2d8 + 10) bludgeoning damage.",
                "attack": "Tail|+17|2d8+10"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Cold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.",
                    "• Paralyzing Breath. The dragon exhales paralyzing gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||15d8"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).",
                    "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:",
                    "• The dragon creates fog as if it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.",
                    "• A blisteringly cold wind blows through the lair near the dragon. Each creature within 120 feet of the dragon must succeed on a DC 15 Constitution saving throw or take 5 (1d10) cold damage. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50 percent chance of being extinguished."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary silver dragon's lair is warped by the dragon's magic, which creates one or more of the following effects.",
                    "• Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.",
                    "• Within 1 mile of the lair, winds buoy non-evil creatures that fall due to no act of the dragon's or its allies. Such creatures descend at a rate of 60 feet per round and take no falling damage.",
                    "• Given days or longer to work, the dragon can make clouds and fog within its lair as solid as stone, forming structures and other objects as it wishes.",
                    "If the dragon dies, changed weather reverts to normal, as described in the spell, and the other effects fade in 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 116",
        "environment": "mountain, urban"
    },
    {
        "name": "Ancient White Dragon",
        "size": "G",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "20 (natural armor)",
        "hp": "333 (18d20+144)",
        "speed": "walk 40 ft., burrow 40 ft., fly 80 ft., swim 40 ft.",
        "str": "26",
        "dex": "10",
        "con": "26",
        "int": "10",
        "wis": "13",
        "cha": "14",
        "save": "Dex +6, Con +14, Wis +7, Cha +8",
        "skill": "Perception +13, Stealth +6",
        "passive": "23",
        "languages": "Common, Draconic",
        "cr": "20",
        "resist": "",
        "immune": "cold",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Ice Walk",
                "text": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage.",
                "attack": "Bite|+14|2d10+8"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 15 (2d6 + 8) slashing damage.",
                "attack": "Claw|+14|2d6+8"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. 17 (2d8 + 8) bludgeoning damage.",
                "attack": "Tail|+14|2d8+8"
            },
            {
                "name": "Frightful Presence",
                "text": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Cold Breath (Recharge 5-6)",
                "text": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one.",
                "attack": "Cold Breath (Recharge 5-6)||16d8"
            }
        ],
        "legendary": [
            {
                "text": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Detect",
                "text": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "text": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "text": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
                    "• Freezing fog fills a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The fog spreads around corners, and its area is heavily obscured. Each creature in the fog when it appears must make a DC 10 Constitution saving throw, taking 10 (3d6) cold damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the fog takes 10 (3d6) cold damage. A wind of at least 20 miles per hour disperses the fog. The fog otherwise lasts until the dragon uses this lair action again or until the dragon dies.",
                    "• Jagged ice shards fall from the ceiling, striking up to three creatures underneath that the dragon can see within 120 feet of it. The dragon makes one ranged attack roll (+7 to hit) against each target. On a hit, the target takes 10 (3d6) piercing damage.",
                    "• The dragon creates an opaque wall of ice on a solid surface it can see within 120 feet of it. The wall can be up to 30 feet long, 30 feet high, and 1 foot thick. When the wall appears, each creature within its area is pushed 5 feet out of the wall's space; appearing on whichever side of the wall it wants. Each 10-foot section of the wall has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. The wall disappears when the dragon uses this lair action again or when the dragon dies."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "The region containing a legendary white dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:",
                    "• Chilly fog lightly obscures the land within 6 miles of the dragon's lair.",
                    "• Freezing precipitation falls within 6 miles of the dragon's lair, sometimes forming blizzard conditions when the dragon is at rest.",
                    "• Icy walls block off areas in the dragon's lair. Each wall is 6 inches thick, and a 10-foot section has AC 5, 15 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage.",
                    "• If the dragon wishes to move through a wall, it can do so without slowing down. The portion of the wall the dragon moves through is destroyed, however.",
                    "If the dragon dies, the fog and precipitation fade within 1 day. The ice walls melt over the course of 1d10 days."
                ]
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 100, Storm King's Thunder, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "arctic"
    },
    {
        "name": "Androsphinx",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Lawful Neutral",
        "ac": "17 (natural armor)",
        "hp": "199 (19d10+95)",
        "speed": "walk 40 ft., fly 60 ft.",
        "str": "22",
        "dex": "10",
        "con": "20",
        "int": "16",
        "wis": "18",
        "cha": "23",
        "save": "Dex +6, Con +11, Int +9, Wis +10",
        "skill": "Arcana +9, Perception +10, Religion +15",
        "passive": "20",
        "languages": "Common, Sphinx",
        "cr": "17",
        "resist": "",
        "immune": "psychic; bludgeoning, piercing, slashing from nonmagical attacks",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Inscrutable",
                "text": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
            },
            {
                "name": "Magic Weapons",
                "text": "The sphinx's weapon attacks are magical."
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:",
                    "Cantrips (at will): sacred flame, spare the dying, thaumaturgy",
                    "• 1st level (4 slots): command, detect evil and good, detect magic",
                    "• 2nd level (3 slots): lesser restoration, zone of truth",
                    "• 3rd level (3 slots): dispel magic, tongues",
                    "• 4th level (3 slots): banishment, freedom of movement",
                    "• 5th level (2 slots): flame strike, greater restoration",
                    "• 6th level (1 slots): heroes' feast"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The sphinx makes two claw attacks."
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. 17 (2d10 + 6) slashing damage.",
                "attack": "Claw|+12|2d10+6"
            },
            {
                "name": "Roar (3/Day)",
                "text": [
                    "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.",
                    "• First Roar: Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "• Second Roar: Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "• Third Roar: Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
                ],
                "attack": "Roar (3/Day)||8d10"
            }
        ],
        "legendary": [
            {
                "text": "The monstrosity can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The monstrosity regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Claw Attack",
                "text": "The sphinx makes one claw attack."
            },
            {
                "name": "Teleport (Costs 2 Actions)",
                "text": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                "name": "Cast a Spell (Costs 3 Actions)",
                "text": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the sphinx can take a lair action to cause one of the following magical effects; the sphinx can't use an effect again until it finishes a short or long rest:",
                    "• The flow of time is altered such that every creature in the lair must reroll initiative. The sphinx can choose not to reroll.",
                    "• The effects of time are altered such that every creature in the lair must succeed on a DC 15 Constitution saving throw or become 1d20 years older or younger (the sphinx's choice), but never any younger than 1 year old. A greater restoration spell can restore a creature's age to normal.",
                    "• The flow of time within the lair is altered such that everything within moves up to 10 years forward or backward (sphinx's choice). Only the sphinx is immediately aware of the time change. A wish spell can return the caster and up to seven other creatures designated by the caster to their normal time.",
                    "• The sphinx shifts itself and up to seven other creatures it can see within in its lair to another plane of existence. Once outside its lair, the sphinx can't use lair actions, but it can return to its lair as a bonus action on its turn, taking up to seven creatures with it."
                ]
            }
        ],
        "slots": "4, 3, 3, 3, 2, 1",
        "spells": "sacred flame, spare the dying, thaumaturgy, command, detect evil and good, detect magic, lesser restoration, zone of truth, dispel magic, tongues, banishment, freedom of movement, flame strike, greater restoration, heroes' feast",
        "description": "An androsphinx bears the head of a humanoid male on its lion's body. Outwardly gruff and downcast, it often begins conversations with insults or negative observations. Beneath this gruff exterior, however, an androsphinx has a noble heart. It has no wish to lie or deceive, but it doesn't give away information readily, choosing its words as wisely as it guards its secrets.\nAn androsphinx tests the courage and valor of supplicants, not only by forcing them to complete quests but also with its terrible roar, which echoes for miles as it terrifies and deafens nearby creatures. Those who pass its tests may be rewarded with a heroes' feast.\nSphinxes. In sacred isolation, a sphinx guards the secrets and treasures of the gods. As it calmly regards each new party that comes before it, the bones of supplicants and quest seekers that failed to pass its tests lie scattered around its lair. Its great wings sweep along its flanks, its tawny leonine body rippling with muscle and possessed of forepaws powerful enough to tear a humanoid in half. Divine Guardians. Sphinxes test the worth of those who seek the treasures of the gods, whether forgotten secrets or mighty spells, artifacts or magical gateways. Creatures that choose to face a sphinx's test are bound to that test unto death, and only those worthy will survive it. The rest the sphinx destroys.\nSome sphinxes are high priests of the gods that create them, but most are simply embodied spirits, brought into the mortal realm by devout prayer or direct intervention. A sphinx maintains its vigil tirelessly, not needing to sleep or eat. It rarely engages with others of its kind, knowing no other life except its sacred mission.\nMagical Tests. The secrets and treasures a sphinx guards remain under divine protection, so that when a creature fails a sphinx's test, the path to the object or knowledge it guards vanishes. Even if a sphinx is attacked and defeated, a quester will still fail to gain the secret it sought-and will make an enemy of the god that placed the sphinx as a guardian.\nBenign deities sometimes grant a sphinx the power to remove supplicants that fail their tests, transporting them away and ensuring that they never encounter the sphinx again. However, those who fail a sphinx's test typically meet a gruesome end beneath its claws.\nExtraplanar Beings. Mortals that encounter sphinxes do so most often in ancient tombs and ruins, but some sphinxes can access extraplanar realms. A conversation with a sphinx that begins between tumbled stone walls might suddenly shift to an alien locale, such as a life-sized game board or a daunting cliff that must be climbed in a howling storm. Sometimes a sphinx must be summoned from such an extradimensional space, with supplicants calling it from its empty lair. Only those the sphinx deems worthy gain admittance to its realm.\nFallen Sphinxes. Whether through the weariness of the ages, regret at the slaughter of innocents, or dreams of worship by supplicants that attempt to bargain their way to knowledge, some sphinxes break free of their divine command. However, even if a sphinx's alignment and loyalties drift in this way, it never leaves the place it guards or grants its secrets to any except creatures it deems worthy.\nA Sphinx's Lair. A sphinx presides over an ancient temple, sepulcher, or vault, within which are hidden divine secrets and treasures beyond the reach of mortals.\nSource: Monster Manual p. 281, Explorer's Guide to Wildemount, Mythic Odysseys of Theros",
        "environment": "desert"
    },
    {
        "name": "Animated Armor",
        "size": "M",
        "type": "construct",
        "alignment": "Unaligned",
        "ac": "18 (natural armor)",
        "hp": "33 (6d8+6)",
        "speed": "walk 25 ft.",
        "str": "14",
        "dex": "11",
        "con": "13",
        "int": "1",
        "wis": "3",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "6",
        "languages": "",
        "cr": "1",
        "resist": "",
        "immune": "poison, psychic",
        "vulnerable": "",
        "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
        "senses": "blindsight 60 ft. (blind beyond this radius)",
        "trait": [
            {
                "name": "Antimagic Susceptibility",
                "text": "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                "name": "False Appearance",
                "text": "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The armor makes two melee attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) bludgeoning damage.",
                "attack": "Slam|+4|1d6+2"
            }
        ],
        "description": "Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.\nConstructed Nature. An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.\nAnimated Armor. This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.\nTo add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.\nSource: Monster Manual p. 19, Curse of Strahd, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Ankheg",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Unaligned",
        "ac": "14 (natural armor, 11 while prone)",
        "hp": "39 (6d10+6)",
        "speed": "walk 30 ft., burrow 10 ft.",
        "str": "17",
        "dex": "11",
        "con": "13",
        "int": "1",
        "wis": "13",
        "cha": "6",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft., tremorsense 60 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
                "attack": "Bite|+5|2d6+3"
            },
            {
                "name": "Acid Spray (Recharge 6)",
                "text": "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
                "attack": "Acid Spray (Recharge 6)||3d6"
            }
        ],
        "description": "An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.\nLurkers in the Earth. The ankheg uses its powerful mandibles to dig winding tunnels deep beneath the ground. When it hunts, an ankheg burrows upward, waiting below the surface until its antennae detect movement from above. Then it bursts from the earth and seizes prey in its mandibles, crushing and grinding while it secretes acidic digestive enzymes. These enzymes help dissolve a victim for easy swallowing, but the ankheg can also squirt acid to take down foes.\nBane of Field and Forest. Although ankhegs receive a certain portion of their nutrients from the soil through which they burrow, they must supplement their diet with fresh meat. Pastures teeming with grazing livestock and forests rife with game are an ankheg's prime hunting grounds. Ankhegs are thus the bane of farmers and rangers everywhere.\nEarthen Tunnels. As it burrows through earth, the ankheg leaves a narrow, partially collapsed tunnel in its wake. In these tunnels, one might find the remnants of molted ankheg chitin, hatched ankheg eggs, or the grisly remains of ankheg victims, including coins or other treasures scattered during the creature's attack.\nSource: Monster Manual p. 21, Princes of the Apocalypse, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus",
        "environment": "grassland, forest"
    },
    {
        "name": "Ankylosaurus",
        "size": "H",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "15 (natural armor)",
        "hp": "68 (8d12+16)",
        "speed": "walk 30 ft.",
        "str": "19",
        "dex": "11",
        "con": "15",
        "int": "2",
        "wis": "12",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "3",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Tail",
            "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. 18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
            "attack": "Tail|+7|4d6+4"
        },
        "description": "Thick armor plating covers the body of the plant-eating ankylosaurus, which defends itself against predators with a knobbed tail that delivers a devastating strike. Some varieties of ankylosaurus have spiked tails that deal piercing damage instead of bludgeoning damage.\nDinosaurs. Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.\nDinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.\nSource: Monster Manual p. 79, Tomb of Annihilation",
        "environment": "grassland"
    },
    {
        "name": "Ape",
        "size": "M",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "19 (3d8+6)",
        "speed": "walk 30 ft., climb 30 ft.",
        "str": "16",
        "dex": "14",
        "con": "14",
        "int": "6",
        "wis": "12",
        "cha": "7",
        "save": "",
        "skill": "Athletics +5, Perception +3",
        "passive": "13",
        "languages": "",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": [
            {
                "name": "Multiattack",
                "text": "The ape makes two fist attacks."
            },
            {
                "name": "Fist",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) bludgeoning damage.",
                "attack": "Fist|+5|1d6+3"
            },
            {
                "name": "Rock",
                "text": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. 6 (1d6 + 3) bludgeoning damage.",
                "attack": "Rock|+5|1d6+3"
            }
        ],
        "description": "Source: Monster Manual p. 317, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh",
        "environment": "forest"
    },
    {
        "name": "Arcanaloth",
        "size": "M",
        "type": "fiend (yugoloth)",
        "alignment": "Neutral Evil",
        "ac": "17 (natural armor)",
        "hp": "104 (16d8+32)",
        "speed": "walk 30 ft., fly 30 ft.",
        "str": "17",
        "dex": "12",
        "con": "14",
        "int": "20",
        "wis": "16",
        "cha": "17",
        "save": "Dex +5, Int +9, Wis +7, Cha +7",
        "skill": "Arcana +13, Deception +11, Insight +11, Perception +7",
        "passive": "17",
        "languages": "all, telepathy 120 ft.",
        "cr": "12",
        "resist": "cold, fire, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "acid, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, poisoned",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Magic Resistance",
                "text": "The arcanaloth has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The arcanaloth's weapon attacks are magical."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The arcanaloth's innate spellcasting ability is Charisma (spell save DC 15). The arcanaloth can innately cast the following spells, requiring no material components:",
                    "At will: alter self, darkness, heat metal, invisibility (self only), magic missile"
                ]
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The arcanaloth is a 16th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The arcanaloth has the following wizard spells prepared:",
                    "Cantrips (at will): fire bolt, mage hand, minor illusion, prestidigitation",
                    "• 1st level (4 slots): detect magic, identify, shield, Tenser's floating disk",
                    "• 2nd level (3 slots): detect thoughts, mirror image, phantasmal force, suggestion",
                    "• 3rd level (3 slots): counterspell, fear, fireball",
                    "• 4th level (3 slots): banishment, dimension door",
                    "• 5th level (2 slots): contact other plane, hold monster",
                    "• 6th level (1 slots): chain lightning",
                    "• 7th level (1 slots): finger of death",
                    "• 8th level (1 slots): mind blank"
                ]
            }
        ],
        "action": [
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 8 (2d4 + 3) slashing damage. The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
                "attack": [
                    "Claws|+7|2d4+3",
                    "Claws||3d6"
                ]
            },
            {
                "name": "Teleport",
                "text": "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
            },
            {
                "name": "Variant: Yugoloth Summoning",
                "text": [
                    "Some yugoloths have an action option that allows them to summon other yugoloths.",
                    "Summon Yugoloth (1/Day). The yugoloth attempts a magical summoning.",
                    "An arcanaloth has a 40 chance of summoning one arcanaloth.",
                    "A summoned yugoloth appears in an unoccupied space within 60 feet of its summoner, does as it pleases, and can't summon other yugoloths. The summoned yugoloth remains for 1 minute, until it or its summoner dies, or until its summoner takes a bonus action to dismiss it."
                ]
            }
        ],
        "slots": "4, 3, 3, 3, 2, 1, 1, 1",
        "spells": "alter self, darkness, heat metal, invisibility, magic missile, fire bolt, mage hand, minor illusion, prestidigitation, detect magic, identify, shield, Tenser's floating disk, detect thoughts, mirror image, phantasmal force, suggestion, counterspell, fear, fireball, banishment, dimension door, contact other plane, hold monster, chain lightning, finger of death, mind blank",
        "description": "Yugoloths are fickle fiends that inhabit the planes of Acheron, Gehenna, Hades, and Carceri. They act as mercenaries and are notorious for their shifting loyalties. They are the embodiments of avarice. Before serving under anyone's banner, a yugoloth asks the only question on its mind: What's in it for me?\nSpawn of Gehenna. The first yugoloths were created by a sisterhood of night hags on Gehenna. It is widely believed that Asmodeus, Lord of the Nine Hells, commissioned the work, in the hope of creating an army of fiends that were not bound to the Nine Hells. In the course of making this new army, the hags crafted four magic tomes and recorded the true names of every yugoloth they created, save one, the General of Gehenna. These tomes were called the Books of Keeping. Since knowing a fiend's true name grants power over it, the hags used the books to ensure the yugoloths' loyalty. They also used the books to capture the true names of other fiends that crossed them. It is rumored that the Books of Keeping contain the true names of a few demon lords and archdevils as well.\nPetty jealousies and endless bickering caused the sisterhood to dissolve, and in the ensuing power grab, the Books of Keeping were lost or stolen. No longer indentured to anyone, the yugoloths gained independence, and they now offer their services to the highest bidder.\nFiendish Mercenaries. Summoned yugoloths demand much for their time and loyalty. Whatever promises a yugoloth makes are quickly broken when a better opportunity presents itself. Unlike demons, yugoloths can be reasoned with, but unlike devils, they are rarely true to their word.\nYugoloths can be found anywhere, but the high cost of maintaining a yugoloth army's loyalty typically exceeds what any warlord on the Material Plane can pay. Being self-serving creatures, yugoloths quarrel among themselves constantly. A yugoloth army is more organized than a ravening horde of demons, but far less orderly and regimented than a legion of devils. Without a powerful leader to keep them in line, yugoloths fight simply to indulge their violent predilections, and only as long as it benefits them to do so.\nBack to Gehenna. When a yugoloth dies, it dissolves into a pool of ichor and reforms at full strength on the Bleak Eternity of Gehenna. Only on its native plane can a yugoloth be destroyed permanently. A yugoloth knows this and acts accordingly. When summoned to other planes, a yugoloth fights without concern for its own well-being. On Gehenna, it is more apt to retreat or plead for mercy if its demise seems imminent.\nWhen a yugoloth is permanently destroyed, its name vanishes from every Book of Keeping. If a yugoloth is re-created by way of an unholy ritual requiring the expenditure of souls, its name reappears in the books.\nThe Books of Keeping. When all four copies of the Books of Keeping disappeared, Asmodeus and the night hags lost control of their yugoloth creations. Each Book of Keeping still exists, drifting from plane to plane, where the brave and the foolish occasionally stumble upon them. A yugoloth summoned using its true name, as inscribed in the Books of Keeping, is forced to serve its summoner obediently. The yugoloth hates being controlled in this manner and isn't shy about making its displeasure known. Like a petulant child, it will follow its instructions to the letter while looking for opportunities to misinterpret them.\nThe General of Gehenna. Somewhere in the brimstone wastes of Gehenna, there roams an ultroloth so strong that none contests his power: the General of Gehenna. Many yugoloths search for this great general in the hope of serving with him. They believe that service with the General of Gehenna grants power and prestige among lower planar entities.\nWhatever the case, no fiend finds the General unless the General desires it. His personal name is unknown, and even the Books of Keeping contain no mention of this powerful, thoroughly evil entity.\nSource: Monster Manual p. 313, Curse of Strahd, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Archmage",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any alignment",
        "ac": "12 (15 with mage armor)",
        "hp": "99 (18d8+18)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "14",
        "con": "12",
        "int": "20",
        "wis": "15",
        "cha": "16",
        "save": "Int +9, Wis +6",
        "skill": "Arcana +13, History +13",
        "passive": "12",
        "languages": "any six languages",
        "cr": "12",
        "resist": "damage from spells; nonmagical bludgeoning, piercing, slashing (from stoneskin)",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Magic Resistance",
                "text": "The archmage has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:",
                    "At will: disguise self, invisibility",
                    "Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp",
                    "• 1st level (4 slots): detect magic, identify, mage armor*, magic missile",
                    "• 2nd level (3 slots): detect thoughts, mirror image, misty step",
                    "• 3rd level (3 slots): counterspell, fly, lightning bolt",
                    "• 4th level (3 slots): banishment, fire shield, stoneskin*",
                    "• 5th level (3 slots): cone of cold, scrying, wall of force",
                    "• 6th level (1 slots): globe of invulnerability",
                    "• 7th level (1 slots): teleport",
                    "• 8th level (1 slots): mind blank*",
                    "• 9th level (1 slots): time stop",
                    "*The archmage casts these spells on itself before combat."
                ]
            }
        ],
        "action": [
            {
                "name": "Dagger",
                "text": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage.",
                "attack": "Dagger|+6|1d4+2"
            },
            {
                "name": "Variant: Familiars",
                "text": "Any spellcaster that can cast the find familiar spell (such as an archmage or mage) is likely to have a familiar. The familiar can be one of the creatures described in the spell (see the Player's Handbook) or some other Tiny monster, such as a crawling claw, imp, pseudodragon, or quasit."
            }
        ],
        "slots": "4, 3, 3, 3, 3, 1, 1, 1, 1",
        "spells": "disguise self, invisibility, fire bolt, light, mage hand, prestidigitation, shocking grasp, detect magic, identify, mage armor, magic missile, detect thoughts, mirror image, misty step, counterspell, fly, lightning bolt, banishment, fire shield, stoneskin, cone of cold, scrying, wall of force, globe of invulnerability, teleport, mind blank, time stop",
        "description": "Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption.\nAn archmage typically has one or more apprentice mages, and an archmage's abode has numerous magical wards and guardians to discourage interlopers.\nSource: Monster Manual p. 342, Curse of Strahd, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Assassin",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any Non-Good Alignment",
        "ac": "15 (studded leather armor)",
        "hp": "78 (12d8+24)",
        "speed": "walk 30 ft.",
        "str": "11",
        "dex": "16",
        "con": "14",
        "int": "13",
        "wis": "11",
        "cha": "10",
        "save": "Dex +6, Int +4",
        "skill": "Acrobatics +6, Deception +3, Perception +3, Stealth +9",
        "passive": "13",
        "languages": "Thieves' cant plus any two languages",
        "cr": "8",
        "resist": "poison",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Assassinate",
                "text": "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
            },
            {
                "name": "Evasion",
                "text": "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                "name": "Sneak Attack (1/Turn)",
                "text": "The assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The assassin makes two shortsword attacks."
            },
            {
                "name": "Shortsword",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
                "attack": [
                    "Shortsword|+6|1d6+3",
                    "Shortsword||7d6"
                ]
            },
            {
                "name": "Light Crossbow",
                "text": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
                "attack": [
                    "Light Crossbow|+6|1d8+3",
                    "Light Crossbow||7d6"
                ]
            }
        ],
        "description": "Trained in the use of poison, assassins are remorseless killers who work for nobles, guildmasters, sovereigns, and anyone else who can afford them.\nSource: Monster Manual p. 343, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Awakened Shrub",
        "size": "S",
        "type": "plant",
        "alignment": "Unaligned",
        "ac": "9",
        "hp": "10 (3d6)",
        "speed": "walk 20 ft.",
        "str": "3",
        "dex": "8",
        "con": "11",
        "int": "10",
        "wis": "10",
        "cha": "6",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "one language known by its creator",
        "cr": "0",
        "resist": "piercing",
        "immune": "",
        "vulnerable": "fire",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "False Appearance",
            "text": "While the shrub remains motionless, it is indistinguishable from a normal shrub."
        },
        "action": {
            "name": "Rake",
            "text": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. 1 (1d4 - 1) slashing damage.",
            "attack": "Rake|+1|1d4-1"
        },
        "description": "An awakened shrub is an ordinary shrub given sentience and mobility by the awaken spell or similar magic.\nSource: Monster Manual p. 317, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": "forest"
    },
    {
        "name": "Awakened Tree",
        "size": "H",
        "type": "plant",
        "alignment": "Unaligned",
        "ac": "13 (natural armor)",
        "hp": "59 (7d12+14)",
        "speed": "walk 20 ft.",
        "str": "19",
        "dex": "6",
        "con": "15",
        "int": "10",
        "wis": "10",
        "cha": "7",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "one language known by its creator",
        "cr": "2",
        "resist": "bludgeoning, piercing",
        "immune": "",
        "vulnerable": "fire",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "False Appearance",
            "text": "While the tree remains motionless, it is indistinguishable from a normal tree."
        },
        "action": {
            "name": "Slam",
            "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. 14 (3d6 + 4) bludgeoning damage.",
            "attack": "Slam|+6|3d6+4"
        },
        "description": "An awakened tree is an ordinary tree given sentience and mobility by the awaken spell or similar magic.\nSource: Monster Manual p. 317, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": "forest"
    },
    {
        "name": "Axe Beak",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "11",
        "hp": "19 (3d10+3)",
        "speed": "walk 50 ft.",
        "str": "14",
        "dex": "12",
        "con": "12",
        "int": "2",
        "wis": "10",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Beak",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) slashing damage.",
            "attack": "Beak|+4|1d8+2"
        },
        "description": "An axe beak is a tall flightless bird with strong legs and a heavy, wedge-shaped beak. It has a nasty disposition and tends to attack any unfamiliar creature that wanders too close.\nSource: Monster Manual p. 317, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden",
        "environment": "grassland, hill"
    },
    {
        "name": "Azer",
        "size": "M",
        "type": "elemental",
        "alignment": "Lawful Neutral",
        "ac": "17 (natural armor, shield)",
        "hp": "39 (6d8+12)",
        "speed": "walk 30 ft.",
        "str": "17",
        "dex": "12",
        "con": "15",
        "int": "12",
        "wis": "13",
        "cha": "10",
        "save": "Con +4",
        "skill": "",
        "passive": "11",
        "languages": "Ignan",
        "cr": "2",
        "resist": "",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "",
        "trait": [
            {
                "name": "Heated Body",
                "text": "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage."
            },
            {
                "name": "Heated Weapons",
                "text": "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
            },
            {
                "name": "Illumination",
                "text": "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
            }
        ],
        "action": {
            "name": "Warhammer",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
            "attack": "Warhammer|+5|1d8+3"
        },
        "description": "Natives of the Elemental Plane of Fire, azers are master crafters, expert miners, and sworn foes of the efreet. In appearance and manner, an azer resembles a male dwarf, but this is a facade. Beneath its metallic looking skin, an azer is a being of fire, which outwardly manifests in its fiery hair and beard.\nMade, Not Born. Azers don't reproduce. They are each crafted from bronze by another azer and imbued with a portion of the crafter's inner flame. Each azer is sculpted with unique features. This crafting process limits the growth of the azer population and is the primary reason that these creatures remain rare.\nVolcanic Dwellers. Azers dwell in a kingdom on the border between the Elemental Plane of Earth and the Elemental Plane of Fire-a range of mountains and volcanoes whose spires rise as a series of fortresses. Beneath mountain peaks, under volcanic calderas, and amid rivers of magma, azers extract gleaming metals and glittering gems from the earth. Squads of azer patrol the passes and tunnels of their realm, fending off the salamander raiders whose efreet masters order strikes against the azer kingdom.\nEnemies of the Efreet. Long ago, the efreet and the azers were allies. Azers helped create the City of Brass, forging that home of the efreet into one of the most wondrous places in creation. When the azers had finished their work, the efreet betrayed them, making a failed attempt to enslave the azers so as to protect the secrets of the city. Despite occasional raids and skirmishes, however, the two sides have so far refrained from all-out conflict. The azers believe that only the threat of them revealing the hidden ways into the City of Brass keeps the efreet in check.\nMasters of Metal and Gems. Azers are masterful artisans, and create beautiful works from the gems and precious metals found in their volcanic habitat. They rate the value of such treasures above all other things, sometimes dispatching parties across the planes to seek out rare metals and gemstones.\nWhen azers are called by magic to the Material Plane, it is typically to help forge an elaborate magic item or work of art, for it is said that their skill in such craft knows no equal.\nLiving Fire. An azer doesn't require food, drink, or sleep.\nSource: Monster Manual p. 22, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage",
        "environment": ""
    },
    {
        "name": "Baboon",
        "size": "S",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "3 (1d6)",
        "speed": "walk 30 ft., climb 30 ft.",
        "str": "8",
        "dex": "14",
        "con": "11",
        "int": "4",
        "wis": "12",
        "cha": "6",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Pack Tactics",
            "text": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. 1 (1d4 - 1) piercing damage.",
            "attack": "Bite|+1|1d4-1"
        },
        "description": "Source: Monster Manual p. 318, Tales from the Yawning Portal, Tomb of Annihilation",
        "environment": "forest, hill"
    },
    {
        "name": "Badger",
        "size": "T",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "10",
        "hp": "3 (1d4+1)",
        "speed": "walk 20 ft., burrow 5 ft.",
        "str": "4",
        "dex": "11",
        "con": "12",
        "int": "2",
        "wis": "12",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 30 ft.",
        "trait": {
            "name": "Keen Smell",
            "text": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 1 piercing damage."
        },
        "description": "Source: Monster Manual p. 318",
        "environment": "forest"
    },
    {
        "name": "Balor",
        "size": "H",
        "type": "fiend (demon)",
        "alignment": "Chaotic Evil",
        "ac": "19 (natural armor)",
        "hp": "262 (21d12+126)",
        "speed": "walk 40 ft., fly 80 ft.",
        "str": "26",
        "dex": "15",
        "con": "22",
        "int": "20",
        "wis": "16",
        "cha": "22",
        "save": "Str +14, Con +12, Wis +9, Cha +12",
        "skill": "",
        "passive": "13",
        "languages": "Abyssal, telepathy 120 ft.",
        "cr": "19",
        "resist": "cold, lightning; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Death Throes",
                "text": "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons."
            },
            {
                "name": "Fire Aura",
                "text": "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
            },
            {
                "name": "Magic Resistance",
                "text": "The balor has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The balor's weapon attacks are magical."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The balor makes two attacks: one with its longsword and one with its whip."
            },
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
                "attack": "Longsword|+14|3d8+8"
            },
            {
                "name": "Whip",
                "text": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",
                "attack": "Whip|+14|2d6+8"
            },
            {
                "name": "Teleport",
                "text": "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                "name": "Variant: Summon Demon (1/Day)",
                "text": [
                    "The demon chooses what to summon and attempts a magical summoning.",
                    "A balor has a 50 chance of summoning 1d8 vrock, 1d6 hezrou, 1d4 glabrezu, 1d3 nalfeshnee, 1d2 marilith, or one goristro.",
                    "A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
                ]
            }
        ],
        "description": "Spawn of Chaos. The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.\nCapricious Elevation. Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.\nA demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.\nBy expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.\nAbyssal Invasions. Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.\nSome of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.\nSigns of Corruption. Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.\nEternal Evil. Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.\nThe only way to truly destroy a demon is to seek it in the Abyss and kill it there.\nProtected Essence. A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.\nObtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.\nDemonic Cults. Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.\nDemon Summoning. Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.\nThose who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.\nBound Demons. The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.\nAn object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.\nDemonic Possession. No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.\nAs long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.\nDemon Lords\nThe chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.\nReward for Outsiders. Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.\nPower and Control. The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.\nAs with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.\nBaphomet. The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.\nThe Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.\nDemogorgon. The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.\nDemogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.\nGraz'zt. The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.\nGraz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.\nJuiblex. The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.\nIn its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.\nLolth. The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.\nLolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.\nOrcus. Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.\nThe Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.\nOrcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.\nYeenoghu. Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.\nYeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.\nOther Demon Lords. No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.\nDemon Types. Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.\nDemons by Type\nType | Examples\n1 | barlgura, shadow demon, vrock\n2 | chasme, hezrou\n3 | glabrezu, yochlol\n4 | nalfeshnee\n5 | marilith\n6 | balor, goristro\nDemon True Names.\n------\nThough demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.\nA mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.\n------\nVariant: Demon Summoning.\n------\nSome demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.\n• A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\n• A barlgura has a 30 percent chance of summoning one barlgura.\n• A chasme has a 30 percent chance of summoning one chasme.\n• A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\n• A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\n• A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\n• A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\n• A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\n• A yochlol has a 50 percent chance of summoning one yochlol.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.\n------\nSource: Monster Manual p. 55, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Bandit",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any Non-Lawful Alignment",
        "ac": "12 (leather armor)",
        "hp": "11 (2d8+2)",
        "speed": "walk 30 ft.",
        "str": "11",
        "dex": "12",
        "con": "12",
        "int": "10",
        "wis": "10",
        "cha": "10",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "any one language (usually Common)",
        "cr": "1/8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": [
            {
                "name": "Scimitar",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 4 (1d6 + 1) slashing damage.",
                "attack": "Scimitar|+3|1d6+1"
            },
            {
                "name": "Light Crossbow",
                "text": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. 5 (1d8 + 1) piercing damage.",
                "attack": "Light Crossbow|+3|1d8+1"
            }
        ],
        "description": "Bandits rove in gangs and are sometimes led by thugs, veterans, or spellcasters. Not all bandits are evil. Oppression, drought, disease, or famine can often drive otherwise honest folk to a life of banditry.\nPirates are bandits of the high seas. They might be freebooters interested only in treasure and murder, or they might be privateers sanctioned by the crown to attack and plunder an enemy nation's vessels.\nSource: Monster Manual p. 343, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Bandit Captain",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any Non-Lawful Alignment",
        "ac": "15 (studded leather armor)",
        "hp": "65 (10d8+20)",
        "speed": "walk 30 ft.",
        "str": "15",
        "dex": "16",
        "con": "14",
        "int": "14",
        "wis": "11",
        "cha": "14",
        "save": "Str +4, Dex +5, Wis +2",
        "skill": "Athletics +4, Deception +4",
        "passive": "10",
        "languages": "any two languages",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": [
            {
                "name": "Multiattack",
                "text": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
            },
            {
                "name": "Scimitar",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) slashing damage.",
                "attack": "Scimitar|+5|1d6+3"
            },
            {
                "name": "Dagger",
                "text": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. 5 (1d4 + 3) piercing damage.",
                "attack": "Dagger|+5|1d4+3"
            }
        ],
        "reaction": {
            "name": "Parry",
            "text": "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
        },
        "description": "It takes a strong personality, ruthless cunning, and a silver tongue to keep a gang of bandits in line. The bandit captain has these qualities in spades.\nIn addition to managing a crew of selfish malcontents, the pirate captain is a variation of the bandit captain, with a ship to protect and command. To keep the crew in line, the captain must mete out rewards and punishment on a regular basis.\nMore than treasure, a bandit captain or pirate captain craves infamy. A prisoner who appeals to the captain's vanity or ego is more likely to be treated fairly than a prisoner who does not or claims not to know anything of the captain's colorful reputation.\nSource: Monster Manual p. 344, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Banshee",
        "size": "M",
        "type": "undead",
        "alignment": "Chaotic Evil",
        "ac": "12",
        "hp": "58 (13d8)",
        "speed": "walk 0 ft., fly 40 ft.",
        "str": "1",
        "dex": "14",
        "con": "10",
        "int": "12",
        "wis": "11",
        "cha": "17",
        "save": "Wis +2, Cha +5",
        "skill": "",
        "passive": "10",
        "languages": "Common, Elvish",
        "cr": "4",
        "resist": "acid, fire, lightning, thunder; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "cold, necrotic, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Detect Life",
                "text": "The banshee can magically sense the presence of living creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations."
            },
            {
                "name": "Incorporeal Movement",
                "text": "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
            }
        ],
        "action": [
            {
                "name": "Corrupting Touch",
                "text": "Melee Spell Attack: +4 to hit, reach 5 ft., one target. 12 (3d6 + 2) necrotic damage.",
                "attack": "Corrupting Touch|+4|3d6+2"
            },
            {
                "name": "Horrifying Visage",
                "text": "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours."
            },
            {
                "name": "Wail (1/Day)",
                "text": "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage.",
                "attack": "Wail (1/Day)||3d6"
            }
        ],
        "description": "When night falls, unlucky travelers hear the faint cries of the forlorn dead. This woeful spirit is a banshee, a spiteful creature formed from the spirit of a female elf. Banshees appear as luminous, wispy forms that vaguely recall their mortal features. A banshee's face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.\nDivine Wrath. Banshees are the undead remnants of elves who, blessed with great beauty, failed to use their gift to bring joy to the world. Instead, they used their beauty to corrupt and control others. Elves afflicted by the banshee's curse experience no gladness, feeling only distress in the presence of the living. As the curse takes its toll, their minds and bodies decay, until death completes their transformation into undead monsters.\nSorrow Bound. A banshee becomes forever bound to the place of its demise, unable to venture more than five miles from there. It is forced to relive every moment of its life with perfect recall, yet always refuses to accept responsibility for its doom.\nBeauty Hoarders. The vanity that inspired the banshee's cursed creation persists in undeath. These creatures covet beautiful objects: fine jewelery, paintings, statues, and other objects of art. At the same time, a banshee abhors any mirrored surface, for it can't bear to see the horror of its own existence. A single glimpse of itself is enough to send a banshee into a rage.\nUndead Nature. A banshee doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 23, Curse of Strahd, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "forest, coastal"
    },
    {
        "name": "Barbed Devil",
        "size": "M",
        "type": "fiend (devil)",
        "alignment": "Lawful Evil",
        "ac": "15 (natural armor)",
        "hp": "110 (13d8+52)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "17",
        "con": "18",
        "int": "12",
        "wis": "14",
        "cha": "14",
        "save": "Str +6, Con +7, Wis +5, Cha +5",
        "skill": "Deception +5, Insight +5, Perception +8",
        "passive": "18",
        "languages": "Infernal, telepathy 120 ft.",
        "cr": "5",
        "resist": "cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Barbed Hide",
                "text": "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it."
            },
            {
                "name": "Devil's Sight",
                "text": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "text": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 6 (1d6 + 3) piercing damage.",
                "attack": "Claw|+6|1d6+3"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 10 (2d6 + 3) piercing damage.",
                "attack": "Tail|+6|2d6+3"
            },
            {
                "name": "Hurl Flame",
                "text": "Ranged Spell Attack: +5 to hit, range 150 ft., one target. 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
                "attack": "Hurl Flame|+5|3d6"
            }
        ],
        "description": "Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.\nLords of Tyranny. Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.\nDevils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.\nObedience and Ambition. In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.\nAt the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.\nDark Dealers and Soul Mongers. Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.\nTo own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.\nThe Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.\nA supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.\nIf it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.\nArchdevils. The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.\nGreater Devils. The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.\nLesser Devils. The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.\nLemures. The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.\nPromotion and Demotion. When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.\nLow-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.\nDemotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.\nNo devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.\nInfernal Hierarchy\nRank | Devil(s)\n1. | lemure\n2. (Lesser devils) | imp\n3. | spined devil\n4. | bearded devil\n5. | barbed devil\n6. | chain devil\n7. | bone devil\n8. (Greater devils) | horned devil\n9. | erinyes\n10. | ice devil\n11. | pit fiend\n12. (Archdevils) | duke or duchess\n13. | archduke or archduchess\nThe Nine Hells\nThe Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.\nLayers and Lords of the Nine Hells Layer\nLayer | Layer Name | Archduke or Archduchess | Previous Rulers | Primary Inhabitants\n1 | Avernus | Zariel | Bel, Tiamat | Erinyes, imps, spined devils\n2 | Dis | Dispater | — | Bearded devils, erinyes, imps, spined devils\n3 | Minauros | Mammon | — | Bearded devils, chain devils, imps, spined devils\n4 | Phlegethos | Belial and Fierna | — | Barbed devils, bone devils, imps, spined devils\n5 | Stygia | Levistus | Geryon | Bone devils, erinyes, ice devils, imps\n6 | Malbolge | Glasya | Malagard, Moloch | Barbed devils, bone devils, horned devils, imps\n7 | Maladomini | Baalzebul | — | Barbed devils, bone devils, horned devils, imps\n8 | Cania | Mephistopheles | — | Horned devils, ice devils, imps, pit fiends\n9 | Nessus | Asmodeus | — | All devils\nDevil True Names and Talismans.\n------\nThough devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of certain devils.\nA mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.\nHowever it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.\n------\nSummon Devil (1/Day)\nThe devil chooses what to summon and attempts a magical summoning.\nSource: Monster Manual p. 70, Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Barlgura",
        "size": "L",
        "type": "fiend (demon)",
        "alignment": "Chaotic Evil",
        "ac": "15 (natural armor)",
        "hp": "68 (8d10+24)",
        "speed": "walk 40 ft., climb 40 ft.",
        "str": "18",
        "dex": "15",
        "con": "16",
        "int": "7",
        "wis": "14",
        "cha": "9",
        "save": "Dex +5, Con +6",
        "skill": "Perception +5, Stealth +5",
        "passive": "15",
        "languages": "Abyssal, telepathy 120 ft.",
        "cr": "5",
        "resist": "cold, fire, lightning",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "blindsight 30 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Reckless",
                "text": "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
            },
            {
                "name": "Running Leap",
                "text": "The barlgura's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The barlgura's spellcasting ability is Wisdom (spell save DC 13). The barlgura can innately cast the following spells, requiring no material components:",
                    "1/day each: entangle, phantasmal force",
                    "2/day each: disguise self, invisibility (self only)"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The barlgura makes three attacks: one with its bite and two with its fists."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) piercing damage.",
                "attack": "Bite|+7|2d6+4"
            },
            {
                "name": "Fist",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 9 (1d10 + 4) bludgeoning damage.",
                "attack": "Fist|+7|1d10+4"
            },
            {
                "name": "Variant: Summon Demon (1/Day)",
                "text": [
                    "The demon chooses what to summon and attempts a magical summoning.",
                    "A barlgura has a 30 chance of summoning one barlgura.",
                    "A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
                ]
            }
        ],
        "spells": "entangle, phantasmal force, disguise self, invisibility",
        "description": "Spawn of Chaos. The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.\nCapricious Elevation. Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.\nA demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.\nBy expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.\nAbyssal Invasions. Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.\nSome of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.\nSigns of Corruption. Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.\nEternal Evil. Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.\nThe only way to truly destroy a demon is to seek it in the Abyss and kill it there.\nProtected Essence. A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.\nObtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.\nDemonic Cults. Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.\nDemon Summoning. Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.\nThose who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.\nBound Demons. The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.\nAn object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.\nDemonic Possession. No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.\nAs long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.\nDemon Lords\nThe chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.\nReward for Outsiders. Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.\nPower and Control. The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.\nAs with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.\nBaphomet. The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.\nThe Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.\nDemogorgon. The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.\nDemogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.\nGraz'zt. The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.\nGraz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.\nJuiblex. The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.\nIn its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.\nLolth. The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.\nLolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.\nOrcus. Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.\nThe Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.\nOrcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.\nYeenoghu. Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.\nYeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.\nOther Demon Lords. No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.\nDemon Types. Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.\nDemons by Type\nType | Examples\n1 | barlgura, shadow demon, vrock\n2 | chasme, hezrou\n3 | glabrezu, yochlol\n4 | nalfeshnee\n5 | marilith\n6 | balor, goristro\nDemon True Names.\n------\nThough demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.\nA mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.\n------\nVariant: Demon Summoning.\n------\nSome demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.\n• A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\n• A barlgura has a 30 percent chance of summoning one barlgura.\n• A chasme has a 30 percent chance of summoning one chasme.\n• A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\n• A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\n• A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\n• A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\n• A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\n• A yochlol has a 50 percent chance of summoning one yochlol.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.\n------\nSource: Monster Manual p. 56, Princes of the Apocalypse, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild",
        "environment": ""
    },
    {
        "name": "Basilisk",
        "size": "M",
        "type": "monstrosity",
        "alignment": "Unaligned",
        "ac": "15 (natural armor)",
        "hp": "52 (8d8+16)",
        "speed": "walk 20 ft.",
        "str": "16",
        "dex": "8",
        "con": "15",
        "int": "2",
        "wis": "8",
        "cha": "7",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "",
        "cr": "3",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Petrifying Gaze",
            "text": [
                "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.",
                "A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.",
                "If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
            ]
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
            "attack": "Bite|+5|2d6+3"
        },
        "description": "Travelers sometimes find objects that look like pieces of remarkably lifelike stone carvings of wildlife. Missing parts appear to have been bitten off. Seasoned explorers regard such relics as warnings, knowing that the basilisk that created them is likely to be nearby.\nAdaptable Predators. Basilisks thrive in arid, temperate, or tropical climates. They lair in caves or other sheltered sites. Most often, basilisks are encountered underground.\nA basilisk born and raised in captivity can be domesticated and trained. Such a trained basilisk knows how to avoid meeting the eyes of those its master wishes to protect from its gaze, but it makes a daunting guardian beast. Because of this use, basilisk eggs are highly prized.\nGaze of Stone. Basilisks are ponderous for hunting creatures, but they needn't chase prey. Meeting a basilisk's supernatural gaze can be enough to affect a rapid transformation, transforming a victim into porous stone. Basilisks, with their strong jaws, are able to consume the stone. The stone returns to organic form in the basilisk's gullet.\nSome alchemists are said to know how to process the basilisk's gullet and the fluids contained within. Properly handled, the gullet produces an oil that can return petrified creatures to flesh and life. Unfortunately for such a victim, any parts lost in stone form remain absent if the creature revives. Revivification using the oil is impossible if a vital part of the petrified creature, such as its head, is detached.\nSource: Monster Manual p. 24, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": "mountain"
    },
    {
        "name": "Bat",
        "size": "T",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "1 (1d4-1)",
        "speed": "walk 5 ft., fly 30 ft.",
        "str": "2",
        "dex": "15",
        "con": "8",
        "int": "2",
        "wis": "12",
        "cha": "4",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft.",
        "trait": [
            {
                "name": "Echolocation",
                "text": "The bat can't use its blindsight while deafened."
            },
            {
                "name": "Keen Hearing",
                "text": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
            }
        ],
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. 1 piercing damage."
        },
        "description": "Source: Monster Manual p. 318, Curse of Strahd, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Bearded Devil",
        "size": "M",
        "type": "fiend (devil)",
        "alignment": "Lawful Evil",
        "ac": "13 (natural armor)",
        "hp": "52 (8d8+16)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "15",
        "con": "15",
        "int": "9",
        "wis": "11",
        "cha": "11",
        "save": "Str +5, Con +4, Wis +2",
        "skill": "",
        "passive": "10",
        "languages": "Infernal, telepathy 120 ft.",
        "cr": "3",
        "resist": "cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Devil's Sight",
                "text": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "text": "The devil has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Steadfast",
                "text": "The devil can't be frightened while it can see an allied creature within 30 feet of it."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The devil makes two attacks: one with its beard and one with its glaive."
            },
            {
                "name": "Beard",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                "attack": "Beard|+5|1d8+2"
            },
            {
                "name": "Glaive",
                "text": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
                "attack": [
                    "Glaive|+5|1d10+3",
                    "Glaive||1d10"
                ]
            }
        ],
        "description": "Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.\nLords of Tyranny. Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.\nDevils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.\nObedience and Ambition. In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.\nAt the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.\nDark Dealers and Soul Mongers. Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.\nTo own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.\nThe Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.\nA supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.\nIf it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.\nArchdevils. The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.\nGreater Devils. The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.\nLesser Devils. The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.\nLemures. The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.\nPromotion and Demotion. When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.\nLow-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.\nDemotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.\nNo devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.\nInfernal Hierarchy\nRank | Devil(s)\n1. | lemure\n2. (Lesser devils) | imp\n3. | spined devil\n4. | bearded devil\n5. | barbed devil\n6. | chain devil\n7. | bone devil\n8. (Greater devils) | horned devil\n9. | erinyes\n10. | ice devil\n11. | pit fiend\n12. (Archdevils) | duke or duchess\n13. | archduke or archduchess\nThe Nine Hells\nThe Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.\nLayers and Lords of the Nine Hells Layer\nLayer | Layer Name | Archduke or Archduchess | Previous Rulers | Primary Inhabitants\n1 | Avernus | Zariel | Bel, Tiamat | Erinyes, imps, spined devils\n2 | Dis | Dispater | — | Bearded devils, erinyes, imps, spined devils\n3 | Minauros | Mammon | — | Bearded devils, chain devils, imps, spined devils\n4 | Phlegethos | Belial and Fierna | — | Barbed devils, bone devils, imps, spined devils\n5 | Stygia | Levistus | Geryon | Bone devils, erinyes, ice devils, imps\n6 | Malbolge | Glasya | Malagard, Moloch | Barbed devils, bone devils, horned devils, imps\n7 | Maladomini | Baalzebul | — | Barbed devils, bone devils, horned devils, imps\n8 | Cania | Mephistopheles | — | Horned devils, ice devils, imps, pit fiends\n9 | Nessus | Asmodeus | — | All devils\nDevil True Names and Talismans.\n------\nThough devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of certain devils.\nA mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.\nHowever it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.\n------\nSummon Devil (1/Day)\nThe devil chooses what to summon and attempts a magical summoning.\nSource: Monster Manual p. 70, Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dragon Heist, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Behir",
        "size": "H",
        "type": "monstrosity",
        "alignment": "Neutral Evil",
        "ac": "17 (natural armor)",
        "hp": "168 (16d12+64)",
        "speed": "walk 50 ft., climb 40 ft.",
        "str": "23",
        "dex": "16",
        "con": "18",
        "int": "7",
        "wis": "14",
        "cha": "12",
        "save": "",
        "skill": "Perception +6, Stealth +7",
        "passive": "16",
        "languages": "Draconic",
        "cr": "11",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 90 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The behir makes two attacks: one with its bite and one to constrict."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. 22 (3d10 + 6) piercing damage.",
                "attack": "Bite|+10|3d10+6"
            },
            {
                "name": "Constrict",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
                "attack": "Constrict|+10|2d10+6"
            },
            {
                "name": "Lightning Breath (Recharge 5-6)",
                "text": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
                "attack": "Lightning Breath (Recharge 5-6)||12d10"
            },
            {
                "name": "Swallow",
                "text": [
                    "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.",
                    "If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone."
                ]
            }
        ],
        "description": "The serpentine behir crawls along floors and clambers up walls to reach its prey. Its lightning breath can incinerate most creatures, even as more powerful foes are constricted in its coils and eaten alive.\nA behir's monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.\nCavern Predators. Behirs lair in places inaccessible to other creatures, favoring locations where would-be intruders must make a harrowing climb to reach them. Deep pits, high caves in cliff walls, and caverns reached only by narrow, twisting tunnels are prime sites for a behir ambush. A behir's dozen legs allow it to scramble through its lair site with ease. When not climbing, it moves even faster by folding its legs beside its body and slithering like a snake.\nBehirs swallow their prey whole, after which they enter a period of dormancy while they digest. While dormant, a behir chooses a hiding place where intruders in its lair might overlook it.\nFoes of the Dragons. In times long forgotten, giants and dragons engaged in seemingly endless war. Storm giants created the first behirs as weapons against the dragons, and behirs retain a natural hatred for dragonkind.\nA behir never makes its lair in an area it knows to be inhabited by a dragon. If a dragon attempts to establish a lair within a few dozen miles of a behir's lair, the behir is compelled to kill the dragon or drive it off. Only if the dragon proves too powerful to fight does a behir back down, seeking out a new lair site a great distance away.\nSource: Monster Manual p. 25, Tales from the Yawning Portal, Explorer's Guide to Wildemount",
        "environment": "underdark"
    },
    {
        "name": "Beholder",
        "size": "L",
        "type": "aberration",
        "alignment": "Lawful Evil",
        "ac": "18 (natural armor)",
        "hp": "180 (19d10+76)",
        "speed": "walk 0 ft., fly 20 ft.",
        "str": "10",
        "dex": "14",
        "con": "18",
        "int": "17",
        "wis": "15",
        "cha": "17",
        "save": "Int +8, Wis +7, Cha +8",
        "skill": "Perception +12",
        "passive": "22",
        "languages": "Deep Speech, Undercommon",
        "cr": "13",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "prone",
        "senses": "darkvision 120 ft.",
        "trait": {
            "name": "Antimagic Cone",
            "text": "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays."
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 14 (4d6) piercing damage.",
                "attack": "Bite|+5|4d6"
            },
            {
                "name": "Eye Rays",
                "text": [
                    "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:",
                    "1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.",
                    "2. Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "3. Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "4. Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "5. Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.",
                    "6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 feet in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.",
                    "If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 feet in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.",
                    "7. Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.",
                    "8. Petrification Ray. The targeted creature must make a DC 16 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.",
                    "9. Disintegration Ray. If the target is a creature, it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.",
                    "If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.",
                    "10. Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points."
                ],
                "attack": [
                    "Eye Rays||8d8",
                    "Eye Rays||10d8",
                    "Eye Rays||10d10"
                ]
            }
        ],
        "legendary": [
            {
                "text": "The beholder can take 3 legendary actions, using the Eye Ray option below. It can take only one legendary action at a time and only at the end of another creature's turn. The beholder regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Eye Ray",
                "text": "The beholder uses one random eye ray."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "When fighting inside its lair, a beholder can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), the beholder can take one lair action to cause one of the following effects:",
                    "• A 50-foot-square area of ground within 120 feet of the beholder becomes slimy; that area is difficult terrain until initiative count 20 on the next round.",
                    "• Walls within 120 feet of the beholder sprout grasping appendages until initiative count 20 on the round after next. Each creature of the beholder's choice that starts its turn within 10 feet of such a wall must succeed on a DC 15 Dexterity saving throw or be grappled. Escaping requires a successful DC 15 Strength (Athletics) or Dexterity (Acrobatics) check.",
                    "• An eye opens on a solid surface within 60 feet of the beholder. One random eye ray of the beholder shoots from that eye at a target of the beholder's choice that it can see. The eye then closes and disappears.",
                    "The beholder can't repeat an effect until they have all been used, and it can't use the same effect two rounds in a row."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "A region containing a beholder's lair is warped by the creature's unnatural presence, which creates one or more of the following effects:",
                    "• Creatures within 1 mile of the beholder's lair sometimes feel as if they're being watched when they aren't.",
                    "• When the beholder sleeps, minor warps in reality occur within 1 mile of its lair and then vanish 24 hours later. Marks on cave walls might change subtly, an eerie trinket might appear where none existed before, harmless slime might coat a statue, and so on. These effects apply only to natural surfaces and to nonmagical objects that aren't on anyone's person.",
                    "If the beholder dies, these effects fade over the course of 1d10 days."
                ]
            }
        ],
        "description": "One glance at a beholder is enough to assess its foul and otherworldly nature. Aggressive, hateful, and greedy, these aberrations dismiss all other creatures as lesser beings, toying with them or destroying them as they choose.\nA beholder's spheroid body levitates at all times, and its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a beholder sleeps, it closes its central eye but leaves its smaller eyes open and alert.\nXenophobic Isolationists. Enemies abound, or so every beholder believes. Beholders are convinced that other creatures resent them for their brilliance and magical power, even as they dismiss those lesser creatures as crude and disgusting. Beholders always suspect others of plotting against them, even when no other creatures are around.\nThe disdain a beholder has for other creatures extends to other beholders. Each beholder believes its form to be an ideal, and that any deviation from that form is a flaw in the racial purity of its kind. Beholders vary greatly in their physical forms, making conflict between them inevitable. Some beholders are protected by overlapping chitinous plates. Some have smooth hides. Some have eyestalks that writhe like tentacles, while others' stalks bear crustacean-like joints. Even slight differences of coloration in hide can turn two beholders into lifelong enemies.\nEye Tyrant. Some beholders manage to channel their xenophobic tendencies into a terrible despotism. Rather than live in isolation, the aptly named eye tyrants enslave those other creatures, founding and controlling vast empires. An eye tyrant sometimes carves out a domain within or under a major city, commanding networks of agents that operate on their master's behalf.\nAlien Lairs. Because they refuse to share territory with others, most beholders withdraw to frigid hills, abandoned ruins, and deep caverns to scheme. A beholder's lair is carved out by its disintegration eye ray, emphasizing vertical passages connecting chambers stacked on top of each other. Such an environment allows a beholder to move freely, even as it prevents intruders from easily creeping about. When intruders do break in, the height of its open ceilings allows a beholder to float up and harry foes on the floor.\nAs alien as their creator, the rooms in a beholder's lair reflect the creature's arrogance. It festoons its chambers with trophies from the battles it has won, including petrified adventurers standing frozen in their horrified final moments, pieces of other beholders, and magic items wrested from powerful foes. A beholder judges its own worth by its acquisitions, and it never willingly parts with its treasures.\nA Beholder's Lair. A beholder's central lair is typically a large, spacious cavern with high ceilings, where it can attack without fear of closing to melee range. A beholder encountered in its lair has a challenge rating of 14 (11,500 XP).\nSource: Monster Manual p. 28, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "underdark"
    },
    {
        "name": "Beholder Zombie",
        "size": "L",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "15 (natural armor)",
        "hp": "93 (11d10+33)",
        "speed": "walk 0 ft., fly 20 ft.",
        "str": "10",
        "dex": "8",
        "con": "16",
        "int": "3",
        "wis": "8",
        "cha": "5",
        "save": "Wis +2",
        "skill": "",
        "passive": "9",
        "languages": "understands Deep Speech and Undercommon but can't speak",
        "cr": "5",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned, prone",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Undead Fortitude",
            "text": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 14 (4d6) piercing damage.",
                "attack": "Bite|+3|4d6"
            },
            {
                "name": "Eye Ray",
                "text": [
                    "The zombie uses a random magical eye ray, choosing a target that it can see within 60 feet of it.",
                    "1. Paralyzing Ray. The targeted creature must succeed on a DC 14 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "2. Fear Ray. The targeted creature must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "3. Enervation Ray. The targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.",
                    "4. Disintegration Ray. If the target is a creature, it must succeed on a DC 14 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.",
                    "If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger nonmagical object or creation of magical force, this ray disintegrates a 10-foot cube of it."
                ],
                "attack": [
                    "Eye Ray||8d8",
                    "Eye Ray||10d8"
                ]
            }
        ],
        "description": "From somewhere in the darkness, a gurgling moan is heard. A form lurches into view, dragging one foot as it raises bloated arms and broken hands. The zombie advances, driven to kill anyone too slow to escape its grasp.\nDark Servants. Sinister necromantic magic infuses the remains of the dead, causing them to rise as zombies that do their creator's bidding without fear or hesitation. They move with a jerky, uneven gait, clad in the moldering apparel they wore when put to rest, and carrying the stench of decay.\nMost zombies are made from humanoid remains, though the flesh and bones of any formerly living creature can be imbued with a semblance of life. Necromantic magic, usually from spells, animates a zombie. Some zombies rise spontaneously when dark magic saturates an area. Once turned into a zombie, a creature can't be restored to life except by powerful magic, such as a resurrection spell.\nA zombie retains no vestiges of its former self, its mind devoid of thought and imagination. A zombie left without orders simply stands in place and rots unless something comes along that it can kill. The magic animating a zombie imbues it with evil, so left without purpose, it attacks any living creature it encounters.\nHideous Forms. Zombies appear as they did in life, showing the wounds that killed them. However, the magic that creates these vile creatures often takes time to run its course. Dead warriors might rise from a battlefield, eviscerated and bloated after days in the sun. The muddy cadaver of a peasant could claw its way from the ground, riddled with maggots and worms. A zombie might wash ashore or rise from a marsh, swollen and reeking after weeks in the water.\nMindless Soldiers. Zombies take the most direct route to any foe, unable to comprehend obstacles, tactics, or dangerous terrain. A zombie might stumble into a fast-flowing river to reach foes on a far shore, clawing at the surface as it is battered against rocks and destroyed. To reach a foe below it, a zombie might step out of an open window. Zombies stumble through roaring infernos, into pools of acid, and across fields littered with caltrops without hesitation.\nA zombie can follow simple orders and distinguish friends from foes, but its ability to reason is limited to shambling in whatever direction it is pointed, pummeling any enemy in its path. A zombie armed with a weapon uses it, but the zombie won't retrieve a dropped weapon or other tool until told to do so.\nUndead Nature. A zombie doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 316, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Berserker",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any Chaotic Alignment",
        "ac": "13 (hide armor)",
        "hp": "67 (9d8+27)",
        "speed": "walk 30 ft.",
        "str": "16",
        "dex": "12",
        "con": "17",
        "int": "9",
        "wis": "11",
        "cha": "9",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "any one language (usually Common)",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Reckless",
            "text": "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
        },
        "action": {
            "name": "Greataxe",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 9 (1d12 + 3) slashing damage.",
            "attack": "Greataxe|+5|1d12+3"
        },
        "description": "Hailing from uncivilized lands, unpredictable berserkers come together in war parties and seek conflict wherever they can find it.\nSource: Monster Manual p. 344, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Black Bear",
        "size": "M",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "11 (natural armor)",
        "hp": "19 (3d8+6)",
        "speed": "walk 40 ft., climb 30 ft.",
        "str": "15",
        "dex": "10",
        "con": "14",
        "int": "2",
        "wis": "12",
        "cha": "7",
        "save": "",
        "skill": "Perception +3",
        "passive": "13",
        "languages": "",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Keen Smell",
            "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The bear makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Bite|+4|1d6+2"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (2d4 + 2) slashing damage.",
                "attack": "Claws|+4|2d4+2"
            }
        ],
        "description": "Source: Monster Manual p. 318, Princes of the Apocalypse, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Infernal Machine Rebuild",
        "environment": "forest"
    },
    {
        "name": "Black Dragon Wyrmling",
        "size": "M",
        "type": "dragon",
        "alignment": "Chaotic Evil",
        "ac": "17 (natural armor)",
        "hp": "33 (6d8+6)",
        "speed": "walk 30 ft., fly 60 ft., swim 30 ft.",
        "str": "15",
        "dex": "14",
        "con": "13",
        "int": "10",
        "wis": "11",
        "cha": "13",
        "save": "Dex +4, Con +3, Wis +2, Cha +3",
        "skill": "Perception +4, Stealth +4",
        "passive": "14",
        "languages": "Draconic",
        "cr": "2",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The dragon can breathe air and water."
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage.",
                "attack": "Bite|+4|1d10+2"
            },
            {
                "name": "Acid Breath (Recharge 5-6)",
                "text": "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one.",
                "attack": "Acid Breath (Recharge 5-6)||5d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 88, Tales from the Yawning Portal",
        "environment": ""
    },
    {
        "name": "Black Pudding",
        "size": "L",
        "type": "ooze",
        "alignment": "Unaligned",
        "ac": "7",
        "hp": "85 (10d10+30)",
        "speed": "walk 20 ft., climb 20 ft.",
        "str": "16",
        "dex": "5",
        "con": "16",
        "int": "1",
        "wis": "6",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "",
        "cr": "4",
        "resist": "",
        "immune": "acid, cold, lightning, slashing",
        "vulnerable": "",
        "conditionImmune": "blinded, charmed, deafened, exhaustion, frightened, prone",
        "senses": "blindsight 60 ft. (blind beyond this radius)",
        "trait": [
            {
                "name": "Amorphous",
                "text": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                "name": "Corrosive Form",
                "text": "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
            },
            {
                "name": "Spider Climb",
                "text": "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        "action": {
            "name": "Pseudopod",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
            "attack": "Pseudopod|+5|1d6+3"
        },
        "reaction": {
            "name": "Split",
            "text": "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding."
        },
        "description": "A black pudding resembles a heaving mound of sticky black sludge. In dim passageways, the pudding appears to be little more than a blot of shadow.\nFlesh, wood, metal, and bone dissolve when the pudding ebbs over them. Stone remains behind, wiped clean.\nOozes. Oozes thrive in the dark, shunning areas of bright light and extreme temperatures. They flow through the damp underground, feeding on any creature or object that can be dissolved, slinking along the ground, dripping from walls and ceilings, spreading across the edges of underground pools, and squeezing through cracks.\nThe first warning an adventurer receives of an ooze's presence is often the searing pain of its acidic touch. Oozes are drawn to movement and warmth. Organic material nourishes them, and when prey is scarce they feed on grime, fungus, and offal. Veteran explorers know that an immaculately clean passageway is a likely sign that an ooze lairs nearby.\nSlow Death. An ooze kills its prey slowly. Some varieties, such as black puddings and gelatinous cubes, engulf creatures to prevent escape. The only upside of this torturous death is that a victim's comrades can come to the rescue before it is too late.\nSince not every ooze digests every type of substance, some have coins, metal gear, bones, and other debris suspended within their quivering bodies. A slain ooze can be a rich source of treasure for its killers.\nWhether this is true or not, the Faceless Lord is one of the few beings that can control oozes and imbue them with a modicum of intelligence. Most of the time, oozes have no sense of tactics or self-preservation. They are direct and predictable, attacking and eating without cunning. Under the control of Juiblex, they exhibit glimmers of sentience and malevolent intent.\nUnwitting Servants. Although an ooze lacks the intelligence to ally itself with other creatures, others that understand an ooze's need to feed might lure it into a location where it can be of use to them. Clever monsters keep oozes around to defend passageways or consume refuse. Likewise, an ooze can be enticed into a pit trap, where its captors feed it often enough to prevent it from coming after them. Crafty creatures place torches and flaming braziers in strategic areas to dissuade an ooze from leaving a particular tunnel or room.\nSpawn of Juiblex. According to the Demonomicon of Iggwilv and other sources, oozes are scattered fragments or offspring of the demon lord Juiblex.\nOoze Nature. An ooze doesn't require sleep.\nSource: Monster Manual p. 241, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark"
    },
    {
        "name": "Blink Dog",
        "size": "M",
        "type": "fey",
        "alignment": "Lawful Good",
        "ac": "13",
        "hp": "22 (4d8+4)",
        "speed": "walk 40 ft.",
        "str": "12",
        "dex": "17",
        "con": "12",
        "int": "10",
        "wis": "13",
        "cha": "11",
        "save": "",
        "skill": "Perception +3, Stealth +5",
        "passive": "10",
        "languages": "Blink Dog, understands Sylvan but can't speak it",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Keen Hearing and Smell",
            "text": "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 4 (1d6 + 1) piercing damage.",
                "attack": "Bite|+3|1d6+1"
            },
            {
                "name": "Teleport (Recharge 4-6)",
                "text": "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
            }
        ],
        "description": "A blink dog takes its name from its ability to blink in and out of existence, a talent it uses to aid its attacks and to avoid harm. Blink dogs harbor a long-standing hatred for displacer beasts and attack them on sight.\nSource: Monster Manual p. 318, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "forest"
    },
    {
        "name": "Blood Hawk",
        "size": "S",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "7 (2d6)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "6",
        "dex": "14",
        "con": "10",
        "int": "3",
        "wis": "14",
        "cha": "5",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "",
        "cr": "1/8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Keen Sight",
                "text": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Pack Tactics",
                "text": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        "action": {
            "name": "Beak",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) piercing damage.",
            "attack": "Beak|+4|1d4+2"
        },
        "description": "Taking its name from its crimson feathers and aggressive nature, the blood hawk fearlessly attacks almost any animal, stabbing it with its daggerlike beak. Blood hawks flock together in large numbers, attacking as a pack to take down prey.\nSource: Monster Manual p. 319, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Explorer's Guide to Wildemount",
        "environment": "mountain, grassland, forest, hill, coastal, arctic"
    },
    {
        "name": "Blue Dragon Wyrmling",
        "size": "M",
        "type": "dragon",
        "alignment": "Lawful Evil",
        "ac": "17 (natural armor)",
        "hp": "52 (8d8+16)",
        "speed": "walk 30 ft., burrow 15 ft., fly 60 ft.",
        "str": "17",
        "dex": "10",
        "con": "15",
        "int": "12",
        "wis": "11",
        "cha": "15",
        "save": "Dex +2, Con +4, Wis +2, Cha +4",
        "skill": "Perception +4, Stealth +2",
        "passive": "14",
        "languages": "Draconic",
        "cr": "3",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage.",
                "attack": "Bite|+5|1d10+3"
            },
            {
                "name": "Lightning Breath (Recharge 5-6)",
                "text": "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
                "attack": "Lightning Breath (Recharge 5-6)||4d10"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 91, Mythic Odysseys of Theros",
        "environment": ""
    },
    {
        "name": "Blue Slaad",
        "size": "L",
        "type": "aberration",
        "alignment": "Chaotic Neutral",
        "ac": "15 (natural armor)",
        "hp": "123 (13d10+52)",
        "speed": "walk 30 ft.",
        "str": "20",
        "dex": "15",
        "con": "18",
        "int": "7",
        "wis": "7",
        "cha": "9",
        "save": "",
        "skill": "Perception +1",
        "passive": "11",
        "languages": "Slaad, telepathy 60 ft.",
        "cr": "7",
        "resist": "acid, cold, fire, lightning, thunder",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Magic Resistance",
                "text": "The slaad has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Regeneration",
                "text": "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The slaad makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 12 (2d6 + 5) piercing damage.",
                "attack": "Bite|+8|2d6+5"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 12 (2d6 + 5) slashing damage. If the target is a humanoid, it must succeed on a DC 15 Constitution saving throw or be infected with a disease called chaos phage. While infected, the target can't regain hit points, and its hit point maximum is reduced by 10 (3d6) every 24 hours. If the disease reduces the target's hit point maximum to 0, the target instantly transforms into a red slaad or, if it has the ability to cast spells of 3rd level or higher, a green slaad. Only a wish spell can reverse the transformation.",
                "attack": "Claw|+8|2d6+5"
            },
            {
                "name": "Variant: Control Gem",
                "text": [
                    "Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.",
                    "Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.",
                    "A greater restoration spell cast on the slaad destroys the gem without harming the slaad.",
                    "Someone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad."
                ]
            }
        ],
        "description": "The bone hooks that protrude from the back of a blue slaad's hands inflict a terrible transformative disease on humanoids wounded by them. This infection, called chaos phage, transforms its victim into a fully grown red slaad—or green slaad if the host was a spellcaster able to cast 3rd level spells or higher.\nSlaadi. In the Ever-Changing Chaos of Limbo, bits of forest and meadow, ruined castles, and isolated islands drift through a tumult of fire, water, earth, and wind. The foremost inhabitants of this inhospitable plane are the toad-like slaadi. Slaadi are undisciplined and have no formal hierarchy, although weaker slaadi obey stronger ones under threat of annihilation.\nThe Spawning Stone. Long ago, Primus, overlord of the modrons, created a gigantic, geometrically complex stone imbued with the power of law. He then cast it adrift in Limbo, believing that the stone would bring order to the chaos of that plane and halt the spread of chaos to other planes. As the stone's power grew, it became possible for creatures with ordered minds, such as modrons and githzerai, to create enclaves in Limbo. However, Primus's creation had an unforeseen side effect: the chaotic energy absorbed by the stone spawned the horrors that came to be known as slaadi. Sages refer to Primus's massive creation as the Spawning Stone for this reason.\nThe slaadi wiped out every last modron enclave in Limbo. As creatures of utter chaos, slaadi loathe modrons and attack them on sight. Nonetheless, Primus stands by his creation and either doesn't perceive the slaadi as threats or chooses to ignore them.\nBirth and Transformation. Slaadi have horrific cycles of reproduction. Slaadi reproduce either by implanting humanoid hosts with eggs or by infecting them with a transformative disease called chaos phage. Each color of slaad reproduces or transforms in a different way, with red slaadi spawning blue and green slaadi, and blue slaadi spawning red and green. Each green slaad undergoes a lifelong cycle of transformation into the more powerful gray and death slaadi. With each transformation, the slaad retains its memories.\nShapechangers. Some slaadi can transform into the humanoid creatures from which they were originally spawned. These slaadi return to the Material Plane to sow discord in the guise of their former selves.\nSource: Monster Manual p. 276, Waterdeep: Dungeon of the Mad Mage, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Boar",
        "size": "M",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "11 (natural armor)",
        "hp": "11 (2d8+2)",
        "speed": "walk 40 ft.",
        "str": "13",
        "dex": "11",
        "con": "12",
        "int": "2",
        "wis": "9",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Charge",
                "text": "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
            },
            {
                "name": "Relentless (Recharges after a Short or Long Rest)",
                "text": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        "action": {
            "name": "Tusk",
            "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 4 (1d6 + 1) slashing damage.",
            "attack": "Tusk|+3|1d6+1"
        },
        "description": "Source: Monster Manual p. 319, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Dragon of Icespire Peak, Mythic Odysseys of Theros",
        "environment": "grassland, forest, hill"
    },
    {
        "name": "Bone Devil",
        "size": "L",
        "type": "fiend (devil)",
        "alignment": "Lawful Evil",
        "ac": "19 (natural armor)",
        "hp": "142 (15d10+60)",
        "speed": "walk 40 ft., fly 40 ft.",
        "str": "18",
        "dex": "16",
        "con": "18",
        "int": "13",
        "wis": "14",
        "cha": "16",
        "save": "Int +5, Wis +6, Cha +7",
        "skill": "Deception +7, Insight +6",
        "passive": "12",
        "languages": "Infernal, telepathy 120 ft.",
        "cr": "9",
        "resist": "cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Devil's Sight",
                "text": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "text": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The devil makes three attacks: two with its claws and one with its sting."
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. 8 (1d8 + 4) slashing damage.",
                "attack": "Claw|+8|1d8+4"
            },
            {
                "name": "Sting",
                "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                "attack": "Sting|+8|2d8+4"
            },
            {
                "name": "Variant: Bone Devil Polearm",
                "text": [
                    "Some bone devils have the following action options.",
                    "Multiattack. The devil makes two attacks: one with its hooked polearm and one with its sting.",
                    "Hooked Polearm. Melee Weapon Attack: +8 to hit, reach 10 ft., one target. 17 (2d12 + 4) piercing damage. If the target is a Huge or smaller creature, it is grappled (escape DC 14). Until this grapple ends, the devil can't use its polearm on another target."
                ]
            }
        ],
        "description": "Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.\nLords of Tyranny. Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.\nDevils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.\nObedience and Ambition. In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.\nAt the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.\nDark Dealers and Soul Mongers. Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.\nTo own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.\nThe Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.\nA supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.\nIf it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.\nArchdevils. The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.\nGreater Devils. The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.\nLesser Devils. The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.\nLemures. The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.\nPromotion and Demotion. When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.\nLow-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.\nDemotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.\nNo devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.\nInfernal Hierarchy\nRank | Devil(s)\n1. | lemure\n2. (Lesser devils) | imp\n3. | spined devil\n4. | bearded devil\n5. | barbed devil\n6. | chain devil\n7. | bone devil\n8. (Greater devils) | horned devil\n9. | erinyes\n10. | ice devil\n11. | pit fiend\n12. (Archdevils) | duke or duchess\n13. | archduke or archduchess\nThe Nine Hells\nThe Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.\nLayers and Lords of the Nine Hells Layer\nLayer | Layer Name | Archduke or Archduchess | Previous Rulers | Primary Inhabitants\n1 | Avernus | Zariel | Bel, Tiamat | Erinyes, imps, spined devils\n2 | Dis | Dispater | — | Bearded devils, erinyes, imps, spined devils\n3 | Minauros | Mammon | — | Bearded devils, chain devils, imps, spined devils\n4 | Phlegethos | Belial and Fierna | — | Barbed devils, bone devils, imps, spined devils\n5 | Stygia | Levistus | Geryon | Bone devils, erinyes, ice devils, imps\n6 | Malbolge | Glasya | Malagard, Moloch | Barbed devils, bone devils, horned devils, imps\n7 | Maladomini | Baalzebul | — | Barbed devils, bone devils, horned devils, imps\n8 | Cania | Mephistopheles | — | Horned devils, ice devils, imps, pit fiends\n9 | Nessus | Asmodeus | — | All devils\nDevil True Names and Talismans.\n------\nThough devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of certain devils.\nA mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.\nHowever it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.\n------\nSummon Devil (1/Day)\nThe devil chooses what to summon and attempts a magical summoning.\nSource: Monster Manual p. 71, Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount",
        "environment": ""
    },
    {
        "name": "Bone Naga (Guardian)",
        "size": "L",
        "type": "undead",
        "alignment": "Lawful Evil",
        "ac": "15 (natural armor)",
        "hp": "58 (9d10+9)",
        "speed": "walk 30 ft.",
        "str": "15",
        "dex": "16",
        "con": "12",
        "int": "15",
        "wis": "15",
        "cha": "16",
        "save": "",
        "skill": "",
        "passive": "12",
        "languages": "Common plus one other language",
        "cr": "4",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, paralyzed, poisoned",
        "senses": "darkvision 60 ft.",
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. 10 (2d6 + 3) piercing damage plus 10 (3d6) poison damage.",
            "attack": "Bite|+5|2d6+3"
        },
        "trait": {
            "name": "Spellcasting",
            "text": [
                "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Wisdom, and it has the following cleric spells prepared:",
                "Cantrips (at will): mending, sacred flame, thaumaturgy",
                "• 1st level (4 slots): command, shield of faith",
                "• 2nd level (3 slots): calm emotions, hold person",
                "• 3rd level (2 slots): bestow curse"
            ]
        },
        "slots": "4, 3, 2",
        "spells": "mending, sacred flame, thaumaturgy, command, shield of faith, calm emotions, hold person, bestow curse",
        "description": "In response to the long history of conflict between the yuan-ti and the nagas, yuan-ti created a necromantic ritual that could halt a naga's resurrection by transforming the living naga into a skeletal undead servitor. A bone naga retains only a few of the spells it knew in life.\nNagas. Nagas are intelligent serpents that inhabit the ruins of the past, amassing arcane treasures and knowledge.\nThe first nagas were created as immortal guardians by a humanoid race long lost to history. When this race died out, the nagas deemed themselves the rightful inheritors of their masters' treasures and magical lore. Industrious and driven, nagas occasionally venture out from their lairs to track down magic items or rare spellbooks.\nNagas never feel the ravages of time or succumb to sickness. Even if it is struck down, a naga's immortal spirit reforms in a new body in a matter of days, ready to continue its eternal work.\nBenevolent Dictators and Brutal Tyrants. A naga rules its domain with absolute authority. Whether it rules with compassion or by terrorizing its subjects, the naga believes itself the master of all other creatures that inhabit its domain.\nRivalry. Nagas have a long-standing enmity with the yuan-ti, with each race seeing itself as the epitome of serpentine evolution. Though cooperation between them is rare, nagas and yuan-ti sometimes set aside their differences to work toward common objectives. However, yuan-ti always chafe under a naga's authority.\nImmortal Nature. A naga doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 233, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Bone Naga (Spirit)",
        "size": "L",
        "type": "undead",
        "alignment": "Lawful Evil",
        "ac": "15 (natural armor)",
        "hp": "58 (9d10+9)",
        "speed": "walk 30 ft.",
        "str": "15",
        "dex": "16",
        "con": "12",
        "int": "15",
        "wis": "15",
        "cha": "16",
        "save": "",
        "skill": "",
        "passive": "12",
        "languages": "Common plus one other language",
        "cr": "4",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, paralyzed, poisoned",
        "senses": "darkvision 60 ft.",
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. 10 (2d6 + 3) piercing damage plus 10 (3d6) poison damage.",
            "attack": "Bite|+5|2d6+3"
        },
        "trait": {
            "name": "Spellcasting",
            "text": [
                "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Intelligence, and it has the following wizard spells prepared:",
                "Cantrips (at will): mage hand, minor illusion, ray of frost",
                "• 1st level (4 slots): charm person, sleep",
                "• 2nd level (3 slots): detect thoughts, hold person",
                "• 3rd level (2 slots): lightning bolt"
            ]
        },
        "slots": "4, 3, 2",
        "spells": "mage hand, minor illusion, ray of frost, charm person, sleep, detect thoughts, hold person, lightning bolt",
        "description": "In response to the long history of conflict between the yuan-ti and the nagas, yuan-ti created a necromantic ritual that could halt a naga's resurrection by transforming the living naga into a skeletal undead servitor. A bone naga retains only a few of the spells it knew in life.\nNagas. Nagas are intelligent serpents that inhabit the ruins of the past, amassing arcane treasures and knowledge.\nThe first nagas were created as immortal guardians by a humanoid race long lost to history. When this race died out, the nagas deemed themselves the rightful inheritors of their masters' treasures and magical lore. Industrious and driven, nagas occasionally venture out from their lairs to track down magic items or rare spellbooks.\nNagas never feel the ravages of time or succumb to sickness. Even if it is struck down, a naga's immortal spirit reforms in a new body in a matter of days, ready to continue its eternal work.\nBenevolent Dictators and Brutal Tyrants. A naga rules its domain with absolute authority. Whether it rules with compassion or by terrorizing its subjects, the naga believes itself the master of all other creatures that inhabit its domain.\nRivalry. Nagas have a long-standing enmity with the yuan-ti, with each race seeing itself as the epitome of serpentine evolution. Though cooperation between them is rare, nagas and yuan-ti sometimes set aside their differences to work toward common objectives. However, yuan-ti always chafe under a naga's authority.\nImmortal Nature. A naga doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 233",
        "environment": "underdark"
    },
    {
        "name": "Brass Dragon Wyrmling",
        "size": "M",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "16 (natural armor)",
        "hp": "16 (3d8+3)",
        "speed": "walk 30 ft., burrow 15 ft., fly 60 ft.",
        "str": "15",
        "dex": "10",
        "con": "13",
        "int": "10",
        "wis": "11",
        "cha": "13",
        "save": "Dex +2, Con +3, Wis +2, Cha +3",
        "skill": "Perception +4, Stealth +2",
        "passive": "14",
        "languages": "Draconic",
        "cr": "1",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (1d10 + 2) piercing damage.",
                "attack": "Bite|+4|1d10+2"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Fire Breath. The dragon exhales fire in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.",
                    "• Sleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||4d6"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 106",
        "environment": ""
    },
    {
        "name": "Bronze Dragon Wyrmling",
        "size": "M",
        "type": "dragon",
        "alignment": "Lawful Good",
        "ac": "17 (natural armor)",
        "hp": "32 (5d8+10)",
        "speed": "walk 30 ft., fly 60 ft., swim 30 ft.",
        "str": "17",
        "dex": "10",
        "con": "15",
        "int": "12",
        "wis": "11",
        "cha": "15",
        "save": "Dex +2, Con +4, Wis +2, Cha +4",
        "skill": "Perception +4, Stealth +2",
        "passive": "14",
        "languages": "Draconic",
        "cr": "2",
        "resist": "",
        "immune": "lightning",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The dragon can breathe air and water."
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 8 (1d10 + 3) piercing damage.",
                "attack": "Bite|+5|1d10+3"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Lightning Breath. The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.",
                    "• Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||3d10"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 109",
        "environment": ""
    },
    {
        "name": "Brown Bear",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "11 (natural armor)",
        "hp": "34 (4d10+12)",
        "speed": "walk 40 ft., climb 30 ft.",
        "str": "19",
        "dex": "10",
        "con": "16",
        "int": "2",
        "wis": "13",
        "cha": "7",
        "save": "",
        "skill": "Perception +3",
        "passive": "13",
        "languages": "",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Keen Smell",
            "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The bear makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 8 (1d8 + 4) piercing damage.",
                "attack": "Bite|+6|1d8+4"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claws|+6|2d6+4"
            }
        ],
        "description": "Source: Monster Manual p. 319, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Infernal Machine Rebuild, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": "forest, hill, arctic"
    },
    {
        "name": "Bugbear",
        "size": "M",
        "type": "humanoid (goblinoid)",
        "alignment": "Chaotic Evil",
        "ac": "16 (hide armor, shield)",
        "hp": "27 (5d8+5)",
        "speed": "walk 30 ft.",
        "str": "15",
        "dex": "14",
        "con": "13",
        "int": "8",
        "wis": "11",
        "cha": "9",
        "save": "",
        "skill": "Stealth +6, Survival +2",
        "passive": "10",
        "languages": "Common, Goblin",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Brute",
                "text": "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
            },
            {
                "name": "Surprise Attack",
                "text": "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
            }
        ],
        "action": [
            {
                "name": "Morningstar",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 11 (2d8 + 2) piercing damage.",
                "attack": "Morningstar|+4|2d8+2"
            },
            {
                "name": "Javelin",
                "text": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.",
                "attack": "Javelin|+4|2d6+2"
            }
        ],
        "description": "Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured.\nGoblinoids. Bugbears are often found in the company of their cousins, hobgoblins and goblins. Bugbears usually enslave goblins they encounter, and they bully hobgoblins into giving them gold and food in return for serving as scouts and shock troops. Even when paid, bugbears are at best unreliable allies, yet goblins and hobgoblins understand that no matter how much bugbears might drain a tribe of resources, these creatures are a potent force.\nFollowers of Hruggek. Bugbears worship Hruggek, a lesser god who dwells on the plane of Acheron. In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggek's side. They try to prove themselves worthy by defeating as many foes as possible.\nVenal Ambushers. Despite their intimidating builds, bugbears move with surprising stealth. They are fond of setting ambushes and flee when outmatched. They are dependable mercenaries as long as they are supplied food, drink, and treasure, but a bugbear forgets any bond when its life is on the line. A wounded member of a bugbear band might be left behind to help the rest of the band escape. Afterward, that bugbear might help pursuers track down its former companions if doing so saves its life.\nSource: Monster Manual p. 33, Lost Mine of Phandelver, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "underdark, grassland, forest"
    },
    {
        "name": "Bugbear Chief",
        "size": "M",
        "type": "humanoid (goblinoid)",
        "alignment": "Chaotic Evil",
        "ac": "17 (chain shirt, shield)",
        "hp": "65 (10d8+20)",
        "speed": "walk 30 ft.",
        "str": "17",
        "dex": "14",
        "con": "14",
        "int": "11",
        "wis": "12",
        "cha": "11",
        "save": "",
        "skill": "Intimidation +2, Stealth +6, Survival +3",
        "passive": "11",
        "languages": "Common, Goblin",
        "cr": "3",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Brute",
                "text": "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
            },
            {
                "name": "Surprise Attack",
                "text": "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
            },
            {
                "name": "Heart of Hruggek",
                "text": "The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The bugbear makes two melee attacks"
            },
            {
                "name": "Morningstar",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 11 (2d8 + 3) piercing damage.",
                "attack": "Morningstar|+5|2d8+3"
            },
            {
                "name": "Javelin",
                "text": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. 9 (2d6 + 3) piercing damage in melee or 5 (1d6 + 3) piercing damage at range.",
                "attack": "Javelin|+5|2d6+3"
            }
        ],
        "description": "Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured.\nGoblinoids. Bugbears are often found in the company of their cousins, hobgoblins and goblins. Bugbears usually enslave goblins they encounter, and they bully hobgoblins into giving them gold and food in return for serving as scouts and shock troops. Even when paid, bugbears are at best unreliable allies, yet goblins and hobgoblins understand that no matter how much bugbears might drain a tribe of resources, these creatures are a potent force.\nFollowers of Hruggek. Bugbears worship Hruggek, a lesser god who dwells on the plane of Acheron. In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggek's side. They try to prove themselves worthy by defeating as many foes as possible.\nVenal Ambushers. Despite their intimidating builds, bugbears move with surprising stealth. They are fond of setting ambushes and flee when outmatched. They are dependable mercenaries as long as they are supplied food, drink, and treasure, but a bugbear forgets any bond when its life is on the line. A wounded member of a bugbear band might be left behind to help the rest of the band escape. Afterward, that bugbear might help pursuers track down its former companions if doing so saves its life.\nSource: Monster Manual p. 33, Tales from the Yawning Portal",
        "environment": "underdark, grassland, forest"
    },
    {
        "name": "Bulette",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Unaligned",
        "ac": "17 (natural armor)",
        "hp": "94 (9d10+45)",
        "speed": "walk 40 ft., burrow 40 ft.",
        "str": "19",
        "dex": "11",
        "con": "21",
        "int": "2",
        "wis": "10",
        "cha": "5",
        "save": "",
        "skill": "Perception +6",
        "passive": "16",
        "languages": "",
        "cr": "5",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft., tremorsense 60 ft.",
        "trait": {
            "name": "Standing Leap",
            "text": "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 30 (4d12 + 4) piercing damage.",
                "attack": "Bite|+7|4d12+4"
            },
            {
                "name": "Deadly Leap",
                "text": "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.",
                "attack": "Deadly Leap||3d6+4"
            }
        ],
        "description": "Bulette\nA bulette is a massive predator that terrorizes any lands it inhabits. Also called a \"land shark,\" it lives only to feed. Irascible and rapacious, bulettes fear no other creature, and they attack with no regard for superior numbers or strength.\nUnderground Hunters. Bulettes use their powerful claws to tunnel through the earth when they hunt. Heedless of obstruction, they uproot trees, cause landslides in loose slopes, and leave sinkholes behind them. When vibrations in the soil and rock alert a bulette to movement, it shoots to the surface, its jaws spread wide as it attacks.\nWandering Monster. A bulette ranges across temperate lands, feeding on any animals and humanoids it comes across. These creatures dislike dwarf and elf flesh, although they often kill them before realizing what they are. A bulette loves halfling meat the most, and it is never happier than when chasing plump halflings across an open field.\nA bulette has no lair, but roams a hunting territory up to thirty miles wide. Its sole criterion for territory is availability of food, and when it has eaten everything in an area, a bulette moves on. These creatures often home in on humanoid settlements, terrorizing them until their panicked residents have fled, or until the bulette is slain.\nAll creatures shun bulettes, which treat anything that moves as food-even other predators and bulettes. Bulettes come together only to mate, resulting in a bloody act of claws and teeth that usually ends with the male's death and consumption.\nArcane Creation. Some sages believe the bulette is the result of a mad wizard's experiments at crossbreeding snapping turtles and armadillos, within fusions of demon ichor. Bulettes have been thought to be extinct at different times, but after years without a sighting, the creatures inevitably reappear. Because their young are almost never seen, some sages suspect that bulettes maintain secret nesting grounds from which adults strike out into the world.\nSource: Monster Manual p. 34, Princes of the Apocalypse, Storm King's Thunder, Icewind Dale: Rime of the Frostmaiden",
        "environment": "mountain, grassland, hill"
    },
    {
        "name": "Bullywug",
        "size": "M",
        "type": "humanoid (bullywug)",
        "alignment": "Neutral Evil",
        "ac": "15 (hide armor, shield)",
        "hp": "11 (2d8+2)",
        "speed": "walk 20 ft., swim 40 ft.",
        "str": "12",
        "dex": "12",
        "con": "13",
        "int": "7",
        "wis": "10",
        "cha": "7",
        "save": "",
        "skill": "Stealth +3",
        "passive": "10",
        "languages": "Bullywug",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The bullywug can breathe air and water."
            },
            {
                "name": "Speak with Frogs and Toads",
                "text": "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug."
            },
            {
                "name": "Swamp Camouflage",
                "text": "The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
            },
            {
                "name": "Standing Leap",
                "text": "The bullywug's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The bullywug makes two melee attacks: one with its bite and one with its spear."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3 (1d4 + 1) bludgeoning damage.",
                "attack": "Bite|+3|1d4+1"
            },
            {
                "name": "Spear",
                "text": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
                "attack": "Spear|+3|1d6+1"
            }
        ],
        "description": "Life as a bullywug is nasty, brutish, and wet. These frog-headed amphibious humanoids must stay constantly moist, dwelling in rainy forests, marshes, and damp caves. Always hungry and thoroughly evil, bullywugs overwhelm opponents with superior numbers when they can, but they flee from serious threats to search for easier prey.\nBullywugs have green, gray, or mottled yellow skin that shifts through shades of gray, green, and brown, allowing them to blend in with their surroundings. They wear crude armor and wield simple weapons, and can deliver a powerful bite to foes that press too close.\nFoul Aristocracy. Bullywugs consider themselves the right and proper rulers of the swamps. They follow an etiquette of sorts when dealing with outsiders and each other, subject to the whims and fancies of their leader-a self-styled lord of the muck. Bullywugs introduce themselves with grand-sounding titles, make great shows of bowing and debasing themselves before their superiors, and endlessly vie to win their superiors' favor.\nA bullywug has two ways to advance among its kind. It can either murder its rivals, though it must take pains to keep its criminal deeds secret, or it can find a treasure or magic item and present it as tribute or a token of obeisance to its liege. A bullywug that murders its rivals without cunning is likely to be executed, so it's more common for bullywugs to stage raids against caravans and settlements, with the goal of securing precious baubles to impress their lords and win their good graces. Invariably, such fine goods are reduced to filthy tatters through abuse and neglect. Once a gift loses its sheen, a bullywug lord invariably demands that its subjects bring it more treasure as tribute.\nUnruly Diplomacy. Bullywugs love nothing more than lording over those who trespass on their territories. Their warriors attempt to capture intruders rather than simply slaying them.\nCaptives are dragged before the king or queen-a bullywug of unusually large size-and forced to beg for mercy. Bribes, treasure, and flattery can trick the bullywug ruler into letting its captives go, but not before it tries to impress its \"guests\" with the majesty of its treasure and its realm. Struck with a deep inferiority complex, bullywug lords fancy themselves as kings and queens, but desperately crave the fear and respect of outsiders.\nAmphibian Allies. Bullywugs speak a language that allows them to communicate over large areas by croaking like frogs. News of intruders or other events in the swamp spread within minutes across this crude communication system.\nSimple concepts in the language are understandable to frogs and toads. Bullywugs use this capability to form strong bonds with giant frogs, which they train as guardians and hunters. Larger specimens are sometimes used as mounts as well. The frogs' ability to swallow creatures whole provides a bullywug hunting band an easy means of carrying prey back to their villages.\nSource: Monster Manual p. 35, Hoard of the Dragon Queen, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount",
        "environment": "swamp"
    },
    {
        "name": "Cambion",
        "size": "M",
        "type": "fiend",
        "alignment": "Any Evil Alignment",
        "ac": "19 (scale mail)",
        "hp": "82 (11d8+33)",
        "speed": "walk 30 ft., fly 60 ft.",
        "str": "18",
        "dex": "18",
        "con": "16",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "Str +7, Con +6, Int +5, Cha +6",
        "skill": "Deception +6, Intimidation +6, Perception +4, Stealth +7",
        "passive": "14",
        "languages": "Abyssal, Common, Infernal",
        "cr": "5",
        "resist": "cold, fire, lightning, poison; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Fiendish Blessing",
                "text": "The AC of the cambion includes its Charisma bonus."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The cambion's spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells, requiring no material components:",
                    "1/day: plane shift (self only)",
                    "3/day each: alter self, command, detect magic"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The cambion makes two melee attacks or uses its Fire Ray twice."
            },
            {
                "name": "Spear",
                "text": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
                "attack": "Spear|+7|1d6+4"
            },
            {
                "name": "Fire Ray",
                "text": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. 10 (3d6) fire damage.",
                "attack": "Fire Ray|+7|3d6"
            },
            {
                "name": "Fiendish Charm",
                "text": "One humanoid the cambion can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours."
            },
            {
                "name": "Variant: Demonic Cambions",
                "text": [
                    "Few demons consort with mortals, and those with the charm or desire to usually grant their cambion children the Fiendish Charm ability. Cultists of Baphomet and Orcus can also use foul rituals to infuse their master's strength into a young or unborn child, yielding a cult champion who can wield special abilities; a cambion linked to Orcus replaces Fiendish Charm with Spawn of the Grave, and one linked to Baphomet replaces it with Horned One's Call.",
                    "Horned One's Call. When the cambion targets only one creature with the attacks of its Multiattack, it can choose one ally it can see within 30 feet. That ally can use its reaction to make one melee attack against a target of its choice.",
                    "Spawn of the Grave. At the end of each of the cambion's turns, each undead of its choice that it can see within 30 feet gains 10 temporary hit points, provided the cambion isn't incapacitated.",
                    "In addition, this cambion can use its Innate Spellcasting ability to cast animate dead three times per day."
                ]
            }
        ],
        "spells": "plane shift, alter self, command, detect magic",
        "description": "A cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents, but their horns, leathery wings, and sinewy tails are hallmarks of their otherworldly parentage.\nBorn to Be Bad. Cambions grow into ruthless adults whose wickedness and perversion horrifies even the most devoted mortal parent. Even as a youth, a cambion identifies its rightful place as an overlord of mortals. It might orchestrate uprisings in towns and cities, gathering gangs of humanoids and lesser devils to serve it.\nPawns of the Mighty. A cambion forced to serve its fiendish parent does so out of admiration and dread, but also with the expectation that it will one day rise to a place of prominence. Cambions raised in the Nine Hells serve as soldiers, envoys, and personal attendants to greater devils. In the Abyss, a cambion carries only as much authority as it can muster through sheer strength and force of will.\nSpawn of Graz'zt. The demon lord Graz'zt is fond of procreating with humanoids who have made pacts with fiends, and he has sired many cambions who help him sow chaos across the multiverse. These cambions are characterized by charcoal-black skin, cloven hooves, six-fingered hands, and unearthly beauty.\nSource: Monster Manual p. 36, Storm King's Thunder, Baldur's Gate: Descent Into Avernus",
        "environment": "urban"
    },
    {
        "name": "Camel",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "9",
        "hp": "15 (2d10+4)",
        "speed": "walk 50 ft.",
        "str": "16",
        "dex": "8",
        "con": "14",
        "int": "2",
        "wis": "8",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "",
        "cr": "1/8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 2 (1d4) bludgeoning damage.",
            "attack": "Bite|+5|1d4"
        },
        "description": "Source: Monster Manual p. 320, Ghosts of Saltmarsh",
        "environment": "desert"
    },
    {
        "name": "Carrion Crawler",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Unaligned",
        "ac": "13 (natural armor)",
        "hp": "51 (6d10+18)",
        "speed": "walk 30 ft., climb 30 ft.",
        "str": "14",
        "dex": "13",
        "con": "16",
        "int": "1",
        "wis": "12",
        "cha": "5",
        "save": "",
        "skill": "Perception +3",
        "passive": "13",
        "languages": "",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Keen Smell",
                "text": "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Spider Climb",
                "text": "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The carrion crawler makes two attacks: one with its tentacles and one with its bite."
            },
            {
                "name": "Tentacles",
                "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.",
                "attack": "Tentacles|+8|1d4+2"
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (2d4 + 2) piercing damage.",
                "attack": "Bite|+4|2d4+2"
            }
        ],
        "description": "Carrion crawlers scour putrid flesh from carcasses and gobble the slimy bones that remain. They aggressively attack any creature that trespasses on their territory or disturbs their feasting.\nCarrion Eaters. A carrion crawler follows the scent of death to its food, but it prefers not to compete with other scavengers. These foul creatures thus hunker down in territories where death is plentiful and other carrion eaters have limited mobility. Caves, sewers, dungeons, and forested marshes are their favored lairs, but carrion crawlers are also drawn to battlefields and cemeteries. A carrion crawler roams on the hunt, its tentacles probing the air for the scent of blood or decay. In tunnels or ruins, carrion crawlers scurry across the ceiling as they move toward food. In this way, they avoid contact with oozes, otyughs, and other dangerous inhabitants of the darkness, even as they surprise potential meals that don't think to look up.\nPatient Predators. Whether in subterranean darkness or while hunting at night, light signals a potential meal. A carrion crawler might follow a light source from a distance for hours, hoping to pick up the scent of blood. Despite their great size, carrion crawlers can also easily set up ambushes by waiting around blind corners for prey to come to them. When facing potential prey or intruders, a carrion crawler lets its poison do the work. Once a victim goes rigid with paralysis, the carrion crawler wraps it with its tentacles and drags it away to a high ledge or isolated passageway, where it can be killed safely. The monster then resumes patrolling its territory while waiting for its meal to ripen.\nSource: Monster Manual p. 37, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark"
    },
    {
        "name": "Cat",
        "size": "T",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "2 (1d4)",
        "speed": "walk 40 ft., climb 30 ft.",
        "str": "3",
        "dex": "15",
        "con": "10",
        "int": "3",
        "wis": "12",
        "cha": "7",
        "save": "",
        "skill": "Perception +3, Stealth +4",
        "passive": "13",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Keen Smell",
            "text": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "action": {
            "name": "Claws",
            "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. 1 slashing damage."
        },
        "description": "Source: Monster Manual p. 320, Curse of Strahd, Hoard of the Dragon Queen, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "grassland, forest, urban, desert"
    },
    {
        "name": "Cave Bear",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "42 (5d10+15)",
        "speed": "walk 40 ft., swim 30 ft.",
        "str": "20",
        "dex": "10",
        "con": "16",
        "int": "2",
        "wis": "13",
        "cha": "7",
        "save": "",
        "skill": "Perception +3",
        "passive": "13",
        "languages": "",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Keen Smell",
            "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The bear makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 9 (1d8 + 5) piercing damage.",
                "attack": "Bite|+7|1d8+5"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 12 (2d6 + 5) slashing damage.",
                "attack": "Claws|+7|2d6+5"
            }
        ],
        "description": "Source: Monster Manual p. 334, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage",
        "environment": "forest"
    },
    {
        "name": "Centaur",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Neutral Good",
        "ac": "12",
        "hp": "45 (6d10+12)",
        "speed": "walk 50 ft.",
        "str": "18",
        "dex": "14",
        "con": "14",
        "int": "9",
        "wis": "13",
        "cha": "11",
        "save": "",
        "skill": "Athletics +6, Perception +3, Survival +3",
        "passive": "13",
        "languages": "Elvish, Sylvan",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Charge",
            "text": "If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow."
            },
            {
                "name": "Pike",
                "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. 9 (1d10 + 4) piercing damage.",
                "attack": "Pike|+6|1d10+4"
            },
            {
                "name": "Hooves",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 11 (2d6 + 4) bludgeoning damage.",
                "attack": "Hooves|+6|2d6+4"
            },
            {
                "name": "Longbow",
                "text": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. 6 (1d8 + 2) piercing damage.",
                "attack": "Longbow|+4|1d8+2"
            }
        ],
        "description": "I hear centaurs make excellent mounts!\n— Batley Summerfoot, a halfling adventurer who never read HOOVES OF FURY, by Iryil Grayborn of Sundown\nReclusive wanderers and omen-readers of the wild, centaurs avoid conflict but fight fiercely when pressed. They roam the vast wilderness, keeping far from borders, laws, and the company of other creatures.\nWilderness Nomads. Centaur tribes range across lands with mild to hot climates, where a centaur requires only light furs or oiled skins to deal with inclement weather. They are hunter-gatherers and rarely build shelters or even use tents.\nCentaur migrations span continents and take decades to repeat, so that a centaur tribe might not retread the same path for generations. These long-ranging patterns can lead to conflict when centaurs encounter settlements of other creatures built along their traditional routes.\nReluctant Settlers. A centaur that can't keep pace with the rest of its tribe is left behind. Some such centaurs vanish into the wilderness and are never seen again. Those that can bear the loss of their tribe might take up residence among other races. Frontier settlements value the nature knowledge of their centaur residents. Many such communities owe their survival to the insight and acumen of a centaur.\nDespite their reclusive nature, centaurs trade with elves and with the caravans of other benevolent humanoids they meet during their wanderings. A trader might save the life of a wounded or an elderly centaur unfit for long travel, escorting it to a settlement where it can peacefully live out the rest of its days.\nSource: Monster Manual p. 38, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Mythic Odysseys of Theros",
        "environment": "grassland, forest"
    },
    {
        "name": "Chain Devil",
        "size": "M",
        "type": "fiend (devil)",
        "alignment": "Lawful Evil",
        "ac": "16 (natural armor)",
        "hp": "85 (10d8+40)",
        "speed": "walk 30 ft.",
        "str": "18",
        "dex": "15",
        "con": "18",
        "int": "11",
        "wis": "12",
        "cha": "14",
        "save": "Con +7, Wis +4, Cha +5",
        "skill": "",
        "passive": "8",
        "languages": "Infernal, telepathy 120 ft.",
        "cr": "8",
        "resist": "cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Devil's Sight",
                "text": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "text": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The devil makes two attacks with its chains."
            },
            {
                "name": "Chain",
                "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.",
                "attack": "Chain|+8|2d6+4"
            },
            {
                "name": "Animate Chains (Recharges after a Short or Long Rest)",
                "text": [
                    "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.",
                    "Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
                ]
            }
        ],
        "reaction": {
            "name": "Unnerving Mask",
            "text": "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."
        },
        "description": "Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.\nLords of Tyranny. Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.\nDevils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.\nObedience and Ambition. In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.\nAt the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.\nDark Dealers and Soul Mongers. Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.\nTo own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.\nThe Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.\nA supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.\nIf it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.\nArchdevils. The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.\nGreater Devils. The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.\nLesser Devils. The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.\nLemures. The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.\nPromotion and Demotion. When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.\nLow-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.\nDemotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.\nNo devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.\nInfernal Hierarchy\nRank | Devil(s)\n1. | lemure\n2. (Lesser devils) | imp\n3. | spined devil\n4. | bearded devil\n5. | barbed devil\n6. | chain devil\n7. | bone devil\n8. (Greater devils) | horned devil\n9. | erinyes\n10. | ice devil\n11. | pit fiend\n12. (Archdevils) | duke or duchess\n13. | archduke or archduchess\nThe Nine Hells\nThe Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.\nLayers and Lords of the Nine Hells Layer\nLayer | Layer Name | Archduke or Archduchess | Previous Rulers | Primary Inhabitants\n1 | Avernus | Zariel | Bel, Tiamat | Erinyes, imps, spined devils\n2 | Dis | Dispater | — | Bearded devils, erinyes, imps, spined devils\n3 | Minauros | Mammon | — | Bearded devils, chain devils, imps, spined devils\n4 | Phlegethos | Belial and Fierna | — | Barbed devils, bone devils, imps, spined devils\n5 | Stygia | Levistus | Geryon | Bone devils, erinyes, ice devils, imps\n6 | Malbolge | Glasya | Malagard, Moloch | Barbed devils, bone devils, horned devils, imps\n7 | Maladomini | Baalzebul | — | Barbed devils, bone devils, horned devils, imps\n8 | Cania | Mephistopheles | — | Horned devils, ice devils, imps, pit fiends\n9 | Nessus | Asmodeus | — | All devils\nDevil True Names and Talismans.\n------\nThough devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of certain devils.\nA mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.\nHowever it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.\n------\nSummon Devil (1/Day)\nThe devil chooses what to summon and attempts a magical summoning.\nSource: Monster Manual p. 72, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus",
        "environment": ""
    },
    {
        "name": "Chasme",
        "size": "L",
        "type": "fiend (demon)",
        "alignment": "Chaotic Evil",
        "ac": "15 (natural armor)",
        "hp": "84 (13d10+13)",
        "speed": "walk 20 ft., fly 60 ft.",
        "str": "15",
        "dex": "15",
        "con": "12",
        "int": "11",
        "wis": "14",
        "cha": "10",
        "save": "Dex +5, Wis +5",
        "skill": "Perception +5",
        "passive": "15",
        "languages": "Abyssal, telepathy 120 ft.",
        "cr": "6",
        "resist": "cold, fire, lightning",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "blindsight 10 ft., darkvision 120 ft.",
        "trait": [
            {
                "name": "Drone",
                "text": "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn with in 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can't hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature's saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours."
            },
            {
                "name": "Magic Resistance",
                "text": "The chasme has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Spider Climb",
                "text": "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        "action": [
            {
                "name": "Proboscis",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 16 (4d6 + 2) piercing damage plus 24 (7d6) necrotic damage, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction to a creature's hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration.",
                "attack": "Proboscis|+5|4d6+2"
            },
            {
                "name": "Variant: Summon Demon (1/Day)",
                "text": [
                    "The demon chooses what to summon and attempts a magical summoning.",
                    "A chasme has a 30 chance of summoning one chasme.",
                    "A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
                ]
            }
        ],
        "description": "Spawn of Chaos. The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.\nCapricious Elevation. Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.\nA demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.\nBy expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.\nAbyssal Invasions. Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.\nSome of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.\nSigns of Corruption. Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.\nEternal Evil. Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.\nThe only way to truly destroy a demon is to seek it in the Abyss and kill it there.\nProtected Essence. A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.\nObtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.\nDemonic Cults. Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.\nDemon Summoning. Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.\nThose who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.\nBound Demons. The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.\nAn object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.\nDemonic Possession. No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.\nAs long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.\nDemon Lords\nThe chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.\nReward for Outsiders. Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.\nPower and Control. The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.\nAs with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.\nBaphomet. The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.\nThe Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.\nDemogorgon. The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.\nDemogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.\nGraz'zt. The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.\nGraz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.\nJuiblex. The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.\nIn its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.\nLolth. The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.\nLolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.\nOrcus. Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.\nThe Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.\nOrcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.\nYeenoghu. Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.\nYeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.\nOther Demon Lords. No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.\nDemon Types. Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.\nDemons by Type\nType | Examples\n1 | barlgura, shadow demon, vrock\n2 | chasme, hezrou\n3 | glabrezu, yochlol\n4 | nalfeshnee\n5 | marilith\n6 | balor, goristro\nDemon True Names.\n------\nThough demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.\nA mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.\n------\nVariant: Demon Summoning.\n------\nSome demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.\n• A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\n• A barlgura has a 30 percent chance of summoning one barlgura.\n• A chasme has a 30 percent chance of summoning one chasme.\n• A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\n• A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\n• A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\n• A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\n• A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\n• A yochlol has a 50 percent chance of summoning one yochlol.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.\n------\nSource: Monster Manual p. 57, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus",
        "environment": ""
    },
    {
        "name": "Chimera",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Chaotic Evil",
        "ac": "14 (natural armor)",
        "hp": "114 (12d10+48)",
        "speed": "walk 30 ft., fly 60 ft.",
        "str": "19",
        "dex": "11",
        "con": "19",
        "int": "3",
        "wis": "14",
        "cha": "10",
        "save": "",
        "skill": "Perception +8",
        "passive": "18",
        "languages": "understands Draconic but can't speak",
        "cr": "6",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) piercing damage.",
                "attack": "Bite|+7|2d6+4"
            },
            {
                "name": "Horns",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 10 (1d12 + 4) bludgeoning damage.",
                "attack": "Horns|+7|1d12+4"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 11 (2d6 + 4) slashing damage.",
                "attack": "Claws|+7|2d6+4"
            },
            {
                "name": "Fire Breath (Recharge 5-6)",
                "text": "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.",
                "attack": "Fire Breath (Recharge 5-6)||7d8"
            }
        ],
        "description": "Chimeras were created after mortals summoned Demogorgon to the world. The Prince of Demons, unimpressed with the creatures that surrounded it, transformed them into horrific, multi-headed monstrosities. This act gave rise to the first chimeras.\nGifted with demonic cruelty, a chimera serves as a grim reminder of what happens when demon princes find their way to the Material Plane. A typical specimen has the hindquarters of a large goat, the forequarters of a lion, and the leathery wings of a dragon, along with the heads of all three of those creatures. The monster likes to surprise its victims, swooping down from the sky and engulfing prey with its fiery breath before landing.\nConflicted Creature. A chimera combines the worst aspects of its three parts. Its dragon head drives it to raid, plunder, and accumulate a great hoard. Its leonine nature compels it to hunt and kill powerful creatures that threaten its territory. Its goat head grants it a vicious, stubborn streak that compels it to fight to the death. These three aspects drive a chimera to stake out a territory that is as large as 10 miles wide. It preys on wild game, viewing more powerful creatures as rivals to be humiliated and defeated. Its greatest rivals are dragons, griffons, manticores, perytons, and wyverns. When it hunts, the chimera looks for easy ways to amuse itself. It enjoys the fear and suffering of weaker creatures. The monster often toys with its prey, breaking off an attack prematurely and leaving a creature wounded and terrified before returning to finish it off.\nServant of Evil. Though chimeras are far from cunning, their draconic ego makes them susceptible to flattery and gifts. If offered food and treasure, a chimera might spare a traveler. A villain can lure a chimera into service by keeping it well fed and its treasure hoard well stocked.\nSource: Monster Manual p. 39, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus",
        "environment": "underdark, mountain, grassland, hill"
    },
    {
        "name": "Chuul",
        "size": "L",
        "type": "aberration",
        "alignment": "Chaotic Evil",
        "ac": "16 (natural armor)",
        "hp": "93 (11d10+33)",
        "speed": "walk 30 ft., swim 30 ft.",
        "str": "19",
        "dex": "10",
        "con": "16",
        "int": "5",
        "wis": "11",
        "cha": "5",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "understands Deep Speech but can't speak",
        "cr": "4",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Amphibious",
                "text": "The chuul can breathe air and water."
            },
            {
                "name": "Sense Magic",
                "text": "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
            },
            {
                "name": "Pincer",
                "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
                "attack": "Pincer|+6|2d6+4"
            },
            {
                "name": "Tentacles",
                "text": "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        "description": "Survivors of the ancient aboleth empire, chuuls are crustaceans the aboleths modified and endowed with sentience. They follow the ingrained directives of their creators, as they have done since the dawn of time.\nPrimeval Relics. In the primeval ages, aboleths ruled a vast empire that spanned the oceans of the world. In those days, the aboleths used mighty magic and bent the minds of the nascent creatures of the mortal realm. However, they were bound to the water and could not enforce their will beyond it without servants. Therefore, they created chuuls.\nPerfectly obedient, the chuuls collected sentient creatures and magic at the aboleths' command. Chuuls were designed to endure the ages of the world, growing in size and strength as the eons passed. When the aboleths' empire crumbled with the rise of the gods, the chuuls were cast adrift. However, these creatures continue to do what they did for the aboleths, slowly collecting humanoids, gathering treasure, amassing magic, and consolidating power.\nTireless Guardians. Chuul still guard the ruins of the ancient aboleth empire. They linger in silent observance of eons-old commands. Rumors and ancient maps sometimes lure treasure seekers to these ruins, but the reward for their boldness is death.\nWhatever riches that the explorers bring with them adds to the hoard guarded by the chuuls. Chuuls can sense magic at a distance. This sense couples with an innate drive that leads them to slay explorers, take their gear, and bury it in secret locales aboleths dictated eons ago.\nWaiting Servants. Although the aboleths' ancient empire fell long ago, the psychic bonds between them and their created servants remain intact. Chuuls that come into contact with aboleths immediately assume their old roles. Such chuuls redirect their compulsions to the service of the aboleths' sinister purposes.\nSource: Monster Manual p. 40, Princes of the Apocalypse, Rise of Tiamat, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh",
        "environment": "underdark"
    },
    {
        "name": "Clay Golem",
        "size": "L",
        "type": "construct",
        "alignment": "Unaligned",
        "ac": "14 (natural armor)",
        "hp": "133 (14d10+56)",
        "speed": "walk 20 ft.",
        "str": "20",
        "dex": "9",
        "con": "18",
        "int": "3",
        "wis": "8",
        "cha": "1",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "understands the languages of its creator but can't speak",
        "cr": "9",
        "resist": "",
        "immune": "acid, poison, psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Acid Absorption",
                "text": "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
            },
            {
                "name": "Berserk",
                "text": "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
            },
            {
                "name": "Immutable Form",
                "text": "The golem is immune to any spell or effect that would alter its form."
            },
            {
                "name": "Magic Resistance",
                "text": "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The golem's weapon attacks are magical."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The golem makes two slam attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.",
                "attack": "Slam|+8|2d10+5"
            },
            {
                "name": "Haste (Recharge 5-6)",
                "text": "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
            }
        ],
        "description": "Sculpted from clay, this bulky golem stands head and shoulders taller than most human-sized creatures. It is human shaped, but its proportions are off.\nClay golems are often divinely endowed with purpose by priests of great faith. However, clay is a weak vessel for life force. If the golem is damaged, the elemental spirit bound into it can break free. Such a golem runs amok, smashing everything around it until it is destroyed or completely repaired.\nGolems. Golems are made from humble materials-clay, flesh and bones, iron, or stone-but they possess astonishing power and durability. A golem has no ambitions, needs no sustenance, feels no pain, and knows no remorse. An unstoppable juggernaut, it exists to follow its creator's orders, and it protects or attacks as that creator demands.\nTo create a golem, one requires a manual of golems (see the Dungeon Master's Guide). The comprehensive illustrations and instructions in a manual detail the process for creating a golem of a particular type.\nElemental Spirit in Material Form. The construction of a golem begins with the building of its body, requiring great command of the craft of sculpting, stonecutting, ironworking, or surgery. Sometimes a golem's creator is the master of the art, but often the individual who desires a golem must enlist master artisans to do the work.\nAfter constructing the body from clay, flesh, iron, or stone, the golem's creator infuses it with a spirit from the Elemental Plane of Earth. This tiny spark of life has no memory, personality, or history. It is simply the impetus to move and obey. This process binds the spirit to the artificial body and subjects it to the will of the golem's creator.\nA golem can be created with a special amulet or other item that allows the possessor of the item to control the golem. Golems whose creators are long dead can thus be harnessed to serve a new master.\nA golem can't think or act for itself. Though it understands its commands perfectly, it has no grasp of language beyond that understanding, and can't be reasoned with or tricked with words.\nAgeless Guardians. Golems can guard sacred sites, tombs, and treasure vaults long after the deaths of their creators, carrying out their appointed tasks for all eternity while brushing off physical damage and ignoring all but the most potent spells.\nBlind Obedience. When its creator or possessor is on hand to command it, a golem performs flawlessly. If the golem is left without instructions or is incapacitated, it continues to follow its last orders to the best of its ability. When it can't fulfill its orders, a golem might react violently-or stand and do nothing. A golem that has been given conflicting orders sometimes alternates between them.\nConstructed Nature. A golem doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 168, Curse of Strahd, Rise of Tiamat, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage",
        "environment": ""
    },
    {
        "name": "Cloaker",
        "size": "L",
        "type": "aberration",
        "alignment": "Chaotic Neutral",
        "ac": "14 (natural armor)",
        "hp": "78 (12d10+12)",
        "speed": "walk 10 ft., fly 40 ft.",
        "str": "17",
        "dex": "15",
        "con": "12",
        "int": "13",
        "wis": "12",
        "cha": "14",
        "save": "",
        "skill": "Stealth +5",
        "passive": "11",
        "languages": "Deep Speech, Undercommon",
        "cr": "8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Damage Transfer",
                "text": "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half."
            },
            {
                "name": "False Appearance",
                "text": "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak."
            },
            {
                "name": "Light Sensitivity",
                "text": "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The cloaker makes two attacks: one with its bite and one with its tail."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
                "attack": "Bite|+6|2d6+3"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. 7 (1d8 + 3) slashing damage.",
                "attack": "Tail|+6|1d8+3"
            },
            {
                "name": "Moan",
                "text": "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
            },
            {
                "name": "Phantasms (Recharges after a Short or Long Rest)",
                "text": [
                    "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.",
                    "Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.",
                    "A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
                ]
            }
        ],
        "description": "Cloakers earned their names for the resemblance they bear to dark leathery cloaks. Lurking in remote dungeons and caves, these stealthy predators wait to slay lone or injured prey stumbling through the darkness.\nCamouflaged Lurkers. Like a stingray, a cloaker's body is composed of cartilage and muscle. With its tail and fins unfurled, it flies through darkness and lurks among the shadows of caverns the same way a stingray glides through water and hides on the ocean floor. Parallel rows of round, black eyespots run along its back like buttons, and the ivory-colored claws on its cowl resemble bone clasps.\nWhen a cloaker unfurls and moves to attack, it reveals its pale underside and makes its true nature evident. Red eyes glow above rows of sharp teeth, and a long pendulous tail whips behind it.\nOpportunistic Predators. When hunting, cloakers glide through the shadows at a safe distance behind groups of other creatures traversing the Underdark. They follow parties of humanoids to prey on the wounded after a battle, or pursue herds of Underdark beasts, attacking the sick, the weak, or the straggling.\nCloakers strike quickly and consume their meals as swiftly as possible, enveloping and devouring their victims. While it feeds, a cloaker uses its swift, whiplike tail for defense, although it rarely takes a stand against dangerous foes or groups of creatures. As an added defense, cloakers can create illusory duplicates of themselves.\nHaunting Moan. Cloakers' thoughts are alien to other life-forms, and they communicate with one another through subsonic moans inaudible to most creatures. At higher intensities, a cloaker's haunting moan becomes audible, evoking sensations of doom and dread in creatures that hear it.\nCloaker Conclaves. Cloakers prefer isolation, but they sometimes convene with other cloakers for defense or to exchange information about new dangers, suitable hunting grounds, or developments that might affect their habitats. When this convergence is complete, the cloakers separate again.\nSource: Monster Manual p. 41, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount",
        "environment": "underdark"
    },
    {
        "name": "Cloud Giant",
        "size": "H",
        "type": "giant",
        "alignment": "Neutral Good (50%) Neutral Evil (50%)",
        "ac": "14 (natural armor)",
        "hp": "200 (16d12+96)",
        "speed": "walk 40 ft.",
        "str": "27",
        "dex": "10",
        "con": "22",
        "int": "12",
        "wis": "16",
        "cha": "16",
        "save": "Con +10, Wis +7, Cha +7",
        "skill": "Insight +7, Perception +7",
        "passive": "17",
        "languages": "Common, Giant",
        "cr": "9",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Keen Smell",
                "text": "The giant has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:",
                    "At will: detect magic, fog cloud, light",
                    "3/day each: feather fall, fly, misty step, telekinesis",
                    "1/day each: control weather, gaseous form"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The giant makes two morningstar attacks."
            },
            {
                "name": "Morningstar",
                "text": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. 21 (3d8 + 8) piercing damage.",
                "attack": "Morningstar|+12|3d8+8"
            },
            {
                "name": "Rock",
                "text": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. 30 (4d10 + 8) bludgeoning damage.",
                "attack": "Rock|+12|4d10+8"
            },
            {
                "name": "Variant: New Giant Options",
                "text": [
                    "Some adult cloud giants have the magical ability to create barriers of gale-force wind around themselves that can deflect incoming missiles. Others like to fling enemies through the air. These abilities are represented by the following action options.",
                    "Fling. The giant tries to throw a Small or Medium creature within 10 feet of it. The target must succeed on a DC 20 Dexterity saving throw or be hurled up to 60 feet horizontally in a direction of the giant's choice and land prone, taking 4 (1d8) bludgeoning damage for every 10 feet it was thrown.",
                    "Wind Aura. A magical aura of wind surrounds the giant. The aura is a 10-foot-radius sphere that lasts as long as the giant maintains concentration on it (as if concentrating on a spell). While the aura is in effect, the giant gains a +2 bonus to its AC against ranged weapon attacks, and all open flames within the aura are extinguished unless they are magical."
                ]
            }
        ],
        "spells": "detect magic, fog cloud, light, feather fall, fly, misty step, telekinesis, control weather, gaseous form",
        "description": "Old as Legend\nIn remote regions of the world, the last remaining plinths, monoliths, and statues of the great giant empires bow their heads in desolate obscurity. Where once those empires sprawled across all lands, now the giants dwell in isolated tribes and clans.\nGiants are almost as old as dragons, which were still young when the giants' heavy feet first shook the foundations of the world. As they spread across new lands, giants and dragons fought bitter generational wars that nearly brought both sides low. No living giant remembers what started the conflict, but myths and tales of their race's glorious dawn are still sung in their steadings and holdfasts, vilifying the primeval wyrms. Giants and dragons continue to harbor grudges against one another, and it is seldom that they will meet or occupy the same area without a fight.\nThe Ordning\nEach of the main giant races-the cloud, fire, frost, hill, stone, and storm giants-are related by common elements of history, religion, and culture. They view one another as kindred, keeping any inherent animosity over territory and ambition to a minimum.\nGiants belong to a caste structure called the ordning. Based on social class and highly organized, the ordning assigns a social rank to each giant. By understanding its place in the ordning, a giant knows which other giants are inferior or superior to it, since no two giants are equal. Each of the giant races analyzes a different combination of skills or qualities to determine the ordning. Giants make excelling in these qualities the purpose of their lives.\nAt the highest level of the ordning, the races of the giants are also ranked according to status. Storm giants are the highest in the ordning, followed by cloud giants, fire giants, frost giants, stone giants, hill giants, and finally giant kin such as fomorians, ettins, and ogres.\nRegardless of a giant's rank among its own race, the chief of a hill giant tribe is inferior to the most common of stone giants. The lowest ranked giant of any type is superior to the highest ranked giant of an inferior type. It isn't considered evil to disrespect or even betray a giant of another type, merely rude.\nGiant Gods\nWhen the giants' ancient empires fell, Annam, father of all giants, forsook his children and the world. He swore never to look upon either again until the giants had returned to their glory and reclaimed their birthright as rulers of the world. As a result, giants pray not to Annam but to his divine children, along with a host of hero-deities and godly villains that make up the giants' pantheon.\nChief among these gods are the children of Annam, whose sons represent each type of giant: Stronmaus for storm giants, Memnor for cloud giants, Skoraeus Stonebones for stone giants, Thrym for frost giants, Surtur for fire giants, and Grolantor for hill giants. Not all giants automatically revere their kind's primary deity, however. Many good cloud giants refuse to worship the deceitful Memnor, and a storm giant dwelling in the icy mountains of the north might pay more homage to Thrym than Stronmaus. Other giants feel a stronger connection to Annam's daughters, who include Hiatea, the huntress and home warden; Iallanis, goddess of love and peace; and Diancastra, an impetuous and arrogant trickster.\nSome giants abandon their own gods and fall prey to demon cults, paying homage to Baphomet or Kostchtchie. To worship them or any other non-giant deity is a great sin against the ordning, and almost certain to make a giant an outcast.\nSource: Monster Manual p. 154, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Mythic Odysseys of Theros",
        "environment": "mountain"
    },
    {
        "name": "Cockatrice",
        "size": "S",
        "type": "monstrosity",
        "alignment": "Unaligned",
        "ac": "11",
        "hp": "27 (6d6+6)",
        "speed": "walk 20 ft., fly 40 ft.",
        "str": "6",
        "dex": "12",
        "con": "12",
        "int": "2",
        "wis": "13",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.",
            "attack": "Bite|+3|1d4+1"
        },
        "description": "The cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn flesh to stone. These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs-things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger. A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.\nSource: Monster Manual p. 42, Tales from the Yawning Portal, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Mythic Odysseys of Theros",
        "environment": "grassland"
    },
    {
        "name": "Commoner",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any alignment",
        "ac": "10",
        "hp": "4 (1d8)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "10",
        "con": "10",
        "int": "10",
        "wis": "10",
        "cha": "10",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "any one language (usually Common)",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Club",
            "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d4) bludgeoning damage.",
            "attack": "Club|+2|1d4"
        },
        "description": "Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans, and hermits.\nSource: Monster Manual p. 345, Curse of Strahd, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "arctic, desert, coastal, grassland, hill, urban, forest"
    },
    {
        "name": "Constrictor Snake",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "13 (2d10+2)",
        "speed": "walk 30 ft., swim 30 ft.",
        "str": "15",
        "dex": "14",
        "con": "12",
        "int": "1",
        "wis": "10",
        "cha": "3",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 5 (1d6 + 2) piercing damage.",
                "attack": "Bite|+4|1d6+2"
            },
            {
                "name": "Constrict",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
                "attack": "Constrict|+4|1d8+2"
            }
        ],
        "description": "Source: Monster Manual p. 320, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underwater, forest, swamp, desert"
    },
    {
        "name": "Copper Dragon Wyrmling",
        "size": "M",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "16 (natural armor)",
        "hp": "22 (4d8+4)",
        "speed": "walk 30 ft., climb 30 ft., fly 60 ft.",
        "str": "15",
        "dex": "12",
        "con": "13",
        "int": "14",
        "wis": "11",
        "cha": "13",
        "save": "Dex +3, Con +3, Wis +2, Cha +3",
        "skill": "Perception +4, Stealth +3",
        "passive": "14",
        "languages": "Draconic",
        "cr": "1",
        "resist": "",
        "immune": "acid",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 10 ft., darkvision 60 ft.",
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (1d10 + 2) piercing damage.",
                "attack": "Bite|+4|1d10+2"
            },
            {
                "name": "Breath Weapons (Recharge 5-6)",
                "text": [
                    "The dragon uses one of the following breath weapons.",
                    "• Acid Breath. The dragon exhales acid in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.",
                    "• Slowing Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
                ],
                "attack": "Breath Weapons (Recharge 5-6)||4d8"
            }
        ],
        "description": "True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.\nMany creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.\nThough their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.\nTrue dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.\nDragon Age Categories\nCategory | Size | Age Range\nWyrmling | Medium | 5 years or less\nYoung | Large | 6–100 years\nAdult | Huge | 101–800 years\nAncient | Gargantuan | 801 years or more\nSource: Monster Manual p. 111",
        "environment": ""
    },
    {
        "name": "Couatl",
        "size": "M",
        "type": "celestial",
        "alignment": "Lawful Good",
        "ac": "19 (natural armor)",
        "hp": "97 (13d8+39)",
        "speed": "walk 30 ft., fly 90 ft.",
        "str": "16",
        "dex": "20",
        "con": "17",
        "int": "18",
        "wis": "20",
        "cha": "18",
        "save": "Con +5, Wis +7, Cha +6",
        "skill": "",
        "passive": "15",
        "languages": "all, telepathy 120 ft.",
        "cr": "4",
        "resist": "radiant",
        "immune": "psychic; bludgeoning, piercing, slashing from nonmagical attacks",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Magic Weapons",
                "text": "The couatl's weapon attacks are magical."
            },
            {
                "name": "Shielded Mind",
                "text": "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:",
                    "At will: detect evil and good, detect magic, detect thoughts",
                    "3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield",
                    "1/day each: dream, greater restoration, scrying"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.",
                "attack": "Bite|+8|1d6+5"
            },
            {
                "name": "Constrict",
                "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.",
                "attack": "Constrict|+6|2d6+3"
            },
            {
                "name": "Change Shape",
                "text": [
                    "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).",
                    "In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
                ]
            }
        ],
        "spells": "detect evil and good, detect magic, detect thoughts, bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield, dream, greater restoration, scrying",
        "description": "Couatls are benevolent serpentine beings of great intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.\nDivine Caretakers. Couatls were created as guardians and caretakers by a benevolent god not worshiped since the dawn of time, and which is forgotten now by all but the couatls themselves. Most of the divine mandates given to these beings are long since fulfilled or failed. However, a number of couatls still watch over ancient power, await fulfillment of prophecy, or safeguard the heirs of creatures they once guided and protected. Regardless of a couatl's task, it prefers to remain hidden, revealing itself only as a last resort. Truth Tellers. A couatl can't lie, but it can withhold information, answer questions vaguely, or allow others to jump to the wrong conclusions if doing so is necessary to protect something, to keep promises, or to hide the secret of its existence.\nAncient and Few. A couatl can live for ages without sustenance, even surviving without air, but these creatures can die of disease or the passage of time. A couatl can sense its end up to a century beforehand, but it has no insight into the manner of its demise. If a couatl has already accomplished what it set out to do, it accepts its fate. However, if its imminent death endangers the completion of its goals, it actively seeks out another couatl with which to produce offspring.\nThe mating ritual of couatls is a beautiful and elaborate dance of magic and light, which results in a gem-like egg from which a new couatl hatches. The parent that sought out the mate raises the newborn couatl and instructs it as to its duties, so that it can complete whatever task the parent leaves unfinished.\nSource: Monster Manual p. 43, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "grassland, forest, urban, desert"
    },
    {
        "name": "Crab",
        "size": "T",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "11 (natural armor)",
        "hp": "2 (1d4)",
        "speed": "walk 20 ft., swim 20 ft.",
        "str": "2",
        "dex": "11",
        "con": "10",
        "int": "1",
        "wis": "8",
        "cha": "2",
        "save": "",
        "skill": "Stealth +2",
        "passive": "9",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 30 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The crab can breathe air and water."
        },
        "action": {
            "name": "Claw",
            "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. 1 bludgeoning damage."
        },
        "description": "Source: Monster Manual p. 320, Tomb of Annihilation, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus",
        "environment": "coastal"
    },
    {
        "name": "Crawling Claw",
        "size": "T",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "12",
        "hp": "2 (1d4)",
        "speed": "walk 20 ft., climb 20 ft.",
        "str": "13",
        "dex": "14",
        "con": "11",
        "int": "5",
        "wis": "10",
        "cha": "4",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "understands Common but can't speak",
        "cr": "0",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, poisoned",
        "senses": "blindsight 30 ft. (blind beyond this radius)",
        "trait": {
            "name": "Turn Immunity",
            "text": "The claw is immune to effects that turn undead."
        },
        "action": {
            "name": "Claw",
            "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3 (1d4 + 1) bludgeoning or slashing damage (claw's choice).",
            "attack": "Claw|+3|1d4+1"
        },
        "description": "Crawling claws are the severed hands of murderers animated by dark magic so that they can go on killing. Wizards and warlocks of a dark bent use crawling claws as extra hands in their labors.\nMagical Origins. Through dark necromantic rituals, the life force of a murderer is bound to its severed hand, haunting and animating it. If a dead murderer's spirit already manifests as another undead creature, if the murderer is raised from death, or if the spirit has long passed on to another plane, the ritual fails.\nThe ritual invoked to create a crawling claw works best with a hand recently severed from a murderer. To this end, ritualists and their servants frequent public executions to gain possession of suitable hands, or make bargains with assassins and torturers.\nCreator's Control. A crawling claw can't be turned, nor can it be controlled by spells that control undead. These foul monsters are entirely bound to the will of their creator, which can concentrate on a claw in sight to mentally command its every action. If the crawling claw's creator doesn't command it, the claw follows its last command to the best of its ability.\nCommands given to a crawling claw must be simple. A claw can't be tasked with finding and killing a particular person, because its limited senses and intelligence prevent it from tracking and picking out specific individuals. However, a command to kill all creatures in a particular locale works. A crawling claw can easily feel out the contours of keys and doorknobs, crawling from room to room on a blind killing spree.\nMalign Intelligence. A crawling claw possesses little of the intellect and memories of the individual of which it was once a living part. The hate, jealousy, or greed that drove that person to murder lingers on, however, amplified by the claw's torturous fragmented state. Left to its own devices, a crawling claw imitates and recreates the same murderous acts it committed in life.\nLiving Claws. If a crawling claw is animated from the severed hand of a still-living murderer, the ritual binds the claw to the murderer's soul. The disembodied hand can then return to its former limb, its undead flesh knitting to the living arm from which it was severed.\nMade whole again, the murderer acts as though the hand had never been severed and the ritual had never taken place. When the crawling claw separates again, the living body falls into a coma. Destroying the crawling claw while it is away from the body kills the murderer. However, killing the murderer has no effect on the crawling claw.\nUndead Nature. A crawling claw doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 44, Curse of Strahd, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dragon Heist, Baldur's Gate: Descent Into Avernus, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Crocodile",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "19 (3d10+3)",
        "speed": "walk 20 ft., swim 30 ft.",
        "str": "15",
        "dex": "10",
        "con": "13",
        "int": "2",
        "wis": "10",
        "cha": "5",
        "save": "",
        "skill": "Stealth +2",
        "passive": "10",
        "languages": "",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Hold Breath",
            "text": "The crocodile can hold its breath for 15 minutes."
        },
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target",
            "attack": "Bite|+4|1d10+2"
        },
        "description": "Source: Monster Manual p. 320, Hoard of the Dragon Queen, Princes of the Apocalypse, Tomb of Annihilation, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Infernal Machine Rebuild, Explorer's Guide to Wildemount",
        "environment": "swamp, urban"
    },
    {
        "name": "Cult Fanatic",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any Non-Good Alignment",
        "ac": "13 (leather armor)",
        "hp": "33 (6d8+6)",
        "speed": "walk 30 ft.",
        "str": "11",
        "dex": "14",
        "con": "12",
        "int": "10",
        "wis": "13",
        "cha": "14",
        "save": "",
        "skill": "Deception +4, Persuasion +4, Religion +2",
        "passive": "11",
        "languages": "any one language (usually Common)",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Dark Devotion",
                "text": "The fanatic has advantage on saving throws against being charmed or frightened."
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:",
                    "Cantrips (at will): light, sacred flame, thaumaturgy",
                    "• 1st level (4 slots): command, inflict wounds, shield of faith",
                    "• 2nd level (3 slots): hold person, spiritual weapon"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The fanatic makes two melee attacks."
            },
            {
                "name": "Dagger",
                "text": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. 4 (1d4 + 2) piercing damage.",
                "attack": "Dagger|+4|1d4+2"
            }
        ],
        "slots": "4, 3",
        "spells": "light, sacred flame, thaumaturgy, command, inflict wounds, shield of faith, hold person, spiritual weapon",
        "description": "Fanatics are often part of a cult's leadership, using their charisma and dogma to influence and prey on those of weak will. Most are interested in personal power above all else\nSource: Monster Manual p. 345, Curse of Strahd, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Cultist",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any Non-Good Alignment",
        "ac": "12 (leather armor)",
        "hp": "9 (2d8)",
        "speed": "walk 30 ft.",
        "str": "11",
        "dex": "12",
        "con": "10",
        "int": "10",
        "wis": "11",
        "cha": "10",
        "save": "",
        "skill": "Deception +2, Religion +2",
        "passive": "10",
        "languages": "any one language (usually Common)",
        "cr": "1/8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Dark Devotion",
            "text": "The cultist has advantage on saving throws against being charmed or frightened."
        },
        "action": {
            "name": "Scimitar",
            "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. 4 (1d6 + 1) slashing damage.",
            "attack": "Scimitar|+3|1d6+1"
        },
        "description": "Cultists swear allegiance to dark powers such as elemental princes, demon lords, or archdevils. Most conceal their loyalties to avoid being ostracized, imprisoned, or executed for their beliefs. Unlike evil acolytes, cultists often show signs of insanity in their beliefs and practices.\nSource: Monster Manual p. 345, Curse of Strahd, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, The Lost Dungeon of Rickedness: Big Rick Energy, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Cyclops",
        "size": "H",
        "type": "giant",
        "alignment": "Chaotic Neutral",
        "ac": "14 (natural armor)",
        "hp": "138 (12d12+60)",
        "speed": "walk 30 ft.",
        "str": "22",
        "dex": "11",
        "con": "20",
        "int": "8",
        "wis": "6",
        "cha": "10",
        "save": "",
        "skill": "",
        "passive": "8",
        "languages": "Giant",
        "cr": "6",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Poor Depth Perception",
            "text": "The cyclops has disadvantage on any attack roll against a target more than 30 feet away."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The cyclops makes two greatclub attacks."
            },
            {
                "name": "Greatclub",
                "text": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. 19 (3d8 + 6) bludgeoning damage.",
                "attack": "Greatclub|+9|3d8+6"
            },
            {
                "name": "Rock",
                "text": "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. 28 (4d10 + 6) bludgeoning damage.",
                "attack": "Rock|+9|4d10+6"
            }
        ],
        "description": "Cyclopes are one-eyed giants that eke out a meager existence in wild lands. Isolationists by nature, they avoid contact with other races and try to drive away strangers in their territory.\nNonreligious. Legends claim that the cyclopes are the spawn of one of the gods of the giants, but these creatures pay little heed to any deities. They see little benefit in prayer and dislike ritual, which they perceive as complex and foreign. However, a cyclops that gains direct benefit from some site of divine power, or which is threatened by a supernatural force or creature, will pay homage as long as the benefit or threat remains.\nUnsophisticated. Though they are reasonably intelligent, cyclopes live simple, reclusive lives, keeping herds of animals for food. They prefer to dwell alone or in small family groups, lairing in caves, ruins, or rough structures of dry stone construction they build themselves. A cyclops keeps its herd animals with it at night, sealing the entrance to its home with boulders to let it serve double duty as a barn.\nA cyclops lairs within a day's journey of other cyclopes, so that they can meet to trade goods or seek mates. They craft weapons and tools of wood and stone, but will use metal when they can find it. Although cyclopes understand the Giant tongue, they write nothing and speak little, using grunts and gestures for their interactions with each other. Cyclopes don't use money for trade, but they value gold, shells, and other glittering and colorful objects as jewelry. A cyclops might wear a necklace strung with feathers and silver coins, but also with pewter goblets, cutlery, and other bits of ruined metal.\nUnwise. Cyclopes aren't great thinkers or strategists. Slow to learn and bound to their traditional ways, they find innovation difficult. Although they are a terrifying threat in combat due to their size and strength, they can often be tricked by clever foes. Cyclopes can be cowed and awed by obvious displays of magic. Rustics with little exposure to magic, they can be deceived into mistaking a warlock, cleric, or other caster for a powerful divine figure. However, their sense of pride causes them to react with vengeful, bloodthirsty violence once they learn that the individual they assumed was a \"god\" is a mere mortal.\nSource: Monster Manual p. 45, Rise of Tiamat, Tomb of Annihilation, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros",
        "environment": "underdark, mountain, grassland, hill, desert, coastal"
    },
    {
        "name": "Dao",
        "size": "L",
        "type": "elemental",
        "alignment": "Neutral Evil",
        "ac": "18 (natural armor)",
        "hp": "187 (15d10+105)",
        "speed": "walk 30 ft., burrow 30 ft., fly 30 ft.",
        "str": "23",
        "dex": "12",
        "con": "24",
        "int": "12",
        "wis": "13",
        "cha": "14",
        "save": "Int +5, Wis +5, Cha +6",
        "skill": "",
        "passive": "11",
        "languages": "Terran",
        "cr": "11",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "petrified",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Earth Glide",
                "text": "The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through."
            },
            {
                "name": "Elemental Demise",
                "text": "If the dao dies, its body disintegrates into crystalline powder, leaving behind only equipment the dao was wearing or carrying."
            },
            {
                "name": "Sure-Footed",
                "text": "The dao has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dao's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
                    "At will: detect evil and good, detect magic, stone shape",
                    "3/day each: passwall, move earth, tongues",
                    "1/day each: conjure elemental (earth elemental only), gaseous form, invisibility, phantasmal killer, plane shift, wall of stone"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The Dao makes two fist attacks or two maul attacks."
            },
            {
                "name": "Fist",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 15 (2d8 + 6) bludgeoning damage.",
                "attack": "Fist|+10|2d8+6"
            },
            {
                "name": "Maul",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 20 (4d6 + 6) bludgeoning damage. If the target is a Huge or smaller creature, it must succeed on a DC 18 Strength check or be knocked prone.",
                "attack": "Maul|+10|4d6+6"
            },
            {
                "name": "Variant: Genie Powers",
                "text": [
                    "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.",
                    "Disguises. Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.",
                    "Wishes. The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year), and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
                    "To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
                ]
            }
        ],
        "spells": "detect evil and good, detect magic, stone shape, passwall, move earth, tongues, conjure elemental, gaseous form, invisibility, phantasmal killer, plane shift, wall of stone",
        "description": "Dao are greedy, malicious genies from the Elemental Plane of Earth. They adorn themselves with jewelry crafted from precious gems and rare metals, and when they fly, their lower bodies become columns of swirling sand. A dao isn't happy unless it is the envy of other dao.\nAll That Glitters. The dao dwell in complexes of twisting tunnels and glittering ore-veined caverns on the Elemental Plane of Earth. These maze works are continually expanding as the dao delve into and reshape the rock around them. Dao care nothing for the poverty or misfortune of others. A dao might grind powdered gems and gold dust over its food to heighten the experience of eating, devouring its wealth as mortals consume a precious spice.\nLords of the Earth. A dao never assists a mortal unless the genie has something to gain, preferably treasure. Among the genies, dao are on speaking and trading terms with the efreet, but they have nothing but scorn for djinn and marids. Other races native to the Elemental Plane of Earth avoid the dao, which are always seeking new slaves to mine the maze works of their floating earth islands.\nProud Slavers. The dao trade for the finest slaves that money can buy, forcing them to work in dangerous subterranean realms that rumble with earthquakes. As much as they enjoy enslaving others, the dao hate being enslaved. Powerful wizards have been known to lure dao to the Material Plane and trap them in the confines of magic gemstones or iron flasks. Unfortunately for the dao, their greed makes it relatively easy for mages to cozen them into service.\nGenies. Genies are rare elemental creatures out of story and legend. Only a few can be found on the Material Plane. The rest reside on the Elemental Planes, where they rule from lavish palaces and are attended by worshipful slaves.\nGenies are as brilliant as they are mighty, as proud as they are majestic. Haughty and decadent, they have a profound sense of entitlement that stems from the knowledge that few creatures except the gods and other genies can challenge their power.\nCreatures of the Elements. A genie is born when the soul of a sentient living creature melds with the primordial matter of an elemental plane. Only under rare circumstances does such an elemental-infused soul coalesce into a manifest form and create a genie.\nA genie usually retains no connection to the soul that gave it form. That life force is a building block that determines the genie's form and apparent gender, as well as one or two key personality traits. Although they resemble humanoid beings, genies are elemental spirits given physical form. They don't mate with other genies or produce genie offspring, as all new genies are born out of the same mysterious fusion of spirit energy and elemental power. A genie with a stronger connection to its mortal soul might choose to sire a child with a mortal, although such offspring are rare.\nWhen a genie perishes, it leaves nothing behind except what it was wearing or carrying, along with a small trace of its native element: a pile of dust, a gust of wind, a flash of fire and smoke, or a burst of water and foam.\nIn contrast to their love of slaves, most genies loathe being bound to service themselves. A genie obeys the will of another only when bribed or compelled by magic. All genies command the power of their native element, but a rare few also possess the power to grant wishes. For both these reasons, mortal mages often seek to bind genies into service.\nNoble genies cultivate the jealousy and envy of other genies, asserting their superiority at every opportunity. Other genies respect the influence of the noble genies, knowing how unwise it is to defy a creature that can alter reality at a whim. A genie isn't beholden to any noble genie, however, and will sometimes choose to defy a noble genie's will and risk the consequences.\nTheir miraculous powers, the grandeur of their abodes, and the numbers of their slaves allow some genies to deceive themselves into believing they are as powerful as the gods. Some go so far as to demand that mortals of other realms-even whole continents or worlds-bow down before them.\nRule or Be Ruled. Mortal slaves serve to validate a genie's power and high self-opinion. A hundred flattering voices are music to a genie's ears, while two hundred mortal slaves prostrated at its feet are proof that it is lord and master. Genies view slaves as living property, and a genie without property amounts to nothing among its own kind. As a result, many genies treasure their slaves, treating them as honored members of their households. Evil genies freely threaten and abuse their slaves, but never to the extent that the slaves are no longer of use.\nDecadent Nobility. Noble genies are the rarest of their kind. They are used to getting what they want, and have learned to trade their ability to grant wishes to attain the objects of their desire. This constant indulgence has made them decadent, while their supreme power over reality makes them haughty and arrogant. Their vast palaces overflow with wonders and sensory delights beyond imagination.\nThe Power of Worship. Genies acknowledge the gods as powerful entities but have no desire to court or worship them. They find the endless fawning and mewling of religious devotees tiresome-except as it is directed toward them by their worshipful slaves.\nSource: Monster Manual p. 143, Princes of the Apocalypse, Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything",
        "environment": "underdark"
    },
    {
        "name": "Darkmantle",
        "size": "S",
        "type": "monstrosity",
        "alignment": "Unaligned",
        "ac": "11",
        "hp": "22 (5d6+5)",
        "speed": "walk 10 ft., fly 30 ft.",
        "str": "16",
        "dex": "12",
        "con": "13",
        "int": "2",
        "wis": "10",
        "cha": "5",
        "save": "",
        "skill": "Stealth +3",
        "passive": "10",
        "languages": "",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft.",
        "trait": [
            {
                "name": "Echolocation",
                "text": "The darkmantle can't use its blindsight while deafened."
            },
            {
                "name": "False Appearance",
                "text": "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
            }
        ],
        "action": [
            {
                "name": "Crush",
                "text": [
                    "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.",
                    "While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.",
                    "A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement."
                ],
                "attack": "Crush|+5|1d6+3"
            },
            {
                "name": "Darkness Aura (1/Day)",
                "text": "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
            }
        ],
        "description": "A darkmantle clings to cavern ceilings, remaining perfectly still as it waits for creatures to pass beneath it. From a distance, it can pass itself off as a stalactite or a lump of stone. Then it drops from the ceiling and unfurls, surrounding itself with magical darkness as it engulfs and crushes its prey.\nDarkmantles are found throughout the Underdark, but they are equally common on the Shadowfell. Thriving in that dark realm, they fill an ecological niche similar to bats on the Material Plane. Intelligent creatures of the Shadowfell sometimes train darkmantles as guardians or companions.\nSource: Monster Manual p. 46, Princes of the Apocalypse, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Death Dog",
        "size": "M",
        "type": "monstrosity",
        "alignment": "Neutral Evil",
        "ac": "12",
        "hp": "39 (6d8+12)",
        "speed": "walk 40 ft.",
        "str": "15",
        "dex": "14",
        "con": "14",
        "int": "3",
        "wis": "13",
        "cha": "6",
        "save": "",
        "skill": "Perception +5, Stealth +4",
        "passive": "15",
        "languages": "",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": {
            "name": "Two-Headed",
            "text": "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dog makes two bite attacks."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.",
                "attack": "Bite|+4|1d6+2"
            }
        ],
        "description": "A death dog is an ugly two-headed hound that roams plains, deserts, and the Underdark. Hate burns in a death dog's heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim's flesh to slowly rot off the bone.\nSource: Monster Manual p. 321, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Mythic Odysseys of Theros",
        "environment": "desert"
    },
    {
        "name": "Death Knight",
        "size": "M",
        "type": "undead",
        "alignment": "Chaotic Evil",
        "ac": "20 (plate armor, shield)",
        "hp": "180 (19d8+95)",
        "speed": "walk 30 ft.",
        "str": "20",
        "dex": "11",
        "con": "20",
        "int": "12",
        "wis": "16",
        "cha": "18",
        "save": "Dex +6, Wis +9, Cha +10",
        "skill": "",
        "passive": "13",
        "languages": "Abyssal, Common",
        "cr": "17",
        "resist": "",
        "immune": "necrotic, poison",
        "vulnerable": "",
        "conditionImmune": "exhaustion, frightened, poisoned",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Magic Resistance",
                "text": "The death knight has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Marshal Undead",
                "text": "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead."
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The death knight is a 19th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). It has the following paladin spells prepared:",
                    "• 1st level (4 slots): command, compelled duel, searing smite",
                    "• 2nd level (3 slots): hold person, magic weapon",
                    "• 3rd level (3 slots): dispel magic, elemental weapon",
                    "• 4th level (3 slots): banishment, staggering smite",
                    "• 5th level (2 slots): destructive wave (necrotic)"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The death knight makes three longsword attacks."
            },
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. 9 (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands, plus 18 (4d8) necrotic damage.",
                "attack": "Longsword|+11|1d8+5"
            },
            {
                "name": "Hellfire Orb (1/Day)",
                "text": "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one.",
                "attack": "Hellfire Orb (1/Day)||10d6"
            }
        ],
        "reaction": {
            "name": "Parry",
            "text": "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon."
        },
        "slots": "4, 3, 3, 3, 2",
        "spells": "command, compelled duel, searing smite, hold person, magic weapon, dispel magic, elemental weapon, banishment, staggering smite, destructive wave",
        "description": "When a paladin that falls from grace dies without seeking atonement, dark powers can transform the once-mortal knight into a hateful undead creature. A death knight is a skeletal warrior clad in fearsome plate armor. Beneath its helmet, one can see the knight's skull with malevolent pinpoints of light burning in its eye sockets.\nEldritch Power. The death knight retains the ability to cast divine spells. However, no death knight can use its magic to heal. A death knight also attracts and commands lesser undead, although death knights that serve powerful fiends might have fiendish followers instead. Death knights often use warhorse skeletons and nightmares as mounts.\nImmortal Until Redeemed. A death knight can arise anew even after it has been destroyed. Only when it atones for a life of wickedness or finds redemption can it finally escape its undead purgatory and truly perish.\nUndead Nature. A death knight doesn't require air, food, drink, or sleep.\nLord Soth.\n------\nLord Soth began his fall from grace with an act of heroism, saving an elf named Isolde from an ogre. Soth and Isolde fell in love, but Soth was already married. He had a servant dispose of his wife and was charged with murder, but fled with Isolde. When his castle fell under siege, he prayed for guidance and was told that he must atone for his misdeeds by completing a quest, but growing fears about Isolde's fidelity caused him to abandon his quest. Because his mission was not accomplished, a great cataclysm swept the land. When Isolde gave birth to a son, Soth refused to believe that the child was his and slew them both. All were incinerated in a fire that swept through the castle, yet Soth would find no rest in death, becoming a death knight.\n------\nSource: Monster Manual p. 47, Ghosts of Saltmarsh, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Death Slaad",
        "size": "M",
        "type": "aberration (shapechanger)",
        "alignment": "Chaotic Evil",
        "ac": "18 (natural armor)",
        "hp": "170 (20d8+80)",
        "speed": "walk 30 ft.",
        "str": "20",
        "dex": "15",
        "con": "19",
        "int": "15",
        "wis": "10",
        "cha": "16",
        "save": "",
        "skill": "Arcana +6, Perception +8",
        "passive": "18",
        "languages": "Slaad, telepathy 60 ft.",
        "cr": "10",
        "resist": "acid, cold, fire, lightning, thunder",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "blindsight 60 ft., darkvision 60 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Magic Resistance",
                "text": "The slaad has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The slaad's weapon attacks are magical."
            },
            {
                "name": "Regeneration",
                "text": "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The slaad's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). The slaad can innately cast the following spells, requiring no material components:",
                    "At will: detect magic, detect thoughts, invisibility (self only), mage hand, major image",
                    "2/day each: fear, fireball, fly, tongues",
                    "1/day each: cloudkill, plane shift"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The slaad makes three attacks: one with its bite and two with its claws or greatsword."
            },
            {
                "name": "Bite (Slaad Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. 9 (1d8 + 5) piercing damage plus 7 (2d6) necrotic damage.",
                "attack": "Bite (Slaad Form Only)|+9|1d8+5"
            },
            {
                "name": "Claws (Slaad Form Only)",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. 10 (1d10 + 5) slashing damage plus 7 (2d6) necrotic damage.",
                "attack": "Claws (Slaad Form Only)|+9|1d10+5"
            },
            {
                "name": "Greatsword",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. 12 (2d6 + 5) slashing damage plus 7 (2d6) necrotic damage.",
                "attack": "Greatsword|+9|2d6+5"
            },
            {
                "name": "Variant: Control Gem",
                "text": [
                    "Implanted in the slaad's brain is a magic control gem. The slaad must obey whoever possesses the gem and is immune to being charmed while so controlled.",
                    "Certain spells can be used to acquire the gem. If the slaad fails its saving throw against imprisonment, the spell can transfer the gem to the spellcaster's open hand, instead of imprisoning the slaad. A wish spell, if cast in the slaad's presence, can be worded to acquire the gem.",
                    "A greater restoration spell cast on the slaad destroys the gem without harming the slaad.",
                    "Someone who is proficient in Wisdom (Medicine) can remove the gem from an incapacitated slaad. Each try requires 1 minute of uninterrupted work and a successful DC 20 Wisdom (Medicine) check. Each failed attempt deals 22 (4d10) psychic damage to the slaad."
                ]
            }
        ],
        "spells": "detect magic, detect thoughts, invisibility, mage hand, major image, fear, fireball, fly, tongues, cloudkill, plane shift",
        "description": "Death slaadi are suffused with energy from the Negative Energy Plane and exemplify evil's corruption of chaos, and they take sadistic pleasure in bringing harm to others. They propagate their race by dragooning mobs of red and blue slaadi and invading other planes. Humanoids who survive the incursion become incubators for new slaadi.\nSlaadi. In the Ever-Changing Chaos of Limbo, bits of forest and meadow, ruined castles, and isolated islands drift through a tumult of fire, water, earth, and wind. The foremost inhabitants of this inhospitable plane are the toad-like slaadi. Slaadi are undisciplined and have no formal hierarchy, although weaker slaadi obey stronger ones under threat of annihilation.\nThe Spawning Stone. Long ago, Primus, overlord of the modrons, created a gigantic, geometrically complex stone imbued with the power of law. He then cast it adrift in Limbo, believing that the stone would bring order to the chaos of that plane and halt the spread of chaos to other planes. As the stone's power grew, it became possible for creatures with ordered minds, such as modrons and githzerai, to create enclaves in Limbo. However, Primus's creation had an unforeseen side effect: the chaotic energy absorbed by the stone spawned the horrors that came to be known as slaadi. Sages refer to Primus's massive creation as the Spawning Stone for this reason.\nThe slaadi wiped out every last modron enclave in Limbo. As creatures of utter chaos, slaadi loathe modrons and attack them on sight. Nonetheless, Primus stands by his creation and either doesn't perceive the slaadi as threats or chooses to ignore them.\nBirth and Transformation. Slaadi have horrific cycles of reproduction. Slaadi reproduce either by implanting humanoid hosts with eggs or by infecting them with a transformative disease called chaos phage. Each color of slaad reproduces or transforms in a different way, with red slaadi spawning blue and green slaadi, and blue slaadi spawning red and green. Each green slaad undergoes a lifelong cycle of transformation into the more powerful gray and death slaadi. With each transformation, the slaad retains its memories.\nShapechangers. Some slaadi can transform into the humanoid creatures from which they were originally spawned. These slaadi return to the Material Plane to sow discord in the guise of their former selves.\nSource: Monster Manual p. 278, Curse of Strahd, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": ""
    },
    {
        "name": "Death Tyrant",
        "size": "L",
        "type": "undead",
        "alignment": "Lawful Evil",
        "ac": "19 (natural armor)",
        "hp": "187 (25d10+50)",
        "speed": "walk 0 ft., fly 20 ft.",
        "str": "10",
        "dex": "14",
        "con": "14",
        "int": "19",
        "wis": "15",
        "cha": "19",
        "save": "Str +5, Con +7, Int +9, Wis +7, Cha +9",
        "skill": "Perception +12",
        "passive": "22",
        "languages": "Deep Speech, Undercommon",
        "cr": "14",
        "resist": "",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, paralyzed, petrified, poisoned, prone",
        "senses": "darkvision 120 ft.",
        "trait": {
            "name": "Negative Energy Cone",
            "text": [
                "The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active.",
                "Any creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed."
            ]
        },
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 14 (4d6) piercing damage.",
                "attack": "Bite|+5|4d6"
            },
            {
                "name": "Eye Rays",
                "text": [
                    "The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:",
                    "1. Charm Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be charmed by the death tyrant for 1 hour, or until the death tyrant harms the creature.",
                    "2. Paralyzing Ray. The targeted creature must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "3. Fear Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "4. Slowing Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "5. Enervation Ray. The targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.",
                    "6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 17 Strength saving throw or the death tyrant moves it up to 30 feet in any direction. It is restrained by the ray's telekinetic grip until the start of the death tyrant's next turn or until the death tyrant is incapacitated.",
                    "If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 feet in any direction. The death tyrant can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.",
                    "7. Sleep Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.",
                    "8. Petrification Ray. The targeted creature must make a DC 17 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.",
                    "9. Disintegration Ray. If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.",
                    "If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.",
                    "10. Death Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points."
                ],
                "attack": [
                    "Eye Rays||8d8",
                    "Eye Rays||10d8",
                    "Eye Rays||10d10"
                ]
            }
        ],
        "legendary": [
            {
                "text": "The undead can take 1 legendary action, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead regains spent legendary action at the start of its turn."
            },
            {
                "name": "Eye Ray",
                "text": "The death tyrant uses one random eye ray."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "When fighting inside its lair, a death tyrant can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), the death tyrant can take one lair action to cause one of the following effects:",
                    "• An area that is a 50-foot cube within 120 feet of the tyrant is filled with spectral eyes and tentacles. To creatures other than the death tyrant, that area is lightly obscured and difficult terrain until initiative count 20 on the next round.",
                    "• Walls sprout spectral appendages until initiative count 20 on the round after next. Any creature, including one on the Ethereal Plane, that is hostile to the tyrant and starts its turn within 10 feet of a wall must succeed on a DC 17 Dexterity saving throw or be grappled. Escaping requires a successful DC 17 Strength (Athletics) or Dexterity (Acrobatics) check.",
                    "• A spectral eye opens in the air at a point within 50 feet of the tyrant. One random eye ray of the tyrant shoots from that eye, which is considered to be an ethereal source, at a target of the tyrant's choice. The eye then closes and disappears.",
                    "The death tyrant can't repeat an effect until all three have been used, and it can't use the same effect on consecutive rounds."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "A region containing a death tyrant's lair is warped by the creature's unnatural presence, which creates one or more of the following effects:",
                    "• Creatures within 1 mile of the tyrant's lair sometimes feel as if they're being watched even when they aren't.",
                    "• When a creature hostile to the tyrant and aware of its existence finishes a long rest within 1 mile of the tyrant's lair, roll a d20 for that creature. On a roll of 10 or lower, the creature is subjected to one random eye ray of the tyrant.",
                    "If the death tyrant dies, these effects fade over the course of 1d10 days."
                ]
            }
        ],
        "description": "On rare occasions, a beholder's sleeping mind drifts to places beyond its normal madness, imagining a reality in which it exists beyond death. When such dreams take hold, a beholder can transform, its flesh sloughing away to leave a death tyrant behind. This monster possesses the cunning and much of the magic it had in life, but it is fueled by the power of undeath. A death tyrant appears as a massive, naked skull, with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away, ten spectral eyes hover above the creature and glare in all directions.\nDeathly Despot. As they did when they were beholders, death tyrants lord their power over other creatures. Moreover, a beholder's ability to quash magical energy with its central eye gives way to a more sinister power in a death tyrant, which can transform former slaves and enemies into undead servants.\nZombies created by a death tyrant are used and discarded as needed. They stand guard at the entrances to the death tyrant's lair or guard its treasure vaults.\nActing as bait for traps or as combat fodder, zombies keep powerful enemies distracted while the death tyrant moves into position and prepares to destroy them.\nArmies of the Dead. A death tyrant that embraces undeath becomes an engine of destruction. Driven by a hunger for power and security, it advances against humanoid settlements, using its eye rays to destroy every creature it encounters, then building an army of undead. If left unchecked, a death tyrant might wipe out the population of a city in weeks, then set its undead eye on wider conquest. As each settlement falls, the death tyrant's zombie forces build to overwhelming numbers.\nUndead Nature. A death tyrant doesn't require air, food, drink, or sleep.\nA Death Tyrant's Lair. A death tyrant's lair is usually the same site it held as a beholder, but it contains more trappings of death and decay. A death tyrant encountered in its lair has a challenge rating of 15 (13,000 XP).\nThe death tyrant can't repeat an effect until all three have been used, and it can't use the same effect on consecutive rounds.\nSource: Monster Manual p. 29, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Deep Gnome (Svirfneblin)",
        "size": "S",
        "type": "humanoid (gnome)",
        "alignment": "Neutral Good",
        "ac": "15 (chain shirt)",
        "hp": "16 (3d6+6)",
        "speed": "walk 20 ft.",
        "str": "15",
        "dex": "14",
        "con": "14",
        "int": "12",
        "wis": "10",
        "cha": "9",
        "save": "",
        "skill": "Investigation +3, Perception +2, Stealth +4",
        "passive": "12",
        "languages": "Gnomish, Terran, Undercommon",
        "cr": "1/2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Stone Camouflage",
                "text": "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            },
            {
                "name": "Gnome Cunning",
                "text": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:",
                    "At will: nondetection (self only)",
                    "1/day each: blindness/deafness, blur, disguise self"
                ]
            }
        ],
        "action": [
            {
                "name": "War Pick",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) piercing damage.",
                "attack": "War Pick|+4|1d8+2"
            },
            {
                "name": "Poisoned Dart",
                "text": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success",
                "attack": "Poisoned Dart|+4|1d4+2"
            }
        ],
        "spells": "nondetection, blindness/deafness, blur, disguise self",
        "description": "Deep gnomes, or svirfneblin, live far below the world's surface in twisting warrens and sculpted caverns. They survive by virtue of their stealth, cleverness, and tenacity. Their gray skin allows them to blend in with surrounding stonework. They are also surprisingly heavy and strong for their size. An average adult weighs 100 to 120 pounds and stands 3 feet tall.\nA typical svirfneblin enclave contains several hundred deep gnomes and is strongly fortified. Secret tunnels lead to and from the settlement, and the deep gnomes use these as evacuation routes when the enclave comes under attack.\nEstablished Gender Roles. Male svirfneblin are bald, while females have stringy gray hair. Traditionally, females run the enclaves while males scour the outskirts in search of enemies and deposits of precious gemstones.\nGemstone Harvesters. Svirfneblin cherish fine gemstones, especially rubies, which they harvest from mines deep in the Underdark. The hunt for gems often brings them into conflict with beholders, drow, kuo-toa, duergar, and mind flayers. Of all their natural enemies, deep gnomes fear and despise the murderous, demon worshiping drow the most.\nEarth Friends. Deep gnomes are often encountered in the company of creatures from the Elemental Plane of Earth. Some svirfneblin can summon such creatures. Earth creatures guard svirfneblin settlements, especially xorn enticed to service with the promise of gems to feed on.\nSource: Monster Manual p. 164, Princes of the Apocalypse, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Deer",
        "size": "M",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "13",
        "hp": "4 (1d8)",
        "speed": "walk 50 ft.",
        "str": "11",
        "dex": "16",
        "con": "11",
        "int": "2",
        "wis": "14",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "12",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d4) piercing damage.",
            "attack": "Bite|+2|1d4"
        },
        "description": "Source: Monster Manual p. 321, Hoard of the Dragon Queen, Essentials Kit: Dragon of Icespire Peak",
        "environment": "grassland, forest"
    },
    {
        "name": "Demilich",
        "size": "T",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "20 (natural armor)",
        "hp": "80 (20d4)",
        "speed": "walk 0 ft., fly 30 ft.",
        "str": "1",
        "dex": "20",
        "con": "10",
        "int": "20",
        "wis": "17",
        "cha": "20",
        "save": "Con +6, Int +11, Wis +9, Cha +11",
        "skill": "",
        "passive": "13",
        "languages": "",
        "cr": "18",
        "resist": "bludgeoning, piercing, slashing from magic weapons",
        "immune": "necrotic, poison, psychic; bludgeoning, piercing, slashing from nonmagical attacks",
        "vulnerable": "",
        "conditionImmune": "charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone, stunned",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Avoidance",
                "text": "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the demilich fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Turn Immunity",
                "text": "The demilich is immune to effects that turn undead."
            }
        ],
        "action": [
            {
                "name": "Howl (Recharge 5-6)",
                "text": "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn."
            },
            {
                "name": "Life Drain",
                "text": "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets.",
                "attack": "Life Drain||6d6"
            },
            {
                "name": "Variant: Acererak and His Disciples",
                "text": [
                    "The transformation into a demilich isn't a bitter end for all liches that experience it. Made as a conscious choice, the path of the demilich becomes the next step in a dark evolution. The lich Acererak—a powerful wizard and demonologist and the infamous master of the Tomb of Horrors—anticipated his own transformation, preparing for it by setting enchanted gemstones into his skull's eye sockets and teeth. Each of these soul gems possessed the power to capture the souls on which his phylactery would feed.",
                    "Acererak abandoned his physical body, accepting that it would molder and dissolve to dust while he traveled the planes as a disembodied consciousness. If the skull that was his last physical remains was ever disturbed, its gems would claim the souls of the insolent intruders to his tomb, magically transferring them to his phylactery.",
                    "Liches who follow Acererak's path believe that by becoming free of their bodies, they can continue their quest for power beyond the mortal world. As their patron did, they secure their remains within well-guarded vaults, using soul gems to maintain their phylacteries and destroy the adventurers who disturb their lairs.",
                    "Acererak or another demilich like him has a challenge rating of 21 (33,000 XP), or 23 (50,000 XP) in its lair, and gains the following additional action option.",
                    "Trap Soul. The demilich targets one creature that it can see within 30 feet of it. The target must make a DC 19 Charisma saving throw. On a failed save, the target's soul is magically trapped inside one of the demilich's gems. While the soul is trapped, the target's body and all the equipment it is carrying cease to exist. On a successful save, the target takes 24 (7d6) necrotic damage, and if this damage reduces the target to 0 hit points, its soul is trapped as if it failed the saving throw. A soul trapped in a gem for 24 hours is devoured and ceases to exist.",
                    "If the demilich drops to 0 hit points, it is destroyed and turns to powder, leaving behind its gems. Crushing a gem releases any soul trapped within, at which point the target's body re-forms in an unoccupied space nearest to the gem and in the same state as when it was trapped."
                ]
            }
        ],
        "legendary": [
            {
                "text": "The undead can take 4 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The undead regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Flight",
                "text": "The demilich flies up to half its flying speed."
            },
            {
                "name": "Cloud of Dust",
                "text": "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich's next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich's next turn."
            },
            {
                "name": "Energy Drain (Costs 2 Actions)",
                "text": "Each creature with in 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the greater restoration spell or similar magic."
            },
            {
                "name": "Vile Curse (Costs 3 Actions)",
                "text": "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success."
            },
            {
                "name": "Lair Actions"
            },
            {
                "text": [
                    "On initiative count 20 (losing initiative ties), the demilich rolls a d20. On a result of 11 or higher, the demilich takes a lair action to cause one of the following effects. It can't use the same effect two rounds in a row.",
                    "• The tomb trembles violently for a moment. Each creature on the floor of the tomb must succeed on a DC 19 Dexterity saving throw or be knocked prone.",
                    "• The demilich targets one creature it can see within 60 feet of it. An antimagic field fills the space of the target, moving with it until initiative count 20 on the next round.",
                    "• The demilich targets any number of creatures it can see within 30 feet of it. No target can regain hit points until initiative count 20 on the next round."
                ]
            },
            {
                "name": "Regional Effects"
            },
            {
                "text": [
                    "A demilich's tomb might have any or all of the following effects in place:",
                    "• The first time a non-evil creature enters the tomb's area, the creature takes 16 (3d10) necrotic damage.",
                    "• Monsters in the tomb have advantage on saving throws against being charmed or frightened, and against features that turn undead.",
                    "• The tomb is warded against the magical travel of creatures the demilich hasn't authorized. Such creatures can't teleport into or out of the tomb's area or use planar travel to enter or leave it. Effects that allow teleportation or planar travel work within the tomb as long as they aren't used to leave or enter the tomb's area.",
                    "If the demilich is destroyed, these effects fade over the course of 10 days."
                ]
            }
        ],
        "description": "The immortality granted to a lich lasts only as long as it feeds mortal souls to its phylactery. If it falters or fails in that task, its bones turn to dust until only its skull remains. This \"demilich\" contains only a fragment of the lich's malevolent life force-just enough so that if it is disturbed, these remains rise into the air and assume a wraith-like form. The skull then emits a terrifying howl that can slay the weak-hearted and leave others trembling with fear. Left alone, it sinks back down and returns to the empty peace of its existence.\nFew liches seek to become demiliches, for it means an end to the existence they hoped to preserve by becoming undead. However, time can erode the lich's reason and memory, causing it to retreat into its ancient tomb and forget to feed on souls. The spells it once knew fade from its mind, and it no longer channels the arcane energy it wielded as a lich. However, even as a mere skull it remains a deadly and vexing enemy.\nEnduring Existence. Even after a lich is reduced to a demilich state, its phylactery survives. As long as its phylactery is intact, the demilich can't be permanently destroyed. Its skull reforms after 1d10 days, restoring the creature to its wretched state. If it has the presence of mind to do so, a demilich can reclaim its former power by feeding just one soul to its phylactery. Doing so restores the demilich to lich form, reconstituting its undead body.\nUndead Nature. A demilich doesn't require air, food, drink, or sleep. So great is a demilich's will to survive that it always has the maximum number of hit points for its Hit Dice, instead of average hit points.\nA Demilich's Lair. A demilich hides its earthly remains and treasures in a labyrinthine tomb guarded by monsters and traps. At the heart of this labyrinth rests the demilich's skull and the dust from its other bones. In its crypt, a demilich has access to lair actions and additional uses for its legendary actions. Its whole lair also has unique traits. A demilich in its lair has a challenge rating of 20 (24,500 XP).\nAcererak and His Disciples. The transformation into a demilich isn't a bitter end for all liches that experience it. Made as a conscious choice, the path of the demilich becomes the next step in a dark evolution. The lich Acererak-a powerful wizard and demonologist and the infamous master of the Tomb of Horrors-anticipated his own transformation, preparing for it by setting enchanted gemstones into his skull's eye sockets and teeth. Each of these soul gems possessed the power to capture the souls on which his phylactery would feed.\nAcererak abandoned his physical body, accepting that it would molder and dissolve to dust while he traveled the planes as a disembodied consciousness. If the skull that was his last physical remains was ever disturbed, its gems would claim the souls of the insolent intruders to his tomb, magically transferring them to his phylactery.\nLiches who follow Acererak's path believe that by becoming free of their bodies, they can continue their quest for power beyond the mortal world. As their patron did, they secure their remains within well-guarded vaults, using soul gems to maintain their phylacteries and destroy the adventurers who disturb their lairs.\nAcererak or another demilich like him has a challenge rating of 21 (33,000 XP), or 23 (50,000 XP) in its lair, and gains the following additional action option.\nTrap Soul. The demilich targets one creature that it can see within 30 feet of it. The target must make a DC 19 Charisma saving throw. On a failed save, the target's soul is magically trapped inside one of the demilich's gems. While the soul is trapped, the target's body and all the equipment it is carrying cease to exist. On a successful save, the target takes 24 (7d6) necrotic damage, and if this damage reduces the target to 0 hit points, its soul is trapped as if it failed the saving throw. A soul trapped in a gem for 24 hours is devoured and ceases to exist.\nIf the demilich drops to 0 hit points, it is destroyed and turns to powder, leaving behind its gems. Crushing a gem releases any soul trapped within, at which point the target's body re-forms in an unoccupied space nearest to the gem and in the same state as when it was trapped.\nSource: Monster Manual p. 48, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Deva",
        "size": "M",
        "type": "celestial",
        "alignment": "Lawful Good",
        "ac": "17 (natural armor)",
        "hp": "136 (16d8+64)",
        "speed": "walk 30 ft., fly 90 ft.",
        "str": "18",
        "dex": "18",
        "con": "18",
        "int": "17",
        "wis": "20",
        "cha": "20",
        "save": "Wis +9, Cha +9",
        "skill": "Insight +9, Perception +9",
        "passive": "19",
        "languages": "all, telepathy 120 ft.",
        "cr": "10",
        "resist": "radiant; bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed, exhaustion, frightened",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Angelic Weapons",
                "text": "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
            },
            {
                "name": "Magic Resistance",
                "text": "The deva has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:",
                    "At will: detect evil and good",
                    "1/day each: commune, raise dead"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The deva makes two melee attacks."
            },
            {
                "name": "Mace",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.",
                "attack": "Mace|+8|1d6+4"
            },
            {
                "name": "Healing Touch (3/Day)",
                "text": "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            },
            {
                "name": "Change Shape",
                "text": [
                    "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).",
                    "In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
                ]
            }
        ],
        "spells": "detect evil and good, commune, raise dead",
        "description": "An angel is a celestial agent sent forth into the planes to further its god's agenda for weal or woe. Its sublime beauty and presence can drive awestruck onlookers to their knees. Yet angels are destroyers too, and their appearance portends doom as often as it signals hope.\nShards of the Divine. Angels are formed from the astral essence of benevolent gods and are thus divine beings of great power and foresight.\nAngels act out the will of their gods with tireless devotion. Even chaotic good deities command lawful good angels, knowing that the angels' dedication to order best allows them to fulfill divine commands. An angel follows a single driving purpose, as decreed by its deity. However, an angel is incapable of following commands that stray from the path of law and good.\nAn angel slays evil creatures without remorse. As the embodiment of law and good, an angel is almost never mistaken in its judgments. This quality can create a sense of superiority in an angel, a sense that comes to the fore when an angel's task conflicts with the goals of another creature. The angel never acquiesces or gives way. When an angel is sent to aid mortals, it is sent not to serve but to command. The gods of good therefore send their angels among mortals only in response to the most dire circumstances.\nFallen Angels. An angel's moral compass grants it a sense of infallibility that can sometimes spell its undoing. Angels are usually too wise to fall for a simple deception, but sometimes pride can lead one to commit an evil act. Whether intentional or accidental, such an act is a permanent stain that marks the angel as an outcast. Fallen angels retain their power but lose their connection to the deities from which they were made. Most fallen angels take their banishment personally, rebelling against the powers they served by seeking rulership over a section of the Abyss or a place among other fallen in the hierarchy of the Nine Hells. Zariel, the ruler of the first layer of the Nine Hells, is such a creature. Rather than rebel, some fallen angels resign themselves to an isolated existence on the Material Plane, living in disguise as simple hermits. If they are redeemed, they can become powerful allies dedicated to justice and compassionate service.\nImmortal Nature. An angel doesn't require food, drink, or sleep.\nDeva. Devas are angels that act as divine messengers or agents to the Material Plane, the Shadowfell, and the Feywild and that can assume a form appropriate to the realm they are sent to.\nLegend tells of angels that take mortal form for years, lending aid, hope, and courage to goodhearted folk. A deva can take any shape, although it prefers to appear to mortals as an innocuous humanoid or animal. When circumstances require that it cast off its guise, a deva is a beautiful humanoid-like creature with silvery skin. Its hair and eyes gleam with an unearthly luster, and large feathery wings unfurl from its shoulder blades.\nSource: Monster Manual p. 16, Waterdeep: Dungeon of the Mad Mage",
        "environment": ""
    },
    {
        "name": "Dire Wolf",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "14 (natural armor)",
        "hp": "37 (5d10+10)",
        "speed": "walk 50 ft.",
        "str": "17",
        "dex": "15",
        "con": "15",
        "int": "3",
        "wis": "12",
        "cha": "7",
        "save": "",
        "skill": "Perception +3, Stealth +4",
        "passive": "13",
        "languages": "",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": [
            {
                "name": "Keen Hearing and Smell",
                "text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        "action": {
            "name": "Bite",
            "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
            "attack": "Bite|+5|2d6+3"
        },
        "description": "Source: Monster Manual p. 321, Curse of Strahd, Storm King's Thunder, Tales from the Yawning Portal, Ghosts of Saltmarsh, Icewind Dale: Rime of the Frostmaiden",
        "environment": "forest, hill"
    },
    {
        "name": "Displacer Beast",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Lawful Evil",
        "ac": "13 (natural armor)",
        "hp": "85 (10d10+30)",
        "speed": "walk 40 ft.",
        "str": "18",
        "dex": "15",
        "con": "16",
        "int": "6",
        "wis": "12",
        "cha": "8",
        "save": "",
        "skill": "",
        "passive": "11",
        "languages": "",
        "cr": "3",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Avoidance",
                "text": "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                "name": "Displacement",
                "text": "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The displacer beast makes two attacks with its tentacles."
            },
            {
                "name": "Tentacle",
                "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. 7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage.",
                "attack": "Tentacle|+6|1d6+4"
            }
        ],
        "description": "This monstrous predator takes its name from its ability to displace light so that it appears to be several feet away from its actual location. A displacer beast resembles a sleek great cat covered in blue-black fur.\nHowever, its otherworldly origins are clear in its six legs and the two tentacles sprouting from its shoulders, both ending in pads tipped with spiky protrusions. A displacer beast's eyes glow with an awful malevolence that persists even in death.\nUnseelie Origins. Displacer beasts roamed the twilight lands of the Feywild for ages, until they were captured and trained by the Unseelie Court. The warriors of the court selectively bred the beasts to reinforce their ferocious and predatory nature, using them to hunt unicorns, pegasi, and other wondrous prey. However, it didn't take long for the displacer beasts to use their malevolent intelligence to escape their masters.\nRunning and breeding freely in the Feywild, the displacer beasts soon came to the attention of the Seelie Court. With blink dog companions at their side, fey hunters drove these predators to the fringes of the Feywild, where many crossed over to the Material Plane. To this day, displacer beasts and blink dogs attack each other on sight.\nLove of the Kill. Displacer beasts kill not just for food but also for sport. They target prey even when not hungry, often toying with their victims to entertain themselves until they are ready to eat. After killing its prey using its tentacles, a displacer beast drags the corpse to a quiet place where it can feed without distraction.\nDisplacer beasts hunt alone or in small prides that demonstrate skill at setting ambushes. A single beast will strike and withdraw, luring prey into a densely wooded area where its pack mates wait. Packs of displacer beasts hunting near trade roads recall the frequency and schedule of regular caravans, laying down ambushes to pick off those caravans.\nSource: Monster Manual p. 81, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Eberron: Rising from the Last War",
        "environment": "forest"
    },
    {
        "name": "Djinni",
        "size": "L",
        "type": "elemental",
        "alignment": "Chaotic Good",
        "ac": "17 (natural armor)",
        "hp": "161 (14d10+84)",
        "speed": "walk 30 ft., fly 90 ft.",
        "str": "21",
        "dex": "15",
        "con": "22",
        "int": "15",
        "wis": "16",
        "cha": "20",
        "save": "Dex +6, Wis +7, Cha +9",
        "skill": "",
        "passive": "13",
        "languages": "Auran",
        "cr": "11",
        "resist": "",
        "immune": "lightning, thunder",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Elemental Demise",
                "text": "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
                    "At will: detect evil and good, detect magic, thunderwave",
                    "3/day each: create food and water (can create wine instead of water), tongues, wind walk",
                    "1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The djinni makes three scimitar attacks."
            },
            {
                "name": "Scimitar",
                "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice).",
                "attack": "Scimitar|+9|2d6+5"
            },
            {
                "name": "Create Whirlwind",
                "text": [
                    "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.",
                    "A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
                ]
            },
            {
                "name": "Variant: Genie Powers",
                "text": [
                    "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.",
                    "Disguises. Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.",
                    "Wishes. The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year), and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
                    "To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
                ]
            }
        ],
        "spells": "detect evil and good, detect magic, thunderwave, create food and water, tongues, wind walk, conjure elemental, creation, gaseous form, invisibility, major image, plane shift",
        "description": "Proud, sensuous genies from the Elemental Plane of Air, the djinn are attractive, tall, well-muscled humanoids with blue skin and dark eyes. They dress in airy, shimmering silks, designed as much for comfort as to flaunt their musculature.\nAiry Aesthetes. Djinn rule floating islands of cloud stuff covered with enormous pavilions, or topped with wondrous buildings, courtyards, fountains, and gardens. Creatures of comfort and ease, djinn enjoy succulent fruits, pungent wines, fine perfumes, and beautiful music.\nDjinn are known for their sense of mischief and their favorable attitude toward mortals. Among genies, djinn deal coolly with efreet and marids, whom they view as haughty. They openly despise dao and strike against them with little provocation.\nMasters of the Wind. Masters of the air, the djinn ride powerful whirlwinds that they create and direct on a whim, and which can even carry passengers. Creatures that stand against a djinni are assaulted by wind and thunder, even as the djinni spins away on that wind if outmatched in combat. When a djinni flies, its lower body transforms into a column of swirling air.\nAccepting Servitors. The djinn believe that servitude is a matter of fate, and that no being can contest the hand of fate. As a result, of all the genies, djinn are the ones most amenable to servitude, though they never enjoy it. Djinn treat their slaves more like servants deserving of kindness and protection, and they part with them reluctantly.\nA mortal who desires the brief service of a djinni can entreat it with fine gifts, or use flattery to bribe it into compliance. Powerful wizards are able to forgo such niceties, however, if they can summon, bind into service, or imprison a djinni using magic. Long-term service displeases a djinni, and imprisonment is inexcusable. Djinn resent the cruel wizards that have imprisoned their kind in bottles, iron flasks, and wind instruments throughout the ages. Betrayal, particularly by a mortal whom a djinni trusted, is a vile deed that only deadly vengeance can amend.\nGenies. Genies are rare elemental creatures out of story and legend. Only a few can be found on the Material Plane. The rest reside on the Elemental Planes, where they rule from lavish palaces and are attended by worshipful slaves.\nGenies are as brilliant as they are mighty, as proud as they are majestic. Haughty and decadent, they have a profound sense of entitlement that stems from the knowledge that few creatures except the gods and other genies can challenge their power.\nCreatures of the Elements. A genie is born when the soul of a sentient living creature melds with the primordial matter of an elemental plane. Only under rare circumstances does such an elemental-infused soul coalesce into a manifest form and create a genie.\nA genie usually retains no connection to the soul that gave it form. That life force is a building block that determines the genie's form and apparent gender, as well as one or two key personality traits. Although they resemble humanoid beings, genies are elemental spirits given physical form. They don't mate with other genies or produce genie offspring, as all new genies are born out of the same mysterious fusion of spirit energy and elemental power. A genie with a stronger connection to its mortal soul might choose to sire a child with a mortal, although such offspring are rare.\nWhen a genie perishes, it leaves nothing behind except what it was wearing or carrying, along with a small trace of its native element: a pile of dust, a gust of wind, a flash of fire and smoke, or a burst of water and foam.\nIn contrast to their love of slaves, most genies loathe being bound to service themselves. A genie obeys the will of another only when bribed or compelled by magic. All genies command the power of their native element, but a rare few also possess the power to grant wishes. For both these reasons, mortal mages often seek to bind genies into service.\nNoble genies cultivate the jealousy and envy of other genies, asserting their superiority at every opportunity. Other genies respect the influence of the noble genies, knowing how unwise it is to defy a creature that can alter reality at a whim. A genie isn't beholden to any noble genie, however, and will sometimes choose to defy a noble genie's will and risk the consequences.\nTheir miraculous powers, the grandeur of their abodes, and the numbers of their slaves allow some genies to deceive themselves into believing they are as powerful as the gods. Some go so far as to demand that mortals of other realms-even whole continents or worlds-bow down before them.\nRule or Be Ruled. Mortal slaves serve to validate a genie's power and high self-opinion. A hundred flattering voices are music to a genie's ears, while two hundred mortal slaves prostrated at its feet are proof that it is lord and master. Genies view slaves as living property, and a genie without property amounts to nothing among its own kind. As a result, many genies treasure their slaves, treating them as honored members of their households. Evil genies freely threaten and abuse their slaves, but never to the extent that the slaves are no longer of use.\nDecadent Nobility. Noble genies are the rarest of their kind. They are used to getting what they want, and have learned to trade their ability to grant wishes to attain the objects of their desire. This constant indulgence has made them decadent, while their supreme power over reality makes them haughty and arrogant. Their vast palaces overflow with wonders and sensory delights beyond imagination.\nThe Power of Worship. Genies acknowledge the gods as powerful entities but have no desire to court or worship them. They find the endless fawning and mewling of religious devotees tiresome-except as it is directed toward them by their worshipful slaves.\nSource: Monster Manual p. 144, Princes of the Apocalypse, Ghosts of Saltmarsh, Tasha's Cauldron of Everything",
        "environment": "coastal"
    },
    {
        "name": "Doppelganger",
        "size": "M",
        "type": "monstrosity (shapechanger)",
        "alignment": "Neutral",
        "ac": "14",
        "hp": "52 (8d8+16)",
        "speed": "walk 30 ft.",
        "str": "11",
        "dex": "18",
        "con": "14",
        "int": "11",
        "wis": "12",
        "cha": "14",
        "save": "",
        "skill": "Deception +6, Insight +3",
        "passive": "11",
        "languages": "Common",
        "cr": "3",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "charmed",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Shapechanger",
                "text": "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Ambusher",
                "text": "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it surprised."
            },
            {
                "name": "Surprise Attack",
                "text": "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The doppelganger makes two melee attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 7 (1d6 + 4) bludgeoning damage.",
                "attack": "Slam|+6|1d6+4"
            },
            {
                "name": "Read Thoughts",
                "text": "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
            }
        ],
        "description": "Doppelgangers are devious shapeshifters that take on the appearance of other humanoids, throwing off pursuit or luring victims to their doom with misdirection and disguise. Few creatures spread fear, suspicion, and deceit better than doppelgangers. Found in every land and culture, they can take on the guise of any individual of any race.\nStealing Secrets. A doppelganger's adopted form allows it to blend into almost any group or community, but its transformation doesn't impart languages, mannerisms, memory, or personality. Doppelgangers often follow or capture creatures they intend to impersonate, studying them and probing their minds for secrets. A doppelganger can read a creature's surface thoughts, allowing it to glean that creature's name, desires, and fears, along with a few scattered memories. A doppelganger impersonating a specific creature as part of a long-term plot might keep its double alive and close at hand for weeks, probing the victim's mind daily to learn how to behave and speak authentically.\nHedonistic Swindlers. Doppelgangers work alone or in small groups, with group roles shifting from con to con. While one doppelganger takes the place of a murdered merchant or noble, the others take on a number of identities as circumstances warrant, playing the parts of family or servants while they live off the victim's riches.\nChangelings. Doppelgangers are too lazy or self-interested to raise their young. They assume attractive male forms and seduce women, leaving them to raise their progeny. A doppelganger child appears to be a normal member of its mother's species until it reaches adolescence, at which point it discovers its true nature and is driven to seek out its kind to join them.\nSource: Monster Manual p. 82, Hoard of the Dragon Queen, Lost Mine of Phandelver, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark, urban"
    },
    {
        "name": "Draft Horse",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "10",
        "hp": "19 (3d10+3)",
        "speed": "walk 40 ft.",
        "str": "18",
        "dex": "10",
        "con": "12",
        "int": "2",
        "wis": "11",
        "cha": "7",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Hooves",
            "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 9 (2d4 + 4) bludgeoning damage.",
            "attack": "Hooves|+6|2d4+4"
        },
        "description": "Source: Monster Manual p. 321, Curse of Strahd, Storm King's Thunder, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus",
        "environment": "urban"
    },
    {
        "name": "Dragon Turtle",
        "size": "G",
        "type": "dragon",
        "alignment": "Neutral",
        "ac": "20 (natural armor)",
        "hp": "341 (22d20+110)",
        "speed": "walk 20 ft., swim 40 ft.",
        "str": "25",
        "dex": "10",
        "con": "20",
        "int": "10",
        "wis": "12",
        "cha": "12",
        "save": "Dex +6, Con +11, Wis +7",
        "skill": "",
        "passive": "11",
        "languages": "Aquan, Draconic",
        "cr": "17",
        "resist": "fire",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": {
            "name": "Amphibious",
            "text": "The dragon turtle can breathe air and water."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. 26 (3d12 + 7) piercing damage.",
                "attack": "Bite|+13|3d12+7"
            },
            {
                "name": "Claw",
                "text": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. 16 (2d8 + 7) slashing damage.",
                "attack": "Claw|+13|2d8+7"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.",
                "attack": "Tail|+13|3d12+7"
            },
            {
                "name": "Steam Breath (Recharge 5-6)",
                "text": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.",
                "attack": "Steam Breath (Recharge 5-6)||15d6"
            }
        ],
        "description": "Dragon turtles are among the most fearsome creatures of the oceans. As large and voracious as the oldest of its land-based dragon kin, a dragon turtle strikes with its deadly jaws, steaming breath, and crushing tail.\nA dragon turtle's rough shell is the same dark green color as the deep water where this monster dwells. Silver highlights lining the shell resemble light dancing on open water, and a surfacing dragon turtle is sometimes mistaken for the reflection of the sun or moon on the waves. Dragons of the Deep. Like true dragons, dragon turtles collect treasure, first by sinking ships and then by sifting through the wreckage for coins and other precious items. A dragon turtle swallows treasure for transport, then regurgitates it when it reaches its lair.\nDragon turtles dwell in caves hidden in coral reefs or beneath the seafloor, or along rugged stretches of coastline. If a choice cave is already inhabited, a dragon turtle attacks its current residents in an attempt to take over.\nMercenary Monsters. A dragon turtle is smart enough to be bribed, and pirates sailing seas patrolled by these creatures quickly learn to offer them treasure in exchange for safe passage. Clever sahuagin sometimes ally with dragon turtles, enticing them with treasure to use their blistering breath weapons in sahuagin raids against ships and coastal settlements.\nElemental Might. Dragon turtles sometimes find their way through sunken planar rifts to the Elemental Plane of Water. Those monstrous specimens can often be found in the service of marids, which strap magnificent coral thrones to the backs of dragon turtles and ride them as mounts.\nSource: Monster Manual p. 119, Princes of the Apocalypse, Tomb of Annihilation, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros",
        "environment": "underwater, coastal"
    },
    {
        "name": "Dretch",
        "size": "S",
        "type": "fiend (demon)",
        "alignment": "Chaotic Evil",
        "ac": "11 (natural armor)",
        "hp": "18 (4d6+4)",
        "speed": "walk 20 ft.",
        "str": "11",
        "dex": "11",
        "con": "12",
        "int": "5",
        "wis": "8",
        "cha": "3",
        "save": "",
        "skill": "",
        "passive": "9",
        "languages": "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
        "cr": "1/4",
        "resist": "cold, fire, lightning",
        "immune": "poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "action": [
            {
                "name": "Multiattack",
                "text": "The dretch makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 3 (1d6) piercing damage.",
                "attack": "Bite|+2|1d6"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 5 (2d4) slashing damage.",
                "attack": "Claws|+2|2d4"
            },
            {
                "name": "Fetid Cloud (1/Day)",
                "text": "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."
            }
        ],
        "description": "Spawn of Chaos. The Abyss creates demons as extensions of itself, spontaneously forming fiends out of filth and carnage. Some are unique monstrosities, while others represent uniform strains virtually identical to each other. Other demons (such as manes) are created from mortal souls shunned or cursed by the gods, or which are otherwise trapped in the Abyss.\nCapricious Elevation. Demons respect power and power alone. A greater demon commands shrieking mobs of lesser demons because it can destroy any lesser demon that dares to refuse its commands. A demon's status grows with the blood it spills; the more enemies that fall before it, the greater it becomes.\nA demon might spawn as a manes, then become a dretch, and eventually transform to a vrock after untold time spent fighting and surviving in the Abyss. Such elevations are rare, however, for most demons are destroyed before they attain significant power. The greatest of those that do survive make up the ranks of the demon lords that threaten to tear the Abyss apart with their endless warring.\nBy expending considerable magical power, demon lords can raise lesser demons into greater forms, though such promotions never stem from a demon's deeds or accomplishments. Rather, a demon lord might warp a manes into a quasit when it needs an invisible spy, or turn an army of dretches into hezrous when marching against a rival lord. Demon lords only rarely elevate demons to the highest ranks, fearful of inadvertently creating rivals to their own power.\nAbyssal Invasions. Wherever they wander across the Abyss, demons search for portals to the other planes. They crave the chance to slip free of their native realm and spread their dark influence across the multiverse, undoing the works of the gods, tearing down civilizations, and reducing the cosmos to despair and ruin.\nSome of the darkest legends of the mortal realm are built around the destruction wrought by demons set loose in the world. As such, even nations embroiled in bitter conflict will set their differences aside to help contain an outbreak of demons, or to seal off abyssal breaches before these fiends can break free.\nSigns of Corruption. Demons carry the stain of abyssal corruption with them, and their mere presence changes the world for the worse. Plants wither and die in areas where abyssal breaches and demons appear. Animals shun the sites where a demon has made a kill. The site of a demonic infestation might be fouled by a stench that never abates, by areas of bitter cold or burning heat, or by permanent shadows that mark the places where these fiends lingered.\nEternal Evil. Outside the Abyss, death is a minor nuisance that no demon fears. Mundane weapons can't stop these fiends, and many demons are resistant to the energy of the most potent spells. When a lucky hero manages to drop a demon in combat, the fiend dissolves into foul ichor. It then instantly reforms in the Abyss, its mind and essence intact even as its hatred is inflamed.\nThe only way to truly destroy a demon is to seek it in the Abyss and kill it there.\nProtected Essence. A powerful demon can take steps to safeguard its life essence, using secret methods and abyssal metals to create an amulet into which part of that essence is ceded. If the demon's abyssal form is ever destroyed, the amulet allows the fiend to reform at a time and place of its choosing.\nObtaining a demonic amulet is a dangerous enterprise, and simply seeking such a device risks drawing the attention of the demon that created it. A creature possessing a demonic amulet can exact favors from the demon whose life essence the amulet holds—or inflict great pain if the fiend resists. If an amulet is destroyed, the demon that created it is trapped in the Abyss for a year and a day.\nDemonic Cults. Despite the dark risks involved in dealing with fiends, the mortal realm is filled with creatures that covet demonic power. Demon lords manipulate these mortal servants into performing ever greater acts of depravity, furthering the demon lord's ambitions in exchange for magic and other boons. However, a demon regards any mortals in its service as tools to use and then discard at its whim, consigning their mortal souls to the Abyss.\nDemon Summoning. Few acts are as dangerous as summoning a demon, and even mages who bargain freely with devils fear the fiends of the Abyss. Though demons yearn to sow chaos on the Material Plane, they show no gratitude when brought there, raging against their prisons and demanding release.\nThose who would risk summoning a demon might do so to wrest information from it, press it into service, or send it on a mission that only a creature of absolute evil can complete. Preparation is key, and experienced summoners know the specific spells and magic items that can force a demon to bend to another's will. If a single mistake is made, a demon that breaks free shows no mercy as it makes its summoner the first victim of its wrath.\nBound Demons. The Book of Vile Darkness, the Black Scrolls of Ahm, and the Demonomicon of Iggwilv are the foremost authorities on demonic matters. These ancient tomes describe techniques that can trap the essence of a demon on the Material Plane, placing it within a weapon, idol, or piece of jewelry and preventing the fiend's return to the Abyss.\nAn object that binds a demon must be specially prepared with unholy incantations and innocent blood. It radiates a palpable evil, chilling and fouling the air around it. A creature that handles such an object experiences unsettling dreams and wicked impulses, but is able to control the demon whose essence is trapped within the object. Destroying the object frees the demon, which immediately seeks revenge against its binder.\nDemonic Possession. No matter how secure its bindings, a powerful demon often finds a way to escape an object that holds it. When a demonic essence emerges from its container, it can possess a mortal host. Sometimes a fiend employs stealth to hide a successful possession. Other times, it unleashes the full brunt of its fiendish drives through its new form.\nAs long as the demon remains in possession of its host, the soul of that host is in danger of being dragged to the Abyss with the demon if it is exorcised from the flesh, or if the host dies. If a demon possesses a creature and the object binding the demon is destroyed, the possession lasts until powerful magic is used to drive the demonic spirit out of its host.\nDemon Lords\nThe chaotic power of the Abyss rewards demons of particular ruthlessness and ingenuity with a dark blessing, transforming them into unique fiends whose power can rival the gods. These demon lords rule through cunning or brute force, hoping to one day claim the prize of absolute control over all the Abyss.\nReward for Outsiders. Although most demon lords rise up from the vast and uncountable mobs of demons rampaging across the Abyss, the plane also rewards outsiders that conquer any of its infinite layers. The elven goddess Lolth became a demon lord after Corellon Larethian cast her into the Abyss for betraying elvenkind. Sages claim that the Dark Prince Graz'zt originated on some other plane before stealing his abyssal title from another long-forgotten demon lord.\nPower and Control. The greatest sign of a demon lord's power is its ability to reshape an abyssal realm. A layer of the Abyss controlled by a demon lord becomes a twisted reflection of that fiend's vile personality, and demon lords seldom leave their realms for fear of allowing another creature to reshape and seize it.\nAs with other demons, a demon lord that dies on another plane has its essence return to the Abyss, where it reforms into a new body. Likewise, a demon lord that dies in the Abyss is permanently destroyed. Most demon lords keep a portion of their essence safely stored away to prevent such a fate.\nBaphomet. The demon lord Baphomet, also known as the Horned King and the Prince of Beasts, rules over minotaurs and other savage creatures. If he had his way, civilization would crumble and all races would embrace their base animal savagery.\nThe Prince of Beasts appears as a huge, black-furred minotaur with iron horns, red eyes, and a blood-soaked mouth. His iron crown is topped with the rotting heads of his enemies, while his dark armor is set with spikes and skull-like serrations. He carries a huge glaive named Heartcleaver, but often hurls it into the fray so as to face his enemies with horns and hooves.\nDemogorgon. The Sibilant Beast and the self-styled Prince of Demons, Demogorgon yearns for nothing less than undoing the order of the multiverse. An insane assemblage of features and drives, the Prince of Demons inspires fear and hatred among other demons and demon lords.\nDemogorgon towers three times the height of a human, his body as sinuous as a snake's and as powerful as a great ape's. Suckered tentacles take the place of his arms. His saurian lower torso ends in webbed and clawed feet, and a forked tail whose whip-like tips are armed with cruel blades. The Prince of Demons has two baleful baboon heads, both of them mad. It is only the conflict between the two halves of his dual nature that keeps the demon lord's ambitions in check.\nGraz'zt. The demon lord Graz'zt appears as a darkly handsome figure nearly nine feet tall. Those who refer to the Dark Prince as the most humanoid of the demon lords vastly underestimate the capacity for evil in his scheming heart.\nGraz'zt is a striking physical specimen, whose demonic nature shows in his ebon skin, pointed ears, yellow fangs, crown of horns, and six-fingered hands. He delights in finery, pageantry, and sating his decadent desires with subjects and consorts alike, among whom incubi and succubi are often his favorites.\nJuiblex. The demon lord of slimes and oozes, Juiblex is a stew of noxious fluids that lurks in the abyssal depths. The wretched Faceless Lord cares nothing for cultists or mortal servants, and its sole desire is to turn all creatures into formless copies of its horrid self.\nIn its resting state, Juiblex spreads out in a noxious mass, bubbling and filling the air with a profound stench. On the rare occasions when creatures confront the demon lord, Juiblex draws itself up into a shuddering cone of slime striated with veins of black and green. Baleful red eyes swim within its gelatinous body, while dripping pseudopods of ooze lash out hungrily at any creature they can reach.\nLolth. The Demon Queen of Spiders is the evil matron of the drow. Her every thought is touched by malice, and the depth of her viciousness can surprise even her most faithful priestesses. She directs her faithful while she weaves plots across the worlds of the Material Plane, looking forward to the time when her drow followers bring those worlds under her control.\nLolth appears as a lithe, imperious drow matriarch when she manifests to her followers in the mortal realm, which she does with unusual frequency. When battle breaks out-or if she has a reason to remind her followers to fear her—Lolth's lower body transforms into that of a huge demonic spider, whose spike—tipped legs and mandibles tear foes apart.\nOrcus. Known as the Demon Prince of Undeath and the Blood Lord, the demon lord Orcus is worshiped by the undead and by living creatures that channel the power of undeath. A brooding and nihilistic entity, Orcus yearns to make the multiverse a place of death and darkness, forever unchanging except by his will.\nThe Demon Prince of Undeath is a foul and corpulent creature, with a humanoid torso, powerful goat legs, and the desiccated head of a ram. His sore-ridden body stinks of disease, but his decaying head and glowing red eyes are as a creature already dead. Great black bat wings sprout from his back, stirring reeking air as he moves.\nOrcus wields a malevolent artifact known as the Wand of Orcus, a mace-like rod of obsidian topped by a humanoid skull. He surrounds himself with undead, and living creatures not under his control are anathema to him.\nYeenoghu. Known as the Gnoll Lord and the Beast of Butchery, the demon lord Yeenoghu hungers for slaughter and senseless destruction. Gnolls are his mortal instruments, and he drives them to ever-greater atrocities in his name. Delighting in sorrow and hopelessness, the Gnoll Lord yearns to turn the world into a wasteland in which the last surviving gnolls tear each other apart for the right to feast upon the dead.\nYeenoghu appears as a huge, scarred gnoll with a spiky crest of black spines, and eyes that burn with emerald flame. His armor is a patchwork of shields and breastplates claimed from fallen foes, and decorated by those foes' flayed skins. Yeenoghu can summon a triple flail he calls the Butcher, which he wields to deadly effect or wills to fly independently into battle as he tears foes apart with teeth and claws.\nOther Demon Lords. No one knows the full number of demon lords that rage in the Abyss. Given the infinite depths of that plane, powerful demons constantly rise to become demon lords, then fall almost as quickly. Among the demon lords whose power has endured long enough for demonologists to name them are Fraz-Urb'luu, the Prince of Deception; Kostchtchie, the Prince of Wrath; Pazuzu, Prince of the Lower Aerial Kingdoms; and Zuggtmoy, Lady of Fungi.\nDemon Types. Demonologists organize the chaotic distribution of demons into broad categories of power known as types. Most demons fit into one of six major types, with the weakest categorized as Type 1 and the strongest as Type 6. Demons outside the six main types are categorized as minor demons and demon lords.\nDemons by Type\nType | Examples\n1 | barlgura, shadow demon, vrock\n2 | chasme, hezrou\n3 | glabrezu, yochlol\n4 | nalfeshnee\n5 | marilith\n6 | balor, goristro\nDemon True Names.\n------\nThough demons all have common names, every demon lord and every demon of type 1 through 6 has a true name that it keeps secret. A demon can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of the most powerful demons.\nA mortal who learns a demon's true name can use powerful summoning magic to call the demon from the Abyss and exercise some measure of control over it. However, most demons brought to the Material Plane in this manner do everything in their power to wreak havoc or sow discord and strife.\n------\nVariant: Demon Summoning.\n------\nSome demons can have an action option that allows them to summon other demons. Summon Demon (1/Day). The demon chooses what to summon and attempts a magical summoning.\n• A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\n• A barlgura has a 30 percent chance of summoning one barlgura.\n• A chasme has a 30 percent chance of summoning one chasme.\n• A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\n• A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\n• A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\n• A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\n• A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\n• A yochlol has a 50 percent chance of summoning one yochlol.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.\n------\nSource: Monster Manual p. 57, Curse of Strahd, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount",
        "environment": ""
    },
    {
        "name": "Drider",
        "size": "L",
        "type": "monstrosity",
        "alignment": "Chaotic Evil",
        "ac": "19 (natural armor)",
        "hp": "123 (13d10+52)",
        "speed": "walk 30 ft., climb 30 ft.",
        "str": "16",
        "dex": "16",
        "con": "18",
        "int": "13",
        "wis": "14",
        "cha": "12",
        "save": "",
        "skill": "Perception +5, Stealth +9",
        "passive": "15",
        "languages": "Elvish, Undercommon",
        "cr": "6",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Fey Ancestry",
                "text": "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
            },
            {
                "name": "Spider Climb",
                "text": "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Web Walker",
                "text": "The drider ignores movement restrictions caused by webbing."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:",
                    "At will: dancing lights",
                    "1/day each: darkness, faerie fire"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. 2 (1d4) piercing damage plus 9 (2d8) poison damage.",
                "attack": "Bite|+6|1d4"
            },
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
                "attack": "Longsword|+6|1d8+3"
            },
            {
                "name": "Longbow",
                "text": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.",
                "attack": "Longbow|+6|1d8+3"
            },
            {
                "name": "Variant: Drider Spellcasting",
                "text": [
                    "Driders that were once drow spellcasters might retain their ability to cast spells. Such driders typically have a higher spellcasting ability (15 or 16) than other driders. Further, the drider gains the Spellcasting trait. A drider that was a drow divine spellcaster, therefore, could have a Wisdom of 16 (+3) and a Spellcasting trait as follows.",
                    "Spellcasting. The drider is a 7th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The drider has the following spells prepared from the cleric spell list:",
                    "Cantrips (at will): poison spray, thaumaturgy",
                    "1st level (4 slots): bane, detect magic, sanctuary",
                    "2nd level (3 slots): hold person, silence",
                    "3rd level (3 slots): clairvoyance, dispel magic",
                    "4th level (2 slots): divination, freedom of movement"
                ]
            }
        ],
        "spells": "dancing lights, darkness, faerie fire",
        "description": "When a drow shows great promise, Lolth summons it to the Demonweb Pits for a test of faith and strength. Those that pass the test rise higher in the Spider Queen's favor. Those that fail are transformed into driders-a horrid hybrid of a drow and a giant spider that serves as a living reminder of Lolth's power. Only drow can be turned into driders, and the power to create these creatures resides with Lolth alone.\nScarred for Life. Drow transformed into driders return to the Material Plane as twisted and debased creatures. Driven by madness, they disappear into the Underdark to become hermits and hunters, either wandering alone or leading packs of giant spiders.\nOn rare occasion, a drider returns to the fringes of drow society despite its curse, most often to fulfill some longstanding vow or vendetta from its former life. Drow fear and shun the driders, holding them in lower esteem than slaves. However, they tolerate the presence of these creatures as living representatives of Lolth's will, and a reminder of the fate that awaits all who fail the Spider Queen.\nSource: Monster Manual p. 120, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark"
    },
    {
        "name": "Drow",
        "size": "M",
        "type": "humanoid (elf)",
        "alignment": "Neutral Evil",
        "ac": "15 (chain shirt)",
        "hp": "13 (3d8)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "14",
        "con": "10",
        "int": "11",
        "wis": "11",
        "cha": "12",
        "save": "",
        "skill": "Perception +2, Stealth +4",
        "passive": "12",
        "languages": "Elvish, Undercommon",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Fey Ancestry",
                "text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:",
                    "At will: dancing lights",
                    "1/day each: darkness, faerie fire"
                ]
            }
        ],
        "action": [
            {
                "name": "Shortsword",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage.",
                "attack": "Shortsword|+4|1d6+2"
            },
            {
                "name": "Hand Crossbow",
                "text": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
                "attack": "Hand Crossbow|+4|1d6+2"
            },
            {
                "name": "Variant: Drow Magic Armor and Weapons",
                "text": [
                    "Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.",
                    "A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks."
                ]
            }
        ],
        "spells": "dancing lights, darkness, faerie fire",
        "description": "Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.\nChildren of Lolth. The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.\nCreatures of Darkness. The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.\nUnderdark Cities. The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.\nDrow Magic. Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.\nArms and Armor. Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.\nCutthroat Politics. Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.\nDrow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.\nMatriarchal Rule. Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.\nIn drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.\nPoison Predilection. Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies unconscious. Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.\nVariant: Drow Magic Armor and Weapons.\n------\nDrow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.\n• A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.\n• A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.\n• A drow priestess of Lolth wearing +3 scale mail has AC 19.\n------\nSource: Monster Manual p. 128, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount",
        "environment": "underdark"
    },
    {
        "name": "Drow Elite Warrior",
        "size": "M",
        "type": "humanoid (elf)",
        "alignment": "Neutral Evil",
        "ac": "18 (studded leather armor, shield)",
        "hp": "71 (11d8+22)",
        "speed": "walk 30 ft.",
        "str": "13",
        "dex": "18",
        "con": "14",
        "int": "11",
        "wis": "13",
        "cha": "12",
        "save": "Dex +7, Con +5, Wis +4",
        "skill": "Perception +4, Stealth +10",
        "passive": "14",
        "languages": "Elvish, Undercommon",
        "cr": "5",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Fey Ancestry",
                "text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:",
                    "At will: dancing lights",
                    "1/day each: darkness, faerie fire, levitate (self only)"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The drow makes two shortsword attacks."
            },
            {
                "name": "Shortsword",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage.",
                "attack": "Shortsword|+7|1d6+4"
            },
            {
                "name": "Hand Crossbow",
                "text": "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
                "attack": "Hand Crossbow|+7|1d6+4"
            },
            {
                "name": "Variant: Drow Magic Armor and Weapons",
                "text": [
                    "Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.",
                    "A drow elite warrior wearing +2 Studded Leather Armor and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks."
                ]
            }
        ],
        "reaction": {
            "name": "Parry",
            "text": "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon."
        },
        "spells": "dancing lights, darkness, faerie fire, levitate",
        "description": "Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.\nChildren of Lolth. The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.\nCreatures of Darkness. The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.\nUnderdark Cities. The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.\nDrow Magic. Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.\nArms and Armor. Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.\nCutthroat Politics. Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.\nDrow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.\nMatriarchal Rule. Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.\nIn drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.\nPoison Predilection. Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies unconscious. Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.\nVariant: Drow Magic Armor and Weapons.\n------\nDrow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.\n• A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.\n• A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.\n• A drow priestess of Lolth wearing +3 scale mail has AC 19.\n------\nSource: Monster Manual p. 128, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Storm Lord's Wrath, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark"
    },
    {
        "name": "Drow Mage",
        "size": "M",
        "type": "humanoid (elf)",
        "alignment": "Neutral Evil",
        "ac": "12 (15 with mage armor)",
        "hp": "45 (10d8)",
        "speed": "walk 30 ft.",
        "str": "9",
        "dex": "14",
        "con": "10",
        "int": "17",
        "wis": "13",
        "cha": "12",
        "save": "",
        "skill": "Arcana +6, Deception +4, Perception +4, Stealth +5",
        "passive": "14",
        "languages": "Elvish, Undercommon",
        "cr": "7",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Fey Ancestry",
                "text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:",
                    "At will: dancing lights",
                    "1/day each: darkness, faerie fire, levitate (self only)"
                ]
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The drow has the following wizard spells prepared:",
                    "Cantrips (at will): mage hand, minor illusion, poison spray, ray of frost",
                    "• 1st level (4 slots): mage armor, magic missile, shield, witch bolt",
                    "• 2nd level (3 slots): alter self, misty step, web",
                    "• 3rd level (3 slots): fly, lightning bolt",
                    "• 4th level (3 slots): Evard's black tentacles, greater invisibility",
                    "• 5th level (2 slots): cloudkill"
                ]
            }
        ],
        "action": [
            {
                "name": "Staff",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands, plus 3 (1d6) poison damage.",
                "attack": "Staff|+2|1d6-1"
            },
            {
                "name": "Summon Demon (1/Day)",
                "text": "The drow magically summons a quasit, or attempts to summon a shadow demon with a 50 chance of success. The summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
            }
        ],
        "slots": "4, 3, 3, 3, 2",
        "spells": "dancing lights, darkness, faerie fire, levitate, mage hand, minor illusion, poison spray, ray of frost, mage armor, magic missile, shield, witch bolt, alter self, misty step, web, fly, lightning bolt, Evard's black tentacles, greater invisibility, cloudkill",
        "description": "Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.\nChildren of Lolth. The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.\nCreatures of Darkness. The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.\nUnderdark Cities. The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.\nDrow Magic. Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.\nArms and Armor. Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.\nCutthroat Politics. Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.\nDrow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.\nMatriarchal Rule. Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.\nIn drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.\nPoison Predilection. Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies unconscious. Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.\nVariant: Drow Magic Armor and Weapons.\n------\nDrow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.\n• A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.\n• A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.\n• A drow priestess of Lolth wearing +3 scale mail has AC 19.\n------\nSource: Monster Manual p. 129, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Essentials Kit: Divine Contention, Essentials Kit: Dragon of Icespire Peak, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark"
    },
    {
        "name": "Drow Priestess of Lolth",
        "size": "M",
        "type": "humanoid (elf)",
        "alignment": "Neutral Evil",
        "ac": "16 (scale mail)",
        "hp": "71 (13d8+13)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "14",
        "con": "12",
        "int": "13",
        "wis": "17",
        "cha": "18",
        "save": "Con +4, Wis +6, Cha +7",
        "skill": "Insight +6, Perception +6, Religion +4, Stealth +5",
        "passive": "16",
        "languages": "Elvish, Undercommon",
        "cr": "8",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Fey Ancestry",
                "text": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The drow's spellcasting ability is Charisma (spell save DC 15). She can innately cast the following spells, requiring no material components:",
                    "At will: dancing lights",
                    "1/day each: darkness, faerie fire, levitate (self only)"
                ]
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom (save DC 14, +6 to hit with spell attacks). The drow has the following cleric spells prepared:",
                    "Cantrips (at will): guidance, poison spray, resistance, spare the dying, thaumaturgy",
                    "• 1st level (4 slots): animal friendship, cure wounds, detect poison and disease, ray of sickness",
                    "• 2nd level (3 slots): lesser restoration, protection from poison, web",
                    "• 3rd level (3 slots): conjure animals (2 giant spiders), dispel magic",
                    "• 4th level (3 slots): divination, freedom of movement",
                    "• 5th level (2 slots): insect plague, mass cure wounds"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The drow makes two scourge attacks."
            },
            {
                "name": "Scourge",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 5 (1d6 + 2) piercing damage plus 17 (5d6) poison damage.",
                "attack": "Scourge|+5|1d6+2"
            },
            {
                "name": "Summon Demon (1/Day)",
                "text": "The drow attempts to magically summon a yochlol with a 30 chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
            },
            {
                "name": "Variant: Drow Magic Armor and Weapons",
                "text": [
                    "Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.",
                    "A drow priestess of lolth wearing +3 scale mail has AC 19."
                ]
            }
        ],
        "slots": "4, 3, 3, 3, 2",
        "spells": "dancing lights, darkness, faerie fire, levitate, guidance, poison spray, resistance, spare the dying, thaumaturgy, animal friendship, cure wounds, detect poison and disease, ray of sickness, lesser restoration, protection from poison, web, conjure animals, dispel magic, divination, freedom of movement, insect plague, mass cure wounds",
        "description": "Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.\nChildren of Lolth. The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.\nCreatures of Darkness. The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.\nUnderdark Cities. The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.\nDrow Magic. Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.\nArms and Armor. Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.\nCutthroat Politics. Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.\nDrow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.\nMatriarchal Rule. Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.\nIn drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.\nPoison Predilection. Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies unconscious. Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.\nVariant: Drow Magic Armor and Weapons.\n------\nDrow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.\n• A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.\n• A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.\n• A drow priestess of Lolth wearing +3 scale mail has AC 19.\n------\nSource: Monster Manual p. 129, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh",
        "environment": "underdark"
    },
    {
        "name": "Druid",
        "size": "M",
        "type": "humanoid (any race)",
        "alignment": "Any alignment",
        "ac": "11 (16 with barkskin)",
        "hp": "27 (5d8+5)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "12",
        "con": "13",
        "int": "12",
        "wis": "15",
        "cha": "11",
        "save": "",
        "skill": "Medicine +4, Nature +3, Perception +4",
        "passive": "14",
        "languages": "Druidic plus any two languages",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": {
            "name": "Quarterstaff",
            "text": "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. 3 (1d6) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh or if wielded with two hands.",
            "attack": "Quarterstaff|+2|1d6"
        },
        "trait": {
            "name": "Spellcasting",
            "text": [
                "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:",
                "Cantrips (at will): druidcraft, produce flame, shillelagh",
                "• 1st level (4 slots): entangle, longstrider, speak with animals, thunderwave",
                "• 2nd level (3 slots): animal messenger, barkskin"
            ]
        },
        "slots": "4, 3",
        "spells": "druidcraft, produce flame, shillelagh, entangle, longstrider, speak with animals, thunderwave, animal messenger, barkskin",
        "description": "Druids dwell in forests and other secluded wilderness locations, where they protect the natural world from monsters and the encroachment of civilization. Some are tribal shamans who heal the sick, pray to animal spirits, and provide spiritual guidance.\nSource: Monster Manual p. 346, Curse of Strahd, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Ghosts of Saltmarsh, Essentials Kit: Dragon of Icespire Peak, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
    },
    {
        "name": "Dryad",
        "size": "M",
        "type": "fey",
        "alignment": "Neutral",
        "ac": "11 (16 with barkskin)",
        "hp": "22 (5d8)",
        "speed": "walk 30 ft.",
        "str": "10",
        "dex": "12",
        "con": "11",
        "int": "14",
        "wis": "15",
        "cha": "18",
        "save": "",
        "skill": "Perception +4, Stealth +5",
        "passive": "14",
        "languages": "Elvish, Sylvan",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Magic Resistance",
                "text": "The dryad has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Speak with Beasts and Plants",
                "text": "The dryad can communicate with beasts and plants as if they shared a language."
            },
            {
                "name": "Tree Stride",
                "text": "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be large or bigger."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:",
                    "At will: druidcraft",
                    "3/day each: entangle, goodberry",
                    "1/day each: barkskin, pass without trace, shillelagh"
                ]
            }
        ],
        "action": [
            {
                "name": "Club",
                "text": "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh.",
                "attack": "Club|+2|1d4"
            },
            {
                "name": "Fey Charm",
                "text": [
                    "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.",
                    "Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.",
                    "The dryad can have no more than one humanoid and up to three beasts charmed at a time."
                ]
            }
        ],
        "spells": "druidcraft, entangle, goodberry, barkskin, pass without trace, shillelagh",
        "description": "Travelers entering a forest might catch a glimpse of a feminine form flitting through the trees. Warm laughter hangs on the air, drawing those who hear it deeper into the emerald shadows. Treebound. Powerful fey will sometimes bind lesser fey spirits to trees, transforming them into dryads. This is sometimes done as a punishment when the fey spirit falls in love with a mortal and that love is forbidden.\nA dryad can emerge from the tree and travel the lands around it, but the tree remains her home and roots her to the world. As long as the tree remains healthy and unharmed, the dryad stays forever youthful and alluring. If the tree is harmed, she suffers. If the tree is ever destroyed, the dryad descends into madness.\nReclusive Fey. Dryads act as guardians of their woodland demesnes. Shy and reclusive, they watch interlopers from the trees. A dryad struck by the beauty of a stranger might investigate more closely, perhaps even try to lure the individual away to be charmed.\nDryads work with other sylvan creatures to defend their forests. Unicorns, treants, and satyrs live alongside them, in addition to druids that share the dryads' devotion to the woods they call home.\nWoodland Magic. Dryads can speak with plants and animals. They can teleport from one tree to another, luring interlopers away from their groves. If pressed, a dryad can beguile humanoids with her enchantments, turning enemies into friends. They also know a handful of useful spells.\nSource: Monster Manual p. 121, Storm King's Thunder, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": "forest"
    },
    {
        "name": "Duergar",
        "size": "M",
        "type": "humanoid (dwarf)",
        "alignment": "Lawful Evil",
        "ac": "16 (scale mail, shield)",
        "hp": "26 (4d8+4)",
        "speed": "walk 25 ft.",
        "str": "14",
        "dex": "11",
        "con": "14",
        "int": "11",
        "wis": "10",
        "cha": "9",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Dwarvish, Undercommon",
        "cr": "1",
        "resist": "poison",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Duergar Resilience",
                "text": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
            },
            {
                "name": "Sunlight Sensitivity",
                "text": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "action": [
            {
                "name": "Enlarge (Recharges after a Short or Long Rest)",
                "text": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
            },
            {
                "name": "War Pick",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged.",
                "attack": "War Pick|+4|1d8+2"
            },
            {
                "name": "Javelin",
                "text": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged.",
                "attack": "Javelin|+4|1d6+2"
            },
            {
                "name": "Invisibility (Recharges after a Short or Long Rest)",
                "text": "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
            }
        ],
        "description": "The tyrannical duergar, also known as gray dwarves, dwell in fantastic cities deep in the Underdark. Using ancient dwarven knowledge and myriad slaves, they work tirelessly to expand their subterranean kingdoms.\nMost duergar (including females) are bald and have ashen gray skin. They wear drab clothing designed to blend in with stone, along with simple jewelry that reflects their severe and utilitarian demeanor.\nSlaves to Slavers. The duergar were once dwarves, before their greed and endless delving beneath the earth brought them into contact with the mind flayers. Held in captivity for generations by the illithids, the dwarves eventually won their independence with the aid of the evil god Laduguer. Slavery had forever changed them, however, darkening their spirits to make the duergar as evil as the tyrants they had escaped. Despite winning their freedom, duergar are dour, pessimistic, untrusting creatures, always toiling and complaining, with no memory of what it means to be happy or proud. Their craftsmanship and accomplishments endure, yet they are bereft of warmth or artistry.\nDuergar make war against their dwarven kin and all other subterranean races. They forge alliances when it is convenient, then break those alliances when they have nothing more to gain. They take and hold slaves to toil in the Underdark, regarding them as free labor and crude currency.\nTough as Stone. Like dwarves, duergar have strong constitutions. Adding to their physical stamina is an incredible mental fortitude resulting from their time as slaves of the illithids. A duergar's mind is a fortress, able to shrug off charms, illusions, and other spells.\nBorn of Darkness. The Underdark is saturated with strange magical power, which the duergar absorbed over generations of imprisonment. A duergar can increase its size and strength for a short time, becoming a powerful ogre-sized warrior. If it faces a foe it can't fight, or when spying on creatures approaching its territory, it can just as easily become invisible to slip away into the darkness. Eons spent in the Underdark also sharpened their darkvision, allowing them to see twice as far as other dwarves. This keen eyesight comes at a cost, however, as a duergar's vision is compromised by sunlight.\nInfernal Master. Asmodeus, Lord of the Nine Hells, has been known to impersonate duergar gods in order to cultivate the evil brimming in the hearts of the gray dwarves. He offers them divine guidance and vengeance against their enemies while urging them on toward greater acts of tyranny, all the while concealing his true identity.\nSource: Monster Manual p. 122, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "underdark"
    },
    {
        "name": "Duodrone",
        "size": "M",
        "type": "construct",
        "alignment": "Lawful Neutral",
        "ac": "15 (natural armor)",
        "hp": "11 (2d8+2)",
        "speed": "walk 30 ft.",
        "str": "11",
        "dex": "13",
        "con": "12",
        "int": "6",
        "wis": "10",
        "cha": "7",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Modron",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Axiomatic Mind",
                "text": "The duodrone can't be compelled to act in a manner contrary to its nature or its instructions."
            },
            {
                "name": "Disintegration",
                "text": "If the duodrone dies, its body disintegrates into dust, leaving behind its weapons and anything else it was carrying."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The duodrone makes two fist attacks or two javelin attacks."
            },
            {
                "name": "Fist",
                "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. 2 (1d4) bludgeoning damage.",
                "attack": "Fist|+2|1d4"
            },
            {
                "name": "Javelin",
                "text": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 30/120 ft., one target. 4 (1d6 + 1) piercing damage.",
                "attack": "Javelin|+3|1d6+1"
            },
            {
                "name": "Variant: Rogue Modrons",
                "text": [
                    "A modron unit sometimes becomes defective, either through natural decay or exposure to chaotic forces. Rogue modrons don't act in accordance with Primus's wishes and directives, breaking laws, disobeying orders, and even engaging in violence. Other modrons hunt down such rogues.",
                    "A rogue modron loses the Axiomatic Mind trait and can have any alignment other than lawful neutral. Otherwise, it has the same statistics as a regular modron of its rank."
                ]
            }
        ],
        "description": "The blocky duodrones supervise units of monodrones and can perform up to two tasks at a time.\nModrons. Modrons are beings of absolute law that adhere to a hive-like hierarchy. They inhabit the plane of Mechanus and tend its eternally revolving gears, their existence a clockwork routine of perfect order.\nAbsolute Law and Order. Under the direction of their leader, Primus, modrons increase order in the multiverse in accordance with laws beyond the comprehension of mortal minds. Their own minds are networked in a hierarchal pyramid, in which each modron receives commands from superiors and delegates orders to underlings. A modron carries out commands with total obedience, utmost efficiency, and an absence of morality or ego. Modrons have no sense of self beyond what is necessary to fulfill their duties. They exist as a unified collective, divided by ranks, yet they always refer to themselves collectively. To a modron, there is no \"I,\" but only \"we\" or \"us.\"\nVariant: Rogue Modrons\nA modron unit sometimes becomes defective, either through natural decay or exposure to chaotic forces. Rogue modrons don't act in accordance with Primus's wishes and directives, breaking laws, disobeying orders, and even engaging in violence. Other modrons hunt down such rogues.\nA rogue modron loses the Axiomatic Mind trait and can have any alignment other than lawful neutral. Otherwise, it has the same statistics as a regular modron of its rank.\nAbsolute Hierarchy. Modrons communicate only with their own rank and the ranks immediately above and below them. Modrons more than one rank away are either too advanced or too simple to understand.\nCogs of the Great Machine. If a modron is destroyed, its remains disintegrate. A replacement from the next lowest rank then transforms in a flash of light, gaining the physical form of its new rank. The promoted modron is replaced by one of its underlings in the same manner, all the way to the lowest levels of the hierarchy. There, a new modron is created by Primus, with a steady stream of monodrones leaving the Great Modron Cathedral on Mechanus as a result.\nThe Great Modron March. When the gears of Mechanus complete seventeen cycles once every 289 years, Primus sends a vast army of modrons across the Outer Planes, ostensibly on a reconnaissance mission. The march is long and dangerous, and only a small number of modrons returns to Mechanus.\nSource: Monster Manual p. 225",
        "environment": ""
    },
    {
        "name": "Dust Mephit",
        "size": "S",
        "type": "elemental",
        "alignment": "Neutral Evil",
        "ac": "12",
        "hp": "17 (5d6)",
        "speed": "walk 30 ft., fly 30 ft.",
        "str": "5",
        "dex": "14",
        "con": "10",
        "int": "9",
        "wis": "11",
        "cha": "10",
        "save": "",
        "skill": "Perception +2, Stealth +4",
        "passive": "12",
        "languages": "Auran, Terran",
        "cr": "1/2",
        "resist": "",
        "immune": "poison",
        "vulnerable": "fire",
        "conditionImmune": "poisoned",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Death Burst",
                "text": "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Innate Spellcasting (1/Day)",
                "text": [
                    "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.",
                    "At will: sleep"
                ]
            }
        ],
        "action": [
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 4 (1d4 + 2) slashing damage.",
                "attack": "Claws|+4|1d4+2"
            },
            {
                "name": "Blinding Breath (Recharge 6)",
                "text": "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Variant: Summon Mephits (1/Day)",
                "text": "The mephit has a 25 chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
            }
        ],
        "spells": "sleep",
        "description": "Elemental Nature. A mephit doesn't require food, drink, or sleep.\nSource: Monster Manual p. 215, Princes of the Apocalypse, Tomb of Annihilation",
        "environment": "desert"
    },
    {
        "name": "Eagle",
        "size": "S",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12",
        "hp": "3 (1d6)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "6",
        "dex": "15",
        "con": "10",
        "int": "2",
        "wis": "14",
        "cha": "7",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "",
        "cr": "0",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Keen Sight",
            "text": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
        },
        "action": {
            "name": "Talons",
            "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) slashing damage.",
            "attack": "Talons|+4|1d4+2"
        },
        "description": "Source: Monster Manual p. 322",
        "environment": "mountain, grassland, hill, coastal"
    },
    {
        "name": "Earth Elemental",
        "size": "L",
        "type": "elemental",
        "alignment": "Neutral",
        "ac": "17 (natural armor)",
        "hp": "126 (12d10+60)",
        "speed": "walk 30 ft., burrow 30 ft.",
        "str": "20",
        "dex": "8",
        "con": "20",
        "int": "5",
        "wis": "10",
        "cha": "5",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Terran",
        "cr": "5",
        "resist": "bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "poison",
        "vulnerable": "thunder",
        "conditionImmune": "exhaustion, paralyzed, petrified, poisoned, unconscious",
        "senses": "darkvision 60 ft., tremorsense 60 ft.",
        "trait": [
            {
                "name": "Earth Glide",
                "text": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
            },
            {
                "name": "Siege Monster",
                "text": "The elemental deals double damage to objects and structures."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The elemental makes two slam attacks."
            },
            {
                "name": "Slam",
                "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. 14 (2d8 + 5) bludgeoning damage.",
                "attack": "Slam|+8|2d8+5"
            }
        ],
        "description": "Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.\nLiving Elements. On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.\nConjured by Magic. Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.\nBound and Shaped. Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.\nElemental Nature. An elemental doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 124, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "underdark"
    },
    {
        "name": "Efreeti",
        "size": "L",
        "type": "elemental",
        "alignment": "Lawful Evil",
        "ac": "17 (natural armor)",
        "hp": "200 (16d10+112)",
        "speed": "walk 40 ft., fly 60 ft.",
        "str": "22",
        "dex": "12",
        "con": "24",
        "int": "16",
        "wis": "15",
        "cha": "16",
        "save": "Int +7, Wis +6, Cha +7",
        "skill": "",
        "passive": "12",
        "languages": "Ignan",
        "cr": "11",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 120 ft.",
        "trait": [
            {
                "name": "Elemental Demise",
                "text": "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The efreeti's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
                    "At will: detect magic",
                    "3/day each: enlarge/reduce, tongues",
                    "1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
            },
            {
                "name": "Scimitar",
                "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage.",
                "attack": "Scimitar|+10|2d6+6"
            },
            {
                "name": "Hurl Flame",
                "text": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. 17 (5d6) fire damage.",
                "attack": "Hurl Flame|+7|5d6"
            },
            {
                "name": "Variant: Genie Powers",
                "text": [
                    "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.",
                    "Disguises. Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.",
                    "Wishes. The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year), and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.",
                    "To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
                ]
            }
        ],
        "spells": "detect magic, enlarge/reduce, tongues, conjure elemental, gaseous form, invisibility, major image, plane shift, wall of fire",
        "description": "Hulking genies of the Elemental Plane of Fire, the efreet are masters of flame, immune to fire and able to create it on a whim. Fine silk caftans and damask robes drape their magma-red or coal-black skin, and they bedeck themselves in brass and gold torcs, chains, and rings, all glittering with jewels. When an efreeti flies, its lower body transforms into a column of smoke and embers.\nHaughty and Cruel. The efreet are deceptive, cunning, and cruel to the point of ruthlessness. They despise being forced into servitude and are relentless in pursuit of vengeance against creatures that have wronged them. Efreet don't see themselves in this light, naturally, and regard their race as fair and orderly, even as they admit to an enlightened sense of self-interest.\nSpiteful Slavers. Efreet view all other creatures as enemies or potential serfs. They raid the Material Plane and the elemental planes for slaves, which they capture and bring back to their homes on the Elemental Plane of Fire. The efreet rule as oppressive tyrants, promoting only the cruelest among their slaves. Those overseers are given whips to help keep the rank-and-file slaves in line.\nPlanar Raiders. Most efreet reside on the Elemental Plane of Fire, either in great domed fortresses of black glass and basalt surrounded by churning lakes of fire, or in the fabled City of Brass. Additionally, efreet military outposts thronging with their minions and slaves can be found scattered throughout the planes.\nOn the Material Plane, efreet dwell in fiery regions such as volcanoes and the burning expanses of the world's deserts. Their love of the desert brings them into conflict with the djinn that ride the desert whirlwinds, and with the earthbound dao. Efreet utterly despise marids, with whom they have maintained a passionate conflict throughout the history of both races.\nGenies. Genies are rare elemental creatures out of story and legend. Only a few can be found on the Material Plane. The rest reside on the Elemental Planes, where they rule from lavish palaces and are attended by worshipful slaves.\nGenies are as brilliant as they are mighty, as proud as they are majestic. Haughty and decadent, they have a profound sense of entitlement that stems from the knowledge that few creatures except the gods and other genies can challenge their power.\nCreatures of the Elements. A genie is born when the soul of a sentient living creature melds with the primordial matter of an elemental plane. Only under rare circumstances does such an elemental-infused soul coalesce into a manifest form and create a genie.\nA genie usually retains no connection to the soul that gave it form. That life force is a building block that determines the genie's form and apparent gender, as well as one or two key personality traits. Although they resemble humanoid beings, genies are elemental spirits given physical form. They don't mate with other genies or produce genie offspring, as all new genies are born out of the same mysterious fusion of spirit energy and elemental power. A genie with a stronger connection to its mortal soul might choose to sire a child with a mortal, although such offspring are rare.\nWhen a genie perishes, it leaves nothing behind except what it was wearing or carrying, along with a small trace of its native element: a pile of dust, a gust of wind, a flash of fire and smoke, or a burst of water and foam.\nIn contrast to their love of slaves, most genies loathe being bound to service themselves. A genie obeys the will of another only when bribed or compelled by magic. All genies command the power of their native element, but a rare few also possess the power to grant wishes. For both these reasons, mortal mages often seek to bind genies into service.\nNoble genies cultivate the jealousy and envy of other genies, asserting their superiority at every opportunity. Other genies respect the influence of the noble genies, knowing how unwise it is to defy a creature that can alter reality at a whim. A genie isn't beholden to any noble genie, however, and will sometimes choose to defy a noble genie's will and risk the consequences.\nTheir miraculous powers, the grandeur of their abodes, and the numbers of their slaves allow some genies to deceive themselves into believing they are as powerful as the gods. Some go so far as to demand that mortals of other realms-even whole continents or worlds-bow down before them.\nRule or Be Ruled. Mortal slaves serve to validate a genie's power and high self-opinion. A hundred flattering voices are music to a genie's ears, while two hundred mortal slaves prostrated at its feet are proof that it is lord and master. Genies view slaves as living property, and a genie without property amounts to nothing among its own kind. As a result, many genies treasure their slaves, treating them as honored members of their households. Evil genies freely threaten and abuse their slaves, but never to the extent that the slaves are no longer of use.\nDecadent Nobility. Noble genies are the rarest of their kind. They are used to getting what they want, and have learned to trade their ability to grant wishes to attain the objects of their desire. This constant indulgence has made them decadent, while their supreme power over reality makes them haughty and arrogant. Their vast palaces overflow with wonders and sensory delights beyond imagination.\nThe Power of Worship. Genies acknowledge the gods as powerful entities but have no desire to court or worship them. They find the endless fawning and mewling of religious devotees tiresome-except as it is directed toward them by their worshipful slaves.\nSource: Monster Manual p. 145, Princes of the Apocalypse, Rise of Tiamat, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything",
        "environment": "desert"
    },
    {
        "name": "Elephant",
        "size": "H",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "12 (natural armor)",
        "hp": "76 (8d12+24)",
        "speed": "walk 40 ft.",
        "str": "22",
        "dex": "9",
        "con": "17",
        "int": "3",
        "wis": "11",
        "cha": "6",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Trampling Charge",
            "text": "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
        },
        "action": [
            {
                "name": "Gore",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 19 (3d8 + 6) piercing damage.",
                "attack": "Gore|+8|3d8+6"
            },
            {
                "name": "Stomp",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. 22 (3d10 + 6) bludgeoning damage.",
                "attack": "Stomp|+8|3d10+6"
            }
        ],
        "description": "Source: Monster Manual p. 322, Tomb of Annihilation",
        "environment": "grassland"
    },
    {
        "name": "Elk",
        "size": "L",
        "type": "beast",
        "alignment": "Unaligned",
        "ac": "10",
        "hp": "13 (2d10+2)",
        "speed": "walk 50 ft.",
        "str": "16",
        "dex": "10",
        "con": "12",
        "int": "2",
        "wis": "10",
        "cha": "6",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "",
        "cr": "1/4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "trait": {
            "name": "Charge",
            "text": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        },
        "action": [
            {
                "name": "Ram",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. 6 (1d6 + 3) bludgeoning damage.",
                "attack": "Ram|+5|1d6+3"
            },
            {
                "name": "Hooves",
                "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. 8 (2d4 + 3) bludgeoning damage.",
                "attack": "Hooves|+5|2d4+3"
            }
        ],
        "description": "Source: Monster Manual p. 322, Hoard of the Dragon Queen, Princes of the Apocalypse, Storm King's Thunder, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden",
        "environment": "grassland, forest, hill"
    },
    {
        "name": "Empyrean",
        "size": "H",
        "type": "celestial (titan)",
        "alignment": "Chaotic Good (75%) Neutral Evil (25%)",
        "ac": "22 (natural armor)",
        "hp": "313 (19d12+190)",
        "speed": "walk 50 ft., fly 50 ft., swim 50 ft.",
        "str": "30",
        "dex": "21",
        "con": "30",
        "int": "21",
        "wis": "22",
        "cha": "27",
        "save": "Str +17, Int +12, Wis +13, Cha +15",
        "skill": "Insight +13, Persuasion +15",
        "passive": "16",
        "languages": "all",
        "cr": "23",
        "resist": "",
        "immune": "bludgeoning, piercing, slashing from nonmagical attacks",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Legendary Resistance (3/Day)",
                "text": "If the empyrean fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Magic Resistance",
                "text": "The empyrean has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "text": "The empyrean's weapon attacks are magical."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The empyrean's innate spellcasting ability is Charisma (spell save DC 23, +15 to hit with spell attacks). It can innately cast the following spells, requiring no material components:",
                    "At will: greater restoration, pass without trace, water breathing, water walk",
                    "1/day each: commune, dispel evil and good, earthquake, fire storm, plane shift (self only)"
                ]
            }
        ],
        "action": [
            {
                "name": "Maul",
                "text": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. 31 (6d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be stunned until the end of the empyrean's next turn.",
                "attack": "Maul|+17|6d6+10"
            },
            {
                "name": "Bolt",
                "text": "Ranged Spell Attack: +15 to hit, range 600 ft., one target. 24 (7d6) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder."
            }
        ],
        "legendary": [
            {
                "text": "The celestial (titan) can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The celestial (titan) regains spent legendary actions at the start of its turn."
            },
            {
                "name": "Attack",
                "text": "The empyrean makes one attack."
            },
            {
                "name": "Bolster",
                "text": "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn."
            },
            {
                "name": "Trembling Strike (Costs 2 Actions)",
                "text": "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone."
            }
        ],
        "spells": "greater restoration, pass without trace, water breathing, water walk, commune, dispel evil and good, earthquake, fire storm, plane shift",
        "description": "Empyreans are the celestial children of the gods of the Upper Planes. They are universally beautiful, statuesque, and self-assured.\nManifest Emotion. An empyrean can experience deity-like fits of serenity or rage. It can affect the environment around it by its mood. When an empyrean is unhappy, the clouds might cry tears of salt water, the wildflowers in surrounding meadows might wilt, dead fish might wash ashore in lakes or rivers, or a nearby forest might lose the leaves from its trees. When an empyrean is jubilant, sunlight follows it everywhere, small animals frolic in its footsteps, and birds fill the sky with their pleasing songs.\nEvil Empyreans. A few empyreans have turned to evil after venturing to the Lower Planes and becoming corrupted, or as the result of being cursed by evil gods. An evil empyrean can't survive long on the Upper Planes and usually retreats to the Material Plane, where it can rule over a kingdom of mortals as an indomitable tyrant.\nImmortal Titans. Empyreans don't age but can be slain. Because few empyreans can imagine their own demise, they fight fearlessly when drawn into battle, refusing to believe that the end is upon them even when standing at death's door. When an empyrean dies, its spirit returns to its home plane. There, one of the fallen empyrean's parents resurrects the empyrean unless he or she has a good reason not to.\nSource: Monster Manual p. 130, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros",
        "environment": ""
    },
    {
        "name": "Erinyes",
        "size": "M",
        "type": "fiend (devil)",
        "alignment": "Lawful Evil",
        "ac": "18 (plate armor)",
        "hp": "153 (18d8+72)",
        "speed": "walk 30 ft., fly 60 ft.",
        "str": "18",
        "dex": "16",
        "con": "18",
        "int": "14",
        "wis": "14",
        "cha": "18",
        "save": "Dex +7, Con +8, Wis +6, Cha +8",
        "skill": "",
        "passive": "12",
        "languages": "Infernal, telepathy 120 ft.",
        "cr": "12",
        "resist": "cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "poisoned",
        "senses": "truesight 120 ft.",
        "trait": [
            {
                "name": "Hellish Weapons",
                "text": "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
            },
            {
                "name": "Magic Resistance",
                "text": "The erinyes has advantage on saving throws against spells and other magical effects."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The erinyes makes three attacks"
            },
            {
                "name": "Longsword",
                "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage.",
                "attack": "Longsword|+8|1d8+4"
            },
            {
                "name": "Longbow",
                "text": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.",
                "attack": "Longbow|+7|1d8+3"
            },
            {
                "name": "Variant: Rope of Entanglement",
                "text": "Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks."
            }
        ],
        "reaction": {
            "name": "Parry",
            "text": "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon."
        },
        "description": "Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.\nLords of Tyranny. Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.\nDevils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.\nObedience and Ambition. In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.\nAt the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.\nDark Dealers and Soul Mongers. Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.\nTo own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.\nThe Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.\nA supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.\nIf it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.\nArchdevils. The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.\nGreater Devils. The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.\nLesser Devils. The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.\nLemures. The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.\nPromotion and Demotion. When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.\nLow-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.\nDemotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.\nNo devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.\nInfernal Hierarchy\nRank | Devil(s)\n1. | lemure\n2. (Lesser devils) | imp\n3. | spined devil\n4. | bearded devil\n5. | barbed devil\n6. | chain devil\n7. | bone devil\n8. (Greater devils) | horned devil\n9. | erinyes\n10. | ice devil\n11. | pit fiend\n12. (Archdevils) | duke or duchess\n13. | archduke or archduchess\nThe Nine Hells\nThe Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.\nLayers and Lords of the Nine Hells Layer\nLayer | Layer Name | Archduke or Archduchess | Previous Rulers | Primary Inhabitants\n1 | Avernus | Zariel | Bel, Tiamat | Erinyes, imps, spined devils\n2 | Dis | Dispater | — | Bearded devils, erinyes, imps, spined devils\n3 | Minauros | Mammon | — | Bearded devils, chain devils, imps, spined devils\n4 | Phlegethos | Belial and Fierna | — | Barbed devils, bone devils, imps, spined devils\n5 | Stygia | Levistus | Geryon | Bone devils, erinyes, ice devils, imps\n6 | Malbolge | Glasya | Malagard, Moloch | Barbed devils, bone devils, horned devils, imps\n7 | Maladomini | Baalzebul | — | Barbed devils, bone devils, horned devils, imps\n8 | Cania | Mephistopheles | — | Horned devils, ice devils, imps, pit fiends\n9 | Nessus | Asmodeus | — | All devils\nDevil True Names and Talismans.\n------\nThough devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of certain devils.\nA mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.\nHowever it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.\n------\nSummon Devil (1/Day)\nThe devil chooses what to summon and attempts a magical summoning.\nSource: Monster Manual p. 73, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount",
        "environment": ""
    },
    {
        "name": "Ettercap",
        "size": "M",
        "type": "monstrosity",
        "alignment": "Neutral Evil",
        "ac": "13 (natural armor)",
        "hp": "44 (8d8+8)",
        "speed": "walk 30 ft., climb 30 ft.",
        "str": "14",
        "dex": "15",
        "con": "13",
        "int": "7",
        "wis": "12",
        "cha": "8",
        "save": "",
        "skill": "Perception +3, Stealth +4, Survival +3",
        "passive": "13",
        "languages": "",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Spider Climb",
                "text": "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "text": "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "text": "The ettercap ignores movement restrictions caused by webbing."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The ettercap makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                "attack": "Bite|+4|1d8+2"
            },
            {
                "name": "Claws",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 7 (2d4 + 2) slashing damage.",
                "attack": "Claws|+4|2d4+2"
            },
            {
                "name": "Web (Recharge 5-6)",
                "text": "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning, poison and psychic damage."
            },
            {
                "name": "Variant: Web Garrote",
                "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. 4 (1d4 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the target can't breathe, and the ettercap has advantage on attack rolls against it."
            }
        ],
        "description": "Ettercaps are humanoid spiders that tend, feed, and watch over spiders the way a shepherd oversees a flock of sheep. They lair deep in remote forests.\nFine strands of silk stream from glands in an ettercap's abdomen, letting it shoot sticky strands of webbing to bind, entrap, or strangle its victims. It can also use its webbing to fashion elaborate snares and nets, which often festoon its lair.\nQuiet Killers. When travelers and explorers venture into an ettercap's territory, the ettercap stalks them. Some meet their end wandering blindly into traps or sections of forest enclosed by webs. Others, the ettercap garrotes with strands of web or envenoms with its poisonous bite.\nSylvan Despoilers. Though they dwell in the wilds, ettercaps have no desire to live in harmony with nature. A forest infested with ettercaps transforms into a gloomy place, choked with webs and infested with giant spiders, giant insects, and other sinister predators. Creatures that wander too far into such a wood are soon lost in a maze of webs that dangle with the bones and lost treasures of the ettercaps' victims.\nEnemies of the Fey. Ettercaps are natural enemies of fey creatures. The foul creatures set web snares to catch sprites and pixies, which they hungrily devour, and will encase a dryad's tree in webbing in a vain attempt to trap the dryad. Otherwise timid fey will sometimes approach outsiders for help in dealing with an ettercap infestation, being ill-equipped to deal with the malevolent creatures themselves.\nSource: Monster Manual p. 131, Hoard of the Dragon Queen, Rise of Tiamat, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount",
        "environment": "forest"
    },
    {
        "name": "Ettin",
        "size": "L",
        "type": "giant",
        "alignment": "Chaotic Evil",
        "ac": "12 (natural armor)",
        "hp": "85 (10d10+30)",
        "speed": "walk 40 ft.",
        "str": "21",
        "dex": "8",
        "con": "17",
        "int": "6",
        "wis": "10",
        "cha": "8",
        "save": "",
        "skill": "Perception +4",
        "passive": "14",
        "languages": "Giant, Orc",
        "cr": "4",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Two Heads",
                "text": "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
            },
            {
                "name": "Wakeful",
                "text": "When one of the ettin's heads is asleep, its other head is awake."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
            },
            {
                "name": "Battleaxe",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 14 (2d8 + 5) slashing damage.",
                "attack": "Battleaxe|+7|2d8+5"
            },
            {
                "name": "Morningstar",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. 14 (2d8 + 5) piercing damage.",
                "attack": "Morningstar|+7|2d8+5"
            }
        ],
        "description": "An ettin is a foul, two-headed giant with the crude characteristics of an orc. It never bathes if it can help it, and its thick skin is usually encrusted with a thick layer of dirt and grime beneath the stinking hides it wears. Its long stringy hair hangs in an unkempt mess about its faces, and its breath reeks from mouths filled with crooked teeth and tusks.\nDual Personality. The twin heads of an ettin are two individuals trapped in the same brutish body. Each head has its own mind, personality, and name, and possesses unique preferences and quirks. Bound from birth, both minds only rarely experience privacy or solitude. This familiarity breeds contempt, and an ettin bullies and argues with itself constantly, its two heads each taking constant offense at the other's slights.\nWhen other creatures refer to an ettin, they combine its double names to form a single compound name that applies to the creature as a whole. If an ettin has one head named Hargle and another named Vargle, other creatures call the ettin Harglevargle.\nSolitary Lives. As much as an ettin argues with itself, it is even less tolerant of other ettins, since a conversation between two ettins almost always amounts to a shouting match between a crowd of four belligerent heads. Most ettins are solitary creatures as a result, tolerating one another only to reproduce.\nAn ettin's twin heads are always the same gender, with a body to match.\nFemales are the dominant gender among ettins, and they initiate the ettins' mating rituals. After finding a suitable den, a female ettin hunts and conquers a male, which cares for and feeds her during her six-month pregnancy. Once the child is born, the male ettin is released from servitude. When the child is old enough to hunt for itself, the mother sends it away and abandons the den.\nTwo Heads are Better than One. When focused on a mutually beneficial purpose or united by a common threat, an ettin can resolve its personality differences and dedicate itself fully to a task. An ettin fights with a weapon in each hand, making twin attacks directed by its respective heads. When an ettin sleeps, one of its heads remains ever alert, gaining its only moments of privacy and keeping two eyes open for any creature that disturbs its precious solitude.\nOrcish Ties. In ancient dialects of Common, the word \"ettin\" translates as \"ugly giant.\" Legends tell of orcs that once stumbled upon a temple to Demogorgon, the magic of which transformed them into giant mockeries of the twin-headed Prince of Demons. Driven to near madness, these creatures scattered into the wilderness to become the first ettins.\nWhatever the truth of the ettins' origin, orcs treat them as distant cousins, and orc tribes often entice ettins to serve as guards, scouts, and marauders. An ettin isn't particularly loyal to its orc handlers, but the orcs can win it over with the promise of food and loot.\nSource: Monster Manual p. 132, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage",
        "environment": "underdark, mountain, hill"
    },
    {
        "name": "Faerie Dragon (Blue)",
        "size": "T",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "15",
        "hp": "14 (4d4+4)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "3",
        "dex": "20",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Arcana +4, Perception +3, Stealth +7",
        "passive": "13",
        "languages": "Draconic, Sylvan",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "The Colors of Age",
                "text": [
                    "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                    "Red—5 years or less",
                    "Orange—6–10 years",
                    "Yellow—11–20 years",
                    "Green—21–30 years",
                    "Blue—31–40 years",
                    "Indigo—41–50 years",
                    "Violet—51 years or more",
                    "A green or older faerie dragon's CR increases to 2."
                ]
            },
            {
                "name": "Superior Invisibility",
                "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
            },
            {
                "name": "Limited Telepathy",
                "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
            },
            {
                "name": "Magic Resistance",
                "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                    "1/day each: color spray, dancing lights, mage hand, major image, minor illusion, mirror image, suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
            },
            {
                "name": "Euphoria Breath (Recharge 5-6)",
                "text": [
                    "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                    "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                    "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
                ]
            }
        ],
        "spells": "color spray, dancing lights, mage hand, major image, minor illusion, mirror image, suggestion",
        "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133",
        "environment": "forest"
    },
    {
        "name": "Faerie Dragon (Green)",
        "size": "T",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "15",
        "hp": "14 (4d4+4)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "3",
        "dex": "20",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Arcana +4, Perception +3, Stealth +7",
        "passive": "13",
        "languages": "Draconic, Sylvan",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "The Colors of Age",
                "text": [
                    "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                    "Red—5 years or less",
                    "Orange—6–10 years",
                    "Yellow—11–20 years",
                    "Green—21–30 years",
                    "Blue—31–40 years",
                    "Indigo—41–50 years",
                    "Violet—51 years or more",
                    "A green or older faerie dragon's CR increases to 2."
                ]
            },
            {
                "name": "Superior Invisibility",
                "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
            },
            {
                "name": "Limited Telepathy",
                "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
            },
            {
                "name": "Magic Resistance",
                "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                    "1/day each: color spray, dancing lights, mage hand, minor illusion, mirror image, suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
            },
            {
                "name": "Euphoria Breath (Recharge 5-6)",
                "text": [
                    "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                    "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                    "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
                ]
            }
        ],
        "spells": "color spray, dancing lights, mage hand, minor illusion, mirror image, suggestion",
        "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133, Tomb of Annihilation",
        "environment": "forest"
    },
    {
        "name": "Faerie Dragon (Indigo)",
        "size": "T",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "15",
        "hp": "14 (4d4+4)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "3",
        "dex": "20",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Arcana +4, Perception +3, Stealth +7",
        "passive": "13",
        "languages": "Draconic, Sylvan",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "The Colors of Age",
                "text": [
                    "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                    "Red—5 years or less",
                    "Orange—6–10 years",
                    "Yellow—11–20 years",
                    "Green—21–30 years",
                    "Blue—31–40 years",
                    "Indigo—41–50 years",
                    "Violet—51 years or more",
                    "A green or older faerie dragon's CR increases to 2."
                ]
            },
            {
                "name": "Superior Invisibility",
                "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
            },
            {
                "name": "Limited Telepathy",
                "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
            },
            {
                "name": "Magic Resistance",
                "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                    "1/day each: color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
            },
            {
                "name": "Euphoria Breath (Recharge 5-6)",
                "text": [
                    "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                    "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                    "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
                ]
            }
        ],
        "spells": "color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, suggestion",
        "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133",
        "environment": "forest"
    },
    {
        "name": "Faerie Dragon (Orange)",
        "size": "T",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "15",
        "hp": "14 (4d4+4)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "3",
        "dex": "20",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Arcana +4, Perception +3, Stealth +7",
        "passive": "13",
        "languages": "Draconic, Sylvan",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "The Colors of Age",
                "text": [
                    "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                    "Red—5 years or less",
                    "Orange—6–10 years",
                    "Yellow—11–20 years",
                    "Green—21–30 years",
                    "Blue—31–40 years",
                    "Indigo—41–50 years",
                    "Violet—51 years or more",
                    "A green or older faerie dragon's CR increases to 2."
                ]
            },
            {
                "name": "Superior Invisibility",
                "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
            },
            {
                "name": "Limited Telepathy",
                "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
            },
            {
                "name": "Magic Resistance",
                "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                    "1/day each: color spray, dancing lights, mage hand, minor illusion"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
            },
            {
                "name": "Euphoria Breath (Recharge 5-6)",
                "text": [
                    "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                    "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                    "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
                ]
            }
        ],
        "spells": "color spray, dancing lights, mage hand, minor illusion",
        "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133",
        "environment": "forest"
    },
    {
        "name": "Faerie Dragon (Red)",
        "size": "T",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "15",
        "hp": "14 (4d4+4)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "3",
        "dex": "20",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Arcana +4, Perception +3, Stealth +7",
        "passive": "13",
        "languages": "Draconic, Sylvan",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "The Colors of Age",
                "text": [
                    "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                    "Red—5 years or less",
                    "Orange—6–10 years",
                    "Yellow—11–20 years",
                    "Green—21–30 years",
                    "Blue—31–40 years",
                    "Indigo—41–50 years",
                    "Violet—51 years or more",
                    "A green or older faerie dragon's CR increases to 2."
                ]
            },
            {
                "name": "Superior Invisibility",
                "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
            },
            {
                "name": "Limited Telepathy",
                "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
            },
            {
                "name": "Magic Resistance",
                "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                    "1/day each: dancing lights, mage hand, minor illusion"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
            },
            {
                "name": "Euphoria Breath (Recharge 5-6)",
                "text": [
                    "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                    "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                    "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
                ]
            }
        ],
        "spells": "dancing lights, mage hand, minor illusion",
        "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133",
        "environment": "forest"
    },
    {
        "name": "Faerie Dragon (Violet)",
        "size": "T",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "15",
        "hp": "14 (4d4+4)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "3",
        "dex": "20",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Arcana +4, Perception +3, Stealth +7",
        "passive": "13",
        "languages": "Draconic, Sylvan",
        "cr": "2",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "The Colors of Age",
                "text": [
                    "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                    "Red—5 years or less",
                    "Orange—6–10 years",
                    "Yellow—11–20 years",
                    "Green—21–30 years",
                    "Blue—31–40 years",
                    "Indigo—41–50 years",
                    "Violet—51 years or more",
                    "A green or older faerie dragon's CR increases to 2."
                ]
            },
            {
                "name": "Superior Invisibility",
                "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
            },
            {
                "name": "Limited Telepathy",
                "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
            },
            {
                "name": "Magic Resistance",
                "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                    "1/day each: color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, polymorph, suggestion"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
            },
            {
                "name": "Euphoria Breath (Recharge 5-6)",
                "text": [
                    "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                    "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                    "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
                ]
            }
        ],
        "spells": "color spray, dancing lights, hallucinatory terrain, mage hand, major image, minor illusion, mirror image, polymorph, suggestion",
        "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount",
        "environment": "forest"
    },
    {
        "name": "Faerie Dragon (Yellow)",
        "size": "T",
        "type": "dragon",
        "alignment": "Chaotic Good",
        "ac": "15",
        "hp": "14 (4d4+4)",
        "speed": "walk 10 ft., fly 60 ft.",
        "str": "3",
        "dex": "20",
        "con": "13",
        "int": "14",
        "wis": "12",
        "cha": "16",
        "save": "",
        "skill": "Arcana +4, Perception +3, Stealth +7",
        "passive": "13",
        "languages": "Draconic, Sylvan",
        "cr": "1",
        "resist": "",
        "immune": "",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "The Colors of Age",
                "text": [
                    "A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.",
                    "Red—5 years or less",
                    "Orange—6–10 years",
                    "Yellow—11–20 years",
                    "Green—21–30 years",
                    "Blue—31–40 years",
                    "Indigo—41–50 years",
                    "Violet—51 years or more",
                    "A green or older faerie dragon's CR increases to 2."
                ]
            },
            {
                "name": "Superior Invisibility",
                "text": "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it."
            },
            {
                "name": "Limited Telepathy",
                "text": "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
            },
            {
                "name": "Magic Resistance",
                "text": "The faerie dragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "text": [
                    "The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:",
                    "1/day each: color spray, dancing lights, mage hand, minor illusion, mirror image"
                ]
            }
        ],
        "action": [
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. 1 piercing damage."
            },
            {
                "name": "Euphoria Breath (Recharge 5-6)",
                "text": [
                    "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn:",
                    "1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.",
                    "5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
                ]
            }
        ],
        "spells": "color spray, dancing lights, mage hand, minor illusion, mirror image",
        "description": "A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.\nInvisible Tricksters. The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"\nFriendly and Bright. A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.\nThe Colors of Age. A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.\nDragon Color | Age Range\nRed | 5 years or less\nOrange | 6–10 years\nYellow | 11–20 years\nGreen | 21–30 years\nBlue | 31–40 years\nIndigo | 41–50 years\nViolet | 51 years or more\nCR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon\nSource: Monster Manual p. 133",
        "environment": "forest"
    },
    {
        "name": "Fire Elemental",
        "size": "L",
        "type": "elemental",
        "alignment": "Neutral",
        "ac": "13",
        "hp": "102 (12d10+36)",
        "speed": "walk 50 ft.",
        "str": "10",
        "dex": "17",
        "con": "16",
        "int": "6",
        "wis": "10",
        "cha": "7",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "Ignan",
        "cr": "5",
        "resist": "bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "fire, poison",
        "vulnerable": "",
        "conditionImmune": "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Fire Form",
                "text": "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns."
            },
            {
                "name": "Illumination",
                "text": "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft.."
            },
            {
                "name": "Water Susceptibility",
                "text": "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The elemental makes two touch attacks."
            },
            {
                "name": "Touch",
                "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.",
                "attack": "Touch|+6|2d6+3"
            }
        ],
        "description": "Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.\nLiving Elements. On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.\nConjured by Magic. Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.\nBound and Shaped. Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.\nElemental Nature. An elemental doesn't require air, food, drink, or sleep.\nSource: Monster Manual p. 125, Princes of the Apocalypse, Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Tasha's Cauldron of Everything",
        "environment": "desert"
    },
    {
        "name": "Fire Giant",
        "size": "H",
        "type": "giant",
        "alignment": "Lawful Evil",
        "ac": "18 (plate armor)",
        "hp": "162 (13d12+78)",
        "speed": "walk 30 ft.",
        "str": "25",
        "dex": "9",
        "con": "23",
        "int": "10",
        "wis": "14",
        "cha": "13",
        "save": "Dex +3, Con +10, Cha +5",
        "skill": "Athletics +11, Perception +6",
        "passive": "16",
        "languages": "Giant",
        "cr": "9",
        "resist": "",
        "immune": "fire",
        "vulnerable": "",
        "conditionImmune": "",
        "senses": "",
        "action": [
            {
                "name": "Multiattack",
                "text": "The giant makes two greatsword attacks."
            },
            {
                "name": "Greatsword",
                "text": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. 28 (6d6 + 7) slashing damage.",
                "attack": "Greatsword|+11|6d6+7"
            },
            {
                "name": "Rock",
                "text": "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. 29 (4d10 + 7) bludgeoning damage.",
                "attack": "Rock|+11|4d10+7"
            },
            {
                "name": "Variant: New Giant Options",
                "text": [
                    "Some adult fire giants are trained to lay siege to strongholds and break through enemy lines. These abilities are represented by the following traits.",
                    "Siege Monster. The giant deals double damage to objects and structures.",
                    "Tackle. When the giant enters any enemy's space for the first time on a turn, the enemy must succeed on a DC 19 Strength saving throw or be knocked prone."
                ]
            }
        ],
        "description": "Old as Legend\nIn remote regions of the world, the last remaining plinths, monoliths, and statues of the great giant empires bow their heads in desolate obscurity. Where once those empires sprawled across all lands, now the giants dwell in isolated tribes and clans.\nGiants are almost as old as dragons, which were still young when the giants' heavy feet first shook the foundations of the world. As they spread across new lands, giants and dragons fought bitter generational wars that nearly brought both sides low. No living giant remembers what started the conflict, but myths and tales of their race's glorious dawn are still sung in their steadings and holdfasts, vilifying the primeval wyrms. Giants and dragons continue to harbor grudges against one another, and it is seldom that they will meet or occupy the same area without a fight.\nThe Ordning\nEach of the main giant races-the cloud, fire, frost, hill, stone, and storm giants-are related by common elements of history, religion, and culture. They view one another as kindred, keeping any inherent animosity over territory and ambition to a minimum.\nGiants belong to a caste structure called the ordning. Based on social class and highly organized, the ordning assigns a social rank to each giant. By understanding its place in the ordning, a giant knows which other giants are inferior or superior to it, since no two giants are equal. Each of the giant races analyzes a different combination of skills or qualities to determine the ordning. Giants make excelling in these qualities the purpose of their lives.\nAt the highest level of the ordning, the races of the giants are also ranked according to status. Storm giants are the highest in the ordning, followed by cloud giants, fire giants, frost giants, stone giants, hill giants, and finally giant kin such as fomorians, ettins, and ogres.\nRegardless of a giant's rank among its own race, the chief of a hill giant tribe is inferior to the most common of stone giants. The lowest ranked giant of any type is superior to the highest ranked giant of an inferior type. It isn't considered evil to disrespect or even betray a giant of another type, merely rude.\nGiant Gods\nWhen the giants' ancient empires fell, Annam, father of all giants, forsook his children and the world. He swore never to look upon either again until the giants had returned to their glory and reclaimed their birthright as rulers of the world. As a result, giants pray not to Annam but to his divine children, along with a host of hero-deities and godly villains that make up the giants' pantheon.\nChief among these gods are the children of Annam, whose sons represent each type of giant: Stronmaus for storm giants, Memnor for cloud giants, Skoraeus Stonebones for stone giants, Thrym for frost giants, Surtur for fire giants, and Grolantor for hill giants. Not all giants automatically revere their kind's primary deity, however. Many good cloud giants refuse to worship the deceitful Memnor, and a storm giant dwelling in the icy mountains of the north might pay more homage to Thrym than Stronmaus. Other giants feel a stronger connection to Annam's daughters, who include Hiatea, the huntress and home warden; Iallanis, goddess of love and peace; and Diancastra, an impetuous and arrogant trickster.\nSome giants abandon their own gods and fall prey to demon cults, paying homage to Baphomet or Kostchtchie. To worship them or any other non-giant deity is a great sin against the ordning, and almost certain to make a giant an outcast.\nSource: Monster Manual p. 154, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Mythic Odysseys of Theros",
        "environment": "underdark, mountain"
    },
    {
        "name": "Fire Snake",
        "size": "M",
        "type": "elemental",
        "alignment": "Neutral Evil",
        "ac": "14 (natural armor)",
        "hp": "22 (5d8)",
        "speed": "walk 30 ft.",
        "str": "12",
        "dex": "14",
        "con": "11",
        "int": "7",
        "wis": "10",
        "cha": "8",
        "save": "",
        "skill": "",
        "passive": "10",
        "languages": "understands Ignan but can't speak",
        "cr": "1",
        "resist": "bludgeoning, piercing, slashing from nonmagical attacks",
        "immune": "fire",
        "vulnerable": "cold",
        "conditionImmune": "",
        "senses": "darkvision 60 ft.",
        "trait": {
            "name": "Heated Body",
            "text": "A creature that touches the snake or hits it with a melee attack while within 5 feet of it takes 3 (1d6) fire damage."
        },
        "action": [
            {
                "name": "Multiattack",
                "text": "The snake makes two attacks: one with its bite and one with its tail."
            },
            {
                "name": "Bite",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3 (1d4 + 1) piercing damage plus 3 (1d6) fire damage.",
                "attack": "Bite|+3|1d4+1"
            },
            {
                "name": "Tail",
                "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. 3 (1d4 + 1) bludgeoning damage plus 3 (1d6) fire damage.",
                "attack": "Tail|+3|1d4+1"
            }
        ],
        "description": "Salamanders slither across the Sea of Ash on the Elemental Plane of Fire, their sinuous coils and jagged spines smoldering. Intense heat washes off their bodies, while their yellow eyes glow like candles in the deep-set hollows of their hawkish faces.\nSalamanders adore power, and they delight in setting fire to things. Outside their home plane, they play among the burning skeletons of charred trees as forest fires rage around them, or slither down the slopes of erupting volcanoes to linger in fire pits and magma floes.\nFire Snakes. Salamanders hatch from eggs that are two-foot-diameter spheres of smoldering obsidian. When a salamander is ready to hatch, it melts its way through the egg's thick shell and emerges as a fire snake. A fire snake matures into a salamander adult within a year.\nSlaves of the Efreet. Long ago, the efreet hired azers to build the fabled City of Brass, but then failed in their attempt to enslave that mystical race when the azers' work was done. Turning instead to strike against the salamanders, the efreet had better luck in establishing a slave race, which they use to unleash war and destruction across the planes.\nSalamanders despise the azers, believing that if the efreet had succeeded in dominating that race of elemental crafters, the salamanders would still be free. The efreet use this enmity to their own advantage, stoking the salamanders' hatred and pitting them against the efreets' former servants.\nThe efreet suffer salamanders to serve no other master; when efreet encounter salamanders dedicated to the cults of Elemental Evil, they slay them rather than taking them as slaves.\nDomineering Nobles. Although salamanders follow the destructive impulses of their fiery nature, slavery under the efreet has impacted the culture of free salamanders. They rule their own societies according to the efreet model, in which larger and stronger salamanders claim dominion over their lesser kin.\nAs salamanders age, they increase in size and status, rising to positions of power as cruel nobles among their kind. Nobles rule wandering bands of salamanders, which move across the Elemental Plane of Fire like desert nomads, raiding other communities for treasure.\nLiving Forges. Salamanders generate intense heat, and when they fight, their weapons glow red and sear the bodies of their enemies on contact. Even approaching a salamander is dangerous, since flesh blisters and burns in its proximity.\nThis inherent heat is an asset to salamanders' skill as smiths, allowing them to soften and shape iron and steel with their bare hands. Although not as meticulous as azers, salamanders number among the greatest metalsmiths in all the planes. Powerful creatures summon them as warriors, but others enlist the salamanders for their crafting skills, or bind them to forges and ovens to generate limitless heat.\nSource: Monster Manual p. 265, Princes of the Apocalypse, Tales from the Yawning Portal, Tomb of Annihilation",
        "environment": "underdark"
    },
    {
        "name": "Flameskull",
        "size": "T",
        "type": "undead",
        "alignment": "Neutral Evil",
        "ac": "13",
        "hp": "40 (9d4+18)",
        "speed": "walk 0 ft., fly 40 ft.",
        "str": "1",
        "dex": "17",
        "con": "14",
        "int": "16",
        "wis": "10",
        "cha": "11",
        "save": "",
        "skill": "Arcana +5, Perception +2",
        "passive": "12",
        "languages": "Common",
        "cr": "4",
        "resist": "lightning, necrotic, piercing",
        "immune": "cold, fire, poison",
        "vulnerable": "",
        "conditionImmune": "charmed, frightened, paralyzed, poisoned, prone",
        "senses": "darkvision 60 ft.",
        "trait": [
            {
                "name": "Illumination",
                "text": "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action."
            },
            {
                "name": "Magic Resistance",
                "text": "The flameskull has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Rejuvenation",
                "text": "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them."
            },
            {
                "name": "Spellcasting",
                "text": [
                    "The flameskull is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or material components to cast its spells. The flameskull has the following wizard spells prepared:",
                    "Cantrips (at will): mage hand",
                    "• 1st level (3 slots): magic missile, shield",
                    "• 2nd level (2 slots): blur, flaming sphere",
                    "• 3rd level (1 slots): fireball"
                ]
            }
        ],
        "action": [
            {
                "name": "Multiattack",
                "text": "The flameskull uses Fire Ray twice."
            },
            {
                "name": "Fire Ray",
                "text": "Ranged Spell Attack: +5 to hit, range 30 ft., one target. 10 (3d6) fire damage.",
                "attack": "Fire Ray|+5|3d6"
            }
        ],
        "slots": "3, 2, 1",
        "spells": "mage hand, magic missile, shield, blur, flaming sphere, fireball",
        "description": "Blazing green flames and mad, echoing laughter follow a disembodied skull as it patrols its demesne. When the undead flameskull discovers trespassers, it blasts the intruders with fiery rays from its eyes and dreadful spells called up from the dark recesses of its memory.\nDark spellcasters fashion flameskulls from the remains of dead wizards. When the ritual is complete, green flames erupt from the skull to complete its ghastly transformation.\nLegacy of Life. A flameskull only dimly recalls its former life. Though it might speak in its old voice and recount key events from its past, it is but an echo of its former self. However, its undead transformation grants it full access to the magic it wielded in life, letting it cast spells while ignoring the material and somatic components it can no longer employ.\nEternally Bound. Intelligent and vigilant, a flameskull serves its creator by protecting a hidden treasure hoard, a secret chamber, or a specific individual. A flameskull carries out the directives given to it when it was created, and it interprets those commands to the letter. A flameskull's master must craft its instructions with care to ensure that the creature carries out its tasks properly.\nWreathed in Flame. The fire wreathing a flameskull burns continually, giving off bright light that the creature controls. It uses those flames as a weapon, focusing them to loose them as fiery rays from its eye sockets.\nEldritch Rejuvenation. A flameskull's shattered fragments reform unless they are splashed with holy water or subjected to a dispel magic or remove curse spell. If it can no longer fulfill its intended purpose, the re-formed flameskull is beholden to no one and becomes autonomous.\nUndead Nature. A flameskull doesn't require air, food, drink, or sleep\nSource: Monster Manual p. 134, Curse of Strahd, Lost Mine of Phandelver, Princes of the Apocalypse, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Essentials Kit: Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, The Lost Dungeon of Rickedness: Big Rick Energy, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything",
        "environment": "underdark"
    }
]

export default monsterManual