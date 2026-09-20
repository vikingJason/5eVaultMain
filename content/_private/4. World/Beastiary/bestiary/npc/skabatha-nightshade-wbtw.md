---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/hag
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Skabatha Nightshade"
---
# [Skabatha Nightshade](CLI/bestiary/npc/skabatha-nightshade-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 218*  

Skabatha is the oldest member of the Hourglass Coven. Better known as Granny Nightshade, she offers her assistance to those who are haunted by regret. Her deals often result in cruel twists; for example, a petitioner who asks to be reunited with a lost love might be transformed into one of their loved one's cherished items, such as a favorite bonnet.

Skabatha assumes the guise of an old toymaker. Part toy herself, she has a windup key between her hunched shoulders that rotates quickly when she's in a good mood and slows down as her mood sours. When she is furious, the key comes to a dead stop.

```statblock
"name": "Skabatha Nightshade (WBtW)"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "9"
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
  - "intelligence": !!int "4"
  - "wisdom": !!int "6"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "Arcana"
    "desc": "+7"
  - "name": "Deception"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+6"
  - "name": "Stealth"
    "desc": "+2"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "Common, Elvish, Infernal, Sylvan"
"cr": "8"
"traits":
  - "desc": "Skabatha is immune to any effect that would age her, and she can't die\
      \ from old age."
    "name": "Boon of Immortality"
  - "desc": "The first creature that Skabatha sees after she finishes a long rest\
      \ is invisible to her. She can't remember seeing the creature or perceive it\
      \ using her truesight until the end of her next long rest."
    "name": "Forgetfulness"
"actions":
  - "desc": "Skabatha makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one creature. *Hit:*\
      \ 25 (6d6 + 4) poison damage."
    "name": "Claw"
  - "desc": "Skabatha casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 14):\n\n**At will:**\
      \ detect magic, druidcraft, speak with animals\n\n**2/day each:** polymorph,\
      \ remove curse, speak with plants\n\n**1/day:** awaken (as an action), plane\
      \ shift (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Skabatha magically shrinks herself to Tiny size (between 4 and 8 inches\
      \ tall) or returns to her normal size. If Skabatha lacks the room to return\
      \ to her normal size, she attains the maximum size possible in the space available.\
      \ Anything she is wearing or carrying changes size along with her.\n\nAs a Tiny\
      \ creature, Skabatha deals 2 (1d4) poison damage when she hits with a Claw\
      \ attack. She has advantage on Dexterity (Stealth) checks, and disadvantage\
      \ on Strength checks and Strength saving throws. Her statistics otherwise remain\
      \ unchanged."
    "name": "Alter Size"
"source":
  - "WBtW"
"image": "CLI/bestiary/npc/token/skabatha-nightshade-wbtw.webp"
```
^statblock