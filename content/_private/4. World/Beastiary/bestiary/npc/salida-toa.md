---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/yuan-ti
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Salida"
---
# [Salida](CLI/bestiary/npc/salida-toa.md)
*Source: Tomb of Annihilation p. 35*  

```statblock
"name": "Salida (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "11"
  - !!int "13"
  - !!int "12"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "Deception"
    "desc": "+6"
  - "name": "Perception"
    "desc": "+3"
  - "name": "Stealth"
    "desc": "+3"
  - "name": "Survival"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"gear":
  - "scimitar"
  - "shortbow"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Common, Draconic"
"cr": "1"
"traits":
  - "desc": "Salida's spellcasting ability is Charisma (spell save DC 12). Salida\
      \ can innately cast the following spells, requiring no material components:\n\
      \n**At will:** animal friendship (snakes only)\n\n**3/day each:** poison spray,\
      \ suggestion"
    "name": "Innate Spellcasting"
  - "desc": "Salida has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Salida makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) slashing damage."
    "name": "Scimitar"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 80/320 ft., one target. *Hit:*\
      \ 4 (1d6 + 1) piercing damage plus 7 (2d6) poison damage."
    "name": "Shortbow"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/salida-toa.webp"
```
^statblock