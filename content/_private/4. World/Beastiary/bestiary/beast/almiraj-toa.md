---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Almiraj"
---
# [Almiraj](almiraj-toa.md)
*Source: Tomb of Annihilation p. 211*  

An almiraj (pronounced AWL-meer-ahj) is a large, timid rabbit with a 1-foot-long spiral horn emerging from its forehead, not unlike the horn of a unicorn. If driven to attack, it tries to spear enemies with its horn.

Almiraj were brought to Chult long ago by merchants of the distant land of Zakhara. Skilled at evading predators, these creatures have flourished throughout the tropical peninsula. They live in earthen burrows and can be captured and domesticated. With the DM's permission, the find familiar spell can summon an almiraj.

```statblock
"name": "Almiraj (ToA)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "3"
"hit_dice": "1d6"
"modifier": !!int "3"
"stats":
  - !!int "2"
  - !!int "16"
  - !!int "10"
  - !!int "2"
  - !!int "14"
  - !!int "10"
"speed": "50 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+4"
  - "name": "Stealth"
    "desc": "+5"
"senses": "darkvision 30 ft., passive Perception 14"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The almiraj has advantage on Wisdom (Perception) checks that rely on\
      \ hearing or sight."
    "name": "Keen Senses"
  - "desc": "With the DM's permission, the find familiar spell can summon an almiraj."
    "name": "Familiar"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage."
    "name": "Horn"
"source":
  - "ToA"
"image": "CLI/bestiary/beast/token/almiraj-toa.webp"
```
^statblock