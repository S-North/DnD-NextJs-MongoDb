const monsterManual = [
    {
        "name": "Test Spellcaster Import",
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
              "text": [
                 "The archmage has advantage on saving throws against spells and other magical effects."
              ]
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
              "text": [
                 "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. 4 (1d4 + 2) piercing damage."
              ],
              "attack": [
                 "Dagger|+6|1d4+2"
              ]
           },
           {
              "name": "Variant: Familiars",
              "text": [
                 "Any spellcaster that can cast the find familiar spell (such as an archmage or mage) is likely to have a familiar. The familiar can be one of the creatures described in the spell (see the Player's Handbook) or some other Tiny monster, such as a crawling claw, imp, pseudodragon, or quasit."
              ]
           }
        ],
        "slots": "4, 3, 3, 3, 3, 1, 1, 1, 1",
        "spells": "disguise self, invisibility, fire bolt, light, mage hand, prestidigitation, shocking grasp, detect magic, identify, mage armor, magic missile, detect thoughts, mirror image, misty step, counterspell, fly, lightning bolt, banishment, fire shield, stoneskin, cone of cold, scrying, wall of force, globe of invulnerability, teleport, mind blank, time stop",
        "description": "Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption.\nAn archmage typically has one or more apprentice mages, and an archmage's abode has numerous magical wards and guardians to discourage interlopers.\nSource: Monster Manual p. 342, Curse of Strahd, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden",
        "environment": ""
     }
]

export default monsterManual