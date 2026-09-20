---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Living Star (Psychic)"
---
# [Living Star (Psychic)](living-star-psychic-bmt.md)
*Source: The Book of Many Things p. 180*  

```statblock
"name": "Living Star (Psychic) (BMT)"
"size": "Small or Medium"
"type": "aberration"
"alignment": "typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "16"
  - !!int "15"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "Arcana"
    "desc": "+6"
  - "name": "History"
    "desc": "+6"
  - "name": "Insight"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+5"
"damage_immunities": "radiant"
"condition_immunities": "exhaustion"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "all"
"cr": "3"
"traits":
  - "desc": "The living portent sheds bright light for 30 feet and dim light for an\
      \ additional 30 feet."
    "name": "Brilliance (True Form Only)"
"actions":
  - "desc": "The living portent makes two Radiant Strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +5 to hit, reach 5 ft. or range 120\
      \ ft., one target. *Hit:* 9 (1d12 + 3) psychic damage."
    "name": "Radiant Strike"
  - "desc": "The living portent magically infuses the power of its prophecy into another\
      \ willing creature the living portent can see within 30 feet of itself. The\
      \ target's hit point maximum and current hit points increase by 7 (1d8 + 3),\
      \ and it gains a prophecy die, a d8. Once during each of the creature's turns,\
      \ when it fails an ability check or saving throw or misses an attack roll, it\
      \ can roll the prophecy die and add the number rolled to the total, potentially\
      \ changing the outcome. The blessing ends after 1 hour or when the living portent\
      \ ends the blessing (no action required) or uses this action again."
    "name": "Prophetic Blessing"
  - "desc": "The living portent casts one of the following spells, requiring no material\
      \ components and using Wisdom as the spellcasting ability:\n\n**2/day:** Cure\
      \ Wounds\n\n**1/day each:** Divination, Greater Restoration"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The living portent magically transforms into a Humanoid while retaining\
      \ its game statistics (other than its size and Brilliance trait). The transformation\
      \ ends if the living portent is reduced to 0 hit points or uses a bonus action\
      \ to end it."
    "name": "Change Shape"
"reactions":
  - "desc": "When the living portent is damaged by a creature that it can see within\
      \ 120 feet of itself, psychic power sears the creature. The creature must make\
      \ a DC 13 Constitution saving throw, taking 10 (3d6) psychic damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Price of Defiance"
"source":
  - "BMT"
```
^statblock