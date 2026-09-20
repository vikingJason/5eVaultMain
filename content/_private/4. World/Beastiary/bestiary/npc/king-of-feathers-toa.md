---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "King of Feathers"
---
# [King of Feathers](CLI/bestiary/npc/king-of-feathers-toa.md)
*Source: Tomb of Annihilation p. 106*  

The monstrous tyrannosaurus known as the King of Feathers is the undisputed lord of Omu. Most other dwellers of the Forbidden City live in fear of its thunderous approach and steer well clear of the amphitheater, its lair.

```statblock
"name": "King of Feathers (ToA)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "19d12 + 52"
"modifier": !!int "0"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "19"
  - !!int "2"
  - !!int "12"
  - !!int "9"
"speed": "50 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The King of Feathers's innate spellcasting ability is Wisdom. It can\
      \ innately cast the following spell, requiring no material components:\n\n**At\
      \ will:** misty step"
    "name": "Innate Spellcasting"
  - "desc": "The King of Feathers can see invisible creatures and objects as if they\
      \ were visible."
    "name": "Detect Invisibility"
  - "desc": "If the King of Feathers fails a saving throw, it can choose to succeed\
      \ instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The King of Feathers makes two attacks: one with its bite and one with\
      \ its tail. It can't make both attacks against the same target."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature,\
      \ it is grappled (escape DC 17). Until this grapple ends, the target is restrained,\
      \ and the tyrannosaurus can't bite another target."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 20 (3d8 + 7) bludgeoning damage."
    "name": "Tail"
  - "desc": "The King of Feathers exhales a swarm of insects (wasps) that forms in\
      \ a space within 20 feet of it. The swarm acts as an ally of the King of Feathers\
      \ and takes its turn immediately after it. The swarm disperses after 1 minute.\
      \ It can't use the Summon Swarm action while it is grappling a creature with\
      \ its jaws."
    "name": "Summon Swarm (Recharge 5-6)"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/king-of-feathers-toa.webp"
```
^statblock