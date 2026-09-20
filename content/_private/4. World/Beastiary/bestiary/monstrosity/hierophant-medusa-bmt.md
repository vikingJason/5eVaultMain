---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Hierophant Medusa"
---
# [Hierophant Medusa](content/_private/4.%20World/Beastiary/bestiary/monstrosity/hierophant-medusa-bmt.md)
*Source: The Book of Many Things p. 179*  

Sometimes deeply devout people, usually either Humanoids or medusas, dedicate themselves to a cause and are transformed by a deity or magic into hierophant medusas—beings with powerful snakelike tails for their lower body, snakes for hair, and a petrifying gaze. The first hierophant medusa was transformed by the power of the Euryale card when that individual was inspired by Euryale's story and unwavering conviction.

These medusas are divinely empowered champions, drawing their power from a cosmic truth, the will of a deity, or the primal forces of nature. They gather and inspire followers, protecting their people and guiding them to fulfill the medusa's divine purpose. The Divine Purpose table offers suggestions for motivations. Roll on the table, or use the entries as inspiration to create your own.

| dice: d6 | Purpose |
|----------|---------|
| 1 | Protect a sanctuary that hides martyrs' remains until the martyrs are called back to life to oppose a world-changing foe. |
| 2 | Gather the lost shards of a dead god's petrified body, and reunite them on the altar in the medusa's lair. |
| 3 | Maintain a planar crossing from which great power flows while also curtailing the effects of that power as it infuses the world. |
| 4 | Seek out a new generation of champions, and train them to fight in a war. |
| 5 | Tend a sacred beacon fed by the Outer Planes, sending embers of that beacon to the corners of the world to maintain a divine shroud. |
| 6 | Watch the entrance to a slumbering titan's tomb for any sign the titan might awaken, and repel the forces that seek to break the tomb's seal. |
^purpose

## A Medusa's Lair

A medusa's lair is often decorated with the petrified bodies of creatures that raised arms against the medusa or its followers. The lair is typically a rich repository of knowledge, with lore both worldly and esoteric filling books, scrolls, tablets, or stranger archives—such as magical crystals that hold captured memories or the voices of those long dead. You can use this lair and the lair actions described for any medusa, including the hierophant medusa or the medusa in the Monster Manual.

```statblock
"name": "Hierophant Medusa (BMT)"
"size": "Large"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "237"
"hit_dice": "25d10 + 100"
"modifier": !!int "5"
"stats":
  - !!int "22"
  - !!int "20"
  - !!int "18"
  - !!int "15"
  - !!int "23"
  - !!int "22"
"speed": "40 ft., climb 40 ft., swim 40 ft."
"saves":
  - "constitution": !!int "10"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "Insight"
    "desc": "+12"
  - "name": "Perception"
    "desc": "+12"
  - "name": "Persuasion"
    "desc": "+12"
  - "name": "Religion"
    "desc": "+8"
  - "name": "Stealth"
    "desc": "+11"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, petrified, poisoned"
"senses": "passive Perception 22"
"languages": "Common plus any three languages (Abyssal, Celestial, Druidic, or Infernal\
  \ recommended)"
"cr": "17"
"traits":
  - "desc": "The medusa can cast the Resurrection spell, requiring no material components\
      \ and using Wisdom as the spellcasting ability."
    "name": "Devotion's Call (1/Day)"
  - "desc": "If the medusa fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day)"
"actions":
  - "desc": "The medusa makes one Constrict attack, one Final Blade attack, and one\
      \ Snake Hair attack. Alternatively, it makes two Wrathful Strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 10 ft., one target. *Hit:*\
      \ 16 (3d6 + 6) bludgeoning damage, and if the target is a Medium or smaller\
      \ creature, it has the grappled condition (escape DC 20). Until this grapple\
      \ ends, the target has the restrained condition, and the medusa can't constrict\
      \ another creature."
    "name": "Constrict"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 5 ft., one target. *Hit:*\
      \ 13 (2d6 + 6) slashing damage plus 21 (6d6) force damage. If the target\
      \ has at least one head and the medusa rolled a 20 on the attack roll, the target\
      \ is decapitated and dies if it fails a DC 20 Constitution saving throw and\
      \ can't survive without that head. A target is immune to this effect if it takes\
      \ none of the damage, has legendary actions, or is Huge or larger. Such a creature\
      \ takes an extra 28 (8d6) force damage from the hit."
    "name": "Final Blade"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 5 ft., one target. *Hit:*\
      \ 11 (1d10 + 6) piercing damage plus 5 (1d10) poison damage."
    "name": "Snake Hair"
  - "desc": "*Ranged Spell Attack:* +12 to hit, range 120 ft., one creature. *Hit:*\
      \ 22 (3d10 + 6) radiant damage, and the target has the blinded condition until\
      \ the end of its next turn."
    "name": "Wrathful Strike"
  - "desc": "The medusa casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 20):\n\n**At will:**\
      \ Light, Spare the Dying, Thaumaturgy\n\n**2/day:** Mass Cure Wounds (cast at\
      \ 8th level)\n\n**1/day each:** Blade Barrier, Divination, Greater Restoration"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The medusa unleashes petrifying magic from its eyes in a 30-foot cone.\
      \ Each creature in that area must make a DC 18 Constitution saving throw if\
      \ it doesn't have the blinded condition. If the saving throw fails by 5 or more,\
      \ the creature has the petrified condition. Otherwise, on a failed save, the\
      \ creature takes 10 (3d6) force damage, begins to turn to stone, and has the\
      \ restrained condition. The restrained creature must repeat the saving throw\
      \ at the end of its next turn. On a failed save, it has the petrified condition,\
      \ and on a successful save, the effect ends on it. The petrification lasts until\
      \ the creature is freed by the Greater Restoration spell or other magic.\n\n\
      A creature can use its reaction, if available, to shut its eyes to avoid the\
      \ saving throw. If the creature does so, it has the blinded condition until\
      \ the end of its next turn."
    "name": "Petrifying Gaze (Recharge 4-6)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the medusa can take\
      \ one of the following lair actions; the medusa can't take the same lair action\
      \ two rounds in a row:\n\n- **Petrifying Wave.** Up to three creatures the medusa\
      \ can see within the lair are partially turned to stone. Each target must make\
      \ a DC 15 Constitution saving throw. On a failed save, a target's speed is reduced\
      \ to 0 and can't increase. On a successful save, its speed is halved. The target's\
      \ speed returns to normal on initiative count 20 on the following round.  \n\
      - **Sudden Stonework.** The medusa creates a wall of stone on a solid surface\
      \ it can see within the lair. The wall can be up to 60 feet long, 20 feet high,\
      \ and 1 foot thick. Each 5-foot section of the wall has an AC of 17; 30 hit\
      \ points; vulnerability to thunder damage; and immunity to poison, psychic,\
      \ and slashing damage. A creature in the wall's space when the wall appears\
      \ is pushed to the nearest unoccupied space on one side of the wall and must\
      \ make a DC 15 Dexterity saving throw. On a failed save, the medusa chooses\
      \ the side. On a successful save, the creature chooses the side. The wall disappears\
      \ when the medusa uses this lair action again or when the medusa dies.  \n-\
      \ **Undulating Surface.** Solid surfaces within the lair ripple like a snake's\
      \ coils. Up to three creatures the medusa can see within the lair can move up\
      \ to 30 feet along solid surfaces without provoking opportunity attacks. If\
      \ a creature moves along a surface such as a ceiling with no way to remain there\
      \ (for example, sufficient handholds), it falls at the end of this movement.\
      \  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a medusa's lair is altered by the medusa's presence,\
      \ creating one or more of the following effects:\n\n- **Faces in Stone.** Stone\
      \ within 3 miles of the lair takes on subtle shapes that suggest people, animals,\
      \ and other creatures when viewed from the corner of the eye or through dim\
      \ light or fog.  \n- **Gathered Knowledge.** Within the lair, creatures have\
      \ advantage on ability checks made to discover or recall information relevant\
      \ to the medusa's divine purpose.  \n\nIf the medusa dies, these effects fade\
      \ over the course of 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the hierophant medusa can expend a use to take one of the following actions.\
  \ The hierophant medusa regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The medusa moves up to its speed without provoking opportunity attacks."
    "name": "Move"
  - "desc": "The medusa makes one Wrathful Strike attack."
    "name": "Wrathful Blast (Costs 2 Actions)"
  - "desc": "The medusa makes one Final Blade attack with advantage."
    "name": "Final Slash (Costs 3 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/monstrosity/token/hierophant-medusa-bmt.webp"
```
^statblock