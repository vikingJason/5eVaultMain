---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Harrow Hound"
---
# [Harrow Hound](CLI/bestiary/undead/harrow-hound-bmt.md)
*Source: The Book of Many Things p. 164*  

When the Grim Harrow first found the faerie realm known as the Gardens of Delight, that place was home to a large population of blink dogs. The Undead invaders slaughtered the blink dogs and settled in the gardens, transforming the demiplane forever. In time, the necrotic magic of the Grim Harrow animated the corpses of the blink dogs as the first harrow hounds.

The Grim Harrow employs harrow hounds as trackers and companions. Harrow hounds are especially useful when investigating possible sightings of a Deck of Many Things. If a harrow hound catches the scent of its prey, it never loses it, even if the hound and its fellow hunters return to the Gardens of Decay with the hunt incomplete. Powerful Undead, such as vampires and death knights, might be accompanied by packs of harrow hounds.

```statblock
"name": "Harrow Hound (BMT)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "19"
  - !!int "16"
  - !!int "8"
  - !!int "15"
  - !!int "13"
"speed": "40 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+6"
  - "name": "Stealth"
    "desc": "+6"
"damage_resistances": "necrotic; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, poisoned"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Blink Dog, understands Sylvan but can't speak it"
"cr": "3"
"traits":
  - "desc": "The hound has advantage on attack rolls against a creature if at least\
      \ one of the hound's allies is within 5 feet of the target and the ally doesn't\
      \ have the incapacitated condition."
    "name": "Pack Tactics"
  - "desc": "The hound knows the distance to and direction of any creature that has\
      \ come within 30 feet of it, even if that creature is on a different plane of\
      \ existence. If the creature being tracked by the hound dies, the hound knows."
    "name": "Supernatural Tracker"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) piercing damage plus 3 (1d6) necrotic damage. If the target\
      \ is a creature, it must succeed on a DC 13 Strength saving throw or have the\
      \ prone condition."
    "name": "Bite"
"bonus_actions":
  - "desc": "The hound magically teleports, along with any equipment it is wearing\
      \ or carrying, up to 40 feet to an unoccupied space it can see."
    "name": "Shadow Step (Recharge 4-6)"
"source":
  - "BMT"
"image": "CLI/bestiary/undead/token/harrow-hound-bmt.webp"
```
^statblock