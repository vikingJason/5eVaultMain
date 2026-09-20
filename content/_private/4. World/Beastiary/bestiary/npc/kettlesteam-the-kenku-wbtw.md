---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/kenku
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Kettlesteam the Kenku"
---
# [Kettlesteam the Kenku](CLI/bestiary/npc/kettlesteam-the-kenku-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 52*  

Kettlesteam the kenku snoops around the carnival under the cover of a disguise self spell, looking to cause trouble. The kenku has stolen the voice of a human mime named Candlefoot (see "Hall of Illusions "earlier in the chapter). While this prize remains in her possession, Kettlesteam can speak clearly in Candlefoot's soft, silky voice.

```statblock
"name": "Kettlesteam the Kenku (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku, warlock"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "10"
  - !!int "11"
  - !!int "10"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "2"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "Arcana"
    "desc": "+2"
  - "name": "Deception"
    "desc": "+5"
  - "name": "Investigation"
    "desc": "+2"
  - "name": "Perception"
    "desc": "+2"
  - "name": "Persuasion"
    "desc": "+5"
  - "name": "Stealth"
    "desc": "+5"
"gear":
  - "dagger"
"senses": "passive Perception 12"
"languages": "understands Auran and Common but speaks only through the use of her\
  \ Mimicry trait"
"cr": "1"
"traits":
  - "desc": "Kettlesteam can mimic any sounds she has heard, including voices. A creature\
      \ that hears the sounds can tell they are imitations only with a successful\
      \ DC 13 Wisdom (Insight) check."
    "name": "Mimicry"
"actions":
  - "desc": "Kettlesteam makes two Dagger attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
  - "desc": "Kettlesteam targets one creature she can see within 10 feet of her. The\
      \ target is engulfed in a cloud of magical, sleep-inducing gas and must succeed\
      \ on a DC 13 Constitution saving throw or fall unconscious for 1 minute. A creature\
      \ put to sleep by this gas awakens instantly if it takes damage, or if someone\
      \ uses an action to shake or slap the sleeper awake."
    "name": "Twilight Sleep (2/Day)"
  - "desc": "Kettlesteam casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 13):\n\n**At will:** disguise self, friends,\
      \ mage hand, minor illusion\n\n**1/day each:** bestow curse, faerie fire, speak\
      \ with animals"
    "name": "Spellcasting"
"source":
  - "WBtW"
"image": "CLI/bestiary/npc/token/kettlesteam-the-kenku-wbtw.webp"
```
^statblock