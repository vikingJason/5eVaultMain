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
- "Animated Armor Detention Drone"
---
# [Animated Armor Detention Drone](animated-armor-detention-drone-bmt.md)
*Source: The Book of Many Things p. 135*  

Detention drones vary in size, strength, and shape, though most are shaped like some kind of mechanical animal or plant.

```statblock
"name": "Animated Armor Detention Drone (BMT)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "1"
  - !!int "3"
  - !!int "1"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The drone is incapacitated while in the area of an antimagic field. If\
      \ targeted by dispel magic, the drone must succeed on a Constitution saving\
      \ throw against the caster's spell save DC or fall unconscious for 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "While the drone remains motionless, it is indistinguishable from a normal\
      \ suit of drone."
    "name": "False Appearance"
"actions":
  - "desc": "The drone makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage."
    "name": "Slam"
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
"image": "CLI/bestiary/construct/token/animated-armor-detention-drone-bmt.webp"
```
^statblock