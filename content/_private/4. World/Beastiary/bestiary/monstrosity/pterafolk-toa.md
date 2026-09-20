---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Pterafolk"
---
# [Pterafolk](pterafolk-toa.md)
*Source: Tomb of Annihilation p. 229*  

Pterafolk (pronounced TAIR-eh-folk) are 10-foot-tall, winged, reptilian bipeds native to Chult. Malevolent isolationists, they regard most other creatures as their enemies. In Chultan culture, pterafolk are often referred to as "terror folk" for their habit of swooping down from the sky to snatch whatever and whomever they can, then transporting treasure and food back to their roosts.

Pterafolk have 20-foot wingspans and give birth to live young. Ancient rituals once bestowed upon pterafolk the ability to assume the forms of pteranodons and wingless lizardfolk, but those rituals have long been forgotten.

```statblock
"name": "Pterafolk (ToA)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "12"
  - !!int "9"
  - !!int "10"
  - !!int "11"
"speed": "30 ft., fly 50 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+2"
  - "name": "Survival"
    "desc": "+2"
"gear":
  - "javelin"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1"
"traits":
  - "desc": "If the pterafolk is flying and dives at least 30 feet straight toward\
      \ a target, and then hits that target with a melee weapon attack, the target\
      \ is frightened until the end of its next turn."
    "name": "Terror Dive"
"actions":
  - "desc": "The pterafolk makes three attacks: one with its bite and two with its\
      \ claws. Alternatively, it makes two melee attacks with its javelin."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (2d4 + 2) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Claw"
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 30/120\
      \ ft., one target. *Hit:* 9 (2d6 + 2) piercing damage."
    "name": "Javelin"
"source":
  - "ToA"
"image": "CLI/bestiary/monstrosity/token/pterafolk-toa.webp"
```
^statblock