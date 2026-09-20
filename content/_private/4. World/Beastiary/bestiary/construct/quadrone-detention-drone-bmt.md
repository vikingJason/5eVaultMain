---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Quadrone Detention Drone"
---
# [Quadrone Detention Drone](quadrone-detention-drone-bmt.md)
*Source: The Book of Many Things p. 135*  

Detention drones vary in size, strength, and shape, though most are shaped like some kind of mechanical animal or plant.

```statblock
"name": "Quadrone Detention Drone (BMT)"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "11"
"speed": "30 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "Perception"
    "desc": "+2"
"gear":
  - "shortbow"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "Modron"
"cr": "1"
"traits":
  - "desc": "The drone can't be compelled to act in a manner contrary to its nature\
      \ or its instructions."
    "name": "Axiomatic Mind"
  - "desc": "If the drone dies, its body disintegrates into dust, leaving behind its\
      \ weapons and anything else it was carrying."
    "name": "Disintegration"
"actions":
  - "desc": "The drone makes two fist attacks or four shortbow attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3\
      \ (1d4 + 1) bludgeoning damage."
    "name": "Fist"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Shortbow"
  - "desc": "The drone launches a tiny orb of magical force at a creature it can see\
      \ within 30 feet of itself. The creature must succeed on a DC 15 Constitution\
      \ saving throw or be encased in the orb, which expands to a size just large\
      \ enough to contain the creature. While encased, the creature doesn't need to\
      \ breathe, eat, or drink, and it doesn't age. Nothing can pass through the orb,\
      \ nor can any creature teleport or use planar travel to enter or exit the orb.\
      \ As a bonus action, the drone can move the orb and its contents up to 30 feet\
      \ in any direction. A successful casting of the Dispel Magic spell on the orb\
      \ (DC 15) destroys it. The orb otherwise remains intact until the drone spends\
      \ an action to end the effect or the drone is destroyed. A drone can have only\
      \ one detention orb active at a time; if the drone creates a detention orb when\
      \ it already has one active, the first orb disappears, freeing the creature\
      \ inside."
    "name": "Detention Orb"
"source":
  - "BMT"
"image": "CLI/bestiary/construct/token/quadrone-detention-drone-bmt.webp"
```
^statblock