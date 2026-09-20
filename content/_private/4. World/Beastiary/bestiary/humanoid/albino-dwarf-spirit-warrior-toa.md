---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Albino Dwarf Spirit Warrior"
---
# [Albino Dwarf Spirit Warrior](albino-dwarf-spirit-warrior-toa.md)
*Source: Tomb of Annihilation p. 210*  

## Albino Dwarf Spirit Warriors

An albino dwarf can become so attuned to the land of Chult that a benevolent nature spirit takes notice and bestows a powerful charm on the dwarf, granting it innate spellcasting abilities. These dwarf spirit warriors dedicate themselves to preserving the natural beauty of Chult and battling unnatural threats. An albino dwarf spirit warrior has the statistics of an albino dwarf warrior, except it has a challenge rating of 1 (200 XP) and gains an Innate Spellcasting feature.

## Albino Dwarf

The albino dwarves of Chult were driven from their subterranean homes by volcanic activity, and those who didn't seek refuge in Port Nyanzaru adapted to living in the jungle. They make armor out of dinosaur hide; shape weapons out of dinosaur bones, flint, and wood; and craft ornate jewelry out of bones, feathers, tusks, and stone beads. Albino dwarves haven't forgotten how to forge metal, but they seldom have the means to do so.

```statblock
"name": "Albino Dwarf Spirit Warrior (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "hide armor"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "1"
"stats":
  - !!int "13"
  - !!int "13"
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "11"
"speed": "25 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+4"
  - "name": "Stealth"
    "desc": "+3"
  - "name": "Survival"
    "desc": "+4"
"damage_resistances": "poison"
"gear":
  - "handaxe"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Dwarvish"
"cr": "1"
"traits":
  - "desc": "The dwarf's innate spellcasting ability is Wisdom. It can innately cast\
      \ the following spells, requiring no material components:\n\n**1/day each:**\
      \ hunter's mark, jump, pass without trace, speak with animals, speak with plants"
    "name": "Innate Spellcasting"
  - "desc": "The dwarf has advantage on saving throws against poison."
    "name": "Dwarven Resilience"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d6 + 1) slashing damage."
    "name": "Handaxe"
"source":
  - "ToA"
"image": "CLI/bestiary/humanoid/token/albino-dwarf-spirit-warrior-toa.webp"
```
^statblock