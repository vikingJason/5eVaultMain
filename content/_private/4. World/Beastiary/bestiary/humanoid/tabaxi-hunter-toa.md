---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/tabaxi
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Tabaxi Hunter"
---
# [Tabaxi Hunter](tabaxi-hunter-toa.md)
*Source: Tomb of Annihilation p. 232*  

## Tabaxi

Tabaxi are catfolk who hail from the land of Maztica. The ultimate wanderers, Tabaxi rarely stay in one place for long. They love to collect interesting artifacts, gather tales, and lay eyes on all the world's wonders. This curiosity pushes them to leave no secrets uncovered, and no treasures or legends lost. They revere a fickle deity called the Cat Lord, who is said to wander the world.

Tabaxi hunters are trained to survive in the wild, making them excellent guides. Tabaxi minstrels gather in small troupes and make themselves at home in any settlement, earning coin through music and storytelling.

### Names

A tabaxi typically has a single name, determined by his or her clan and based on a complex formula involving astrology, prophecy, clan history, and other factors. Male and female tabaxi use the same names, and most use nicknames derived from or inspired by their full names. Tabaxi clan names are usually based on a geographical feature located in or near a clan's territory. Sample tabaxi names include Nest of Eggs ("Eggs"), Dead Leaf ("Leaf"), Eyes of Onyx ("Onyx"), Lost Spear ("Lost"), and Daylight Moon ("Moon"). Clan names include Distant Rain, Hundred Feathers, Sleeping Creek, Bright Cliffs, and Snoring Mountain.

```statblock
"name": "Tabaxi Hunter (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
"alignment": "Chaotic Good"
"ac": !!int "14"
"ac_class": "leather armor"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "11"
  - !!int "13"
  - !!int "14"
  - !!int "15"
"speed": "30 ft., climb 20 ft."
"skillsaves":
  - "name": "Athletics"
    "desc": "+2"
  - "name": "Perception"
    "desc": "+4"
  - "name": "Stealth"
    "desc": "+5"
  - "name": "Survival"
    "desc": "+6"
"gear":
  - "shortbow"
  - "shortsword"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common plus any one language"
"cr": "1"
"traits":
  - "desc": "When the tabaxi moves on its turn in combat, it can double its speed\
      \ until the end of the turn. Once it uses this ability, the tabaxi can't use\
      \ it again until it moves 0 feet on one of its turns."
    "name": "Feline Agility"
"actions":
  - "desc": "The tabaxi makes two attacks with its claws, its shortsword, or its shortbow."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2\
      \ (1d4) slashing damage."
    "name": "Claws"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 80/320 ft., one target. *Hit:*\
      \ 6 (1d6 + 3) piercing damage."
    "name": "Shortbow"
"source":
  - "ToA"
"image": "CLI/bestiary/humanoid/token/tabaxi-hunter-toa.webp"
```
^statblock