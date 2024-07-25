---
Role: NPC
Name: 
Pronounced: 
Art: 
Race: "[[Half-Elf]]"
Gender: Female
Pronouns: She/Her
Sexuality: Bisexual
Age: Mature Adult
Occupation: 
Alignment: "[[Chaotic Good]]"
Religion: 
Condition: Healthy
Location: 
Groups: 
PartyStanding: 
PersonalityTrait:
  - Warm
  - Hospitable
  - Genuine
  - Kind
Motivations:
  - cares about the well-being of her community
  - strives to provide a safe haven for travelers and locals alike
---

> [!infobox]+
> # `=this.file.name` (`INPUT[inlineSelect(option(He/Him,He/Him),option(She/Her,She/Her),option(They/Them)):Pronouns]`)
> **Pronounced:**  `INPUT[text:Pronounced]`
> ![[PlaceholderImage.png|cover hm-sm]]
>![[PlaceholderImage.png|Show To Players]]
> ###### Bio
>  |
> ---|---|
> **Race** | `INPUT[suggester(optionQuery("3. Mechanics/Races"),useLinks(partial)):Race]` |
> **Sex** | `INPUT[inlineSelect(option(Female,Female),option(Male,Male),option(Non-Binary,Non-Binary),option(N/A,N/A),option(Other,Other)):Gender]` |
> **Age** | `INPUT[inlineSelect(option(Adult,Adult),option(Ancient,Ancient),option(Child,Child),option(Elderly,Elderly),option(Infant,Infant),option(Mature Adult,Mature Adult),option(Teen,Teen),option(Young Adult,Young Adult)):Age]` |
> **Sexuality** |`INPUT[inlineSelect(option(Asexual,Asexual),option(Bisexual,Bisexual),option(Gay,Gay),option(Straight,Straight)):Sexuality]` |
> **Alignment** | `INPUT[suggester(optionQuery("3. Mechanics/Alignments"),useLinks(partial)):Alignment]` |
> **Condition** | `INPUT[inlineSelect(option(Dead,Dead),option(Dying,Dying),option(Healthy,Healthy),option(Hurt,Hurt),option(Sick,Sick)):Condition]` |
> ###### Info
>  |
> ---|---|
> **Alias(es)** | `INPUT[text:Alias]` |
> **Occupation** | `INPUT[suggester(optionQuery("6. Database/World-Building-main/Occupations/Criminal")):Occupation]` |
> **Party Relationship** | `INPUT[inlineSelect(option(Friendly,Friendly),option(Indifferent,Indifferent),option(Hostile,Hostile)):PartyStanding]` |
> **Group(s)** | `INPUT[suggester(optionQuery("4. World/Factions"),useLinks(partial)):Groups]` |
> **Religion(s)** | `INPUT[suggester(optionQuery("4. World/Religion"),optionQuery("6. Database/World-Building-main/Cosmology/Cosmology"),useLinks(partial)):Religion]` |
> **Current Location** | `INPUT[suggester(optionQuery("4. World/Places"),useLinks(partial)):Location]` |
> 

# **`=this.file.name`**
> [!info|bg-c-purple]+ Overview
>
> 

> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[inlineList:PersonalityTrait]`
>
>> [!metadata|text-Center bg-c-gray] Social
>> `INPUT[inlineList:SocialTrait]`
>
>> [!metadata|text-Center bg-c-gray] Mental
>> `INPUT[inlineList:MentalTrait]`
>
>> [!metadata|text-Center bg-c-gray] Likes/Dislikes
>> **Likes:** `INPUT[inlineList:Likes]`
>>
>> **Dislikes:** `INPUT[inlineList:Dislikes]`
>
>> [!metadata|text-Center bg-c-gray] Interesting Physical Features
>> `INPUT[inlineList:PhysicalFeatures]`
>
>> [!metadata|text-Center bg-c-gray] Motivations
>> `INPUT[inlineList:Motivations]`

> [!column|dataview] Goals
>> [!metadata|text-Center bg-c-yellow]+ Personal
>> `INPUT[inlineList:PersonalGoals]`
>
>> [!metadata|text-Center bg-c-yellow]+ Professional
>> `INPUT[inlineList:ProfessionalGoals]`
>


## Acquaintances
> [!column|dataview] Acquaintances
>> [!metadata|text-Center bg-c-green]+ Friends & Family
>> `INPUT[suggester(optionQuery("4. World/NPCs" OR "4. World/Players")):FreindsFamily]`
>
>> [!metadata|text-Center bg-c-red]+ Rivals
>> `INPUT[suggester(optionQuery("4. World/NPCs" OR "4. World/Players")):Rivals]`
>


> [!info] Statblock
> ```statblock
> name: Individual
> monster: Commoner
> columns: 1
> ```

```encounter-table
name: Individual
creatures:
 - 1: Commoner
```

## History
TBD

>[!statblocks]
> ___
>## Blink Dog
>*Medium Fey, lawful good*
>___
>- **Armor Class** 13
>- **Hit Points** 22 (4d8 + 4)
>- **Speed** 40 ft.
>___
>|STR|DEX|CON|INT|WIS|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|12 (+1)|17 (+3)|12 (+1)|10 (+0)|13 (+1)|11 (+0)|
>___
> **Skills** Perception +3, Stealth +5
> **Senses** passive Perception 13
> **Languages** Blink Dog, understands Sylvan but can't speak it
> **Challenge** 1/4 (50 XP)
> **Proficiency Bonus** +2
>___
>***Keen Hearing and Smell.*** The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.  
>
>### Actions
>***Bite.*** *Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4 (1d6 + 1) piercing damage.  
>
>***Teleport (Recharge 4–6).*** The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.






___
>## "The Demogorgon"
>*Large Giant, chaotic neutral*
>___
>- **Armor Class** 15 (natural armor)
>- **Hit Points** 123 (13d12 + 39)
>- **Speed** 40 ft.
>___
>|STR|DEX|CON|INT|WIS|CHA|
>|:---:|:---:|:---:|:---:|:---:|:---:|
>|21 (+5)|8 (-1)|17 (+3)|6 (-2)|10 (+0)|8 (-1)|
>___
>- **Skills** Perception +3
>- **Senses** darkvision 60 ft., passive Perception 13
>- **Languages** Giant, Orc
>- **Challenge** 8 (3,900 XP)
>- **Proficiency Bonus** +3
>___
>***Two Heads.*** The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.  
>
>***Wakeful.*** When one of the ettin's heads is asleep, its other head is awake.  
>
>### Actions
>***Multiattack.*** The ettin makes two attacks: one with its battleaxe and one with its morningstar.  
>
>***Battleaxe.*** *Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 14 (2d8 + 5) slashing damage.  
>
>***Morningstar.*** *Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 14 (2d8 + 5) piercing damage.  
>
>***Fire Breath (Recharge 5–6).*** The ettin's right head exhales fire in a 30-foot cone. Each creature in that area must make a DC 14 Dexterity saving throw, taking 45 (10d8) fire damage on a failed save, or half as much damage on a successful one.  
>
>***Cold Breath (Recharge 5–6).*** The ettin's left head exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.  
>
>***Gaze.*** The ettin turns its magical gaze toward one creature that it can see within 120 feet of it. That target must make a DC 14 Wisdom saving throw. Unless the target is incapacitated, it can avert its eyes to avoid the gaze and to automatically succeed on the save. If the target does so, it can't see the ettin until the start of the ettin's next turn. If the target looks at the ettin in the meantime, it must immediately make the save.  
>If the target fails the save, it suffers one of the following effects of the ettin's choice or at random:  
>
>***Beguiling Gaze.*** The target is stunned until the start of the ettin's next turn or until the ettin is no longer within line of sight.  
>
>***Hypnotic Gaze.*** The target is charmed by the ettin until the start of the ettin's next turn. The ettin chooses how the charmed target uses its actions, reactions, and movement.  
>
>***Insanity Gaze.*** The target suffers the effect of the *confusion* spell without making a saving throw. The effect lasts until the start of the ettin's next turn. The ettin doesn't need to concentrate on the spell.

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
