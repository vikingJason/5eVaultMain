---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/toa
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Valindra Shadowmantle"
---
# [Valindra Shadowmantle](CLI/bestiary/npc/valindra-shadowmantle-toa.md)
*Source: Tomb of Annihilation p. 58*  

Liches are the remains of great wizards who embrace undeath as a means of preserving themselves. They further their own power at any cost, having no interest in the affairs of the living except where those affairs interfere with their own. Scheming and insane, they hunger for long-forgotten knowledge and the most terrible secrets. Because the shadow of death doesn't hang over them, they can conceive plans that take years, decades, or centuries to come to fruition.

A lich is a gaunt and skeletal humanoid with withered flesh stretched tight across its bones. Its eyes succumbed to decay long ago, but points of light burn in its empty sockets. It is often garbed in the moldering remains of fine clothing and jewelry worn and dulled by the passage of time.

## Biography

Valindra Shadowmantle works for Szass Tam, the most powerful lich among the Red Wizards of Thay, though she is not a Red Wizard herself. She found the heart and converted it into a base to use while her minions search for the Soulmonger. Her orders from Szass Tam are to seize control of the Soulmonger, if possible, or destroy it otherwise. Valindra created a teleportation circle inside the heart that she uses to travel instantly to and from Thay (where her phylactery is safely stored), to deliver reports to Szass Tam and pick up new instructions.

Characters who explore the Heart of Ubtao are certain to meet Valindra. She's considered the possibility that adventurers might cross her path, and she won't necessarily be hostile toward them. Her mission is to seize the Soulmonger by any means; if adventurers can help her achieve that, she'll use them.

With her ability to appear as a living elf, Valindra can easily conceal her lichdom and her association to Thay. She presents herself as a scholarly wizard who wants to "imprison" the Soulmonger; that way, its unique magic can be studied while it's safely quarantined from the world. She argues that destroying it should be a last resort.

```statblock
"name": "Valindra Shadowmantle (ToA)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "16"
  - !!int "20"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "10"
  - "intelligence": !!int "12"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "Arcana"
    "desc": "+19"
  - "name": "History"
    "desc": "+12"
  - "name": "Insight"
    "desc": "+9"
  - "name": "Perception"
    "desc": "+9"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common, Abyssal, Draconic, Dwarvish, Elvish, Infernal"
"cr": "21"
"traits":
  - "desc": "Valindra is an 18th-level spellcaster. Her spellcasting ability is Intelligence\
      \ (spell save DC 20, +12 to hit with spell attacks). Valindra has the following\
      \ wizard spells prepared:\n\n**Cantrips (at will):** mage hand, prestidigitation,\
      \ ray of frost\n\n**1st level (4 slots):** detect magic, magic missile, shield,\
      \ thunderwave\n\n**2nd level (3 slots):** detect thoughts, invisibility, Melf's\
      \ acid arrow, mirror image\n\n**3rd level (3 slots):** animate dead, counterspell,\
      \ dispel magic, fireball\n\n**4th level (3 slots):** blight, dimension door\n\
      \n**5th level (3 slots):** cloudkill, scrying\n\n**6th level (1 slots):** disintegrate,\
      \ globe of invulnerability\n\n**7th level (1 slots):** finger of death, plane\
      \ shift\n\n**8th level (1 slots):** dominate monster, power word stun\n\n**9th\
      \ level (1 slots):** power word kill"
    "name": "Spellcasting"
  - "desc": "As a bonus action, Valindra can mask her shriveled flesh and appear to\
      \ be a living elf. This magical illusion lasts until she ends it as a bonus\
      \ action or until she uses her Frightening Gaze legendary action. The effect\
      \ also ends if Valindra drops to 30 hit points or fewer, or if dispel magic\
      \ is cast on her."
    "name": "Mask"
  - "desc": "When preparing her spells, Valindra can swap out any spell on her list\
      \ of prepared spells for another wizard spell of the same level."
    "name": "Preparation"
  - "desc": "If Valindra fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "If destroyed Valindra gains a new body in 1d10 days, regaining all\
      \ her hit points and becoming active again. The new body appears within 5 feet\
      \ of the phylactery."
    "name": "Rejuvenation"
  - "desc": "Valindra has advantage on saving throws against any effect that turns\
      \ undead."
    "name": "Turn Resistance"
"actions":
  - "desc": "*Melee Spell Attack:* +12 to hit, reach 5 ft., one creature. *Hit:*\
      \ 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving\
      \ throw or be paralyzed for 1 minute. The target can repeat the saving throw\
      \ at the end of each of its turns, ending the effect on itself on a success."
    "name": "Paralyzing Touch"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Valindra can expend a use to take one of the following actions. Valindra\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Valindra casts a cantrip."
    "name": "Cantrip"
  - "desc": "Valindra uses her Paralyzing Touch."
    "name": "Paralyzing Touch (Costs 2 Actions)"
  - "desc": "Valindra fixes her gaze on one creature she can see within 10 feet of\
      \ her. The target must succeed on a DC 18 Wisdom saving throw against this magic\
      \ or become frightened for 1 minute. The frightened target can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success.\
      \ If a target's saving throw is successful or the effect ends for it, the target\
      \ is immune to the Valindra's gaze for the next 24 hours."
    "name": "Frightening Gaze (Costs 2 Actions)"
  - "desc": "Each non-undead creature within 20 feet of Valindra must make a DC 18\
      \ Constitution saving throw against this magic, taking 21 (6d6) necrotic damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Disrupt Life (Costs 3 Actions)"
"source":
  - "ToA"
"image": "CLI/bestiary/npc/token/valindra-shadowmantle-toa.webp"
```
^statblock