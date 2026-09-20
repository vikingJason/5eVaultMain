---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Boss Augustus"
---
# [Boss Augustus](boss-augustus-bmt.md)
*Source: The Book of Many Things p. 82*  

Augustus is a hulking human werewolf of few words. He shares leadership of the guild with Boss Delour and has a knack for planning heists. Guild members consider him a brutal but fair leader. Some perceptive guild members—like Kathra Bitterwind—have noticed he's become more reclusive recently, and when he does appear, he's restless.

Augustus is a natural-born lycanthrope, born to werewolf parents. His parents were slain by monster hunters when he was young, and he traveled from town to town for most of his life, fleeing whenever townsfolk discovered his true nature.

Delour and Pyrite accepted Augustus in a way he'd never experienced before. When the three of them created the Moonstalkers guild, Augustus relished his new life of crime. But over time, his passion has faded. The riches they gathered mean nothing to him now. The violence grates on him, and he no longer empathizes with Delour's fantasies of revenge. Instead, Augustus secretly longs to end his curse and integrate into society.

Only a Wish spell can end Augustus's curse. He has ordered Wanewort, a night hag, to find anyone with access to that spell and plans to offer anything in his power in exchange for undoing his curse. And if bargaining doesn't work, there's always blackmail. (See the " Using the Moonstalkers in Your Campaign " section in chapter 11 for more details.)

```statblock
"name": "Boss Augustus (BMT)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "16"
  - !!int "17"
  - !!int "14"
  - !!int "15"
  - !!int "12"
"speed": "40 ft. in wolf or hybrid form"
"saves":
  - "strength": !!int "8"
  - "dexterity": !!int "7"
"skillsaves":
  - "name": "Perception"
    "desc": "+10"
  - "name": "Sleight of Hand"
    "desc": "+7"
  - "name": "Stealth"
    "desc": "+7"
"senses": "passive Perception 20"
"languages": "Common, Thieves' cant (can't speak in wolf form)"
"cr": "9"
"traits":
  - "desc": "Augustus regains 10 hit points at the start of his turn. If he takes\
      \ damage from a silver weapon, this trait doesn't function at the start of his\
      \ next turn. Augustus dies only if he starts his turn with 0 hit points and\
      \ doesn't regenerate."
    "name": "Regeneration"
  - "desc": "Augustus wields a +2 Longsword."
    "name": "Special Equipment"
"actions":
  - "desc": "Augustus makes any combination of two Bite, Claw, or Magic Longsword\
      \ attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 26\
      \ (5d8 + 4) piercing damage. If the target is a Humanoid, it must succeed\
      \ on a DC 15 Constitution saving throw or be cursed with lycanthropy. While\
      \ cursed in this way, the target retains its alignment, languages, and equipment\
      \ but otherwise uses the werewolf stat block, excluding actions that require\
      \ equipment the target doesn't have. During any night when there's a full moon\
      \ in the sky, the target becomes an NPC under the DM's control and remains so\
      \ until the night ends. A Remove Curse spell or similar magic ends this curse."
    "name": "Bite (Wolf or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 21\
      \ (5d6 + 4) piercing damage. If the target is a creature, it must succeed\
      \ on a DC 16 Strength saving throw or have the prone condition."
    "name": "Claw (Wolf or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 28 (4d10 + 6) slashing damage."
    "name": "Magic Longsword (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "Augustus polymorphs into a wolf-humanoid hybrid, a wolf, or his humanoid\
      \ form. His statistics, other than his speed, are the same in each form. Any\
      \ equipment he is wearing or carrying isn't transformed. He reverts to his humanoid\
      \ form if he dies."
    "name": "Change Shape"
  - "desc": "Augustus takes the Dash, Disengage, or Hide action."
    "name": "Cunning Action"
"source":
  - "BMT"
"image": "CLI/bestiary/monstrosity/token/boss-augustus-bmt.webp"
```
^statblock