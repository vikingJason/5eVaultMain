---
obsidianUIMode: preview
dg-home: false
dg-publish: false
---


> [!cards|4]
> **[[Calindor_Map.jpg]]**
> [![[Borfaldor_Map.png\|sban htiny ctr]]](Borfaldor.md)
> 
> **Link]]**
> !JourneyBoard.png\|sban htiny ctr]]](Journey%20Board)
>
> **Link]]**
> !AdventureIcon.png\|sban htiny ctr]]](Lampoteuo)
> 
> **[Link]]**
> [![[Party 1.jpg\|sban htiny ctr p+t]]|](Players)


~~~dataview
TABLE WITHOUT ID link(file.name) AS "Player", Pronouns, Gender, Race, Alignment, Class, Background, Religion 
FROM "content/4. World" 
WHERE contains(Role, "Player")
~~~




> [!infobox|center]
> # Session Journals
> ```dataview
TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players
from "1-Session Journals"
where (type = "Session Journal")
SORT file.name DESC

# NPCs

```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, Groups  
FROM "content/4. World/NPCs"
WHERE contains(Role, "NPC")
```

```meta-bind-button
label: New NPC
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/Template - NPC New.md"
    fileName: NewNPC
```
# Recently Modified Locations

```dataview  
TABLE without id file.link as Place, Art, Region, Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "content/4. World/Places/Calindor" 
SORT file.mtime DESC
LIMIT 10
```





````

# **Session Log**
#### **[[Session Notes Database|New Session Log]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "SessionNote") AND contains(WhichParty, "Party 1")
>SORT file.name desc LIMIT 9
>```

# **Quests**
#### **[[Quest Database| New Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "Quest") AND contains(WhichParty, "Party 1") AND contains(status, "Active")
>SORT file.name asc
>```

#### **[[Quest Database| New Side Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "Side") AND contains(WhichParty, "Party 1") AND contains(status, "Active")
>SORT file.name asc
>```

# **Notes**
````