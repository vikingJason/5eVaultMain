---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Advanced Detention Drone"
---
# [Advanced Detention Drone](advanced-detention-drone-bmt.md)
*Source: The Book of Many Things p. 135*  

Detention drones vary in size, strength, and shape, though most are shaped like some kind of mechanical animal or plant.

This Construct doesn't have a control amulet and can't be controlled like other shield guardians.

```statblock
"name": "Advanced Detention Drone (BMT)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "18"
  - !!int "7"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": "understands commands given in any language but can't speak"
"cr": "7"
"traits":
  - "desc": "The drone regains 10 hit points at the start of its turn if it has at\
      \ least 1 hit point."
    "name": "Regeneration"
  - "desc": "A spellcaster who wears the drone's amulet can cause the drone to store\
      \ one spell of 4th level or lower. To do so, the wearer must cast the spell\
      \ on the drone. The spell has no effect but is stored within the drone. When\
      \ commanded to do so by the wearer or when a situation arises that was predefined\
      \ by the spellcaster, the drone casts the stored spell with any parameters set\
      \ by the original caster, requiring no components. When the spell is cast or\
      \ a new spell is stored, any previously stored spell is lost."
    "name": "Spell Storing"
"actions":
  - "desc": "The drone makes two fist attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Fist"
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
"reactions":
  - "desc": "When a creature makes an attack against the wearer of the drone's amulet,\
      \ the drone grants a +2 bonus to the wearer's AC if the drone is within 5 feet\
      \ of the wearer."
    "name": "Shield"
"source":
  - "BMT"
"image": "CLI/bestiary/construct/token/advanced-detention-drone-bmt.webp"
```
^statblock