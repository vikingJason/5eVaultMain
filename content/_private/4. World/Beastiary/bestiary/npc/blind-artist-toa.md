---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Blind Artist"
---
# [Blind Artist](CLI/bestiary/npc/blind-artist-toa.md)
*Source: Tomb of Annihilation p. 164*  

```statblock
"name": "Blind Artist (ToA)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"modifier": !!int "-2"
"stats":
  - !!int "13"
  - !!int "6"
  - !!int "16"
  - !!int "3"
  - !!int "6"
  - !!int "5"
"speed": "20 ft."
"saves":
  - "wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "blinded, poisoned"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": "understands all languages it spoke in life but can't speak"
"cr": "0"
"traits":
  - "desc": "If damage reduces the artist to 0 hit points, it must make a Constitution\
      \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
      \ or from a critical hit. On a success, the artist drops to 1 hit point instead."
    "name": "Undead Fortitude"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/blind-artist-toa.webp"
```
^statblock