---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Warduke"
---
# [Warduke](CLI/bestiary/npc/warduke-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 221*  

Warduke's services as a remorseless killer-for-hire can be easily bought. The evil swordsman serves Kelek as a cohort and adventuring companion from time to time. He isn't terribly bright, which is why he leaves the plotting and scheming to others.

What does Warduke look like under his dread helm? No one knows. He never removes his helmet to reveal his face to others, but the visage beneath is that of a grim, hideously scarred gladiator.

```statblock
"name": "Warduke (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "half plate, shield"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "11"
  - !!int "14"
  - !!int "9"
  - !!int "11"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "constitution": !!int "5"
"skillsaves":
  - "name": "Athletics"
    "desc": "+6"
  - "name": "Intimidation"
    "desc": "+3"
"gear":
  - "dagger"
"senses": "passive Perception 10"
"languages": "Common"
"cr": "5"
"traits":
  - "desc": "Warduke wears a dread helm (see appendix A) and wields a flame tongue\
      \ longsword."
    "name": "Special Equipment"
"actions":
  - "desc": "Warduke makes three Flame Tongue or Dagger attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage when used with\
      \ two hands, plus 7 (2d6) fire damage if the weapon is aflame."
    "name": "Flame Tongue"
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
"bonus_actions":
  - "desc": "Warduke ignites or extinguishes his flame tongue longsword. While aflame,\
      \ it sheds bright light in a 40-foot radius and dim light for an additional\
      \ 40 feet."
    "name": "Flaming Blade"
  - "desc": "Warduke regains 13 hit points."
    "name": "Second Wind (Recharges after a Short or Long Rest)"
"source":
  - "WBtW"
"image": "CLI/bestiary/npc/token/warduke-wbtw.webp"
```
^statblock