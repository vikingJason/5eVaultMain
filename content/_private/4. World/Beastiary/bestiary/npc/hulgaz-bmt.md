---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Hulgaz"
---
# [Hulgaz](CLI/bestiary/npc/hulgaz-bmt.md)
*Source: The Book of Many Things p. 169*  

Hulgaz is a devil who hails from the stinking swamps of Minauros, the third layer of the Nine Hells. The self-styled Tempter corrupts mortals' souls by offering them tantalizing but ruinous boons. To do so, she directs her entourage of loyal succubi and incubi to the Material Plane in search of vulnerable mortals. When they find a particularly pitiful soul, Hulgaz might visit herself, offering even greater "gifts" to her victims.

As befits a duchess from boggy Minauros, Hulgaz appears regal yet perpetually sodden, her matted hair tangled with her soggy garments. For all her majesty, Hulgaz's fiendish nature is apparent in her monstrous features: bestial claws, glossy black eyes, and a snakelike tail tipped with a poisonous spike. On the rare occasion when her social graces fail to achieve the desired result, Hulgaz turns her natural weapons on her victims.

```statblock
"name": "Hulgaz (BMT)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "190"
"hit_dice": "20d10 + 80"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "18"
  - !!int "14"
  - !!int "15"
  - !!int "20"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "wisdom": !!int "7"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "Deception"
    "desc": "+10"
  - "name": "Insight"
    "desc": "+7"
  - "name": "Perception"
    "desc": "+7"
  - "name": "Persuasion"
    "desc": "+10"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, poisoned"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Abyssal, Common, telepathy 120 ft."
"cr": "14"
"traits":
  - "desc": "If Hulgaz fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Hulgaz has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Hulgaz makes two Claw attacks and one Intoxicating Sting attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one creature. *Hit:*\
      \ 8 (1d10 + 3) piercing damage plus 10 (3d6) poison damage, and the target\
      \ must succeed on a DC 17 Wisdom saving throw or have the charmed condition\
      \ until the start of Hulgaz's next turn."
    "name": "Intoxicating Sting"
  - "desc": "Hulgaz exhales a 30-foot cone of noxious, scorching-hot vapor. Each creature\
      \ in that area must succeed on a DC 17 Constitution saving throw or have the\
      \ poisoned condition for 1 minute. While poisoned in this way, a creature takes\
      \ 31 (7d8) fire damage at the start of each of its turns and has disadvantage\
      \ on Wisdom saving throws. A target can repeat the Constitution saving throw\
      \ at the end of each of its turns, ending the effect on itself on a success."
    "name": "Brimstone Vapor (Recharge 5-6)"
  - "desc": "Hulgaz casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 18):\n\n**At\
      \ will:** Charm Person\n\n**2/day each:** Dispel Magic, Fog Cloud\n\n**1/day:**\
      \ Teleport"
    "name": "Spellcasting"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Hulgaz can expend a use to take one of the following actions. Hulgaz regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Hulgaz makes one Claw attack."
    "name": "Attack"
  - "desc": "Hulgaz uses Spellcasting to cast Charm Person."
    "name": "Charm"
  - "desc": "Hulgaz sours the good feelings of her charmed victims. She chooses any\
      \ number of creatures she can see who are charmed by her. Each target takes\
      \ 17 (5d6) psychic damage as the charmed condition applied by Hulgaz ends\
      \ on it."
    "name": "Curdle Heart (Costs 2 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/npc/token/hulgaz-bmt.webp"
```
^statblock