---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Enchanting Infiltrator"
---
# [Enchanting Infiltrator](enchanting-infiltrator-bmt.md)
*Source: The Book of Many Things p. 46*  

An antagonist for tier 2 play (levels 5 to 10), the enchanting infiltrator is a Fey that beguiles and misdirects.

## The Rogue's Lair

This villain resides in a place of power and safety, whether that's a hidden thieves' guildhall or a lavish manse. The lair is filled with clever defenses to disorient, weaken, and kill intruders.

The villain's challenge rating increases while the villain is in this lair:

- **Enchanting Infiltrator.** Challenge 12 (8,400 XP)  

```statblock
"name": "Enchanting Infiltrator (BMT)"
"size": "Small or Medium"
"type": "fey"
"alignment": "typically  Neutral Evil"
"ac": !!int "18"
"ac_class": "veiled presence"
"hp": !!int "156"
"hit_dice": "24d8 + 48"
"modifier": !!int "5"
"stats":
  - !!int "10"
  - !!int "20"
  - !!int "15"
  - !!int "20"
  - !!int "16"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "9"
  - "intelligence": !!int "9"
"skillsaves":
  - "name": "Deception"
    "desc": "+12"
  - "name": "Perception"
    "desc": "+7"
  - "name": "Stealth"
    "desc": "+13"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 30 ft., passive Perception 17"
"languages": "Common, thieves' cant, plus any one language"
"cr": "11"
"traits":
  - "desc": "If the infiltrator fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The infiltrator's AC includes its Wisdom modifier, and the infiltrator\
      \ can't be targeted by divination magic or features that would read its mind\
      \ or determine its creature type."
    "name": "Veiled Presence"
"actions":
  - "desc": "The infiltrator makes two Poison Blade attacks and can use Beguiling\
      \ Whisper."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +9 to hit, reach 5 ft. or range 60\
      \ ft., one target. *Hit:* 7 (1d4 + 5) piercing damage plus 11 (2d10) poison\
      \ damage."
    "name": "Poison Blade"
  - "desc": "The infiltrator magically whispers to a creature it can see within 30\
      \ feet of itself. The target must succeed on a DC 17 Wisdom saving throw or\
      \ have the stunned condition due to fear or delight (the infiltrator's choice)\
      \ until the end of the target's next turn, after which the target is immune\
      \ to this Beguiling Whisper for 24 hours."
    "name": "Beguiling Whisper"
"reactions":
  - "desc": "When an attacker the infiltrator can see hits the infiltrator with an\
      \ attack, the infiltrator halves the attack's damage against it."
    "name": "Uncanny Dodge"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties) while in its lair, the\
      \ villain can take one of the following lair actions; the villain can't take\
      \ the same lair action two rounds in a row:\n\n- **Distraction.** A shrill sound\
      \ fills the lair. Creatures that can hear it must succeed on a DC 15 Constitution\
      \ saving throw or lose concentration.  \n- **Snares.** Hidden snares target\
      \ up to three creatures the villain can see in the lair. Each creature must\
      \ succeed on a DC 15 Strength saving throw or have the grappled condition (escape\
      \ DC 15) and the restrained condition until it escapes or the snare holding\
      \ it is destroyed. Each snare has AC 11, 10 hit points, and immunity to poison\
      \ and psychic damage.  \n- **Traps.** Traps target up to two creatures the villain\
      \ can see in the lair. Each target must succeed on a DC 15 Dexterity saving\
      \ throw or be struck by a trap. The villain rolls a number of d6s equal to its\
      \ proficiency bonus, and struck targets take damage equal to the total. The\
      \ damage is bludgeoning, piercing, slashing, fire, or poison, chosen by the\
      \ villain when the villain uses this action.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a villain's lair is warped by their presence, creating\
      \ one or more of the following effects:\n\n- **Corruption Abounds.** While within\
      \ 3 miles of the lair, creatures that aren't members of the villain's organization\
      \ have disadvantage on ability checks that rely on the Insight, Perception,\
      \ and Persuasion skills.  \n- **Potent Toxins.** When members of the villain's\
      \ organization deal poison damage while within 3 miles of the lair, they ignore\
      \ the target's resistance to poison damage.  \n\nIf the villain dies, these\
      \ effects fade over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the enchanting infiltrator can expend a use to take one of the following\
  \ actions. The enchanting infiltrator regains all expended uses at the start of\
  \ each of its turns."
"legendary_actions":
  - "desc": "The infiltrator escapes nonmagical restraints and ends the grappled condition\
      \ on itself, then moves up to its speed without provoking opportunity attacks."
    "name": "Cunning"
  - "desc": "The infiltrator makes one Poison Blade attack."
    "name": "Stab (Costs 2 Actions)"
  - "desc": "The infiltrator magically has the invisible condition and creates an\
      \ illusory duplicate of itself in its space, then teleports, along with any\
      \ equipment it is wearing or carrying, to an unoccupied space within 15 feet\
      \ of itself. The image flings illusory blades at two creatures of the infiltrator's\
      \ choice within 20 feet of the image. Each target must make a DC 17 Wisdom saving\
      \ throw, taking 13 (3d8) psychic damage on a failed save, or half as much\
      \ damage on a successful one. The invisibility lasts until the end of the infiltrator's\
      \ next turn."
    "name": "Misdirecting Escape (Costs 3 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/fey/token/enchanting-infiltrator-bmt.webp"
```
^statblock