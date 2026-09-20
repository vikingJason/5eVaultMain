---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Aldani (Lobsterfolk)"
---
# [Aldani (Lobsterfolk)](aldani-lobsterfolk-toa.md)
*Source: Tomb of Annihilation p. 210*  

Many Chultan natives can recall childhood fables of the aldani, the eerie lobsterfolk that lived in the rivers and lakes of their homeland. As there have been no sightings of the aldani in years, it is widely believed that they were wiped out. In truth, many aldani survived and retreated to the lakes of the Aldani Basin in the heart of Chult.

An aldani looks like a giant lobster that walks upright. Its face is mostly encased in armor, looking almost humanoid except for its long eyestalks. Despite their frightful appearance, aldani avoid conflict. Reclusive and xenophobic, they hide in their lakes and rivers.

## Aldani Bribes

If disturbed, aldani try to frighten intruders away without killing them. When confronted by creatures who aren't easily startled, they offer bribes in exchange for being left alone. These bribes take the form of treasures that the aldani collect from the bottoms of rivers and lakes.

### Cursed by Ubtao

The aldani are the monstrous descendants of Chultan humans belonging to the Aldani tribe. The fishers of the tribe trapped the lobsters of the rivers by the thousands, until no lobsters remained. Their greed made Ubtao angry, and he cursed the fishers by transforming them into lobsterfolk. The fishers accepted their punishment and embraced their new existence. However, they were scorned by other members of their tribe and forced to take refuge in the rivers they had once plundered. Although the Aldani tribe went extinct, the lobsterfolk remain to this day.

```statblock
"name": "Aldani (Lobsterfolk) (ToA)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"modifier": !!int "-1"
"stats":
  - !!int "13"
  - !!int "8"
  - !!int "12"
  - !!int "10"
  - !!int "14"
  - !!int "10"
"speed": "20 ft., swim 30 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+4"
  - "name": "Survival"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "1"
"traits":
  - "desc": "The aldani can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The aldani makes two attacks with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d8 + 1) slashing damage, and the target is grappled (escape DC 11). The\
      \ aldani has two claws, each of which can grapple only one target."
    "name": "Claw"
"source":
  - "ToA"
"image": "CLI/bestiary/monstrosity/token/aldani-lobsterfolk-toa.webp"
```
^statblock