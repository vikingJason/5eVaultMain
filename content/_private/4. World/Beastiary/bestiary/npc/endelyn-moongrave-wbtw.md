---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/hag
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Endelyn Moongrave"
---
# [Endelyn Moongrave](CLI/bestiary/npc/endelyn-moongrave-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 217*  

Endelyn, also known by the names Creeping Lyn and Bitter End, is the youngest member of the Hourglass Coven. People come to her to learn about their futures, which she spells out through grotesque theatrical pageants. As payment, she snatches away a portion of each client's free will, preventing them from taking certain courses of action in their lives. Her petitioners often learn of a dreadful fate that awaits them but find themselves unable to prevent it due to the cursed terms of their deal.

Endelyn's obsession with tragedy and hopelessness extends to her own life; she has foreseen her own demise during a solar eclipse. In the depths of her castle, a lightning-powered device called the Orrery of Tragedies clicks and turns day and night, giving Endelyn glimpses of her terrible fate.

```statblock
"name": "Endelyn Moongrave (WBtW)"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d8 + 60"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "13"
  - !!int "20"
  - !!int "13"
  - !!int "10"
  - !!int "17"
"speed": "30 ft., climb 30 ft."
"saves":
  - "constitution": !!int "8"
  - "intelligence": !!int "4"
  - "wisdom": !!int "3"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "Arcana"
    "desc": "+7"
  - "name": "Deception"
    "desc": "+6"
  - "name": "Perception"
    "desc": "+3"
  - "name": "Stealth"
    "desc": "+4"
"senses": "truesight 60 ft., passive Perception 13"
"languages": "Common, Elvish, Sylvan"
"cr": "6"
"traits":
  - "desc": "Endelyn is immune to any effect that would age her, and she can't die\
      \ from old age."
    "name": "Boon of Immortality"
  - "desc": "Endelyn can be killed only if she is reduced to 0 hit points during a\
      \ solar eclipse or while she is within 60 feet of a symbolic representation\
      \ of one. Otherwise, Endelyn disappears in a cloud of inky smoke when she drops\
      \ to 0 hit points, along with anything she was wearing or carrying, and reappears\
      \ 24 hours later in the same location or the nearest unoccupied space."
    "name": "Eclipsed Doom"
  - "desc": "Endelyn can't be surprised."
    "name": "Uncanny Awareness"
"actions":
  - "desc": "Endelyn makes two Puppeteer's Lash attacks"
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +6 to hit, reach 5 ft. or range 60\
      \ ft., one creature. *Hit:* 17 (4d6 + 3) psychic damage, and if the target\
      \ is Large or smaller, Endelyn telekinetically moves it up to 10 feet in any\
      \ direction horizontally."
    "name": "Puppeteer's Lash"
  - "desc": "Endelyn casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 14):\n\n**At\
      \ will:** detect magic, mage hand\n\n**2/day each:** augury, polymorph\n\n**1/day:**\
      \ plane shift (self only)"
    "name": "Spellcasting"
"source":
  - "WBtW"
"image": "CLI/bestiary/npc/token/endelyn-moongrave-wbtw.webp"
```
^statblock