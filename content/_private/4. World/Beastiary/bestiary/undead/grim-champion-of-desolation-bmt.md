---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/25
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Grim Champion of Desolation"
---
# [Grim Champion of Desolation](CLI/bestiary/undead/grim-champion-of-desolation-bmt.md)
*Source: The Book of Many Things p. 162*  

Jyn Corvis, a former adventurer, might have been the first person to draw the Skull card from a Deck of Many Things and be slain by the avatar of death. Even Jyn doesn't know for sure, as that was so long ago that she's forgotten almost everything about her former life. Jyn's existence over so many centuries has left her in tortured misery, and now nihilism is all that drives her. More than any other member of the Grim Harrow, Jyn is desperate to destroy the deck and end her painful existence. If she could, she'd take the entire multiverse with her.

The Grim Champion of Desolation rides a malevolent draconic beast with pale, leathery wings and emaciated skin; this mount uses the wyvern stat block, but it is an Undead instead of a Dragon. An eerie, hollow silence heralds the champion's arrival.

## The Grim Champions

The Grim Harrow is led by three powerful entities with the title of grim champion. Each champion embodies a terrible facet of death. Jyn Corvis, Grim Champion of Desolation, is the oldest and most powerful of the three and embodies all-consuming nothingness. She led the Grim Harrow to the Gardens of Delight long ago and is the nominal leader of all the Undead in the demiplane. The other two champions—Wynemar Brack, Grim Champion of Bloodshed, and Aleron, Grim Champion of Pestilence—rival Jyn for power and together can oppose her. The fact that the three champions rarely agree on anything is a major check on the group's power. Instead of the Grim Harrow acting as a unified force, each of the three champions usually pursues their own interests, seldom cooperating or sharing intelligence or resources.

```statblock
"name": "Grim Champion of Desolation (BMT)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "studded leather armor"
"hp": !!int "416"
"hit_dice": "49d8 + 196"
"modifier": !!int "6"
"stats":
  - !!int "22"
  - !!int "23"
  - !!int "18"
  - !!int "12"
  - !!int "20"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "14"
  - "constitution": !!int "12"
  - "wisdom": !!int "13"
"skillsaves":
  - "name": "Deception"
    "desc": "+12"
  - "name": "Insight"
    "desc": "+13"
  - "name": "Perception"
    "desc": "+13"
  - "name": "Stealth"
    "desc": "+14"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, poisoned,\
  \ stunned, unconscious"
"senses": "darkvision 60 ft., passive Perception 23"
"languages": "Common, Elvish"
"cr": "25"
"traits":
  - "desc": "If the champion fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The champion makes two Leeching Blade attacks and uses Hollow Void."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 5 ft., one target. *Hit:*\
      \ 13 (2d6 + 6) slashing damage plus 33 (6d10) cold damage, and the champion\
      \ regains 10 hit points."
    "name": "Leeching Blade"
  - "desc": "The champion summons a hungering rift around a creature it can see within\
      \ 120 feet of itself. The creature must make a DC 22 Constitution saving throw.\
      \ On a failed save, the creature takes 49 (11d8) force damage and has the\
      \ stunned condition until the start of the champion's next turn. On a successful\
      \ save, the creature takes half as much damage only. If a creature is reduced\
      \ to 0 hit points by this effect, the creature dies, and its body crumbles to\
      \ dust."
    "name": "Hollow Void"
"bonus_actions":
  - "desc": "The champion, along with any equipment it is wearing or carrying, has\
      \ the invisible condition and teleports to an unoccupied space it can see within\
      \ 30 feet of itself. The champion remains invisible until the start of its next\
      \ turn or immediately after it deals damage."
    "name": "Step into Nothing (Recharge 4-6)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the grim champion of desolation can expend a use to take one of the following\
  \ actions. The grim champion of desolation regains all expended uses at the start\
  \ of each of its turns."
"legendary_actions":
  - "desc": "The champion unleashes a burst of crushing force on a creature it can\
      \ see within 30 feet of itself. The creature must succeed on a DC 22 Strength\
      \ saving throw or take 14 (4d6) force damage and have the prone condition."
    "name": "Crush"
  - "desc": "The champion moves up to its speed or commands its mount to move up to\
      \ its speed. This movement doesn't provoke opportunity attacks."
    "name": "Fearsome Pursuit"
  - "desc": "The champion emits a magic wave in a 60-foot cone. Every spell of 5th\
      \ level or lower ends on creatures and objects of the champion's choice in that\
      \ area."
    "name": "Nullify (Costs 2 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/undead/token/grim-champion-of-desolation-bmt.webp"
```
^statblock