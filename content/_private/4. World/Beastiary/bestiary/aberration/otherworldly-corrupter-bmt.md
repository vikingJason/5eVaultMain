---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Otherworldly Corrupter"
---
# [Otherworldly Corrupter](otherworldly-corrupter-bmt.md)
*Source: The Book of Many Things p. 47*  

A challenge for tier 3 play (levels 11 to 16), the otherworldly corrupter is a horrific Aberration that infects or impersonates a host.

## The Rogue's Lair

This villain resides in a place of power and safety, whether that's a hidden thieves' guildhall or a lavish manse. The lair is filled with clever defenses to disorient, weaken, and kill intruders.

The villain's challenge rating increases while the villain is in this lair:

- **Otherworldly Corrupter.** Challenge 18 (20,000 XP)  

```statblock
"name": "Otherworldly Corrupter (BMT)"
"size": "Small or Medium"
"type": "aberration"
"alignment": "typically  Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "217"
"hit_dice": "29d8 + 87"
"modifier": !!int "6"
"stats":
  - !!int "12"
  - !!int "22"
  - !!int "16"
  - !!int "22"
  - !!int "18"
  - !!int "20"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "12"
  - "intelligence": !!int "12"
"skillsaves":
  - "name": "Perception"
    "desc": "+10"
  - "name": "Stealth"
    "desc": "+18"
"damage_resistances": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "blindsight 30 ft., passive Perception 20"
"languages": "Common, telepathy 120 ft., Thieves' cant"
"cr": "17"
"traits":
  - "desc": "Magic and other features can't determine the corrupter's creature type.\
      \ If a creature tries to read the corrupter's thoughts, that creature must succeed\
      \ on a DC 20 Intelligence saving throw or have the stunned condition for 1 minute.\
      \ The stunned creature can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Alien Mind"
  - "desc": "If the corrupter fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The corrupter can climb difficult surfaces, including upside down on\
      \ ceilings, without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The corrupter makes three Whispering Blade attacks and can use Debilitating\
      \ Touch."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +12 to hit, reach 5 ft. or range\
      \ 60 ft., one target. *Hit:* 10 (1d8 + 6) piercing damage plus 14 (4d6)\
      \ psychic damage. If the target is a creature, it must succeed on a DC 20 Wisdom\
      \ saving throw or be unable to speak until the start of the corrupter's next\
      \ turn."
    "name": "Whispering Blade"
  - "desc": "The corrupter's squirming tentacle lashes out at a creature the corrupter\
      \ can see within 30 feet of itself. The target must succeed on a DC 20 Constitution\
      \ saving throw or have the paralyzed condition until the end of its next turn,\
      \ after which the target is immune to this Debilitating Touch for 24 hours."
    "name": "Debilitating Touch"
"bonus_actions":
  - "desc": "The corrupter magically transforms into any creature that is Small or\
      \ Medium, while retaining its game statistics (other than its size). This transformation\
      \ ends if the corrupter is reduced to 0 hit points or uses a bonus action to\
      \ end it."
    "name": "Change Shape"
"reactions":
  - "desc": "When an attacker the corrupter can see hits the corrupter with an attack,\
      \ the corrupter halves the attack's damage against it."
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
  \ turn, the otherworldly corrupter can expend a use to take one of the following\
  \ actions. The otherworldly corrupter regains all expended uses at the start of\
  \ each of its turns."
"legendary_actions":
  - "desc": "The corrupter escapes nonmagical restraints and ends the grappled and\
      \ restrained conditions on itself, then moves up to its speed without provoking\
      \ opportunity attacks."
    "name": "Cunning"
  - "desc": "The corrupter makes one Whispering Blade attack."
    "name": "Stab (Costs 2 Actions)"
  - "desc": "The corrupter dissolves into a shifting mass of flesh, tentacles, eyes,\
      \ claws, and mouths. Up to two creatures the corrupter can see within 20 feet\
      \ of itself must make a DC 20 Intelligence saving throw, taking 18 (4d8) psychic\
      \ damage on a failed save, or half as much damage on a successful one. This\
      \ transformation lasts until the end of the corrupter's next turn. While transformed,\
      \ the corrupter has advantage on attack rolls, attack rolls made against it\
      \ have disadvantage, and it can move through spaces at least 1 inch wide without\
      \ squeezing."
    "name": "Amorphous Escape (Costs 3 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/aberration/token/otherworldly-corrupter-bmt.webp"
```
^statblock