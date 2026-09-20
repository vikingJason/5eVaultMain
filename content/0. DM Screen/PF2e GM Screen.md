---
sessions:
tags:
  - eoemaps
  - Exploration
  - Downtime
---

# PF2e GM Screen

![[GMScreen.png]]


>[!multi-column] Abilities and Skills
>
>>[! important |wide-2 ttl-c n-th]- Skill Checks
>>
>>>```base
>>>properties:
>>>  file.folderName:
>>>views:
>>>  - type: table
>>>    name: Skill Checks
>>>    filters:
>>>      and:
>>>        - noteType == "skillCheck"
>>>    order:
>>>      - file.name
>>>      - folderName
>>>      - cardDisplay
>>>    sort:
>>>      - property: file.name
>>>        direction: ASC
>>>      - property: folderName
>>>        direction: ASC
>>>    columnSize:
>>>      file.name: 200
>>> ```

<br>

>[!multi-column] 
>
>> [! important |bg-c-purple ttl-c n-th]- Check Rules
>>
>>>![[CheckRules.base]]
>
>> [! important |bg-c-green ttl-c n-th]- Abilities
>>
>>>![[Abilities.base]]

<br>

>[! important |bg-c-red color-red ttl-c n-th]- Conditions
>
>>```base
>> formulas:
> > first_image: |
>>    file.embeds.filter(value.containsAny("png","jpg","webp","svg","jpeg"))[0]
>> views:
>>  - type: cards
>>    name: Conditions
>>    filters:
>>      and:
>>        - noteType == "condition"
>>        - gamesystem.contains("D&D")
>>    image:  formula.first_image
>>    cardSize: 160
>>    imageFit: contain
>>    imageAspectRatio: 0.25
>> ```

<br>

>[!multi-column] Combat
>
>>[!danger | bg-c-green ttl-c]- Combat Actions
>>
>>>![[CombatActions.base]]
>
>>[!danger | bg-c-yellow ttl-c]- Combat Rules
>>
>>>![[CombatRules.base]]

<br>

>[!tldr | bg-c-gray ttl-c]- DM Tools
>
>>![[DMTools.base]]

<br>

>[! | bg-c-orange ttl-c]- Campaign Maps

<br>

> [!example | ttl-c ]- Rules Reference
>
>>[!cards| dataview]
>>>```dataview
>>>TABLE 
>>>FROM #5er-ref
>>>SORT file.link ASC
>> >```

<br>

>[! health | bg-c-red ttl-c n-th]- Healing
>
>>![[HealthRules.base]]

<br>

> [!example| ttl-c]- Exploration and Downtime Activities
>
>>[!cards| dataview]
>>> ```dataview 
>>> TABLE
>>> FROM #5edowntime or #5e-exploration
>>> SORT file.link ASC



```button
name New NPC
type note(NewNPC, split) template
action TemplateNPC2
templater true
```
^button-NewNPCID


>[!npc | bg-c-purple ttl-c]- Party Reference Info
>
>>[!column | no-i no-t]
>>
>>>[!info | clean]- Known Languages
>>>```dataview 
>>>TABLE WITHOUT ID languages AS "Language", rows.file.name AS "Spoken By" 
>>>FROM #eoepc 
>>>WHERE status != "dead" AND status != "left" AND !contains(file.name, "Session")
>>>FLATTEN languages 
>>>GROUP BY languages
>>>```
>>>
>>>[!info | clean ]- Player Overview
>>> ```dataview
>>>TABLE WITHOUT ID  aliases as Name, ac as AC, classDC as DC, passPer as "Passive Perception", level as Level
>>>FROM #eoepc
>>>WHERE status != "dead" AND status != "left" AND !contains(file.name, "Session")
>
>
>[! | bg-c-orange ttl-c]- Campaign Maps
>
>>[!cards| dataview] 
>> ```dataview 


>[!creature | ttl-c ]- Quick Creature Stats
>
>> [!example | clean no-t]
>> ![[Quick Creature Stats]]

>[!creature | background-color-red ttl-c ]- Creature Adjustments
>
>>[! column | no-i no-t 2 ]
>>
>>>[!info | bg-c-yellow ] Elite Adjustments
>>>
>>>*   +2 to AC, attack bonus, DCs, saves, Perception, skills.
>>>*    +2 to damage for Strikes and offensive abilities, or +4 to abilities that can be used a limited number of times.

| **Starting Level** | **HP Increase** |
| --- | --- |
| 1 or lower | 10 |
| 2-4 | 15 |
| 5-19 | 20 |
| 20+ | 30 |
>[!info | bg-c-green ] Weak Adjustment
> *   \-2 to AC, attack bonus, DCs, saves, Perception, skills.
> *    \-2 to damage for Strikes and offensive abilities, or +4 to abilities that can be used a limited number of times.

| **Starting Level** | **HP Decrease** |
| ------------------ | --------------- |
| 1-2                | 10              |
| 3-5                | 15              |
| 6-20               | 20              |
| 21+                | 30              |
|                    |                 |
