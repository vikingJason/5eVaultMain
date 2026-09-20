---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Deck Defender"
---
# [Deck Defender](deck-defender-bmt.md)
*Source: The Book of Many Things p. 72*  

```statblock
"name": "Deck Defender (BMT)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, poisoned"
"senses": "blindsight 60 ft. (can't see beyond this radius), passive Perception 10"
"languages": "understands one of your languages but can't speak"
"traits":
  - "desc": "Some of the deck defender's statistics are based on the character who\
      \ drew the Knight card. Where the deck defender stat block refers to \"you,\"\
      \ it refers to that character."
    "name": "Allied Knight"
  - "desc": "After finishing a long rest, you can refold the deck defender's shape,\
      \ changing it to acrobat form, berserker form, or guardian form."
    "name": "Folded Versatility"
  - "desc": "If the deck defender is reduced to 0 hit points, it collapses into a\
      \ haphazard pile of nonmagical playing cards and can't be resurrected or reconstructed."
    "name": "Fragile"
"actions":
  - "desc": "The deck defender makes a number of attacks equal to half its proficiency\
      \ bonus (rounded down)."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* PB + +3 to hit, reach 5 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) slashing damage."
    "name": "Paper Cut"
  - "desc": "*Melee Weapon Attack:* PB + +3 to hit (with advantage), reach 5 ft.,\
      \ one target. *Hit:* 10 (2d6 + 3) slashing damage, and attacks made against\
      \ the deck defender until the start of its next turn have advantage."
    "name": "Reckless Strike (Berserker Form Only)"
"bonus_actions":
  - "desc": "The deck defender takes the Dash or Disengage action."
    "name": "Swift Step (Acrobat Form Only)"
"reactions":
  - "desc": "When a creature the deck defender can see attacks a target other than\
      \ the deck defender and is within 5 feet of the deck defender, the deck defender\
      \ imposes disadvantage on the attack roll."
    "name": "Protection (Guardian Form Only)"
"source":
  - "BMT"
"image": "CLI/bestiary/construct/token/deck-defender-bmt.webp"
```
^statblock