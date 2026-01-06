---
Proficiency Bonus:
level: "15"
species: Human
class: Wizard
hp: 40
---

```badges
items:
  - label: Species
    value: '{{ frontmatter.species }}'
  - label: Class
    value: '{{ frontmatter.class }}'
  - label: Level
    value: '{{ frontmatter.level }}'
  - label: Initiative
    value: '+{{ modifier abilities.dexterity }}'
  - label: AC
    value: '{{ add 10 (modifier abilities.dexterity) }}'
  - label: AC (Mage Armor)
    value: 15
  - label: Spell Attack
    value: '{{ add 10 frontmatter.proficiency_bonus (modifier abilities.intelligence) }}'
```

```event-btns
items:
  - name: Short Rest
    value: short-rest
  - name: Long Rest
    value: long-rest
  - name: Level Up
    value: level-up
  - name: New Day
    value: new-day   
```


```healthpoints
state_key: din_health
health: '{{ frontmatter.hp }}'
hitdice:
  dice: d6
  value: 4
death_saves: true
reset_on: ["long-rest"]
```

```stats
items:
  - label: Armor Class
    sublabel: Mage Armor (16)
    value: '{{ add 10 (modifier abilities.dexterity) }}'
  - label: Initiative
    value: '+{{ modifier abilities.dexterity }}'
  - label: Spell DC
    value: 14

grid:
  columns: 3
```



## Abilities

```ability
abilities:
  strength: 9
  dexterity: 14
  constitution: 14
  intelligence: 19
  wisdom: 12
  charisma: 10

proficiencies:
  - intelligence
  - wisdom
```

```ability
abilities:
  strength: 9
  dexterity: 14
  constitution: 14
  intelligence: 19
  wisdom: 12
  charisma: 10

bonuses:
  - name: Right of Power
    target: strength
    value: 2
    modifies: saving_throw  # Optional: defaults to saving_throw

proficiencies:
  - intelligence
  - wisdom
```

## Skills

```skills
proficiencies:
  - arcana
  - deception
  - history
  - insight
  - investigation
```

```skills
proficiencies:
  - arcana
  - deception
  - history
  - insight
  - investigation

bonuses:
  - name: Right of Arcana
    target: arcana
    value: 2

expertise:
  - investigation

half_proficiencies:
  - history
```


## Spell Slots

```consumable
items:
  - label: "Level 1"
    state_key: din_spells_1
    uses: 4
  - label: "Level 2"
    state_key: din_spell_2
    uses: 2
```

### Fey Touched

```consumable
items:
  - label: "Misty Step"
    state_key: din_fey_touched_misty_step
    uses: 1
  - label: "Silvery Barbs"
    state_key: din_fey_touched_silvery_barbs
    uses: 1
```


## Consumables

```consumable
items:
  - label: "Level 1"
    state_key: din_luck_spell_1
    uses: 4
    reset_on: long-rest  # Full reset on long rest
  - label: "Action Surge"
    state_key: action_surge
    uses: 1
    reset_on: ["short-rest", "long-rest"]  # Reset on either rest type
  - label: "Bardic Inspiration"
    state_key: bardic_inspiration
    uses: 3
    reset_on:
      - event: short-rest
        amount: 1  # Restore 1 use on short rest
      - event: long-rest  # Full reset on long rest (no amount = complete reset)
```




---
## Features

### Luck Points
```consumable
label: ""
state_key: din_luck_points
uses: 3
```

You have inexplicable luck that seems to kick in at just the right moment.

**You have 3 luck points.** Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points **after you roll the die, but before the outcome is determined**. You choose which of the d20s is used for the attack roll, ability check, or saving throw.

You can also spend one luck point when an **attack roll** is made against you. Roll a d20 and then choose whether the attack uses the attacker's roll or yours.

If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.

You regain your expended luck points when you finish a long rest.

### Arcane Recovery
```consumable
label: ""
state_key: din_arcane_recovery
uses: 1
```

You have learned to regain some of your magical energy by studying your spell book. Once per day when you finish a **short rest**, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or **less than half your wizard level** (rounded up), and none of the slots can be 6th level or higher.

For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.

### Magic Items

#### Ring of Investigation
```consumable
label: ""
state_key: din_items__ring_of_investigation
uses: 3
```

_May the ability to see also provide you with a clear vision" Grants +1 to Investigation Roles_

### Researcher

When you attempt to learn or recall a piece of lore, **if you do not know that information, you often know where and from whom you can obtain it**.

Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature.

Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.

<br>

```initiative
state_key: forest_encounter
items:
  - name: Thordak (Fighter)
    ac: 18
    hp: 45
    link: thordak-character-sheet
  - name: Elf Wizard
    ac: 15
    hp: 28
    link: wizard-npc
  - name: Goblin Warriors (x3)
    ac: 14
    hp: 21
```

<br>

```initiative
state_key: dragon_encounter
items:
  - name: Ancient Red Dragon
    ac: 22
    hp: 546
  - name: Fighter
    ac: 18
    hp: 45
  - name: Wizard
    ac: 15
    hp: 28
consumables:
  - label: Legendary Actions
    state_key: dragon_legendary
    uses: 3
    reset_on_round: true
  - label: Lair Actions
    state_key: dragon_lair
    uses: 1
    reset_on_round: true
```

<br>

```initiative
state_key: dungeon_encounter
items:
  - name: Party Fighter
    ac: 18
    hp: 45
  - name: Goblin Squad
    ac: 14
    hp:
      Goblin 1: 12
      Goblin 2: 12
      Goblin 3: 12
  - name: Skeleton Archers
    ac: 13
    hp:
      Archer 1: 10
      Archer 2: 10
```

