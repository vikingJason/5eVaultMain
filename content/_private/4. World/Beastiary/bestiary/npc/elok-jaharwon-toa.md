---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Elok Jaharwon"
---
# [Elok Jaharwon](CLI/bestiary/npc/elok-jaharwon-toa.md)
*Source: Tomb of Annihilation p. 67*  

```statblock
"name": "Elok Jaharwon (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "10"
"ac_class": "11 natural armor in boar or hybrid form"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "11"
  - !!int "8"
"speed": "30 ft. (40 ft. in boar form)"
"skillsaves":
  - "name": "Perception"
    "desc": "+2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"gear":
  - "maul"
"senses": "passive Perception 12"
"languages": "Common (can't speak in boar form)"
"cr": "4"
"traits":
  - "desc": "Elok can use its action to polymorph into a boar-humanoid hybrid or into\
      \ a boar, or back into its true form, which is humanoid. Its statistics, other\
      \ than its AC, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "If Elok moves at least 15 feet straight toward a target and then hits\
      \ it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing\
      \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
      \ throw or be knocked prone."
    "name": "Charge (Boar or Hybrid Form Only)"
  - "desc": "If Elok takes 14 damage or less that would reduce it to 0 hit points,\
      \ it is reduced to 1 hit point instead."
    "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "Elok makes two attacks, only one of which can be with its tusks."
    "name": "Multiattack (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) bludgeoning damage."
    "name": "Maul (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed\
      \ on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
    "name": "Tusks (Boar or Hybrid Form Only)"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/elok-jaharwon-toa.webp"
```
^statblock