---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Tri-flower Frond"
---
# [Tri-flower Frond](CLI/bestiary/plant/tri-flower-frond-toa.md)
*Source: Tomb of Annihilation p. 234*  

When fully grown, a tri-flower frond stands 6 to 7 feet tall. It has three bright, trumpet-shaped flowers, each as large as a human head and each one a different color: intense red, vivid orange, and bright yellow. Each flower can harm a creature in a different terrible way.

```statblock
"name": "Tri-flower Frond (ToA)"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "12"
  - !!int "9"
  - !!int "13"
  - !!int "9"
"speed": "5 ft."
"condition_immunities": "blinded, deafened, exhaustion, prone"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"actions":
  - "desc": "The tri-flower frond uses its orange blossom, then its yellow blossom,\
      \ and then its red blossom."
    "name": "Multiattack"
  - "desc": "The tri-flower frond chooses one creature it can see within 5 feet of\
      \ it. The target must succeed on a DC 11 Constitution saving throw or be poisoned\
      \ for 1 hour. While poisoned in this way, the target is unconscious. At the\
      \ end of each minute, the poisoned target can repeat the saving throw, ending\
      \ the effect on itself on a success."
    "name": "Orange Blossom"
  - "desc": "The tri-flower frond chooses one creature it can see within 5 feet of\
      \ it. The target must succeed on a DC 11 Dexterity saving throw, or it is covered\
      \ with corrosive sap and takes 5 acid damage at the start of each of its turns.\
      \ Dousing the target with water reduces the acid damage by 1 point per pint\
      \ or flask of water used."
    "name": "Yellow Blossom"
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one creature. *Hit:*\
      \ 2 (1d4) piercing damage, and the target is grappled (escape DC 11). Until\
      \ this grapple ends, the target takes 5 (2d4) poison damage at the start of\
      \ each of its turns. The red blossom can grapple only one target at a time.\
      \ Another creature within reach of the tri-flower frond can use its action to\
      \ end the grapple on the target."
    "name": "Red Blossom"
"source":
  - "ToA"
"image": "CLI/bestiary/plant/token/tri-flower-frond-toa.webp"
```
^statblock