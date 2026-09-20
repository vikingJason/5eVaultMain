---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Orvex Ocrammas"
---
# [Orvex Ocrammas](CLI/bestiary/npc/orvex-ocrammas-toa.md)
*Source: Tomb of Annihilation p. 96*  

```statblock
"name": "Orvex Ocrammas (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "12"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "Deception"
    "desc": "+5"
  - "name": "Insight"
    "desc": "+4"
  - "name": "Investigation"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+6"
  - "name": "Persuasion"
    "desc": "+5"
  - "name": "Sleight of Hand"
    "desc": "+4"
  - "name": "Stealth"
    "desc": "+4"
"gear":
  - "hand crossbow"
  - "shortsword"
"senses": "passive Perception 16"
"languages": "Common, Grung"
"cr": "1"
"traits":
  - "desc": "On each of its turns, Orvex can use a bonus action to take the Dash,\
      \ Disengage, or Hide action."
    "name": "Cunning Action"
  - "desc": "Orvex deals an extra 7 (2d6) damage when it hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Orvex that isn't incapacitated and Orvex doesn't have\
      \ disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Orvex makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Hand Crossbow"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/orvex-ocrammas-toa.webp"
```
^statblock