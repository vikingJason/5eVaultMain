---
Role:
  - NPC
Name: 
Pronounced: 
Art: 
Race: "[[Elf]]"
Gender: Female
Pronouns: He/Him
Sexuality: Asexual
Age: Mature Adult
Occupation: "[[6. Database/World-Building-main/Occupations/Government/summoner.md|summoner]]"
Alignment: "[[Lawful Neutral]]"
Religion: 
Condition: Healthy
Location:
  - "[[Glitterfall]]"
Groups: 
PartyStanding: Friendly
PhysicalFeatures:
  - "Distinctive jewelry: earrings, necklace, circlet, bracelets"
  - Pronounced scar
SocialTrait:
  - Curious
  - Honest
Talents:
  - Speaks several languages fluently
  - Draws beautifully
Mannerisms:
  - Fidgets
  - Paces
  - Taps fingers
PersonalityTrait: 
Bonds:
  - Loyal to a benefactor, patron, or employer
FlawSecret:
  - Secret crime or misdeed
Ideals: Neutral Ideal - Knowledge
HighAbility: Intelligence — studious; learned; inquisitive
LowAbility: Strength — feeble; scrawny
dg-home: true
dg-publish: true
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
> **Occupation** | `INPUT[suggester(optionQuery("6. Database/World-Building-main/Occupations")):Occupation]` |
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
> 
>> [!metadata|text-Center bg-c-gray] Interesting Physical Features
>> `INPUT[inlineList:PhysicalFeatures]`
>
>> [!metadata|text-Center bg-c-gray] Ideals
>> `INPUT[inlineSelect(option(Good Ideal - Beauty,Good Ideal - Beauty),option(Good Ideal - Charity,Good Ideal - Charity),option(Good Ideal - Greater good,Good Ideal - Greater good),option(Good Ideal - Life,Good Ideal - Life),option(Good Ideal - Respect,Good Ideal - Respect),option(Good Ideal - Self-sacrifice,Good Ideal - Self-sacrifice),option(Evil Ideal - Domination,Evil Ideal - Domination),option(Evil Ideal - Greed,Evil Ideal - Greed),option(Evil Ideal - Might,Evil Ideal - Might),option(Evil Ideal - Pain,Evil Ideal - Pain),option(Evil Ideal - Retribution,Evil Ideal - Retribution),option(Evil Ideal - Slaughter,Evil Ideal - Slaughter),option(Lawful Ideal - Community,Lawful Ideal - Community),option(Lawful Ideal - Fairness,Lawful Ideal - Fairness),option(Lawful Ideal - Honor,Lawful Ideal - Honor),option(Lawful Ideal - Logic,Lawful Ideal - Logic),option(Lawful Ideal - Responsibility,Lawful Ideal - Responsibility),option(Lawful Ideal - Tradition,Lawful Ideal - Tradition),option(Chaotic Ideal - Change,Chaotic Ideal - Change),option(Chaotic Ideal - Creativity,Chaotic Ideal - Creativity),option(Chaotic Ideal - Freedom,Chaotic Ideal - Freedom),option(Chaotic Ideal - Independence,Chaotic Ideal - Independence),option(Chaotic Ideal - No limits,Chaotic Ideal - No limits),option(Chaotic Ideal - Whimsy,Chaotic Ideal - Whimsy),option(Neutral Ideal - Balance,Neutral Ideal - Balance),option(Neutral Ideal - Knowledge,Neutral Ideal - Knowledge),option(Neutral Ideal - Live and let live,Neutral Ideal - Live and let live),option(Neutral Ideal - Moderation,Neutral Ideal - Moderation),option(Neutral Ideal - Neutrality,Neutral Ideal - Neutrality),option(Neutral Ideal - People,Neutral Ideal - People),option(Other Ideals - Aspiration,Other Ideals - Aspiration),option(Other Ideals - Discovery,Other Ideals - Discovery),option(Other Ideals - Glory,Other Ideals - Glory),option(Other Ideals - Nation,Other Ideals - Nation),option(Other Ideals - Redemption,Other Ideals - Redemption),option(Other Ideals - Self-knowledge,Other Ideals - Self-knowledge)):Ideals]`
>
>> [!metadata|text-Center bg-c-gray] Social
>> `INPUT[inlineList:SocialTrait]`
>
>> [!metadata|text-Center bg-c-gray] Abilities
>> **High Ability** `INPUT[inlineSelect(option(Strength — powerful; brawny; strong as an ox,Strength — powerful; brawny; strong as an ox),option(Dexterity — lithe; agile; graceful,Dexterity — lithe; agile; graceful),option(Constitution — hard; hale; healthy,Constitution — hardy; hale; healthy),option(Intelligence — studious; learned; inquisitive,Intelligence — studious; learned; inquisitive),option(Wisdom — perceptive; spiritual; insightful,Wisdom — perceptive; spiritual; insightful),option(Charisma — persuasive; forceful; born leader,Charisma — persuasive; forceful; born leader)):HighAbility]`
>>
>> **Low Ability** `INPUT[inlineSelect(option(Strength — feeble; scrawny,Strength — feeble; scrawny),option(Dexterity — clumsy; fumbling,Dexterity — clumsy; fumbling),option(Constitution — sickly; pale,Constitution — sickly; pale),option(Intelligence — incurious; slow,Intelligence — incurious; slow),option(Wisdom — oblivious; absentminded,Wisdom — oblivious; absentminded),option(Charisma — dull; boring,Charisma — sull; boring)):LowAbility]`
>
>> [!metadata|text-Center bg-c-gray] Likes/Dislikes
>> **Likes:** `INPUT[inlineList:Likes]`
>>
>> **Dislikes:** `INPUT[inlineList:Dislikes]`
>
>> [!metadata|text-Center bg-c-gray] Talents
>> `INPUT[inlineList:Talents]`
>
>> [!metadata|text-Center bg-c-gray] Mannerisms
>> `INPUT[inlineList:Mannerisms]`
>
>> [!metadata|text-Center bg-c-gray] Motivations
>> `INPUT[inlineList:Motivations]`
>
>> [!metadata|text-Center bg-c-gray] Bonds
>> `INPUT[inlineList:Bonds]`
>
>> [!metadata|text-Center bg-c-gray] Flaw or Secret
>> `INPUT[inlineList:FlawSecret]`

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
