---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Hierophant of the Comet"
---
# [Hierophant of the Comet](hierophant-of-the-comet-bmt.md)
*Source: The Book of Many Things p. 92*  

The number of hierophants is fixed at twenty-two on any one world, one for each card in a Deck of Many Things. As a group, hierophants are sometimes called Sages, but each hierophant is also identified with a particular card. When a hierophant dies, the remaining leaders choose an initiate to fill the position, preferring initiates from the oldest broods.

A new hierophant undergoes a rite similar to the rite of initiation, but only the other hierophants are present. As the cosmic narrative unfolds, the new hierophant is inducted into the esoteric secrets of the group's leadership. The rite concludes with a mind-shattering vision of the Void, which hierophants understand to be the formless nothingness that preceded the creation of the cosmos and will endure past its destruction.

The leaders of the Heralds of the Comet, hierophants are powerful warlocks with mighty spells at their disposal. They can commune with the alien mind of the All-Consuming Star, blast enemies with beams of eldritch energy, and conjure manifestations of this entity to devour their foes.

```statblock
"name": "Hierophant of the Comet (BMT)"
"size": "Medium"
"type": "humanoid"
"subtype": "warlock"
"alignment": "typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "breastplate"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"modifier": !!int "1"
"stats":
  - !!int "12"
  - !!int "13"
  - !!int "18"
  - !!int "15"
  - !!int "17"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "7"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "Arcana"
    "desc": "+10"
  - "name": "Deception"
    "desc": "+9"
  - "name": "Persuasion"
    "desc": "+9"
  - "name": "Religion"
    "desc": "+6"
"damage_resistances": "psychic"
"senses": "truesight 30 ft., passive Perception 13"
"languages": "Common plus any two languages, telepathy 60 ft."
"cr": "11"
"traits":
  - "desc": "The hierophant can cast Contact Other Plane, using Charisma as the spellcasting\
      \ ability."
    "name": "Comet's Voice (1/Day)"
  - "desc": "The hierophant has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The hierophant's thoughts can't be read by any means unless the hierophant\
      \ allows it."
    "name": "Thought Shield"
"actions":
  - "desc": "The hierophant makes two Herald's Axe attacks or three Comet Blast attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (1d12 + 5) slashing damage plus 10 (3d6) necrotic damage."
    "name": "Herald's Axe"
  - "desc": "*Ranged Spell Attack:* +9 to hit, range 120 ft., one target. *Hit:*\
      \ 16 (2d10 + 5) force damage."
    "name": "Comet Blast"
  - "desc": "The hierophant conjures a manifestation of the All-Consuming Star: brilliant\
      \ light and haunting screams that fill a 20-foot-radius sphere centered on a\
      \ point the hierophant can see within 60 feet of itself. Each creature within\
      \ the sphere has the blinded and deafened conditions. Each creature that enters\
      \ the sphere for the first time on a turn or starts its turn there must make\
      \ a DC 17 Wisdom saving throw. On a failed save, a creature takes 27 (6d8)\
      \ psychic damage and has the incapacitated condition until the start of its\
      \ next turn. On a successful save, a creature takes half as much damage only.\
      \ The manifestation persists until the hierophant dies, has the incapacitated\
      \ condition, uses a bonus action to end the effect, or uses this action again."
    "name": "All-Consuming Star (Recharge 6)"
  - "desc": "The hierophant casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 17):\n\n**At will:** Detect Thoughts,\
      \ Mage Hand, Thaumaturgy\n\n**1/day each:** Dimension Door, Mass Suggestion"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The hierophant targets one creature within 30 feet of the center of its\
      \ All-Consuming Star. The target must succeed on a DC 17 Strength saving throw\
      \ or be pulled up to 30 feet toward the center of the All-Consuming Star."
    "name": "Star's Hunger"
"source":
  - "BMT"
"image": "CLI/bestiary/humanoid/token/hierophant-of-the-comet-bmt.webp"
```
^statblock