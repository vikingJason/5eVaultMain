---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Breath Drinker"
---
# [Breath Drinker](breath-drinker-bmt.md)
*Source: The Book of Many Things p. 154*  

Breath drinkers are Aberrations that invade the multiverse from the Far Realm. They drift through reality like living voids, remaining unseen while searching for souls to consume. When they strike, breath drinkers consume a victim's personality and identity, ultimately drawing out and devouring the unfortunate being's soul. Breath drinkers avoid necrotic energy because it amplifies the void at the core of their existence, rapidly causing the creatures to devour themselves.

Cunning stalkers, breath drinkers are usually solitary. Occasionally they serve powerful Far Realm entities or Elder Evils, consuming life and souls for their masters. The first breath drinker manifested in the multiverse when the Void card was first drawn from the original Deck of Many Things.

```statblock
"name": "Breath Drinker (BMT)"
"size": "Medium"
"type": "aberration"
"alignment": "typically  Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "21d8 + 63"
"modifier": !!int "4"
"stats":
  - !!int "5"
  - !!int "18"
  - !!int "16"
  - !!int "11"
  - !!int "15"
  - !!int "20"
"speed": "0 ft., fly 60 ft. (hover)"
"saves":
  - "intelligence": !!int "5"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "Perception"
    "desc": "+7"
  - "name": "Stealth"
    "desc": "+9"
  - "name": "Survival"
    "desc": "+7"
"damage_vulnerabilities": "necrotic"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "poison, radiant"
"condition_immunities": "grappled, paralyzed, petrified, poisoned, prone, restrained"
"senses": "blindsight 60 ft., passive Perception 17"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "14"
"traits":
  - "desc": "The breath drinker can move through other creatures and objects as if\
      \ they were difficult terrain. It takes 5 (1d10) force damage if it ends its\
      \ turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "When the breath drinker is subjected to radiant damage, it takes no damage\
      \ and instead regains a number of hit points equal to the radiant damage dealt."
    "name": "Radiant Absorption"
"actions":
  - "desc": "The breath drinker makes two Enervating Claw attacks. It can also use\
      \ Drink Breath."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one creature. *Hit:*\
      \ 12 (2d6 + 5) necrotic damage, and if the target is Large or smaller, it\
      \ has the grappled condition (escape DC 18). The target must succeed on a DC\
      \ 18 Constitution saving throw or its hit point maximum is reduced by an amount\
      \ equal to the damage taken. This reduction lasts until the target finishes\
      \ a long rest. The target dies if this effect reduces its hit point maximum\
      \ to 0."
    "name": "Enervating Claw"
  - "desc": "The breath drinker targets a creature that has the incapacitated condition\
      \ or that the breath drinker is grappling and that isn't a Construct or an Undead.\
      \ The target must make a DC 18 Charisma saving throw. On a failed save, the\
      \ target takes 36 (8d8) necrotic damage, and its Charisma score is reduced\
      \ by 1d6. This reduction lasts until the target finishes a short or long rest.\
      \ If this reduces the target's Charisma to 0, the target dies. Until the breath\
      \ drinker dies, the dead target can't be returned to life by any means short\
      \ of divine intervention. On a successful save, the target takes half as much\
      \ necrotic damage only. On a successful or failed save, the breath drinker regains\
      \ a number of hit points equal to the necrotic damage dealt."
    "name": "Drink Breath"
  - "desc": "The breath drinker has the invisible condition. This invisibility ends\
      \ immediately after the breath drinker hits or misses with an attack roll or\
      \ uses Drink Breath."
    "name": "Invisibility"
"source":
  - "BMT"
"image": "CLI/bestiary/aberration/token/breath-drinker-bmt.webp"
```
^statblock