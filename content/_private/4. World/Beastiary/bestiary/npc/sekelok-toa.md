---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Sekelok"
---
# [Sekelok](CLI/bestiary/npc/sekelok-toa.md)
*Source: Tomb of Annihilation p. 120*  

```statblock
"name": "Sekelok (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "Athletics"
    "desc": "+9"
  - "name": "Intimidation"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+6"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"gear":
  - "greatsword"
  - "shortbow"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "any one language (usually Common), Abyssal, Draconic"
"cr": "9"
"traits":
  - "desc": "Sekelok\n\n**At will:** animal friendship (snakes only), poison spray\n\
      \n**3/day each:** suggestion"
    "name": "Innate Spellcasting"
  - "desc": "Sekelok rerolls a failed saving throw."
    "name": "Indomitable (2/Day)"
  - "desc": "As a bonus action, Sekelok can regain 20 hit points."
    "name": "Second Wind (Recharges after a Short or Long Rest)"
  - "desc": "Sekelok"
    "name": "Magic Resistance"
"actions":
  - "desc": "Sekelok makes three attacks with its greatsword or its shortbow."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d6 + 5) slashing damage, plus 7 (2d6) slashing damage if Sekelok has\
      \ more than half of its total hit points remaining."
    "name": "Greatsword"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if Sekelok has\
      \ more than half of its total hit points remaining."
    "name": "Shortbow"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/sekelok-toa.webp"
```
^statblock