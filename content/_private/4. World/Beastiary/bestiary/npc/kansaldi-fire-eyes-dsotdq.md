---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/dsotdq
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cleric
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Kansaldi Fire-Eyes"
---
# [Kansaldi Fire-Eyes](CLI/bestiary/npc/kansaldi-fire-eyes-dsotdq.md)
*Source: Dragonlance: Shadow of the Dragon Queen p. 203*  

High Master Kansaldi Fire-Eyes leads the Red Dragon Army's offensive in Solamnia. A fanatical adherent of the Dragon Queen, Kansaldi was indoctrinated into the god's worship by Dragon High Lord Verminaard. During a test of faith from her mentor, Kansaldi replaced her left eye with a gem of seeing. This gem smolders and glows red whenever Kansaldi uses her magic, and her followers claim it allows her to see through any lie.

Highlord Verminaard follows visions from the Dragon Queen on a campaign south. In his absence, he left a powerful contingent of the Red Dragon Army under Kansaldi's command and ordered her to claim the Kalaman region in the Dragon Queen's name. Kansaldi pursues these orders with a fanatic's zeal. For her, there is no possibility of defeat—there is only the Dragon Queen's will.

```statblock
"name": "Kansaldi Fire-Eyes (DSotDQ)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, human"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "plate"
"hp": !!int "172"
"hit_dice": "23d8 + 69"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "17"
  - !!int "16"
  - !!int "19"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "8"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "Insight"
    "desc": "+12"
  - "name": "Perception"
    "desc": "+8"
  - "name": "Religion"
    "desc": "+7"
"damage_immunities": "fire"
"gear":
  - "pike"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Abyssal, Common, Draconic"
"cr": "11"
"traits":
  - "desc": "Kansaldi has a glowing ruby embedded in her left eye socket. The gem\
      \ functions as her eye and grants her truesight (included above). The gem can't\
      \ be removed while Kansaldi is alive. When she dies, a creature can remove the\
      \ gem as an action. The gem then functions as a gem of seeing."
    "name": "Special Equipment"
"actions":
  - "desc": "Kansaldi makes two Pike attacks and uses Flame Burst."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:*\
      \ 9 (1d10 + 4) piercing damage plus 16 (3d10) radiant damage."
    "name": "Pike"
  - "desc": "Kansaldi hurls magical flames at a creature she can see within 60 feet\
      \ of herself. The target must make a DC 16 Dexterity saving throw. On a failed\
      \ save, the target takes 11 (2d10) fire damage and catches fire; until a creature\
      \ takes an action to put out the fire, the target takes 5 (1d10) fire damage\
      \ at the start of each of its turns. On a successful save, the target takes\
      \ half as much damage and doesn't catch fire."
    "name": "Flame Burst"
  - "desc": "Kansaldi casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\n**At will:**\
      \ light, spare the dying, thaumaturgy\n\n**1/day each:** blade barrier, dispel\
      \ magic, flame strike, lesser restoration, revivify"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Kansaldi or one creature she can see within 60 feet of herself magically\
      \ regains 17 (2d12 + 4) hit points."
    "name": "Dragon Queen's Favor"
"source":
  - "DSotDQ"
"image": "CLI/bestiary/npc/token/kansaldi-fire-eyes-dsotdq.webp"
```
^statblock