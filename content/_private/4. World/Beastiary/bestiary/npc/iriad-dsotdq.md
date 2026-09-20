---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/dsotdq
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Iriad"
---
# [Iriad](CLI/bestiary/npc/iriad-dsotdq.md)
*Source: Dragonlance: Shadow of the Dragon Queen p. 212*  

[Iriad](CLI/bestiary/npc/iriad-dsotdq.md) is a Kagonesti elf from the lush woodlands of Southern Ergoth, where she learned to move undetected across the terrain. When Silvanesti elves began arriving at Southern Ergoth as refugees, she decided to lend her skills in the fight against the Dragon Armies before they can invade her homeland. She is a talented spy and scout who isn't afraid to bring her blades to bear if the situation demands it.

```statblock
"name": "Iriad (DSotDQ)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "14"
"ac_class": "leather armor"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "12"
  - !!int "11"
  - !!int "13"
  - !!int "11"
"speed": "35 ft."
"saves":
  - "dexterity": !!int "4"
"skillsaves":
  - "name": "Acrobatics"
    "desc": "+5"
  - "name": "Athletics"
    "desc": "+2"
  - "name": "Investigation"
    "desc": "+2"
  - "name": "Nature"
    "desc": "+2"
  - "name": "Perception"
    "desc": "+5"
  - "name": "Stealth"
    "desc": "+5"
  - "name": "Survival"
    "desc": "+3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish"
"traits":
  - "desc": "Iriad is proficient with simple weapons, light armor, cartographer's\
      \ tools, and woodcarver's tools."
    "name": "Bonus Proficiencies"
  - "desc": "Iriad has advantage on saving throws made to avoid or end the charmed\
      \ condition on herself, and magic can't put her to sleep."
    "name": "Fey Ancestry"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage plus 3 (1d6) poison\
      \ damage."
    "name": "Poison Dagger"
"bonus_actions":
  - "desc": "Iriad takes the Help action."
    "name": "Helpful"
"source":
  - "DSotDQ"
"image": "CLI/bestiary/npc/token/iriad-dsotdq.webp"
```
^statblock