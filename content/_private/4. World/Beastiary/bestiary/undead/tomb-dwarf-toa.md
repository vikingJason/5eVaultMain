---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Tomb Dwarf"
---
# [Tomb Dwarf](CLI/bestiary/undead/tomb-dwarf-toa.md)
*Source: Tomb of Annihilation p. 135*  

Acererak abducted dwarf miners and transformed them into wights to exploit their expertise at underground construction.

```statblock
"name": "Tomb Dwarf (ToA)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "studded leather"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+3"
  - "name": "Stealth"
    "desc": "+4"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"gear":
  - "battleaxe"
  - "light crossbow"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
  - "desc": "While in sunlight, the tomb dwarf has disadvantage on attack rolls, as\
      \ well as on Wisdom (Perception) checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The tomb dwarf makes two longsword attacks or two crossbow attacks. It\
      \ can use its Life Drain in place of one longsword attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution\
      \ saving throw or its hit point maximum is reduced by an amount equal to the\
      \ damage taken. This reduction lasts until the target finishes a long rest.\
      \ The target dies if this effect reduces its hit point maximum to 0.A humanoid\
      \ slain by this attack rises 24 hours later as a zombie under the tomb dwarf's\
      \ control, unless the humanoid is restored to life or its body is destroyed.\
      \ The tomb dwarf can have no more than twelve zombies under its control at one\
      \ time."
    "name": "Life Drain"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with\
      \ two hands."
    "name": "Battleaxe"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 6 (1d8 + 2) piercing damage."
    "name": "Light Crossbow"
"source":
  - "ToA"
"image": "CLI/bestiary/undead/token/tomb-dwarf-toa.webp"
```
^statblock