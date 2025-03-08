---
locationType: NPC
merchantType: N/A
kingdom: N/A
region: Petalwood
settlementName: Ruined Chapel of the Silver Moon
wardName: N/A
services: False Priest, Dream Manipulator
allies:
  - Fawn
  - Achroteth
  - Cedrick
enemies:
  - Dorgle
Type: NPC
---

# **Brother Varras**

<br>

> [!infobox|sban]
> # Name: Brother Varras
> ---
>
> ###### Info
> | | |
> |---|---|
> | **Race** | Half-Elf |
> | **Sex** | Male |
> | **Age** | 47 |
> | **Sexuality** | Asexual |
> | **Alignment** | Neutral Evil |
> 
> ###### Info
> | | |
> |---|---|
> | **Alias(es)** | The Dreambinder |
> | **Occupation** | False Priest |
> | **Party Relationship** | Antagonist |
> | **Group(s)** | Cult of Kalistyr |
> | **Religion(s)** | Kalistyr (Disguised as Sehanine worship) |
> | **Current Location** | Ruined Chapel outside Petalwood |

<br>

## **Traits**

> [!recite|txt-Center] **Physical Description**
> Brother Varras is tall and gaunt, with pallid skin that seems to shimmer faintly in the moonlight. His silver hair flows like liquid light, always framing his soft, welcoming face. His eyes, seemingly kind, have irises that faintly glow an unnatural violet when under direct moonlight. Around his neck is a crescent moon amulet, marked with subtle but warped runes of Kalistyr’s power.

> [!recite|title-Centre] **Mannerisms**
> Brother Varras speaks in measured, honeyed tones, often quoting hymns to Sehanine. He gazes deeply into people’s eyes as if looking into their soul. When angered or cornered, his voice deepens unnaturally, and his language subtly shifts to ominous phrases.  
> > [!quote] ***"Child of the night, do not fear. Your dreams are safe within Sehanine’s embrace… though the shadows may seek to test your faith."***

<br>

## **Personality**

> [!recite|title-Center] **World View**
> Brother Varras sees himself as an agent of balance—twisting people’s faith and dreams to siphon their strength for Kalistyr. He believes that suffering is a divine purification process, and his role is to deliver it subtly through whispered terror.  
> 
> > [!warning]
> > **Social DC Impact:** Convincing Varras to reveal his true motives is difficult (DC 18 Persuasion or Insight), as he is adept at weaving lies into comforting half-truths about Sehanine’s mysterious ways. His veneer cracks if the party references his amulet’s runes or confront him with proof of Kalistyr’s influence (DC 14 Intimidation).

<br>

> [!warning] **Potential Quest hook**
> Villagers suffering from nightmares or sleepwalking are drawn to Brother Varras’s chapel for help. In truth, Varras manipulates their dreams, harvesting fear to empower Kalistyr. The party must uncover his deception, either by investigating the nightmares or deciphering the corrupted runes on his holy symbols.


### **Dark Secrets**

- **Kalistyr’s Influence:** The crescent moon on his amulet is a warped symbol of Sehanine, its runes channeling psychic energy to Kalistyr. Insightful characters (DC 18 Arcana) can detect its corrupt nature.
- **Ritual Chamber:** Beneath the chapel lies a hidden chamber, its walls carved with runes depicting dream-consuming rituals.

### **Potential Player Interactions**

- **Nightmare Connection:** Affected party members may experience recurring nightmares where Varras’s voice whispers ominous prayers.
- **Destroying the Amulet:** Removing or destroying the amulet weakens Varras, reducing his spell save DC by 2 and cutting off his connection to Kalistyr.



```dataviewjs
var parents = dv.current().parents ?? [];
var children = dv.current().children ?? [];
var enemies = dv.current().enemies ?? [];
var allies = dv.current().allies ?? [];
var siblings = dv.current().siblings ?? [];
var current = dv.current().file.name;
var partner = dv.current().partner ?? [];

dv.paragraph("```mermaid\nflowchart LR\n" +
  // Parents with internal-link on individual nodes only
  (parents.length > 0 ? parents.map((parent, index) => `P${index + 1}[${parent}]:::internal-link\nP${index + 1} --> Current\n`).join('') : '') +
  
  // Current node
  `Current[${current}]\n` +
  
  // Partner group node (no internal-link applied)
  (partner.length > 0 ? `PT[Partner]\nCurrent --> PT\n` : '') +
  
  // Individual partners with internal-link
  (partner.length > 0 ? partner.map((p, index) => `PT${index + 1}[${p}]:::internal-link\nPT --> PT${index + 1}\n`).join('') : '') +

  // Children group node (no internal-link applied)
  (children.length > 0 ? `C[Children]\nCurrent --> C\n${children.map((child, index) => `C${index + 1}[${child}]:::internal-link\nC --> C${index + 1}\n`).join('')}` : '') +

  // Siblings group node (no internal-link applied)
  (siblings.length > 0 ? `S[Siblings]\nCurrent --> S\n${siblings.map((sibling, index) => `S${index + 1}[${sibling}]:::internal-link\nS --> S${index + 1}\n`).join('')}` : '') +

  // Enemies group node (no internal-link applied)
  (enemies.length > 0 ? `E[Enemies]\nCurrent --> E\n${enemies.map((enemy, index) => `E${index + 1}[${enemy}]:::internal-link\nE --> E${index + 1}\n`).join('')}` : '') +

  // Allies group node (no internal-link applied)
  (allies.length > 0 ? `A[Allies]\nCurrent --> A\n${allies.map((ally, index) => `A${index + 1}[${ally}]:::internal-link\nA --> A${index + 1}\n`).join('')}` : '') +

  // Styling: Apply internal-link only to individual nodes, not group nodes
  `class ${parents.length > 0 ? parents.map((_, index) => `P${index + 1},`).join('') : ''}Current${children.length > 0 ? children.map((_, index) => `C${index + 1},`).join('') : ''}${siblings.length > 0 ? siblings.map((_, index) => `S${index + 1},`).join('') : ''}${enemies.length > 0 ? enemies.map((_, index) => `E${index + 1},`).join('') : ''}${allies.length > 0 ? allies.map((_, index) => `A${index + 1},`).join('') : ''} internal-link;`
)
```


## **Location Details**

> [!abstract|background-color-orange] **Chapel of the Silver Moon** **Exterior:** A crumbling stone structure overgrown with ivy, adorned with faintly glowing crescent moon carvings. By day, it seems peaceful, but at night, the carvings warp into jagged, shadowy forms.  
> **Interior:** Rows of old wooden pews face a cracked altar. Moonlight spills through shattered stained glass, casting eerie patterns on the floor. Hidden trapdoors lead to the underground ritual chamber.


<br>

> [!statblocks|sban]
> 
> ![[Placeholder.jpg|right cover htiny wtiny circle lp]]
> 
> ## Brother Varras
> 
> Medium humanoid (half-elf), Neutral Evil
> 
> ---
> 
> **Armor Class** 15 (Chain Shirt)  
> **Hit Points** 78 (12d8 + 24)  
> **Speed** 30 ft.  
> **Initiative** +2
> 
> ---
> 
> |STR|DEX|CON|INT|WIS|CHAR|
> |---|---|---|---|---|---|
> |10 (+0)|14 (+2)|14 (+2)|12 (+1)|16 (+3)|18 (+4)|
> 
> ---
> 
> **Saving Throws** Wis +6, Cha +7  
> **Skills** Deception +8, Religion +5, Insight +6  
> **Damage Resistances** Psychic  
> **Condition Immunities** Frightened  
> **Senses** Darkvision 60 ft., Passive Perception 13  
> **Languages** Common, Elvish, Abyssal  
> **Challenge** 5 (1,800 XP) <span class="bonus"> **Proficiency Bonus** +3 </span>
> 
> ---
> 
> _**Spellcasting.**_  
> Brother Varras is a 7th-level spellcaster. His spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). He has the following spells prepared:  
> **Cantrips (at will):** Guidance, Thaumaturgy, Minor Illusion  
> **1st level (4 slots):** Healing Word, Command  
> **2nd level (3 slots):** Calm Emotions, Hold Person  
> **3rd level (3 slots):** Bestow Curse, Counterspell  
> **4th level (1 slot):** Phantasmal Killer
> 
> _**Dreamweaver (Recharge 5–6).**_ Varras can cast _Dream_ without expending a spell slot. The dream’s content deals 3d6 psychic damage to the target per night they fail a Wisdom saving throw (DC 15).
> 
> _**Corrupt Faith (Recharge 6).**_ As an action, Varras can invoke Kalistyr’s power to force all creatures within 20 feet to make a Wisdom saving throw (DC 15). On a failure, they are Frightened for 1 minute and take 3d8 psychic damage.
> 
> ### Actions
> 
> _**Crescent Blade (Melee Weapon Attack):**_ +5 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage. If the target is asleep or unconscious, the attack deals an additional 3d8 psychic damage.
