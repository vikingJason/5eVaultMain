---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ankylosaurus Zombie"
---
# [Ankylosaurus Zombie](CLI/bestiary/undead/ankylosaurus-zombie-toa.md)
*Source: Tomb of Annihilation p. 240*  

This creature is slow and barely aware of its surroundings.

```statblock
"name": "Ankylosaurus Zombie (ToA)"
"size": "Huge"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d12 + 16"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "9"
  - !!int "15"
  - !!int "2"
  - !!int "6"
  - !!int "3"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "3"
"traits":
  - "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
      \ saving throw with a DC of 5+the damage taken, unless the damage is radiant\
      \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target *Hit:* 18\
      \ (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed\
      \ on a DC 14 Strength saving throw or be knocked prone."
    "name": "Tail"
"source":
  - "ToA"
"image": "CLI/bestiary/undead/token/ankylosaurus-zombie-toa.webp"
```
^statblock