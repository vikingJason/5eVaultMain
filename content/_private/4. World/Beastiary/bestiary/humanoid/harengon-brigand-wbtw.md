---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Harengon Brigand"
---
# [Harengon Brigand](harengon-brigand-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 235*  

Harengons are rabbit-folk native to the Feywild, through they often migrate to the Material Plane. They love to travel on foot and rarely stay in one place for long.

Not all harengons are mean-spirited bullies like the ones presented here. Every harengon follows their own path through life, their disposition shaped in part by the company they keep. One harengon might travel to far lands, make friends along the way, delight in freedom and the open trail, and find inner peace. Another might become an adventurer with a strong heart and fervent dreams. For more information on harengons as player characters, see the introduction of this adventure.

```statblock
"name": "Harengon Brigand (WBtW)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "leather armor"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "17"
  - !!int "11"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
"skillsaves":
  - "name": "Acrobatics"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+4"
"gear":
  - "club"
  - "sling"
"senses": "passive Perception 14"
"languages": "Common, Sylvan"
"cr": "1/8"
"traits":
  - "desc": "The harengon has advantage on an attack roll against a creature if at\
      \ least one of the harengon's allies is within 5 feet of the creature and the\
      \ ally isn't incapacitated."
    "name": "Pack Tactics"
  - "desc": "The harengon's long jump is up to 20 feet and its high jump is up to\
      \ 10 feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) bludgeoning damage."
    "name": "Club"
  - "desc": "*Ranged Weapon Attack:* +5 to hit, range 30/120 ft., one target. *Hit:*\
      \ 5 (1d4 + 3) bludgeoning damage."
    "name": "Sling"
"source":
  - "WBtW"
"image": "CLI/bestiary/humanoid/token/harengon-brigand-wbtw.webp"
```
^statblock