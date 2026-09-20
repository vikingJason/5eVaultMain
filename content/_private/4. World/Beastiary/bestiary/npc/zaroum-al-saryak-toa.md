---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Zaroum Al-Saryak"
---
# [Zaroum Al-Saryak](CLI/bestiary/npc/zaroum-al-saryak-toa.md)
*Source: Tomb of Annihilation p. 67*  

```statblock
"name": "Zaroum Al-Saryak (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "studded leather"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "strength": !!int "4"
  - "dexterity": !!int "5"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "Athletics"
    "desc": "+4"
  - "name": "Deception"
    "desc": "+4"
"gear":
  - "dagger"
  - "scimitar"
"senses": "passive Perception 10"
"languages": "any two languages"
"cr": "2"
"actions":
  - "desc": "Zaroum makes three melee attacks: two with its scimitar and one with\
      \ its dagger. Or Zaroum makes two ranged attacks with its daggers."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Scimitar"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
"reactions":
  - "desc": "Zaroum adds 2 to its AC against one melee attack that would hit it. To\
      \ do so, Zaroum must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/zaroum-al-saryak-toa.webp"
```
^statblock