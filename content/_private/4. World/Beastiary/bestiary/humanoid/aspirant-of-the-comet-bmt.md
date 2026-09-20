---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Aspirant of the Comet"
---
# [Aspirant of the Comet](aspirant-of-the-comet-bmt.md)
*Source: The Book of Many Things p. 91*  

Aspirants aren't yet initiated into the mysteries of the Heralds of the Comet, but they are firmly in the group's clutches, both socially and metaphysically. If an aspirant is killed, the hapless individual is drawn into the Void and devoured, body and soul.

```statblock
"name": "Aspirant of the Comet (BMT)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "12"
  - !!int "12"
  - !!int "11"
  - !!int "10"
  - !!int "13"
"speed": "30 ft."
"gear":
  - "spear"
"senses": "passive Perception 10"
"languages": "Common plus any one language"
"cr": "1/2"
"traits":
  - "desc": "When the aspirant is reduced to 0 hit points, its body and everything\
      \ it is wearing or carrying, except for magic items, are sucked into a void\
      \ and destroyed. Creatures in a 15-foot-radius sphere centered on the aspirant\
      \ must make a DC 11 Strength saving throw. On a failed save, a creature takes\
      \ 10 (3d6) necrotic damage and is pulled 10 feet straight toward the aspirant's\
      \ space. On a successful save, a creature takes half as much damage only."
    "name": "Hunger of the Void"
  - "desc": "The aspirant has advantage on saving throws against the charmed and frightened\
      \ conditions."
    "name": "Sinister Devotion"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
      \ damage if used with two hands to make a melee attack."
    "name": "Spear"
"source":
  - "BMT"
"image": "CLI/bestiary/humanoid/token/aspirant-of-the-comet-bmt.webp"
```
^statblock