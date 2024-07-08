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

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
