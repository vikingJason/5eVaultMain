---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Talon Beast"
---
# [Talon Beast](talon-beast-bmt.md)
*Source: The Book of Many Things p. 183*  

Talon beasts are hairless quadrupeds that have vulturelike heads and talons. They can sense the presence of magic and feed on it, absorbing spells and the power of magic items. But magic isn't enough to sustain them, so they also hunt other living things. A talon beast thrives in the wilderness, but in its search for magic, it often prowls settlements, ruins, catacombs, or the Underdark.

Many scholars agree there's a link between talon beasts, the constellation of the Talons (see chapter 13), and the Talons card found in a Deck of Many Things, but it's not clear which came first. The card—which destroys all magic items possessed by anyone who draws it—might have been named after the beast, or vice versa.

```statblock
"name": "Talon Beast (BMT)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "2"
"stats":
  - !!int "22"
  - !!int "14"
  - !!int "19"
  - !!int "5"
  - !!int "12"
  - !!int "5"
"speed": "40 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+4"
"condition_immunities": "frightened"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "7"
"traits":
  - "desc": "The talon beast has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The talon beast can detect and pinpoint the location of magic within\
      \ 120 feet of itself."
    "name": "Sense Magic"
"actions":
  - "desc": "The talon beast makes two Talon attacks or a Talon attack and a Beak\
      \ attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (2d10 + 6) piercing damage, and if the target has any spell effects on itself\
      \ or any magic items in its possession, the target must make a DC 15 Charisma\
      \ saving throw. On a failed save, a random spell effect on the target ends.\
      \ If the target has no spell effects on it, one random magic item in its possession\
      \ has its magical properties suppressed for 1 minute. If the item is a potion\
      \ or scroll, it becomes nonmagical instead."
    "name": "Beak"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:*\
      \ 15 (2d8 + 6) slashing damage, and the target has the grappled condition\
      \ (escape DC 17). Until the grapple ends, the target has the restrained condition,\
      \ and the talon beast can't use Talon on another target."
    "name": "Talon"
"source":
  - "BMT"
"image": "CLI/bestiary/monstrosity/token/talon-beast-bmt.webp"
```
^statblock