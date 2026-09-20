---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/tabaxi
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Bag of Nails"
---
# [Bag of Nails](CLI/bestiary/npc/bag-of-nails-toa.md)
*Source: Tomb of Annihilation p. 102*  

Bag of Nails yearns for a hunter's death. Senility has taken hold, and now he sees all creatures as his prey.

He explains that he came to Omu to find a fabled treasure called the Navel of the Moon. He hoped to use its alleged powers to find his lost son, but he has long since given up hope of ever finding it.

```statblock
"name": "Bag of Nails (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "studded leather"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "11"
  - !!int "10"
"speed": "30 ft., climb 20 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "4"
"skillsaves":
  - "name": "Acrobatics"
    "desc": "+6"
  - "name": "Deception"
    "desc": "+3"
  - "name": "Perception"
    "desc": "+3"
  - "name": "Stealth"
    "desc": "+9"
"damage_resistances": "poison"
"gear":
  - "longbow"
  - "shortsword"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Thieves' cant, Common, Dwarvish"
"cr": "8"
"traits":
  - "desc": "When Bag of Nails moves on its turn in combat, he can double his speed\
      \ until the end of the turn. Once he uses this trait, Bag of Nails can't use\
      \ it again until he moves 0 feet on one of his turns."
    "name": "Feline Agility"
  - "desc": "During his first turn, Bag of Nails has advantage on attack rolls against\
      \ any creature that hasn't taken a turn. Any hit Bag of Nails scores against\
      \ a surprised creature is a critical hit."
    "name": "Assassinate"
  - "desc": "If Bag of Nails is subjected to an effect that allows him to make a Dexterity\
      \ saving throw to take only half damage, Bag of Nails instead takes no damage\
      \ if he succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "Bag of Nails deals an extra 14 (4d6) damage when he hits a target with\
      \ a weapon attack and has advantage on the attack roll, or when the target is\
      \ within 5 feet of an ally of his that isn't incapacitated and Bag of Nails\
      \ doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Bag of Nails makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 2\
      \ (1d4) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 24 (7d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 150/600 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 24 (7d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Longbow"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/bag-of-nails-toa.webp"
```
^statblock