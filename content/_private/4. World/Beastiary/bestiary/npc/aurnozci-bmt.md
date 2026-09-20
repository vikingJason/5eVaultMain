---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Aurnozci"
---
# [Aurnozci](content/_private/4.%20World/Beastiary/bestiary/npc/aurnozci-bmt.md)
*Source: The Book of Many Things p. 167*  

The demon lord Aurnozci is a wormlike horror of fiery flesh and toxic seepage. In its present form, Aurnozci can't leave Xulregg, the Abyssal layer that's both its fiefdom and its prison. It lairs within a grotesque hive dangling from a mountain-size tree of tar and flame called Gorewood.

Aurnozci relies on demonic proxies and mortal worshipers to enact its will beyond the Abyss. The exact nature of the curse that binds Aurnozci to Xulregg is its cult's most closely guarded secret, fully known only to the faith's enigmatic leader, a masked archmage called the Eye of Aurnozci.

Aurnozci's followers believe the demon lord's imprisonment is coming to an end, and soon the Caged Worm will shed its current form and transform into an even more powerful shape. Once it attains this new form, Aurnozci can escape Xulregg and wreak havoc across the multiverse. To accelerate this terrible transformation, cultists hunt down mortal souls for violent ritual sacrifice to their god.

## Cultists of Aurnozci

Aurnozci grants its cultists the following trait:

> **Burning Corpse.** When the creature dies, its body is reduced to a pile of smoldering embers in the space where it fell. The ashes take 1 minute to cool. Until then, a creature takes 3 (`1d6`) fire damage when it enters the ashes' space for the first time on a turn or starts its turn there.

## Aurnozci's Lair

Aurnozci's lair is a layer of the Abyss called Xulregg. See chapter 20 for details about this realm.

The challenge rating of Aurnozci is 23 (50,000 XP) when it's encountered in its lair.

```statblock
"name": "Aurnozci (BMT)"
"size": "Gargantuan"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "370"
"hit_dice": "20d20 + 160"
"modifier": !!int "5"
"stats":
  - !!int "27"
  - !!int "20"
  - !!int "26"
  - !!int "6"
  - !!int "21"
  - !!int "19"
"speed": "50 ft., burrow 30 ft."
"saves":
  - "strength": !!int "15"
  - "constitution": !!int "15"
"damage_resistances": "cold, lightning"
"damage_immunities": "acid; fire; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "Abyssal, telepathy 120 ft."
"cr": "22"
"traits":
  - "desc": "If the temperature around it is 100 degrees Fahrenheit or higher, Aurnozci\
      \ regains 15 hit points at the start of its turn. If it takes cold or radiant\
      \ damage, this trait doesn't function at the start of its next turn. Aurnozci\
      \ dies only if it starts its turn with 0 hit points and doesn't regenerate."
    "name": "Heat Regeneration"
  - "desc": "If Aurnozci fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Aurnozci has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Aurnozci makes one Bite attack and two Tail attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +15 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (2d12 + 8) slashing damage plus 9 (2d8) fire damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +15 to hit, reach 10 ft., one target. *Hit:*\
      \ 17 (2d8 + 8) bludgeoning damage."
    "name": "Tail"
  - "desc": "Aurnozci sprays mucus in a 60-foot cone. Each creature in that cone must\
      \ make a DC 20 Dexterity saving throw, taking 42 (12d6) acid damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Mucus Spray (Recharge 5-6)"
  - "desc": "Aurnozci casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 20):\n\n**At will:**\
      \ Detect Magic, Heat Metal (7th-level version)\n\n**2/day each:** Darkness,\
      \ Dispel Magic, Hold Person"
    "name": "Spellcasting"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Aurnozci can take one\
      \ of the following lair actions; Aurnozci can't take the same lair action two\
      \ rounds in a row:\n\n- **Cocoon.** Aurnozci targets one Medium or smaller creature\
      \ it can see within 60 feet of itself and encases the creature in a constricting\
      \ cocoon. The target must succeed on a DC 23 Strength saving throw or have the\
      \ restrained condition for 1 minute. A target that starts its turn restrained\
      \ in this way takes 9 (2d8) bludgeoning damage. A creature can use its action\
      \ to try to tear apart the cocoon, ending the cocoon's effect with a successful\
      \ DC 23 Strength (Athletics) check.  \n- **Insect Swarm.** Aurnozci creates\
      \ a 30-foot-radius sphere of stinging wasps centered on a point within 300 feet\
      \ of itself. The sphere spreads around corners. The sphere remains for 10 minutes\
      \ or until Aurnozci uses this lair action again. The sphere's area is heavily\
      \ obscured and is difficult terrain. When the sphere appears, each creature\
      \ in it must make a DC 20 Constitution saving throw, taking 16 (3d10) piercing\
      \ damage and 16 (3d10) poison damage on a failed save, or half as much damage\
      \ on a successful one. A creature must also make this saving throw when it enters\
      \ the sphere's area for the first time on a turn or starts its turn there.  "
    "name": ""
"regional_effects":
  - "desc": "Xulregg is an oppressively muggy realm known for the following regional\
      \ effects:\n\n- **Boiling Water.** Bodies of water on Xulregg perpetually boil,\
      \ and even bottled liquids steam when exposed to the layer's atmosphere. Being\
      \ immersed in water there doesn't confer resistance to fire damage, and a creature\
      \ that starts its turn in water takes 7 (2d6) fire damage. A creature that\
      \ imbibes a liquid (such as a potion) takes 3 (1d6) fire damage.  \n- **Fast\
      \ Metamorphosis.** On Xulregg, eggs, larvae, and pupae all develop and metamorphose\
      \ at ten times their usual rate, regardless of sustenance or any other growing\
      \ conditions.  \n\nIf Aurnozci dies, these effects fade over the course of 1d10\
      \ days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Aurnozci can expend a use to take one of the following actions. Aurnozci\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Aurnozci moves up to its speed."
    "name": "Move"
  - "desc": "Aurnozci makes one Tail attack."
    "name": "Tail"
  - "desc": "Aurnozci uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
  - "desc": "Flames momentarily surround Aurnozci. Each creature within 15 feet of\
      \ Aurnozci must make a DC 20 Dexterity saving throw, taking 18 (4d8) fire\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Conflagration (Costs 2 Actions)"
"source":
  - "BMT"
"image": "CLI/bestiary/npc/token/aurnozci-bmt.webp"
```
^statblock