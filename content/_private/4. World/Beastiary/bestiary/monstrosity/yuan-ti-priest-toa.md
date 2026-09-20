---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/shapechanger
- ttrpg-cli/monster/type/monstrosity/yuan-ti
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Yuan-ti Priest"
---
# [Yuan-ti Priest](yuan-ti-priest-toa.md)
*Source: Tomb of Annihilation p. 118*  

```statblock
"name": "Yuan-ti Priest (ToA)"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger, yuan-ti"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "Deception"
    "desc": "+5"
  - "name": "Stealth"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"gear":
  - "longbow"
  - "scimitar"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "3"
"traits":
  - "desc": "The yuan-ti's innate spellcasting ability is Charisma (spell save DC\
      \ 13, +5 to hit with spell attacks). The yuan-ti can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** animal friendship\
      \ (snakes only), eldritch blast (2 beams), minor illusion, poison spray\n\n\
      **3/day:** suggestion"
    "name": "Innate Spellcasting (Yuan-ti Form Only)"
  - "desc": "The yuan-ti can use its action to polymorph into a Medium snake, or back\
      \ into its true form. Its statistics are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed. It doesn't change form if it\
      \ dies."
    "name": "Shapechanger"
  - "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The yuan-ti has one of the following types:\n\n- **Type 1.** Human body\
      \ with snake head  \n- **Type 2.** Human head and body with snakes for arms\
      \  \n- **Type 3.** Human head and upper body with a serpentine lower body instead\
      \ of legs  "
    "name": "Malison Type"
"actions":
  - "desc": "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict\
      \ only once."
    "name": "Multiattack (Yuan-ti Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
    "name": "Bite (Snake Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 13).\
      \ Until this grapple ends, the target is restrained, and the yuan-ti can't constrict\
      \ another target."
    "name": "Constrict"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Scimitar (Yuan-ti Form Only)"
"source":
  - "ToA"
"image": "CLI/bestiary/monstrosity/token/yuan-ti-priest-toa.webp"
```
^statblock