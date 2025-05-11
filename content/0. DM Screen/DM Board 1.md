---
obsidianUIMode: preview
dg-home: false
dg-publish: false
---
# DM Screen

## Quick Rules
- [[Rules/Combat]]
- [[Rules/Magic]]
- [[Rules/Skill Checks]]

## Campaign Notes
- [[Campaigns/Campaign_Name_1/Sessions/Current Session]]
- [[Campaigns/Campaign_Name_1/Quests/Active Quests]]

## NPCs
- [[NPCs/John Doe]]
- [[NPCs/Jane Doe]]

## Locations
- [[Locations/City of Eldoria]]
- [[Locations/Dungeon of Despair]]

## Encounters
- [[Encounters/Goblin Ambush]]
- [[Encounters/Dragon Lair]]

```tabs
## Rules
- [[Rules/Combat]]
- [[Rules/Magic]]

## NPCs
- [[NPCs/John Doe]]
- [[NPCs/Jane Doe]]

## Encounters
- [[Encounters/Goblin Ambush]]
```


## Dice Rolls
- Perception Check: `dice: 1d20+4`
- Damage Roll: `dice: 2d6+3`







# DM Screen

## Quick Rules
![[Rules/Combat#Actions in Combat]]
![[Rules/Combat#Conditions]]

## Campaign Notes
- [[Campaigns/Campaign_Name_1/Sessions/Current Session]]
- [[Campaigns/Campaign_Name_1/Quests/Active Quests]]

## NPCs
```dataview
list
from "Campaigns/Campaign_Name_1/NPCs"
```

## Encounters

```dataview
table hp, ac, speed
from "Rules/Monsters"
where encounter = "Goblin Ambush"
```


## Dice Rolls

- Perception Check: `dice: 1d20+4`
- Damage Roll: `dice: 2d6+3`


> [!tip] Rule of Cool  
> Remember: If it’s fun and doesn’t break the game, allow it!


> [!stablocks]
> name: Adult Black Dragon
> source: 5e SRD
> size: Huge
> type: dragon
> subtype: ""
> alignment: chaotic evil
> ac: 19
> hp: 195
> hit_dice: 17d12 + 84
> speed: 40 ft., fly 80 ft., swim 40 ft.
> stats:
>   - 23
>   - 14
>   - 21
>   - 14
>   - 13
>   - 17
> saves:
>   - dexterity: 7
>   - constitution: 10
>   - wisdom: 6
>   - charisma: 8
> skillsaves:
>   - 
>   - perception: 11
>   - stealth: 7
> damage_vulnerabilities: ""
> damage_resistances: ""
> damage_immunities: acid
> condition_immunities: ""
> senses: blindsight 60 ft., darkvision 120 ft., passive Perception 21
> languages: Common, Draconic
> cr: "14"
> bestiary: true
> traits:
>   - name: Amphibious
>     desc: The dragon can breathe air and water.
>     attack_bonus: 0
>   - name: Legendary Resistance (3/Day)
>     desc: If the dragon fails a saving throw, it can choose to succeed instead.
>     attack_bonus: 0
> actions:
>   - name: Multiattack
>     desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
>     attack_bonus: 0
>   - name: Bite
>     desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
>     attack_bonus: 11
>     damage_dice: 2d10 + 1d8
>     damage_bonus: 6
>   - name: Claw
>     desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
>     attack_bonus: 11
>     damage_dice: 2d6
>     damage_bonus: 6
>   - name: Tail
>     desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
>     attack_bonus: 11
>     damage_dice: 2d8
>     damage_bonus: 6
>   - name: Frightful Presence
>     desc: Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
>     attack_bonus: 0
>   - name: Acid Breath (Recharge 5-6)
>     desc: The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.
>     attack_bonus: 0
>     damage_dice: 12d8
> legendary_actions:
>   - name: Detect
>     desc: The dragon makes a Wisdom (Perception) check.
>     attack_bonus: 0
>   - name: Tail Attack
>     desc: The dragon makes a tail attack.
>     attack_bonus: 0
>   - name: Wing Attack (Costs 2 Actions)
>     desc: The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
>     attack_bonus: 0
> creature: Adult Black Dragon



```statblock
creature: Adult Black Dragon
```