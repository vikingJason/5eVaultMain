---
obsidianUIMode: preview
draft: true
campaign: HoH
---

![[dd_ravenloft_twitter-header.jpg|banner]]

> [!cards|4]
> **[[Barovia-1.JPG]]**
> [![[Barovia-1.JPG\|sban htiny ctr]]](Barovia.md)
> 
> **[[Link]]**
> !JourneyBoard.png\|sban htiny ctr]]](Journey%20Board)
>
> **[[Link]]**
> !AdventureIcon.png\|sban htiny ctr]]](Lampoteuo)
> 
> **[[Link]]**
> [![[Party 1.jpg\|sban htiny ctr p+t]]](Players.md)


>[!success] Recent Sessions:
> ```dataviewjs
> const currentFolder = dv.current().file.folder; 
> const pages = dv.pages(`"${currentFolder}/Sessions"`)
>                  .sort(p => dv.date(p["sessionDate"]), 'desc')
>                  .limit(3);
> if (pages.length) {
>     dv.header(4, "Session Links");
>     dv.list(pages.map(p => p.file.link));
> }
> ```

> [!success] Recent Sessions:
> ```base
> filters:
>   and:
> 	 - file.hasProperty("sessionDate")
> 	 - SessionNotes == this.file.properties.campaign 
> views:
>   - type: table
>     name: Sessions
>     sort:
>       - property: sessionDate
>         direction: DESC
> 
> ```

# Session Journals

> [!success] Recent Sessions:
> ```base
> filters:
>   and:
> 	 - file.hasProperty("sessionDate")
> 	 - SessionNotes == this.file.properties.campaign 
> views:
>   - type: cards
>     name: Sessions
>     sort:
>       - property: sessionDate
>         direction: DESC
>     cardSize: 200
>     imageFit: contain
>     imageAspectRatio: 0.25
> 
> ```





```dataview  
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Class, Race, level, Role  
from "1-Party"  
where (Role = "Player")  
where (Status = "Active")  
```

# Recently Modified NPCs

```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Age, Location, AssociatedGroup  
FROM "3-Mechanics/NPCs"
WHERE (NoteIcon = "npc") 
SORT file.mtime DESC
LIMIT 10
```

# Recently Modified Locations

```dataview  
TABLE WITHOUT ID link(file.name) AS "Location Name", type, Government, Community-Size, size, population  
FROM "2-World"
WHERE (NoteIcon = "Settlement")  
SORT file.mtime DESC
LIMIT 10
```


# Recently Modified Notes
```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AS "Note",
    file.mtime AS "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(30 days)
AND file.name != this.file.name
    AND !contains(file.path, "z_Assets")
    AND !contains(file.path, "Inline Scripts")
    AND !contains(file.path, "z_Templates")
    AND !contains(file.path, "daily notes")
    AND !contains(file.path, "BRAT")
SORT file.mtime DESC
LIMIT 10
```

![[Vault Report]]


