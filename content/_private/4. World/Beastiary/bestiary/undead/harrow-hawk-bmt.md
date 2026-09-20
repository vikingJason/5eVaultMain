---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Harrow Hawk"
---
# [Harrow Hawk](CLI/bestiary/undead/harrow-hawk-bmt.md)
*Source: The Book of Many Things p. 177*  

When a beloved animal companion dies traumatically alongside its master, the beast might rise again as an Undead. Falcons, ravens, and other birds of prey that suffer this fate are known as harrow hawks, and they prowl abandoned battlefields and cemeteries, looking for corpses to eat and living creatures to hunt. A harrow hawk can even travel the multiverse, flying magically from one world to another.

The Grim Harrow—a band of Undead beings created by the Deck of Many Things (see chapter 19)—seeks out harrow hawks, capturing them and training them as hunting animals. The Grim Harrow dispatches these Undead companions from the Gardens of Decay to search for Decks of Many Things. On harrowing hunts, harrow hawks scout for the prey and accompany the Grim Harrow in battle.

```statblock
"name": "Harrow Hawk (BMT)"
"size": "Tiny"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "25"
"hit_dice": "10d4"
"modifier": !!int "3"
"stats":
  - !!int "5"
  - !!int "16"
  - !!int "10"
  - !!int "2"
  - !!int "14"
  - !!int "7"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+6"
  - "name": "Stealth"
    "desc": "+5"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": ""
"cr": "1"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) slashing damage plus 3 (1d6) necrotic damage."
    "name": "Talons"
  - "desc": "The hawk casts Plane Shift on itself, requiring no spell components and\
      \ using Wisdom as the spellcasting ability."
    "name": "Plane Shift (2/Day)"
"bonus_actions":
  - "desc": "When the hawk is in dim light or darkness, it teleports up to 30 feet\
      \ to an unoccupied space it can see that is also in dim light or darkness. The\
      \ hawk then has advantage on the first melee attack it makes before the end\
      \ of the turn."
    "name": "Shadow Dash"
"source":
  - "BMT"
"image": "CLI/bestiary/undead/token/harrow-hawk-bmt.webp"
```
^statblock