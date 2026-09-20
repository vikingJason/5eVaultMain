---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Eku"
---
# [Eku](CLI/bestiary/npc/eku-toa.md)
*Source: Tomb of Annihilation p. 34*  

```statblock
"name": "Eku (ToA)"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "20"
  - !!int "17"
  - !!int "18"
  - !!int "20"
  - !!int "18"
"speed": "30 ft., fly 90 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "7"
  - "charisma": !!int "6"
"damage_resistances": "radiant"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "4"
"traits":
  - "desc": "Eku's spellcasting ability is Charisma (spell save DC 14). It can innately\
      \ cast the following spells, requiring only verbal components:\n\n**At will:**\
      \ detect evil and good, detect magic, detect thoughts\n\n**3/day each:** bless,\
      \ create food and water, cure wounds, lesser restoration, protection from poison,\
      \ sanctuary, shield\n\n**1/day each:** dream, greater restoration, scrying"
    "name": "Innate Spellcasting"
  - "desc": "Eku's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "Eku is immune to scrying and to any effect that would sense its emotions,\
      \ read its thoughts, or detect its location."
    "name": "Shielded Mind"
"actions":
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one creature. *Hit:*\
      \ 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be poisoned for 24 hours. Until this poison ends, the target\
      \ is unconscious. Another creature can use an action to shake the target awake."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one Medium or smaller\
      \ creature. *Hit:* 10 (2d6 + 3) bludgeoning damage, and the target is grappled\
      \ (escape DC 15). Until this grapple ends, the target is restrained, and Eku\
      \ can't constrict another target."
    "name": "Constrict"
  - "desc": "Eku magically polymorphs into a humanoid or beast that has a challenge\
      \ rating equal to or less than its own, or back into its true form. It reverts\
      \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
      \ or borne by the new form (Eku's choice).\n\nIn a new form, Eku retains its\
      \ game statistics and ability to speak, but its AC, movement modes, Strength,\
      \ Dexterity, and other actions are replaced by those of the new form, and it\
      \ gains any statistics and capabilities (except class features, legendary actions,\
      \ and lair actions) that the new form has but that it lacks. If the new form\
      \ has a bite attack, Eku can use its bite in that form."
    "name": "Change Shape"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/eku-toa.webp"
```
^statblock