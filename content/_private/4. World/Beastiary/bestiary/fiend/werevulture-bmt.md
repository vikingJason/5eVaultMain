---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Werevulture"
---
# [Werevulture](werevulture-bmt.md)
*Source: The Book of Many Things p. 184*  

Scholars believe the curse of the werevulture is related to vrocks, vulturelike demons known for their covetousness and their capricious violence. According to these scholars, a flock of vrocks descended on a Material Plane world through a planar rupture, leaving plagues and other afflictions in their wake. Many of those who were injured by the demons survived, and the survivors gratefully thanked their gods for their apparent good fortune. But during the next full moon, they transformed into the first werevultures: hideous, birdlike creatures who hungered for the flesh of the dead. In the years since, the curse has spread far and wide.

Werevultures appear perfectly ordinary when in humanoid shape. But by the light of the full moon—or at other times when they give in to the curse—they change. Foul wings burst painfully from their backs, and the hair falls from their heads, leaving their beaked faces bare and wrinkled. Werevultures feed on carrion, as ordinary vultures do, and they have a covetous nature, like vrocks. They follow travelers from high in the air, and when a pretty bauble catches their eye, they descend rapidly to slay the travelers and take their victims' treasures.

```statblock
"name": "Werevulture (BMT)"
"size": "Medium"
"type": "fiend"
"alignment": "typically  Chaotic Evil"
"ac": !!int "12"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "17"
  - !!int "11"
  - !!int "13"
  - !!int "8"
"speed": "30 ft., 10 ft. in vulture form, 30 ft. in hybrid form"
"skillsaves":
  - "name": "Perception"
    "desc": "+5"
"gear":
  - "longbow"
"senses": "passive Perception 15"
"languages": "Common (can't speak in vulture form)"
"cr": "4"
"traits":
  - "desc": "The werevulture regains 10 hit points at the start of its turn. If the\
      \ werevulture takes radiant damage, this trait doesn't function at the start\
      \ of the werevulture's next turn. The werevulture dies only if it starts its\
      \ turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The werevulture makes two Talon attacks, or it makes a Beak attack and\
      \ a Talon attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) piercing damage. If the target is a Humanoid, it must succeed\
      \ on a DC 13 Constitution saving throw or be cursed until targeted by the Remove\
      \ Curse spell or a similar effect. If the cursed target drops to 0 hit points,\
      \ it becomes a werevulture under the DM's control and regains 10 hit points."
    "name": "Beak (Vulture or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (4d4 + 3) slashing damage."
    "name": "Talon"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 150/600 ft., one target. *Hit:*\
      \ 11 (2d8 + 2) piercing damage."
    "name": "Longbow (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The werevulture polymorphs into a vulture-humanoid hybrid, into a vulture,\
      \ or back into its humanoid form. Its game statistics, other than its speed,\
      \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
      \ It reverts to its humanoid form if it dies."
    "name": "Change Shape"
"source":
  - "BMT"
"image": "CLI/bestiary/fiend/token/werevulture-bmt.webp"
```
^statblock