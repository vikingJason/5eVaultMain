---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Iggwilv the Witch Queen"
---
# [Iggwilv the Witch Queen](CLI/bestiary/npc/iggwilv-the-witch-queen-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 205*  

Iggwilv has a long and storied history throughout the multiverse. This adventure presents the legendary figure in her current form.

```statblock
"name": "Iggwilv the Witch Queen (WBtW)"
"size": "Medium"
"type": "fey"
"subtype": "wizard"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"ac_class": "robe of the archmagi"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "18"
  - !!int "27"
  - !!int "12"
  - !!int "23"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "14"
  - "wisdom": !!int "7"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "Arcana"
    "desc": "+20"
  - "name": "History"
    "desc": "+14"
  - "name": "Nature"
    "desc": "+14"
"condition_immunities": "charmed, frightened"
"senses": "truesight 60 ft., passive Perception 11"
"languages": "Abyssal, Celestial, Common, Draconic, Elvish, Infernal, Sylvan"
"cr": "20"
"traits":
  - "desc": "Iggwilv is immune to any effect that would age her, and she can't die\
      \ from old age."
    "name": "Boon of Immortality"
  - "desc": "If Iggwilv fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Iggwilv has advantage on saving throws against spells and other magical\
      \ effects. (This trait is bestowed by her robe of the archmagi.)"
    "name": "Magic Resistance"
  - "desc": "Iggwilv wears an amulet of the planes and a robe of the archmagi."
    "name": "Special Equipment"
"actions":
  - "desc": "Iggwilv makes two Bewitching Bolt attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +16 to hit, reach 5 ft. or range 120\
      \ ft., one target. *Hit:* 25 (5d6 + 8) lightning damage, and if the target\
      \ is a creature, it must succeed on a DC 22 Wisdom saving throw or be charmed\
      \ by Iggwilv until the start of her next turn."
    "name": "Bewitching Bolt"
  - "desc": "Iggwilv opens a momentary Abyssal rift within 120 feet of her. The rift\
      \ is a 20-foot-radius sphere. Each creature in that area must make a DC 22 Constitution\
      \ saving throw, taking 40 (9d8) necrotic damage on a failed save, or half\
      \ as much damage on a successful one. In addition, there is a 50 percent chance\
      \ that 3 hezrous then appear in unoccupied spaces in the sphere. They act as\
      \ Iggwilv's allies, take their turns immediately after hers, and can't summon\
      \ other demons. They remain until they die or until Iggwilv dismisses them as\
      \ an action."
    "name": "Abyssal Rift (Recharge 5-6)"
  - "desc": "Iggwilv casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 24, +16\
      \ to hit with spell attacks):\n\n**At will:** detect magic, disguise self, invisibility,\
      \ light, mage hand, message, prestidigitation, Tasha's hideous laughter\n\n\
      **3/day each:** dispel magic, fly, polymorph\n\n**1/day each:** maze, telekinesis,\
      \ teleport, wish"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Iggwilv teleports, along with any equipment she is wearing or carrying,\
      \ to an unoccupied space she can see within 30 feet of her."
    "name": "Fey Step"
"reactions":
  - "desc": "When Iggwilv sees a creature within 60 feet of her casting a spell, she\
      \ tries to interrupt it. If the creature is casting a spell using a spell slot\
      \ of 8th level or lower, its spell fails and has no effect. If it is casting\
      \ a 9th-level spell, it must succeed on a DC 22 Intelligence saving throw, or\
      \ the spells fails and has no effect."
    "name": "Negate Spell (2/Day)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Iggwilv can expend a use to take one of the following actions. Iggwilv regains\
  \ all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Iggwilv uses Spellcasting or Fey Step."
    "name": "Witchcraft"
  - "desc": "Iggwilv utters a phrase in a forbidden language and targets one or two\
      \ creatures she can see within 60 feet of her. Each target must succeed on a\
      \ DC 22 Wisdom saving throw or take 11 (2d10) psychic damage and be frightened\
      \ of Iggwilv for 1 minute. A target can repeat the save at the end of each of\
      \ its turns, ending the effect on itself on a success and thereby becoming immune\
      \ to Iggwilv's Dark Speech for 24 hours."
    "name": "Dark Speech (Costs 2 Actions)"
  - "desc": "Iggwilv targets one creature she can see within 60 feet of her. The target\
      \ must succeed on a DC 22 Charisma saving throw or be possessed by a fey spirit.\
      \ While possessed, the target must obey Iggwilv's commands. The target can repeat\
      \ the saving throw at the end of each of its turns, banishing the fey spirit\
      \ and ending the effect on itself on a success."
    "name": "Fey Beguilement (Costs 3 Actions)"
"source":
  - "WBtW"
"image": "CLI/bestiary/npc/token/iggwilv-the-witch-queen-wbtw.webp"
```
^statblock