---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/bmt
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Boss Delour"
---
# [Boss Delour](boss-delour-bmt.md)
*Source: The Book of Many Things p. 83*  

Delour the wererat is a sly trickster and consummate thief who rules the Moonstalkers alongside his friend Augustus. Delour's honeyed words and calculating mind make him dangerous. He can smile and shake someone's hand while simultaneously plotting to ruin that person.

Expanding the guild's activities beyond thievery was Delour's idea. He studies other criminal syndicates and their methods of getting rich. He considers protection rackets, smuggling, and arson to be low-hanging fruit, with extortion, kidnapping, and murder for hire being more complex challenges the guild can take on as it grows in power. His only real fear is exposure; the bigger and more active the Moonstalkers become, the more likely they are to attract the attention of law enforcement or adventurous do-gooders. The sting of the guild's flight from its first home is still fresh in Delour's mind.

Indeed, Delour never forgets a slight. He is obsessed with getting revenge on the officials who raided the original guildhall and killed Pyrite, who was like a brother to Delour. Though Delour is perfectly willing to backstab most people, he treats Augustus with utmost respect. If he discovers Augustus's plot to become human and leave the Moonstalkers, he would consider it the ultimate betrayal.

```statblock
"name": "Boss Delour (BMT)"
"size": "Small"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "110"
"hit_dice": "20d6 + 40"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "15"
  - !!int "17"
  - !!int "14"
  - !!int "16"
"speed": "30 ft. in rat or hybrid form"
"saves":
  - "dexterity": !!int "8"
  - "intelligence": !!int "7"
"skillsaves":
  - "name": "Deception"
    "desc": "+11"
  - "name": "Perception"
    "desc": "+10"
  - "name": "Sleight of Hand"
    "desc": "+8"
  - "name": "Stealth"
    "desc": "+8"
"gear":
  - "hand crossbow"
  - "shortsword"
"senses": "darkvision 60 ft., passive Perception 20"
"languages": "Common, Thieves' cant (can't speak in rat form)"
"cr": "9"
"traits":
  - "desc": "If Delour is subjected to an effect that allows him to make a Dexterity\
      \ saving throw to take only half damage, he instead takes no damage if he succeeds\
      \ on the saving throw and only half damage if he fails, provided he doesn't\
      \ have the incapacitated condition."
    "name": "Evasion"
  - "desc": "Delour can move through the space of a Medium or larger creature."
    "name": "Nimbleness"
  - "desc": "Delour regains 10 hit points at the start of his turn. If he takes damage\
      \ from a silver weapon, this trait doesn't function at the start of his next\
      \ turn. Delour dies only if he starts his turn with 0 hit points and doesn't\
      \ regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "Delour makes any combination of three Bite, Shortsword, or Hand Crossbow\
      \ attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 26\
      \ (5d8 + 4) piercing damage. If the target is a Humanoid, it must succeed\
      \ on a DC 14 Constitution saving throw or be cursed with lycanthropy. While\
      \ cursed in this way, the target retains its alignment, languages, and equipment\
      \ but otherwise uses the wererat stat block, excluding actions that require\
      \ equipment the target doesn't have. During any night when there's a full moon\
      \ in the sky, the target becomes an NPC under the DM's control and remains so\
      \ until the night ends. A Remove Curse spell or similar magic ends this curse."
    "name": "Bite (Rat or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 11\
      \ (2d6 + 4) piercing damage plus 10 (3d6) poison damage."
    "name": "Shortsword (Humanoid or Hybrid Form Only)"
  - "desc": "*Ranged Weapon Attack:* +8 to hit, range 30/120 ft., one target. *Hit:*\
      \ 11 (2d6 + 4) piercing damage plus 10 (3d6) poison damage."
    "name": "Hand Crossbow (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "Delour polymorphs into a rat-humanoid hybrid, a Medium giant rat, or\
      \ his humanoid form. His statistics, other than his size and speed, are the\
      \ same in each form. Any equipment he is wearing or carrying isn't transformed.\
      \ He reverts to his humanoid form if he dies."
    "name": "Change Shape"
  - "desc": "Delour takes the Dash, Disengage, or Hide action."
    "name": "Cunning Action"
"source":
  - "BMT"
"image": "CLI/bestiary/monstrosity/token/boss-delour-bmt.webp"
```
^statblock