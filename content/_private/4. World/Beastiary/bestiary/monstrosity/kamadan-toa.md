---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Kamadan"
---
# [Kamadan](kamadan-toa.md)
*Source: Tomb of Annihilation p. 225*  

A kamadan (pronounced KAM-ah-dan) is a feline predator that resembles a leopard with six snakes sprouting from its shoulders. Although it bears a passing resemblance to a displacer beast, the two creatures are unrelated (though some sages claim otherwise).

Kamadans typically hunt alone or in mated pairs. They can exhale clouds of sleep gas, which they typically do before entering melee combat. If a kamadan has both conscious and unconscious enemies within striking range, it tries to kill the conscious enemies first before finishing off any sleeping foes.

```statblock
"name": "Kamadan (ToA)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "3"
  - !!int "14"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+4"
  - "name": "Stealth"
    "desc": "+7"
"senses": "passive Perception 14"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The kamadan has advantage on Wisdom (Perception) checks that rely on\
      \ smell."
    "name": "Keen Smell"
  - "desc": "If the kamadan moves at least 20 feet straight toward a creature and\
      \ then hits it with a claw attack on the same turn that target must succeed\
      \ on a DC 13 Strength saving throw or be knocked prone. If the target is knocked\
      \ prone, the kamadan can make two attacks—one with its bite and one with its\
      \ snakes—against it as a bonus action."
    "name": "Pounce"
"actions":
  - "desc": "The kamadan makes two attacks: one with its bite or claw and one with\
      \ its snakes."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) piercing damage, and the target must make a DC 12 Constitution\
      \ saving throw, taking 21 (6d6) poison damage on a failed save, or half as\
      \ much damage on a successful one."
    "name": "Snakes"
  - "desc": "The kamadan exhales sleep gas in a 30-foot cone. Each creature in that\
      \ area must succeed on a DC 12 Constitution saving throw or fall unconscious\
      \ for 10 minutes. This effect ends for a creature if it takes damage or someone\
      \ uses an action to wake it."
    "name": "Sleep Breath (Recharges after a Short or Long Rest)"
"source":
  - "ToA"
"image": "CLI/bestiary/monstrosity/token/kamadan-toa.webp"
```
^statblock