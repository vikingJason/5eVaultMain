---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/half-dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Zindar"
---
# [Zindar](CLI/bestiary/npc/zindar-toa.md)
*Source: Tomb of Annihilation p. 239*  

This half-gold dragon runs Port Nyanzaru's docks and keeps track of ship manifests. A sorcerer of impressive ability, Zindar is well paid by the merchant princes for his work. He is also a key member of the Ytepka Society and a great source of information about the city. Zindar has a soft spot for adventurers, but he knows the dangers of Chult well enough to understand that most of those who embark on expeditions to explore the jungle never return.

Zindar makes extensive use of spells in his day-today work, casting message to deliver missives to dock workers, detect thoughts for reading ship captains' minds, knock for unsealing containers for inspection, clairvoyance for peering into ship holds, dominate beast to pacify nervous animals, and so forth.

## Zindar's Traits

### Ideal

"I take pride in my work, and I like to keep all my business dealings honest."

### Bond

"Port Nyanzaru is my home. I take a dim view of those who would bring harm to the city and its inhabitants."

### Flaw

"I don't get mad. I get even."

```statblock
"name": "Zindar (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-dragon"
"alignment": "Lawful Good"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "17d8 + 34"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "16"
  - !!int "15"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "Arcana"
    "desc": "+6"
  - "name": "History"
    "desc": "+9"
  - "name": "Insight"
    "desc": "+5"
  - "name": "Investigation"
    "desc": "+9"
"damage_resistances": "fire"
"gear":
  - "quarterstaff"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common, Draconic, Dwarvish, Primordial"
"cr": "8"
"traits":
  - "desc": "Zindar is a 14th-level spellcaster. His spellcasting ability is Charisma\
      \ (spell save DC 15, +7 to hit with spell attacks). Zindar knows the following\
      \ sorcerer spells:\n\n**Cantrips (at will):** fire bolt, friends, light, mage\
      \ hand, mending, message\n\n**1st level (6 slots):** magic missile, shield,\
      \ sleep\n\n**2nd level (4 slots):** detect thoughts, knock\n\n**3rd level (3\
      \ slots):** clairvoyance, tongues\n\n**4th level (3 slots):** dominate beast,\
      \ stoneskin\n\n**5th level (3 slots):** hold monster, telekinesis\n\n**6th level\
      \ (1 slots):** true seeing\n\n**7th level (1 slots):** fire storm"
    "name": "Spellcasting"
  - "desc": "As a bonus action on his turn, Zindar can sprout a pair of dragon wings\
      \ from his back, gaining a flying speed of 30 feet until he dismisses them as\
      \ a bonus action."
    "name": "Dragon Wings"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage when used\
      \ with two hands."
    "name": "Quarterstaff"
  - "desc": "Zindar uses one of the following options:"
    "name": "Breath Weapon (Recharge 5-6)"
  - "desc": "Zindar exhales fire in a 15-foot cone. Each creature in that area must\
      \ make a DC 15 Dexterity saving throw, taking 22 (4d10) fire damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Fire Breath"
  - "desc": "Zindar exhales gas in a 15-foot cone. Each creature in that area must\
      \ succeed on a DC 15 Strength saving throw or have disadvantage on Strength-based\
      \ attack rolls, Strength checks, and Strength saving throws for 1 minute. A\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Weakening Breath"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/zindar-toa.webp"
```
^statblock