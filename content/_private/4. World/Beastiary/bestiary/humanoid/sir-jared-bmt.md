---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Sir Jared"
---
# [Sir Jared](sir-jared-bmt.md)
*Source: The Book of Many Things p. 80*  

Jared is a wandering knight who makes an excellent contact for groups that have Solar Bastion patronage. A former mercenary, Jared credits Hilarion with helping him change his ways and use his skills for good instead of gold, but he feels unworthy of the organization and has grown lonely after so long away from the Solar Bastion.

```statblock
"name": "Sir Jared (BMT)"
"size": "Medium"
"type": "humanoid"
"alignment": "Neutral Good"
"ac": !!int "20"
"ac_class": "plate armor, shield"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "17"
  - !!int "13"
  - !!int "14"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "Arcana"
    "desc": "+4"
  - "name": "Athletics"
    "desc": "+7"
  - "name": "Persuasion"
    "desc": "+6"
  - "name": "Survival"
    "desc": "+5"
"condition_immunities": "blinded, charmed, frightened"
"gear":
  - "longsword"
"senses": "passive Perception 12"
"languages": "Common, Halfling"
"cr": "5"
"actions":
  - "desc": "Jared makes three Longsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) slashing damage plus 4 (1d8) radiant damage. On a roll of 19\
      \ or 20, Jared scores a critical hit."
    "name": "Longsword"
"reactions":
  - "desc": "When a creature Jared can see attacks a target other than Jared that\
      \ is within 5 feet of him, Jared imposes disadvantage on the attack roll."
    "name": "Protect Ally"
"source":
  - "BMT"
"image": "CLI/bestiary/humanoid/token/sir-jared-bmt.webp"
```
^statblock