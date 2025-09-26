---
obsidianUIMode: preview
draft: true
campaign: CoS
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

## 📚 Chapter Links
```dataviewjs
const targetFolder = "content/1. Adventures"; // Update to your folder path

try {
    const folder = app.vault.getFolderByPath(targetFolder);
    
    if (!folder) {
        dv.paragraph(`❌ Folder not found: "${targetFolder}"`);
    } else {
        // Get all subfolders
        const subfolders = (folder.children || []).filter(item => item.children);
        
        // Find matching folder notes
        const folderData = subfolders.map(subfolder => {
            const expectedNotePath = `${subfolder.path}/${subfolder.name}.md`;
            const note = app.vault.getAbstractFileByPath(expectedNotePath);
            return {
                folder: subfolder,
                note: note,
                exists: !!note,
                path: expectedNotePath
            };
        });
        
        // Separate existing and missing notes
        const existingNotes = folderData.filter(x => x.exists);
        const missingNotes = folderData.filter(x => !x.exists);
        
        // Display existing notes as headers
        if (existingNotes.length > 0) {
            existingNotes.forEach(fn => {
                dv.header(4, `[[${fn.note.path}|${fn.folder.name}]]`);
            });
        }
        
        // Display missing notes section
        if (missingNotes.length > 0) {
            missingNotes.forEach(mn => {
                dv.paragraph(`❌ ${mn.folder.name} ([[${mn.path}|create]])`);
            });
            
            // Create button for missing notes
            const btn = this.container.createEl('button', {
                text: 'Create All Missing Notes',
                cls: 'mod-cta'
            });
            
            btn.addEventListener('click', async () => {
                for (const mn of missingNotes) {
                    try {
                        await app.vault.create(mn.path, `# ${mn.folder.name}\n\n## Summary\n\n## NPCs\n\n## Locations\n\n## Plot Points`);
                        dv.paragraph(`✅ Created: [[${mn.path}]]`);
                    } catch (e) {
                        dv.paragraph(`❌ Failed to create ${mn.path}: ${e.message}`);
                    }
                }
                // Refresh the view after creation
                setTimeout(() => { this.container.removeChild(btn) }, 1000);
            });
            
            this.container.appendChild(btn);
        }
        
        // Show message if no folder notes exist at all
        if (folderData.length === 0) {
            dv.paragraph(`No subfolders found in "${targetFolder}"`);
        } else if (missingNotes.length === 0 && existingNotes.length > 0) {
            dv.paragraph(`✅ All ${existingNotes.length} folder notes exist!`);
        }
    }
} catch (error) {
    dv.paragraph(`❌ Error: ${error.message}`);
}
```

>[!success] Recent Sessions:
> ```dataviewjs
> const currentFolder = dv.current().file.folder; 
> const pages = dv.pages(`"${currentFolder}/Session Journals"`)
>                  .sort(p => dv.date(p["sessionDate"]), 'desc')
>                  .limit(3);
> if (pages.length) {
>     dv.header(4, "Session Links");
>     dv.list(pages.map(p => p.file.link));
> }
> ```

<br>

> [!success] Recent Sessions:
> ```base
> filters:
>   and:
> 	 - file.hasProperty("sessionDate")
> 	 - SessionNote == this.file.properties.campaign 
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
> 	 - SessionNote == this.file.properties.campaign 
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


