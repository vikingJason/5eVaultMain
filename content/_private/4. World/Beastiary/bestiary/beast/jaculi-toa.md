---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Jaculi"
---
# [Jaculi](jaculi-toa.md)
*Source: Tomb of Annihilation p. 225*  

A jaculi (pronounced jah-KOO-lee) is a 15-foot-long snake that can alter the color and texture of its scales to camouflage itself. Altering its appearance to resemble wood or stone, it coils around pillars and tree trunks from which it launches itself like a javelin, striking with great force and accuracy.

Jaculis are found in damp climates, and their preferred habitats are rainforests and cool dungeons. The shed skin of the jaculi is coveted for use in crafting boots of striding and springing and cloaks of invisibility.

```statblock
"name": "Jaculi (ToA)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "16"
"hit_dice": "3d10"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "11"
  - !!int "2"
  - !!int "8"
  - !!int "3"
"speed": "30 ft., climb 20 ft."
"skillsaves":
  - "name": "Athletics"
    "desc": "+4"
  - "name": "Perception"
    "desc": "+1"
  - "name": "Stealth"
    "desc": "+4"
"senses": "blindsight 30 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The jaculi has advantage on Dexterity (Stealth) checks made to hide."
    "name": "Camouflage"
  - "desc": "The jaculi has advantage on Wisdom (Perception) checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) piercing damage."
    "name": "Bite"
  - "desc": "The jaculi springs up to 30 feet in a straight line and makes a bite\
      \ attack against a target within its reach. This attack has advantage if the\
      \ jaculi springs at least 10 feet. If the attack hits, the bite deals an extra\
      \ 7 (2d6) piercing damage."
    "name": "Spring"
"source":
  - "ToA"
"image": "CLI/bestiary/beast/token/jaculi-toa.webp"
```
^statblock