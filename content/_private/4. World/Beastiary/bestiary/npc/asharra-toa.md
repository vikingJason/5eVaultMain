---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/aarakocra
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Asharra"
---
# [Asharra](asharra-toa.md)
*Source: Tomb of Annihilation p. 69*  

Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.

## Biography

The incredibly old leader of the community at Kir Sabal. The others refer to her as Teacher, and they revere her as a living saint. Asharra is intelligent, ambitious, and somewhat manipulative, but never cruel or insensitive.

```statblock
"name": "Asharra (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "aarakocra"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "17"
  - !!int "11"
"speed": "20 ft., fly 50 ft."
"skillsaves":
  - "name": "History"
    "desc": "+4"
  - "name": "Insight"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+7"
"gear":
  - "javelin"
"senses": "passive Perception 17"
"languages": "Auran, Common"
"cr": "2"
"traits":
  - "desc": "Asharra is a 5th-level spellcaster. Her spellcasting ability is Wisdom\
      \ (spell save DC 13, +5 to hit with spell attacks). Asharra has the following\
      \ druid spells prepared:\n\n**Cantrips (at will):** druidcraft, mending, produce\
      \ flame\n\n**1st level (4 slots):** detect magic, faerie fire, thunderwave\n\
      \n**2nd level (3 slots):** gust of wind, hold person, lesser restoration\n\n\
      **3rd level (2 slots):** call lightning, wind wall"
    "name": "Spellcasting"
  - "desc": "If the aarakocra is flying and dives at least 30 feet straight toward\
      \ a target and then hits it with a melee weapon attack, the attack deals an\
      \ extra 3 (1d6) damage to the target."
    "name": "Dive Attack"
  - "desc": "Asharra knows a ritual called the Dance of the Seven Winds, which temporarily\
      \ grants magical flight to as many as ten nonflying creatures. The ritual, which\
      \ takes 10 minutes to complete, can only be performed by an aarakocra elder\
      \ and requires a black orchid as a material component.\n\nAsharra must grind\
      \ the orchid to powder, inhale it, and dance in circles around the ritual's\
      \ beneficiaries uninterrupted while seven other aarakocra chant prayers to the\
      \ Wind Dukes of Aaqa. When the dance concludes, Asharra's wings disappear and\
      \ she loses the ability to fly. The ritual's beneficiaries each gain a magical\
      \ flying speed of 30 feet (allowing them to fly 4 miles per hour). This benefit\
      \ lasts for 3 days, after which Asharra's wings reappear and she regains the\
      \ ability to fly."
    "name": "Dance of the Seven Winds"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d4 + 2) slashing damage."
    "name": "Talon"
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 30/120\
      \ ft., one target. *Hit:* 5 (1d6 + 2) piercing damage."
    "name": "Javelin"
  - "desc": "Five aarakocra within 30 feet of each other can magically summon an air\
      \ elemental. Each of the five must use its action and movement on three consecutive\
      \ turns to perform an aerial dance and must maintain concentration while doing\
      \ so (as if concentrating on a spell). When all five have finished their third\
      \ turn of the dance, the elemental appears in an unoccupied space within 60\
      \ feet of them. It is friendly toward them and obeys their spoken commands.\
      \ It remains for 1 hour, until it or all its summoners die, or until any of\
      \ its summoners dismisses it as a bonus action. A summoner can't perform the\
      \ dance again until it finishes a short rest. When the elemental returns to\
      \ the Elemental Plane of Air, any aarakocra within 5 feet of it can return with\
      \ it."
    "name": "Summon Air Elemental"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/asharra-toa.webp"
```
^statblock