---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Nepartak"
---
# [Nepartak](CLI/bestiary/npc/nepartak-toa.md)
*Source: Tomb of Annihilation p. 137*  

```statblock
"name": "Nepartak (ToA)"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d4 + 18"
"modifier": !!int "3"
"stats":
  - !!int "1"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "11"
"speed": "0 ft., fly 40 ft. (hover)"
"skillsaves":
  - "name": "Arcana"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+2"
"damage_resistances": "lightning, necrotic, piercing"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "charmed, frightened, paralyzed, poisoned, prone"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, telepathy 30 ft."
"cr": "4"
"traits":
  - "desc": "Nepartak is a 5th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 13, +5 to hit with spell attacks). It requires no somatic\
      \ or material components to cast its spells. Nepartak has the following wizard\
      \ spells prepared:\n\n**Cantrips (at will):** mage hand\n\n**1st level (3 slots):**\
      \ magic missile, shield\n\n**2nd level (2 slots):** blur, flaming sphere\n\n\
      **3rd level (1 slots):** fireball"
    "name": "Spellcasting"
  - "desc": "Nepartak sheds either dim light in a 15-foot radius, or bright light\
      \ in a 15-foot radius and dim light for an additional 15 feet. It can switch\
      \ between the options as an action."
    "name": "Illumination"
  - "desc": "Nepartak has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "If Nepartak is destroyed, it regains all its hit points in 1 hour unless\
      \ holy water is sprinkled on its remains or a dispel magic or remove curse spell\
      \ is cast on them."
    "name": "Rejuvenation"
"actions":
  - "desc": "Nepartak uses Fire Ray twice."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* +5 to hit, range 30 ft., one target. *Hit:*\
      \ 10 (3d6) fire damage."
    "name": "Fire Ray"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/nepartak-toa.webp"
```
^statblock