---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Veiled Presence"
---
# [Veiled Presence](veiled-presence-bmt.md)
*Source: The Book of Many Things p. 48*  

The ultimate threat created by the Rogue card, the veiled presence is a Celestial for tier 4 play (levels 17 to 20). This being descends from an Outer Plane to bring cosmic wrath upon the characters.

## The Rogue's Lair

This villain resides in a place of power and safety, whether that's a hidden thieves' guildhall or a lavish manse. The lair is filled with clever defenses to disorient, weaken, and kill intruders.

The villain's challenge rating increases while the villain is in this lair:

- **Veiled Presence.** Challenge 22 (41,000 XP)  

```statblock
"name": "Veiled Presence (BMT)"
"size": "Small or Medium"
"type": "celestial"
"alignment": "typically  Lawful Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "300"
"hit_dice": "40d8 + 120"
"modifier": !!int "7"
"stats":
  - !!int "14"
  - !!int "24"
  - !!int "16"
  - !!int "24"
  - !!int "20"
  - !!int "22"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  - "dexterity": !!int "14"
  - "intelligence": !!int "14"
"skillsaves":
  - "name": "Perception"
    "desc": "+12"
  - "name": "Stealth"
    "desc": "+21"
"damage_resistances": "necrotic, radiant"
"condition_immunities": "charmed, frightened"
"senses": "truesight 30 ft., passive Perception 22"
"languages": "all"
"cr": "21"
"traits":
  - "desc": "The veiled presence can't be targeted by divination magic or by features\
      \ that would read its mind or determine its creature type."
    "name": "Inviolate Presence"
  - "desc": "If the veiled presence fails a saving throw, it can choose to succeed\
      \ instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The veiled presence makes two Blade of Judgment attacks and can use Revelation."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +14 to hit, reach 5 ft. or range\
      \ 60 ft., one target. *Hit:* 10 (1d6 + 7) piercing damage plus 27 (6d8)\
      \ radiant damage. If the target is a creature, it must succeed on a DC 22 Charisma\
      \ saving throw, or on its next turn, it can either move or take an action, but\
      \ not both."
    "name": "Blade of Judgment"
  - "desc": "The veiled presence reveals a glimpse of its otherworldly nature to a\
      \ creature it can see within 30 feet of itself. The target must succeed on a\
      \ DC 22 Wisdom saving throw or have the paralyzed condition until the end of\
      \ its next turn, after which the target is immune to this Revelation for 24\
      \ hours."
    "name": "Revelation"
"reactions":
  - "desc": "When an attacker the veiled presence can see hits the veiled presence\
      \ with an attack, the veiled presence halves the attack's damage against it."
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
  \ turn, the veiled presence can expend a use to take one of the following actions.\
  \ The veiled presence regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The veiled presence magically teleports, along with any equipment it\
      \ is wearing or carrying, up to 40 feet to an unoccupied space that it can see."
    "name": "Flash Step"
  - "desc": "The veiled presence makes one Blade of Judgment attack."
    "name": "Stab (Costs 2 Actions)"
  - "desc": "The veiled presence magically emanates dazzling light in a 10-foot-radius\
      \ sphere centered on itself until the end of its next turn, during which time\
      \ attack rolls against it have disadvantage and it has advantage on attack rolls.\
      \ The sphere moves with the veiled presence. When another creature starts its\
      \ turn in the light or enters the light for the first time on its turn, that\
      \ creature must make a DC 22 Constitution saving throw, taking 18 (4d8) radiant\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Searing Radiance (Costs 3 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/celestial/token/veiled-presence-bmt.webp"
```
^statblock