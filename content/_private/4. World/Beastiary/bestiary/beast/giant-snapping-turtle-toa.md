---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Giant Snapping Turtle"
---
# [Giant Snapping Turtle](giant-snapping-turtle-toa.md)
*Source: Tomb of Annihilation p. 222*  

Giant snapping turtles can grow to be 12 feet in diameter. Although they appear slow and ponderous, they are capable of startling bursts of speed and will aggressively attack smaller creatures that approach them. One snap of a giant turtle's jaws can cut a human in half, and these creatures aren't fussy about what they eat.

```statblock
"name": "Giant Snapping Turtle (ToA)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor; 12 while prone"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "14"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "30 ft., swim 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The turtle can breathe air and water."
    "name": "Amphibious"
  - "desc": "Whenever an effect knocks the turtle prone, it can make a DC 10 Constitution\
      \ saving throw to avoid being knocked prone. A prone turtle is upside down.\
      \ To stand up, it must succeed on a DC 10 Dexterity check on its turn and then\
      \ use all its movement for that turn."
    "name": "Stable"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 18\
      \ (4d6 + 4) slashing damage."
    "name": "Bite"
"source":
  - "ToA"
"image": "CLI/bestiary/beast/token/giant-snapping-turtle-toa.webp"
```
^statblock