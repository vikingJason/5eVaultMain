---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Witchlight Hand (Small)"
---
# [Witchlight Hand (Small)](witchlight-hand-small-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 27*  

Witchlight hands are the backbone of the Witchlight Carnival, a motley collection of individuals who operate many of the booths, make repairs, feed and exercise the animals, keep an eye out for thieves and other miscreants, and perform other miscellaneous tasks as Mister Witch dictates. A few also work part-time as performers and attractions. Although they travel to many worlds throughout the Material Plane, Witchlight hands rarely leave the carnival grounds. The carnival is the only world they know and care about.

All hands enter into an agreement when they join the carnival: they must never harm another staff member, and they can't leave the carnival for more than a day at a time. (A longer absence is equivalent to resignation, in Mister Witch's estimation.) On-duty staff members are required to wear fake butterfly wings strapped to their backs. Mister Witch and Mister Light also furnish them with small amounts of pixie dust (see appendix A).

Witchlight hands are paid only a small fraction of the carnival's profits, but it's enough to keep them fed, clothed, and cared for. Some hands work longer hours or do extra chores to pay off debts and loans.

Most Witchlight hands are taught how to perform minor magic tricks, which they use to amuse themselves as well as entertain the masses.

```statblock
"name": "Witchlight Hand (Small) (WBtW)"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "11"
  - !!int "12"
  - !!int "13"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "Sleight of Hand"
    "desc": "+6"
"gear":
  - "dagger"
"senses": "passive Perception 11"
"languages": "Common plus any one language"
"cr": "1/8"
"traits":
  - "desc": "The hand has one of these additional skills: Acrobatics Acrobatics (+6),\
      \ Animal Handling Animal Handling (+5), Arcana Arcana (+5), Athletics Athletics\
      \ (+4), Medicine Medicine (+5), or Performance Performance (+5)."
    "name": "Secret Expertise"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
  - "desc": "The hand sprinkles a pinch of pixie dust on itself or another creature\
      \ it can see within 5 feet of it. The recipient gains a flying speed of 30 feet\
      \ for 1 minute. If the creature is airborne when this effect ends, it falls\
      \ safely to the ground, taking no damage and landing on its feet."
    "name": "Pixie Dust (1/Day)"
  - "desc": "The hand casts one of the following spells, using Charisma as the spellcasting\
      \ ability:\n\n**At will:** dancing lights, message, prestidigitation"
    "name": "Spellcasting"
"source":
  - "WBtW"
"image": "CLI/bestiary/humanoid/token/witchlight-hand-small-wbtw.webp"
```
^statblock