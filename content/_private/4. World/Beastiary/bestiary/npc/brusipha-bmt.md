---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/minotaur
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Brusipha"
---
# [Brusipha](CLI/bestiary/npc/brusipha-bmt.md)
*Source: The Book of Many Things p. 127*  

```statblock
"name": "Brusipha (BMT)"
"size": "Medium"
"type": "humanoid"
"subtype": "minotaur, warlock"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d8 + 36"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "wisdom": !!int "5"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "Deception"
    "desc": "+5"
  - "name": "Perception"
    "desc": "+7"
  - "name": "Religion"
    "desc": "+3"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, Common"
"cr": "3"
"traits":
  - "desc": "Brusipha can spend 3 hours performing a ritual that summons 1d3 + 1\
      \ barlguras or 1 hezrou. She must sacrifice a Medium or larger living creature\
      \ to Baphomet during this ritual, and the ritual can be performed only at night.\
      \ The demons vanish at dawn."
    "name": "Demonic Ritual"
  - "desc": "Brusipha can perfectly recall any path she has traveled."
    "name": "Labyrinthine Recall"
"actions":
  - "desc": "Brusipha makes two Eldritch Blast attacks."
    "name": "Multiattack"
  - "desc": "*Ranged Spell Attack:* +5 to hit, range 120 ft., one target. *Hit:*\
      \ 8 (1d10 + 3) force damage."
    "name": "Eldritch Blast"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage plus 4 (1d8) necrotic damage. If Brusipha moved\
      \ at least 10 feet straight toward the target immediately before she hit, the\
      \ target takes an extra 4 (1d8) piercing damage, and if the target is a creature,\
      \ it must succeed on a DC 15 Strength saving throw or be pushed up to 10 feet\
      \ from Brusipha and have the prone condition."
    "name": "Gore"
  - "desc": "Brusipha allows each ally within 30 feet of herself that has the Unerring\
      \ Tracker trait to make one weapon attack as a reaction against the target of\
      \ that ally's Unerring Tracker."
    "name": "Incite the Hunters (Recharges after a Short or Long Rest)"
  - "desc": "Brusipha casts one of the following spells, using Charisma as the spellcasting\
      \ ability (spell save DC 13):\n\n**At will:** Prestidigitation, Speak with Animals\n\
      \n**1/day each:** Bestow Curse, Command, Crown of Madness"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Brusipha magically creates a psychic link with one creature she can see.\
      \ For the next hour, Brusipha knows the current distance and direction to the\
      \ target if it is on the same plane of existence. The link ends if Brusipha\
      \ has the incapacitated condition or uses this ability on a different target."
    "name": "Unerring Tracker"
"reactions":
  - "desc": "When Brusipha reduces a hostile creature to 0 hit points, she gains 8\
      \ temporary hit points."
    "name": "Baphomet's Blessing"
"source":
  - "BMT"
"image": "CLI/bestiary/npc/token/brusipha-bmt.webp"
```
^statblock