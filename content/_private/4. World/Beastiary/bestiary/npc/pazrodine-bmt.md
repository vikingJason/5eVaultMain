---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/moonstone
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Pazrodine"
---
# [Pazrodine](CLI/bestiary/npc/pazrodine-bmt.md)
*Source: The Book of Many Things p. 113*  

Pazrodine, a moonstone dragon with a peaceful demeanor, oversees Seelie Market. A consummate traveler, she is always searching for fey crossings, which she uses to travel between the Feywild and the Material Plane. Moonstone dragons are detailed further in Fizban's Treasury of Dragons.

Pazrodine never stays in one place for long, and she wants to see all the wonders the Feywild and Material Plane have to offer. Curious Fey asked to join her caravan, and before long, she had a menagerie of merchants accompanying her on her travels. Pazrodine came to view these Fey merchants as her children. Their eager joy helps the dragon see the multiverse from new perspectives.

When Seelie Market lands, its vendors gather rocks, leaves, and sticks to make an enormous nest for Pazrodine. She rests here while the market operates.

Pazrodine senses when theft occurs in Seelie Market. She makes her way to the perpetrators and neutralizes the situation nonviolently, usually by using her Dream Breath. Once troublemakers come to, Pazrodine politely but firmly asks them to leave the market. Those who object are flown out in her clutches.

If anyone comes to visit Pazrodine at her refuge, she greets them and happily answers their questions about the market. The dragon has a soothing voice and demeanor.

```statblock
"name": "Pazrodine (BMT)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "moonstone"
"alignment": "Lawful Neutral"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "330"
"hit_dice": "20d20 + 120"
"modifier": !!int "4"
"stats":
  - !!int "22"
  - !!int "18"
  - !!int "23"
  - !!int "20"
  - !!int "22"
  - !!int "26"
"speed": "40 ft., fly 80 ft."
"saves":
  - "intelligence": !!int "12"
  - "wisdom": !!int "13"
  - "charisma": !!int "15"
"skillsaves":
  - "name": "Perception"
    "desc": "+13"
  - "name": "Persuasion"
    "desc": "+15"
  - "name": "Stealth"
    "desc": "+11"
"condition_immunities": "charmed"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "Pazrodine can sense when an item is stolen from Seelie Market. She knows\
      \ the distance and direction to stolen items, as if by the Locate Object spell."
    "name": "Guardian of the Market"
  - "desc": "If Pazrodine fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "Pazrodine makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +13 to hit, reach 15 ft., one target. *Hit:*\
      \ 17 (2d10 + 6) piercing damage plus 11 (2d10) radiant damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +13 to hit, reach 10 ft., one target. *Hit:*\
      \ 13 (2d6 + 6) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +13 to hit, reach 20 ft., one target. *Hit:*\
      \ 10 (1d8 + 6) bludgeoning damage. If the target is a creature, it must succeed\
      \ on a DC 21 Strength saving throw or have the prone condition."
    "name": "Tail"
  - "desc": "Pazrodine uses one of the following breath weapons:\n\n- **Dream Breath.**\
      \ Pazrodine exhales mist in a 90-foot cone. Each creature in that area must\
      \ succeed on a DC 21 Constitution saving throw or have the unconscious condition\
      \ for 10 minutes. This effect ends for a creature if the creature takes damage\
      \ or someone uses an action to wake it.  \n- **Moonlight Breath.** Pazrodine\
      \ exhales a beam of moonlight in a 120-foot line that is 10 feet wide. Each\
      \ creature in that area must make a DC 21 Dexterity saving throw, taking 60\
      \ (11d10) radiant damage on a failed save, or half as much damage on a successful\
      \ one.  "
    "name": "Breath Weapon (Recharge 5-6)"
  - "desc": "Pazrodine casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23):\n\n**At\
      \ will:** Faerie Fire\n\n**2/day each:** Calm Emotions, Dispel Magic, Invisibility\n\
      \n**1/day each:** Mass Cure Wounds, Revivify"
    "name": "Spellcasting"
"lair_actions":
  - "desc": "The entire Seelie Market is Pazrodine's lair. Pazrodine's challenge rating\
      \ is 22 (41,000 XP) when she's encountered in Seelie Market.\n\nOn initiative\
      \ count 20 (losing initiative ties) while in her lair, Pazrodine can take one\
      \ of the following lair actions; she can't take the same lair action two rounds\
      \ in a row:\n\n- **Banish into Dream.** Pazrodine targets a creature she can\
      \ see within 120 feet of herself and attempts to send that creature to a dream\
      \ plane. The target must succeed on a DC 15 Charisma saving throw or be banished\
      \ to a harmless demiplane until initiative count 20 on the next round. While\
      \ there, the target has the stunned condition. When the effect ends, the target\
      \ reappears in the space it left or in the nearest unoccupied space.  \n- **Overwhelm\
      \ the Senses.** Pazrodine targets up to three creatures she can see within 30\
      \ feet of herself. The sounds, sights, and scents of the market intensify for\
      \ these creatures, overwhelming them with bright colors, echoey chatters, and\
      \ sweet smells. Each target must succeed on a DC 15 Wisdom saving throw or have\
      \ the incapacitated condition until the end of its next turn.  \n- **Whirlwind\
      \ of Fruit.** Fey fruit flies out from nearby carts, creating a whirlwind of\
      \ fruit in a 10-foot-radius, 30-foot-high cylinder centered on a point within\
      \ 60 feet of Pazrodine until initiative count 20 on the next round. When a creature\
      \ enters the whirlwind's area for the first time on its turn or starts its turn\
      \ there, it must make a DC 15 Dexterity saving throw, taking 11 (2d10) bludgeoning\
      \ damage on a failed save, or half as much damage on a successful one.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Pazrodine can expend a use to take one of the following actions. Pazrodine\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Pazrodine makes one Tail attack."
    "name": "Tail"
  - "desc": "Pazrodine uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/npc/token/pazrodine-bmt.webp"
```
^statblock