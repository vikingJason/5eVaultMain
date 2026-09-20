---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/tabaxi
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Tabaxi Minstrel"
---
# [Tabaxi Minstrel](tabaxi-minstrel-toa.md)
*Source: Tomb of Annihilation p. 233*  

## Tabaxi

Tabaxi are catfolk who hail from the land of Maztica. The ultimate wanderers, Tabaxi rarely stay in one place for long. They love to collect interesting artifacts, gather tales, and lay eyes on all the world's wonders. This curiosity pushes them to leave no secrets uncovered, and no treasures or legends lost. They revere a fickle deity called the Cat Lord, who is said to wander the world.

Tabaxi hunters are trained to survive in the wild, making them excellent guides. Tabaxi minstrels gather in small troupes and make themselves at home in any settlement, earning coin through music and storytelling.

### Names

A tabaxi typically has a single name, determined by his or her clan and based on a complex formula involving astrology, prophecy, clan history, and other factors. Male and female tabaxi use the same names, and most use nicknames derived from or inspired by their full names. Tabaxi clan names are usually based on a geographical feature located in or near a clan's territory. Sample tabaxi names include Nest of Eggs ("Eggs"), Dead Leaf ("Leaf"), Eyes of Onyx ("Onyx"), Lost Spear ("Lost"), and Daylight Moon ("Moon"). Clan names include Distant Rain, Hundred Feathers, Sleeping Creek, Bright Cliffs, and Snoring Mountain.

```statblock
"name": "Tabaxi Minstrel (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "16"
"speed": "30 ft., climb 20 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+3"
  - "name": "Performance"
    "desc": "+7"
  - "name": "Persuasion"
    "desc": "+5"
  - "name": "Stealth"
    "desc": "+4"
"gear":
  - "dart"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common plus any two languages"
"cr": "1/4"
"traits":
  - "desc": "When the tabaxi moves on its turn in combat, it can double its speed\
      \ until the end of the turn. Once it uses this ability, the tabaxi can't use\
      \ it again until it moves 0 feet on one of its turns."
    "name": "Feline Agility"
  - "desc": "While taking a short rest, the tabaxi can spend 1 minute singing, playing\
      \ an instrument, telling a story, or reciting a poem to soothe and inspire creatures\
      \ other than itself. Up to five creatures of the tabaxi's choice that can see\
      \ and hear its performance gain 8 temporary hit points at the end of the tabaxi's\
      \ short rest."
    "name": "Inspire (1/Day)"
"actions":
  - "desc": "The tabaxi makes two claws attacks or two dart attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2\
      \ (1d4) slashing damage."
    "name": "Claws"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 20/60 ft., one target. *Hit:*\
      \ 4 (1d4 + 2) piercing damage."
    "name": "Dart"
"source":
  - "ToA"
"image": "CLI/bestiary/humanoid/token/tabaxi-minstrel-toa.webp"
```
^statblock