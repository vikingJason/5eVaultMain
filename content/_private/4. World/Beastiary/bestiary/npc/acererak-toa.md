---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Acererak"
---
# [Acererak](acererak-toa.md)
*Source: Tomb of Annihilation p. 209*  

Acererak is an archlich who travels between worlds and is known to take sick pleasure in devouring the souls of adventurers, whom he lures into trap-ridden dungeons where they suffer horrible deaths. One such dungeon lies under the lost city of Omu. This dungeon is called the Tomb of the Nine Gods, for Acererak slew nine false gods and sealed them within it. More recently, he built a necromantic device called the Soulmonger, then hid it in the heart of the tomb.

## Acererak's Traits

### Ideal

"Why be a god when I can be a creator of gods?"

### Bond

"I build dungeons to trap and slay powerful adventurers. Their deaths and souls are my nourishment."

### Flaw

"I underestimate the resolve of my enemies."

```statblock
"name": "Acererak (ToA)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "285"
"hit_dice": "30d8 + 150"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "20"
  - !!int "27"
  - !!int "21"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "constitution": !!int "12"
  - "intelligence": !!int "15"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "Arcana"
    "desc": "+22"
  - "name": "History"
    "desc": "+22"
  - "name": "Insight"
    "desc": "+12"
  - "name": "Perception"
    "desc": "+12"
"damage_resistances": "cold, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial,\
  \ Undercommon"
"cr": "23"
"traits":
  - "desc": "Acererak is a 20th-level spellcaster. His spellcasting ability is Intelligence\
      \ (spell save DC 23, +15 to hit with spell attacks). Acererak has the following\
      \ wizard spells prepared:\n\n**Cantrips (at will):** mage hand, ray of frost,\
      \ shocking grasp\n\n**1st level:** ray of sickness, shield\n\n**2nd level:**\
      \ arcane lock, knock\n\n**3rd level:** animate dead, counterspell\n\n**4th level\
      \ (3 slots):** blight, ice storm, phantasmal killer\n\n**5th level (3 slots):**\
      \ cloudkill, hold monster, wall of force\n\n**6th level (3 slots):** chain lightning,\
      \ circle of death, disintegrate\n\n**7th level (3 slots):** finger of death,\
      \ plane shift, teleport\n\n**8th level (2 slots):** maze, mind blank\n\n**9th\
      \ level (2 slots):** power word kill, time stop"
    "name": "Spellcasting"
  - "desc": "Acererak carries the [Staff of the Forgotten One](CLI/items/staff-of-the-forgotten-one-toa.md).\
      \ He wears a Talisman of the Sphere and has a Sphere of Annihilation under his\
      \ control."
    "name": "Special Equipment"
  - "desc": "If Acererak fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Acererak's body turns to dust when he drops to 0 hit points, and his\
      \ equipment is left behind. Acererak gains a new body after 1d10 days, regaining\
      \ all his hit points and becoming active again. The new body appears within\
      \ 5 feet of Acererak's phylactery, the location of which is hidden."
    "name": "Rejuvenation"
  - "desc": "Acererak has advantage on saving throws against any effect that turns\
      \ undead."
    "name": "Turn Resistance"
"actions":
  - "desc": "*Melee Spell Attack:* +15 to hit, reach 5 ft., one creature. *Hit:*\
      \ 10 (3d6) cold damage, and the target must succeed on a DC 20 Constitution\
      \ saving throw or be paralyzed for 1 minute. The target can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success."
    "name": "Paralyzing Touch"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) bludgeoning damage plus 10 (3d6) necrotic damage, or 8 (1d8\
      \ + 4) bludgeoning damage plus 10 (3d6) necrotic damage when used with two\
      \ hands."
    "name": "Staff (+3 Quarterstaff)"
  - "desc": "While holding the Staff of the Forgotten One, Acererak expends 1 charge\
      \ from it and targets one creature he can see within 60 feet of him. The target\
      \ must succeed on a DC 23 Constitution saving throw or be cursed. Until the\
      \ curse is ended, the target can't regain hit points and has vulnerability to\
      \ necrotic damage. Greater restoration, remove curse, or similar magic ends\
      \ the curse on the target."
    "name": "Invoke Curse"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Acererak can expend a use to take one of the following actions. Acererak\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Acererak casts one of his at-will spells."
    "name": "At-Will Spell"
  - "desc": "Acererak uses Paralyzing Touch or makes one melee attack with his staff."
    "name": "Melee Attack"
  - "desc": "Acererak fixes his gaze on one creature he can see within 10 feet of\
      \ him. The target must succeed on a DC 20 Wisdom saving throw against this magic\
      \ or become frightened for 1 minute. The frightened target can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success.\
      \ If a target's saving throw is successful or the effect ends for it, the target\
      \ its immune to Acererak's gaze for the next 24 hours."
    "name": "Frightening Gaze (Costs 2 Actions)"
  - "desc": "Acererak uses his Talisman of the Sphere to move the Sphere of Annihilation\
      \ under his control up to 90 feet."
    "name": "Talisman of the Sphere (Costs 2 Actions)"
  - "desc": "Each creature within 20 feet of Acererak must make a DC 20 Constitution\
      \ saving throw against this magic, taking 42 (12d6) necrotic damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Disrupt Life (Costs 3 Actions)"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/acererak-toa.webp"
```
^statblock