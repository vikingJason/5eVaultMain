---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Gremorly's Ghost"
---
# [Gremorly's Ghost](CLI/bestiary/undead/gremorlys-ghost-bmt.md)
*Source: The Book of Many Things p. 122*  

Years ago, a wizard named Gremorly drew the Throne card from a Deck of Many Things, gaining ownership of a small castle called Sovereign's Keep. Gremorly was a necromancer and misanthrope who had little patience for the living; he resolved to use the keep to create and house a ghostly army he would use to seize power. Gremorly performed a ritual that turned Sovereign Keep into a ghost trap: anyone who dies within the castle walls rises as an incorporeal spirit, trapped within the castle. Then, he waited. When adventurers came to investigate the seemingly abandoned keep, Gremorly murdered them and trapped their ghosts. But fortune recently turned against Gremorly when a behir entered the keep seeking a nest. It slew Gremorly, who became a victim of his own ritual.

Gremorly is now one of the many ghosts that haunt the keep. Locals have renamed the keep Harrowhall, as they dread the spectral figures moving through the fog there and the fierce lightning storms that erupt without warning.

```statblock
"name": "Gremorly's Ghost (BMT)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"modifier": !!int "2"
"stats":
  - !!int "7"
  - !!int "14"
  - !!int "12"
  - !!int "18"
  - !!int "12"
  - !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  - "intelligence": !!int "8"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "Arcana"
    "desc": "+8"
  - "name": "History"
    "desc": "+8"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Giant"
"cr": "9"
"traits":
  - "desc": "Gremorly can see 60 feet into the Ethereal Plane when he is on the Material\
      \ Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "Gremorly can move through other creatures and objects as if they were\
      \ difficult terrain. He takes 5 (1d10) force damage if he ends his turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "If Gremorly fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "Gremorly makes three Withering Strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee Spell Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 19\
      \ (3d12) necrotic damage."
    "name": "Withering Strike"
  - "desc": "Gremorly targets one creature he can see within 60 feet of himself. The\
      \ target must make a DC 16 Constitution saving throw, taking 61 (7d8 + 30)\
      \ necrotic damage on a failed save, or half as much damage on a successful one.\
      \ In addition, Gremorly regains 9 (2d8) hit points."
    "name": "Fell Necromancy"
  - "desc": "One Humanoid Gremorly can see within 5 feet of himself must succeed on\
      \ a DC 15 Charisma saving throw or be possessed by him; Gremorly disappears,\
      \ and the target has the incapacitated condition and loses control of its body.\
      \ Gremorly can't be targeted by any attack, spell, or other effect, except ones\
      \ that turn Undead, and he retains his alignment, Intelligence, Wisdom, Charisma,\
      \ and immunity to the charmed and frightened conditions. He otherwise uses the\
      \ target's game statistics, but Gremorly doesn't gain access to the target's\
      \ knowledge, class features, or proficiencies.\n\nThe possession lasts until\
      \ the target drops to 0 hit points, Gremorly ends it as a bonus action, or Gremorly\
      \ is turned or forced out by an effect like the Dispel Evil and Good spell.\
      \ When the possession ends, Gremorly reappears in an unoccupied space within\
      \ 5 feet of the target. The target is immune to this Possession for 24 hours\
      \ after succeeding on the saving throw or after the possession ends."
    "name": "Possession (Recharge 6)"
  - "desc": "Gremorly casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (spell save DC 16):\n\n**At will:** Dancing Lights, Mage\
      \ Hand, Prestidigitation\n\n**2/day each:** Bestow Curse, Dispel Magic\n\n**1/day:**\
      \ Slow"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Gremorly teleports up to 30 feet to an unoccupied space he can see."
    "name": "Ethereal Step (Recharge 4-6)"
"source":
  - "BMT"
"image": "CLI/bestiary/undead/token/gremorlys-ghost-bmt.webp"
```
^statblock