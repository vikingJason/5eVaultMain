---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Mwaxanaré"
---
# [Mwaxanaré](CLI/bestiary/npc/mwaxanare-toa.md)
*Source: Tomb of Annihilation p. 228*  

At the tender age of seventeen, Princess Mwaxanaré ("Naré" for short) is the oldest living descendant of the royal families of Omu and the natural inheritor of their fallen kingdom. She and her six-year-old brother, Na, are guests of the aarakocra in Kir Sabal. The aarakocra aim to protect the young royals until such time as the evil in Omu has been vanquished.

Mwaxanaré is too headstrong for her own good. She longs to claim her throne and will eagerly use adventurers to make that happen. Her tone is almost always condescending, and she doesn't take kindly to backtalk.

After forging a pact with the Wind Dukes of Aaqa, ancient beings of the Outer Planes, the princess has become a fledgling warlock. Her hatred of physical labor allows her to put her mage hand and unseen servant spells to good use. Through her pact, she has also gained telepathy.

The young Prince Na is a noncombatant with AC 10 and 3 hit points. Having lived among the aarakocra for most of his life, Na considers himself one of them. He dresses like an aarakocra and prefers to speak Auran rather than Common.

## Mwaxanaré's Traits

### Ideal

"One day, I shall rule Chult as queen."

### Bond

"I have forged a pact with the Wind Dukes of Aaqa and will use their power to protect my brother and the aarakocra who watch over us."

### Flaw

"I am a princess and must be addressed with the proper respect. I don't follow orders; I give them."

## Na's Traits

### Ideal

"I want to become an aarakocra and learn how to fly like a bird!"

### Bond

"I love my sister and the aarakocra. They mean everything to me."

### Flaw

"I know nothing of the world."

```statblock
"name": "Mwaxanaré (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "10"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "0"
"stats":
  - !!int "6"
  - !!int "10"
  - !!int "11"
  - !!int "13"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "Deception"
    "desc": "+5"
  - "name": "Nature"
    "desc": "+3"
  - "name": "Persuasion"
    "desc": "+5"
  - "name": "Religion"
    "desc": "+3"
"gear":
  - "dagger"
"senses": "passive Perception 11"
"languages": "Auran, Common, telepathy 30 ft."
"cr": "1/8"
"traits":
  - "desc": "Mwaxanaré is a 2nd-level spellcaster. Her spellcasting ability is Charisma\
      \ (spell save DC 13, +5 to hit with spell attacks). She regains her expended\
      \ spell slots when she finishes a short or long rest. She knows the following\
      \ warlock spells:\n\n**Cantrips (at will):** eldritch blast, mage hand\n\n**1st-1st\
      \ level (2 slots):** charm person, protection from evil and good, unseen servant"
    "name": "Spellcasting"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +2 to hit. reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 2 (1d4) piercing damage."
    "name": "Dagger"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/mwaxanare-toa.webp"
```
^statblock