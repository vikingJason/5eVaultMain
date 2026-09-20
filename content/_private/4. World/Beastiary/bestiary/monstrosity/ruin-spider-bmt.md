---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ruin Spider"
---
# [Ruin Spider](ruin-spider-bmt.md)
*Source: The Book of Many Things p. 182*  

The potent magic of a Deck of Many Things can have unpredictable effects on its environment, especially when the deck remains in one place for a long time.

Ruin spiders arise when the magic of the deck transforms giant spiders into even more dangerous monsters whose acidic venom disintegrates everything it touches. A ruin spider is easily recognizable by anyone familiar with the Deck of Many Things because the pattern on the back of the cards is duplicated on the spider's carapace.

```statblock
"name": "Ruin Spider (BMT)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "14d10 + 28"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "18"
  - !!int "14"
  - !!int "2"
  - !!int "13"
  - !!int "4"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  - "name": "Stealth"
    "desc": "+10"
"damage_immunities": "acid"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "5"
"traits":
  - "desc": "Any nonmagical weapon that hits the spider corrodes. After dealing damage,\
      \ the weapon takes a permanent and cumulative -1 penalty to damage rolls. If\
      \ its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made\
      \ of metal that hits the spider is destroyed after dealing damage."
    "name": "Ruinous Acid"
  - "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in contact with a web, the spider knows the exact location of any\
      \ other creature in contact with the same web."
    "name": "Web Sense"
  - "desc": "The spider ignores movement restrictions caused by webbing."
    "name": "Web Walker"
"actions":
  - "desc": "The spider makes two Ruinous Bite attacks. It can replace one attack\
      \ with a use of Web."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) piercing damage and 9 (2d8) acid damage. In addition, if the\
      \ target is a creature wearing nonmagical armor, the armor takes a permanent\
      \ and cumulative -1 penalty to the AC it offers. Armor reduced to an Armor Class\
      \ of 10 is destroyed."
    "name": "Ruinous Bite"
  - "desc": "*Ranged Weapon Attack:* +7 to hit, range 30/60 ft., one creature. *Hit:*\
      \ The target has the restrained condition. As an action, a restrained target\
      \ can make a DC 13 Strength check, bursting the webbing on a successful check.\
      \ The webbing can also be destroyed (AC 10; 5 hit points; vulnerability to fire\
      \ damage; immunity to acid, bludgeoning, poison, and psychic damage)."
    "name": "Web (Recharge 5-6)"
"source":
  - "BMT"
"image": "CLI/bestiary/monstrosity/token/ruin-spider-bmt.webp"
```
^statblock