---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Malaxxix"
---
# [Malaxxix](CLI/bestiary/npc/malaxxix-bmt.md)
*Source: The Book of Many Things p. 173*  

Legends describe the dread being Malaxxix as the child of one of the night hags who created the first yugoloths. Malaxxix is often lumped in with such Fiends, perhaps because it too has a grand intellect and self-centered agenda.

Malaxxix's machinations are many, but it is most infamous for crafting cursed armaments and distributing them throughout the multiverse in the hope that they'll be found by mortals who are desperate for power and ripe for corruption.

Malaxxix seeks the *Books of Keeping*: ancient tomes that contain the true names of all yugoloths. To this end, it patrols the vilest swaths of the multiverse from atop its unholy vehicle, the Unborn Palanquin. This shambling collective is made up of thousands of mezzoloths devoted to their liege, who roams the Lower Planes as a tyrannical marauder.

## Curse of Malaxxix

A creature that attunes to one of Malaxxix's cursed items becomes afflicted with the curse of Malaxxix. The curse enables Malaxxix to interact with the cursed creature in special ways:

### Scrying

Malaxxix can cast the Scrying spell on the cursed creature without material components or a spell slot. Malaxxix doesn't need to be on the same plane of existence as the creature to use this ability, and the creature automatically fails the saving throw against the spell.

#### Teleport

As an action, Malaxxix can teleport, along with any equipment it is wearing or carrying, to an unoccupied space within 60 feet of the cursed creature, regardless of the creature's location in the multiverse.

The curse of Malaxxix lasts until ended with a Remove Curse spell, a Greater Restoration spell, or similar magic.

## Malaxxix's Lair

The Unborn Palanquin—a monstrous, centipedal vehicle—serves as both Malaxxix's primary conveyance and the Fiend's lair.

Malaxxix can take lair actions (see below) while astride the palanquin. When encountered on the palanquin, Malaxxix's challenge rating is 19 (22,000 XP).

### The Unborn Palanquin

The [Unborn Palanquin](CLI/objects/unborn-palanquin-bmt.md) is a wormlike leviathan of screeching gears made up of hundreds of tireless mezzoloths. It is a unique vehicle and Gargantuan object.

Only Malaxxix can pilot this vehicle. If Malaxxix is slain, the palanquin crumbles in seconds.

> [!quote] A quote from Asteria  
> 
> Too many legs. Too loud. Makes my mind feel like it's melting.


```statblock
"name": "Malaxxix (BMT)"
"size": "Huge"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "312"
"hit_dice": "25d12 + 150"
"modifier": !!int "3"
"stats":
  - !!int "23"
  - !!int "16"
  - !!int "22"
  - !!int "22"
  - !!int "20"
  - !!int "18"
"speed": "40 ft., fly 60 ft."
"saves":
  - "strength": !!int "12"
  - "constitution": !!int "12"
"skillsaves":
  - "name": "Arcana"
    "desc": "+12"
  - "name": "Athletics"
    "desc": "+12"
  - "name": "Perception"
    "desc": "+11"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"gear":
  - "whip"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "Abyssal, Infernal, telepathy 120 ft."
"cr": "18"
"traits":
  - "desc": "If Malaxxix fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Malaxxix has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Malaxxix makes two Forge Hammer or Whip attacks in any combination."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +12 to hit, reach 10 ft. or range\
      \ 60/180 ft., one target. *Hit:* 28 (4d10 + 6) bludgeoning damage, and the\
      \ target can't take reactions until the end of Malaxxix's next turn. *Hit or\
      \ Miss:* The hammer then magically returns to Malaxxix's hand."
    "name": "Forge Hammer"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 30 ft., one creature. *Hit:*\
      \ 15 (2d8 + 6) slashing damage, and the target has the restrained condition\
      \ for 1 minute. The restrained target can make a DC 20 Strength saving throw\
      \ at the end of each of its turns, ending the effect on itself on a success.\
      \ Only one creature can be restrained by the whip at a time."
    "name": "Whip"
  - "desc": "Malaxxix summons a vortex of whirling mezzoloths at a point it can see\
      \ within 90 feet of itself. The vortex is a 30-foot-radius, 100-foot-high cylinder\
      \ centered on that point. Each creature other than Malaxxix in that area must\
      \ make a DC 20 Dexterity saving throw. On a failed save, a creature takes 35\
      \ (10d6) force damage and has the restrained condition while within the cylinder.\
      \ On a successful save, a creature takes half as much damage and is pushed to\
      \ the nearest unoccupied space outside the cylinder. The vortex lasts until\
      \ the start of Malaxxix's next turn."
    "name": "Mezzoloth Vortex (Recharge 5-6)"
"lair_actions":
  - "desc": "In its lair on initiative count 20 (losing initiative ties), Malaxxix\
      \ can take one of the following lair actions; Malaxxix can't take the same lair\
      \ action two rounds in a row:\n\n- **Reassemble.** Malaxxix chooses either itself\
      \ or the palanquin. The target gains 19 (3d12) temporary hit points.  \n-\
      \ **Slam.** Malaxxix commands the palanquin to slam the ground. Each creature\
      \ within 15 feet of the palanquin must make a DC 20 Strength saving throw. On\
      \ a failed save, a creature takes 11 (2d10) bludgeoning damage and has the\
      \ prone condition. On a successful save, a creature takes half as much damage\
      \ only.  \n- **Surge.** Malaxxix commands the palanquin to move up to its speed.\
      \  "
    "name": ""
"regional_effects":
  - "desc": "The region around the Unborn Palanquin is warped by its presence, creating\
      \ the following effects:\n\n- **Cranial Discomfort.** Creatures that spend more\
      \ than 24 hours within 1 mile of the palanquin hear an incessant scraping sound\
      \ in their minds.  \n- **Grinding Gears.** Constructs within 1 mile of the palanquin\
      \ move sluggishly. Constructs' speeds are halved, and they have disadvantage\
      \ on Dexterity saving throws.  \n- **Swarming Insects.** Insects and insectile\
      \ Beasts within 1 mile of the palanquin become disoriented and aggressive, coalescing\
      \ into unnatural swarms and attacking any creatures in sight.  \n\nIf Malaxxix\
      \ dies or the Unborn Palanquin is destroyed, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Malaxxix can expend a use to take one of the following actions. Malaxxix\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Malaxxix moves up to its speed. This movement doesn't provoke opportunity\
      \ attacks. When Malaxxix moves within 5 feet of a creature during this movement,\
      \ that creature takes 5 (1d10) lightning damage. A creature can take this\
      \ damage only once per turn."
    "name": "Fiendish Stride"
  - "desc": "Malaxxix makes one Forge Hammer or Whip attack."
    "name": "Attack (Costs 2 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/npc/token/malaxxix-bmt.webp"
```
^statblock