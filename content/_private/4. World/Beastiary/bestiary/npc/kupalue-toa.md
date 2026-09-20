---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Kupalué"
---
# [Kupalué](CLI/bestiary/npc/kupalue-toa.md)
*Source: Tomb of Annihilation p. 35*  

```statblock
"name": "Kupalué (ToA)"
"size": "Small"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "9"
"hit_dice": "2d6 + 2"
"modifier": !!int "2"
"stats":
  - !!int "7"
  - !!int "14"
  - !!int "13"
  - !!int "6"
  - !!int "11"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+2"
  - "name": "Stealth"
    "desc": "+4"
"damage_resistances": "lightning, piercing"
"gear":
  - "sling"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Vegepygmy"
"cr": "1/4"
"traits":
  - "desc": "Kupalué has advantage on Dexterity (Stealth) checks it makes in any terrain\
      \ with ample obscuring plant life."
    "name": "Plant Camouflage"
  - "desc": "Kupalué regains 3 hit points at the start of its turn. If it takes cold,\
      \ fire, or necrotic damage, this trait doesn't function at the start of Kupalué\
      's next turn. Kupalué dies only if it starts its turn with 0 hit points and\
      \ doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) slashing damage."
    "name": "Claws"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
      \ 4 (1d4 + 2) bludgeoning damage."
    "name": "Sling"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/kupalue-toa.webp"
```
^statblock