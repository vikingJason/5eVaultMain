---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Hew Hackinstone"
---
# [Hew Hackinstone](CLI/bestiary/npc/hew-hackinstone-toa.md)
*Source: Tomb of Annihilation p. 33*  

Hailing from uncivilized lands, unpredictable berserkers come together in war parties and seek conflict wherever they can find it.

## Biography

Three years ago, Hew was part of a dwarven expedition seeking to reopen Wyrmheart Mine. The expedition encountered Tinder the red dragon. Hew alone escaped, and only after the dragon bit off his left arm. Hew wants to return to the mine and slay the dragon, but he needs a band of stout-hearted adventurers to help him. If the characters hire him as a guide, Hew says he can lead them wherever they want, but he'll only take them to Wyrmheart Mine.

```statblock
"name": "Hew Hackinstone (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"ac_class": "hide armor"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "17"
  - !!int "9"
  - !!int "11"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "Survival"
    "desc": "+4"
"damage_resistances": "poison"
"gear":
  - "battleaxe"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "2"
"traits":
  - "desc": "Hew has resistance to poison damage and advantage on saving throws against\
      \ being poisoned."
    "name": "Dwarven Resilience"
  - "desc": "At the start of his turn, Hew can gain advantage on all melee weapon\
      \ attack rolls during that turn, but attack rolls against him have advantage\
      \ until the start of his next turn."
    "name": "Reckless"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) slashing damage."
    "name": "Battleaxe"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/hew-hackinstone-toa.webp"
```
^statblock