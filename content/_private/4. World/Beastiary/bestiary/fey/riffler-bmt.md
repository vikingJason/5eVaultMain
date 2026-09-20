---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Riffler"
---
# [Riffler](riffler-bmt.md)
*Source: The Book of Many Things p. 181*  

Rifflers are diminutive Fey reminiscent of gnomes and obsessed with destiny and fate. The oldest stories of rifflers suggest these dangerously curious spirits manifested as physical beings when the Deck of Many Things was shuffled for the first time. The rifflers were so enraptured with the soft sound made by the whispering cards that they made physical bodies for themselves in order to possess and understand this new instrument of destiny.

Rifflers wander the Feywild and Material Plane, searching for Decks of Many Things. They collect the cards, trade them, hoard them, and scatter them across worlds, all in service of an incomprehensible agenda to manipulate the fate of the multiverse. Rifflers are as likely to give a deck to adventurers in dire need as they are to wrest cards from an innocent person by any means necessary.

Both the Solar Bastion (see chapter 10) and the Grim Harrow (see chapter 19) know of rifflers and their obsession with Decks of Many Things, and these organizations stay alert for signs of these Fey creatures, since that usually means a deck is nearby.

```statblock
"name": "Riffler (BMT)"
"size": "Small"
"type": "fey"
"alignment": "typically  Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "20d6 + 20"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "12"
  - !!int "11"
  - !!int "15"
  - !!int "17"
"speed": "30 ft., burrow 20 ft."
"saves":
  - "dexterity": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "Arcana"
    "desc": "+6"
  - "name": "Insight"
    "desc": "+5"
  - "name": "Sleight of Hand"
    "desc": "+9"
  - "name": "Stealth"
    "desc": "+6"
"damage_resistances": "necrotic, radiant"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Sylvan"
"cr": "5"
"traits":
  - "desc": "The riffler can smell the presence of magical cards, including Decks\
      \ of Many Things and other magical decks, within 1 mile of itself. It knows\
      \ the direction to any such cards in that range. Effects that protect a target\
      \ from divination magic block this sense."
    "name": "Card Sense"
  - "desc": "The riffler can burrow through any nonmagical material that isn't iron,\
      \ shuffling the substance through which the riffler moves aside like cards to\
      \ form a tunnel that closes behind the riffler."
    "name": "Riffling Step"
"actions":
  - "desc": "The riffler makes two Spectral Card attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +6 to hit, reach 5 ft. or range 60\
      \ ft., one target. *Hit:* 8 (1d10 + 3) force damage plus 5 (1d10) damage\
      \ that is radiant if the d10 roll is an even number and necrotic if it's odd."
    "name": "Spectral Card"
  - "desc": "The riffler magically unleashes a spray of spectral cards in a 30-foot\
      \ cone. Each creature in that area must make a DC 14 Dexterity saving throw.\
      \ On a failed save, a creature takes 27 (5d10) force damage and has the restrained\
      \ condition for 1 minute as cards bind it. On a successful save, a creature\
      \ takes half as much damage only. A restrained creature can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success."
    "name": "Card Spray (Recharge 5-6)"
  - "desc": "The riffler casts the Plane Shift spell targeting only itself, requiring\
      \ no material components and using Charisma as the spellcasting ability."
    "name": "Plane Shift"
"reactions":
  - "desc": "When a creature the riffler can see within 30 feet of itself makes an\
      \ ability check, an attack roll, or a saving throw, the riffler can magically\
      \ force that creature to roll a d6 and either add the number rolled to the\
      \ total or subtract it from the total (riffler's choice), potentially changing\
      \ the outcome."
    "name": "Shuffle Destiny"
"source":
  - "BMT"
"image": "CLI/bestiary/fey/token/riffler-bmt.webp"
```
^statblock