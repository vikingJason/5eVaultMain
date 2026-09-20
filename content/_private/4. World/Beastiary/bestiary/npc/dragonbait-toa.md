---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/saurial
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Dragonbait"
---
# [Dragonbait](CLI/bestiary/npc/dragonbait-toa.md)
*Source: Tomb of Annihilation p. 218*  

Dragonbait is a champion of good and a saurial-a race that originated on a distant world and whose members have long lives. Very few saurials dwell in the Forgotten Realms, and no saurial communities are believed to exist anywhere in the world.

The saurial's language is a combination of clicks and whistles beyond the human range of hearing, so Dragonbait tends to rely on scents to communicate emotions. To be understood by most speaking creatures, he must "shout" a scent. Dragonbait's known scents include: brimstone (confusion), roses (sadness), lemon (pleasure or joy), baked bread (anger), violets (danger or fear), honeysuckle (tenderness or concern), wood smoke (devotion or piety), tar (victory or celebration), and ham (nervousness or worry).

Dragonbait stands 4 feet 10 inches tall, weighs 150 pounds, and has a dry, wrinkled hide. He wields a holy avenger longsword and carries a blue, red, and white shield. Though he has traits in common with paladins, Dragonbait isn't a member of any class. Using an ability known as the Shen-state, he can determine the alignment of any creature within 60 feet of him.

## An Unexpected Friendship

Dragonbait met Artus Cimber in Port Nyanzaru, and the two became fast friends. As Artus spoke of his quest to reunite with his wife, Alisanda, he was comforted by Dragonbait's quiet manner and unusual methods of communication. With a smile and a nod, Dragonbait agreed to help Artus. A frequent visitor to Chult, the saurial understood the dangers of the jungle all too well.

## Using Dragonbait

Dragonbait has never been to Omu and doesn't know where the city is located. If the characters convince Artus Cimber to help them destroy the Soulmonger, Dragonbait wants to help as well.

## Dragonbait's Traits

### Ideal

Dragonbait emits a lemon scent while thinking about exploring the world, seeing its many wonders, and helping others along the way. (Translation: He has the heart of an explorer.)

### Bond

Dragonbait gives off the scent of wood smoke while doing things to aid a friend's quest. (Translation: He would do anything for a friend.)

### Flaw

Dragonbait "shouts" the scent of ham while going where others fear to tread. (Translation: He will hurl himself into danger no matter how frightening.)

```statblock
"name": "Dragonbait (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "saurial"
"alignment": "Lawful Good"
"ac": !!int "17"
"ac_class": "breastplate, shield"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "Athletics"
    "desc": "+5"
  - "name": "Medicine"
    "desc": "+6"
"condition_immunities": "disease"
"senses": "passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "5"
"traits":
  - "desc": "Dragonbait is immune to disease."
    "name": "Divine Health"
  - "desc": "While holding his holy avenger longsword, Dragonbait creates an aura\
      \ in a 10-foot radius around him. While this aura is active, Dragonbait and\
      \ all creatures friendly to him in the aura have advantage on saving throws\
      \ against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Dragonbait makes two melee weapon attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage when used\
      \ with two hands. If the target is a fiend or an undead it takes an extra 11\
      \ (2d10) radiant damage."
    "name": "Holy Avenger (+3 Longsword)"
  - "desc": "Dragonbait chooses one creature he can see within 60 feet of him and\
      \ determines its alignment, as long as the creature isn't hidden from divination\
      \ magic by a spell or other magical effect."
    "name": "Sense Alignment"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/dragonbait-toa.webp"
```
^statblock