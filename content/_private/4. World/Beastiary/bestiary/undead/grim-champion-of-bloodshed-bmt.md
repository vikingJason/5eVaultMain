---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Grim Champion of Bloodshed"
---
# [Grim Champion of Bloodshed](CLI/bestiary/undead/grim-champion-of-bloodshed-bmt.md)
*Source: The Book of Many Things p. 161*  

Wynemar Brack was once a farmer, but mercenaries in a local war razed her fields and sacked her village. In desperation, she yielded to the clever patter of a traveling fortune teller and drew from a Deck of Many Things. The avatar of death slew her in a flash. That was many centuries ago, and Wynemar is now a powerful and bloodthirsty Undead commander of the Grim Harrow.

Wreathed in searing fire, Wynemar embodies the havoc of violence and war. She rides a flaming steed that uses the nightmare stat block but is an Undead instead of a Fiend.

## The Grim Champions

The Grim Harrow is led by three powerful entities with the title of grim champion. Each champion embodies a terrible facet of death. Jyn Corvis, Grim Champion of Desolation, is the oldest and most powerful of the three and embodies all-consuming nothingness. She led the Grim Harrow to the Gardens of Delight long ago and is the nominal leader of all the Undead in the demiplane. The other two champions—Wynemar Brack, Grim Champion of Bloodshed, and Aleron, Grim Champion of Pestilence—rival Jyn for power and together can oppose her. The fact that the three champions rarely agree on anything is a major check on the group's power. Instead of the Grim Harrow acting as a unified force, each of the three champions usually pursues their own interests, seldom cooperating or sharing intelligence or resources.

```statblock
"name": "Grim Champion of Bloodshed (BMT)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "plate armor"
"hp": !!int "280"
"hit_dice": "33d8 + 132"
"modifier": !!int "1"
"stats":
  - !!int "23"
  - !!int "12"
  - !!int "18"
  - !!int "10"
  - !!int "17"
  - !!int "21"
"speed": "40 ft."
"saves":
  - "strength": !!int "12"
  - "dexterity": !!int "7"
  - "constitution": !!int "10"
"skillsaves":
  - "name": "Athletics"
    "desc": "+12"
  - "name": "Intimidation"
    "desc": "+11"
  - "name": "Perception"
    "desc": "+9"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, poisoned,\
  \ stunned, unconscious"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common"
"cr": "20"
"traits":
  - "desc": "If the champion fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The champion makes four Blazing Morningstar attacks. It can replace one\
      \ of these attacks with Blade Storm, if available."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 5 ft., one target. *Hit:*\
      \ 10 (1d8 + 6) piercing damage plus 14 (4d6) fire damage."
    "name": "Blazing Morningstar"
  - "desc": "The champion conjures a churning storm of spectral blades that fills\
      \ a 20-foot cube centered on a point it can see within 120 feet of itself. The\
      \ storm lasts until the start of the champion's next turn. While the storm is\
      \ active, the area of the storm is difficult terrain. Whenever a creature enters\
      \ the storm for the first time on a turn or starts its turn there, it must make\
      \ a DC 19 Dexterity saving throw, taking 27 (6d8) slashing damage on a failed\
      \ saving throw, or half as much damage on a successful one."
    "name": "Blade Storm (Recharge 5-6)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the grim champion of bloodshed can expend a use to take one of the following\
  \ actions. The grim champion of bloodshed regains all expended uses at the start\
  \ of each of its turns."
"legendary_actions":
  - "desc": "The champion moves up to its speed or commands its mount to move up to\
      \ its speed. This movement doesn't provoke opportunity attacks."
    "name": "Furious Pursuit"
  - "desc": "The champion targets one creature it can see within 60 feet of itself.\
      \ The target must succeed on a DC 19 Wisdom saving throw or immediately make\
      \ one melee weapon attack against another creature of the champion's choice\
      \ that is within the target's reach. If no creature is within the target's reach\
      \ or if the target has the incapacitated condition, the target instead takes\
      \ 11 (2d10) psychic damage."
    "name": "Induce Violence"
  - "desc": "The champion chooses any number of creatures it can see within 30 feet\
      \ of itself. Each target must succeed on a DC 19 Wisdom saving throw or have\
      \ the frightened condition until the end of its next turn."
    "name": "Menace (Costs 2 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/undead/token/grim-champion-of-bloodshed-bmt.webp"
```
^statblock