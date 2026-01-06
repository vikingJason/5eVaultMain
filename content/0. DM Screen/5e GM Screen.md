---
obsidianUIMode: preview
draft: false
---



![[5eGMScreen.png]]


>[!multi-column] Abilities and Skills
>
>>[! important  |wide-2 ttl-c n-th]- Skill Checks
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
>> [! important  |bg-c-purple ttl-c n-th]- Check Rules
>>>![[CheckRules.base]]
>
>> [! important  |bg-c-green ttl-c n-th]- Abilities
>>>![[Abilities.base]]

<br>

>[! important  |bg-c-red color-red ttl-c n-th]- Conditions
>>```base
>> formulas:
>>  first_image: |
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
>>[!danger | bg-c-green  ttl-c]- Combat Actions
>>>![[CombatActions.base]]
>
>>[!danger | bg-c-yellow  ttl-c]- Combat Rules
>>>![[CombatRules.base]]

<br>

>[!tldr | bg-c-gray  ttl-c]- DM Tools
>
>>![[DMTools.base]]

<br>

>[! | bg-c-orange  ttl-c]- Campaign Maps
> 

<br>

> [!example |  ttl-c ]- Rules Reference
>>[!cards| dataview]
>>```dataview
>>TABLE 
>>FROM #5er-ref
>>SORT file.link ASC
>> ```


<br>

>[! health |  bg-c-red ttl-c n-th]- Healing
>>![[HealthRules.base]]

<br>

> [!example|  ttl-c]- Exploration and Downtime Activities
>>[!cards| dataview]
>> ```dataview 
>> TABLE
>> FROM #5edowntime or #5e-exploration
>> SORT file.link ASC