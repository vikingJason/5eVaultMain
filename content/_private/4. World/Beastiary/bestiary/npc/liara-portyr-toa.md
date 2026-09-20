---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Liara Portyr"
---
# [Liara Portyr](CLI/bestiary/npc/liara-portyr-toa.md)
*Source: Tomb of Annihilation p. 227*  

As the commander of Fort Beluarian, Liara spends most of her time worrying about the security of her stronghold while cutting deals with pirates. In general, she has no problem with adventurers and will do her utmost to help them deal with the myriad threats lurking in the jungle.

Liara comes from an influential family in Baldur's Gate and has held her post for the past three years. To her, the assignment feels like a test of mettle, but to many of her subordinates, Fort Beluarian feels like banishment. Liara's spies in Port Nyanzaru furnish her with ship manifests and departure schedules that she passes along to the pirates of Jahaka Anchorage, in exchange for promises to never attack ships flying the flag of Baldur's Gate. Liara also receives a cut of the pirates' profits, some of which go toward keeping her garrison happy.

## Liara Portyr's Traits

### Ideal

"One must respect the chain of command. You follow my orders, or you die."

### Bond

"I have sworn to hold and protect Fort Beluarian in the name of Grand Duke Ulder Ravengard of Baldur's Gate. The fort will not fall on my watch!"

### Flaw

"It's a ghoul-eat-you world out here. I have no pity for those who can't defend themselves."

```statblock
"name": "Liara Portyr (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "studded leather, shield"
"hp": !!int "84"
"hit_dice": "13d8 + 26"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "Athletics"
    "desc": "+5"
  - "name": "Deception"
    "desc": "+5"
  - "name": "Insight"
    "desc": "+4"
  - "name": "Intimidation"
    "desc": "+5"
"gear":
  - "battleaxe"
  - "heavy crossbow"
"senses": "passive Perception 12"
"languages": "Common, Draconic, Dwarvish"
"cr": "4"
"traits":
  - "desc": "Liara has advantage on saving throws against being frightened."
    "name": "Brave"
  - "desc": "Once per turn, when Liara hits a creature with a melee weapon, she can\
      \ cause fire to magically erupt from her weapon and deal an extra 10 (3d6)\
      \ fire damage to the target."
    "name": "Flaming Fury"
"actions":
  - "desc": "Liara makes three melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage when used with\
      \ two hands."
    "name": "Battleaxe"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 100/400 ft., one target. *Hit:*\
      \ 6 (1d10 + 1) piercing damage."
    "name": "Heavy Crossbow"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/liara-portyr-toa.webp"
```
^statblock