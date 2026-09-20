---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ambitious Assassin"
---
# [Ambitious Assassin](ambitious-assassin-bmt.md)
*Source: The Book of Many Things p. 45*  

Appropriate for tier 1 play (levels 1 to 4), the ambitious assassin is a Humanoid who might be a charming manipulator or a ruthless killer.

## The Rogue's Lair

This villain resides in a place of power and safety, whether that's a hidden thieves' guildhall or a lavish manse. The lair is filled with clever defenses to disorient, weaken, and kill intruders.

The villain's challenge rating increases while the villain is in this lair:

- **Ambitious Assassin.** Challenge 6 (2,300 XP)  

```statblock
"name": "Ambitious Assassin (BMT)"
"size": "Small or Medium"
"type": "humanoid"
"alignment": "typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "studded leather"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "15"
  - !!int "18"
  - !!int "14"
  - !!int "16"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "7"
  - "intelligence": !!int "7"
"skillsaves":
  - "name": "Deception"
    "desc": "+9"
  - "name": "Perception"
    "desc": "+5"
  - "name": "Stealth"
    "desc": "+10"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 10 ft., passive Perception 15"
"languages": "Common, thieves' cant, plus any one language"
"cr": "5"
"traits":
  - "desc": "If the assassin fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
"actions":
  - "desc": "The assassin makes two Poison Blade attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 60\
      \ ft., one target. *Hit:* 6 (1d4 + 4) piercing damage plus 5 (1d10) poison\
      \ damage."
    "name": "Poison Blade"
"reactions":
  - "desc": "When an attacker the assassin can see hits the assassin with an attack,\
      \ the assassin halves the attack's damage against it."
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
  \ turn, the ambitious assassin can expend a use to take one of the following actions.\
  \ The ambitious assassin regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The assassin escapes nonmagical restraints and ends the grappled condition\
      \ on itself, then moves up to its speed without provoking opportunity attacks."
    "name": "Cunning"
  - "desc": "The assassin makes one Poison Blade attack."
    "name": "Stab (Costs 2 Actions)"
  - "desc": "The assassin creates a sudden distraction, such as a cloud of disorienting\
      \ smoke or flash of dazzling light, filling a 10-foot cube within 5 feet of\
      \ the assassin. Each creature of the assassin's choice in that area takes 9\
      \ (2d8) psychic damage, and the assassin has the invisible condition. This\
      \ invisibility lasts until the end of the assassin's next turn."
    "name": "Vanishing Escape (Costs 3 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/humanoid/token/ambitious-assassin-bmt.webp"
```
^statblock