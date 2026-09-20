---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Wine Weird"
---
# [Wine Weird](wine-weird-toa.md)
*Source: Tomb of Annihilation p. 141*  

```statblock
"name": "Wine Weird (ToA)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"modifier": !!int "3"
"stats":
  - !!int "17"
  - !!int "16"
  - !!int "13"
  - !!int "11"
  - !!int "10"
  - !!int "10"
"speed": "0 ft., swim 60 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, poisoned, restrained, prone,\
  \ unconscious"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": "understands Aquan but doesn't speak"
"cr": "3"
"traits":
  - "desc": "The wine weird is invisible while fully immersed in water."
    "name": "Invisible in Water"
  - "desc": "The wine weird dies if it leaves the water to which it is bound or if\
      \ that water is destroyed."
    "name": "Water Bound"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one creature. *Hit:*\
      \ 13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it\
      \ is grappled (escape DC 13) and pulled 5 feet toward the wine weird. Until\
      \ this grapple ends, the target is restrained, the wine weird tries to drown\
      \ it, and the wine weird can't constrict another target."
    "name": "Constrict"
"source":
  - "ToA"
"image": "CLI/bestiary/elemental/token/wine-weird-toa.webp"
```
^statblock