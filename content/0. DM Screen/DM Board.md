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


<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name) AS "Player", Pronouns, Gender, Race, Alignment, Class, Background, Religion FROM "content/4. World" WHERE contains(Role, "Player") -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name) AS "Player", Pronouns, Gender, Race, Alignment, Class, Background, Religion FROM "content/4. World" WHERE contains(Role, "Player") -->

| Player                                       | Pronouns  | Gender | Race    | Alignment       | Class    | Background | Religion |
| -------------------------------------------- | --------- | ------ | ------- | --------------- | -------- | ---------- | -------- |
| [[content/4. World/Players/Nox.md\|Nox]]     | He/Him    | Male   | Gnome   | Chaotic Neutral | Warlock  | Acrobat    | \-       |
| [[content/4. World/Players/Reeva.md\|Reeva]] | They/Them | Other  | Eladrin | Chaotic Good    | Sorceror | Folk Hero  | \-       |
<!-- SerializedQuery END -->



<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players from "1-Session Journals" where (type = "Session Journal") SORT file.name DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players from "1-Session Journals" where (type = "Session Journal") SORT file.name DESC -->

| Session Date | Status | players |
| ------------ | ------ | ------- |
<!-- SerializedQuery END -->


# NPCs

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, Groups  FROM "content/4. World/NPCs" WHERE contains(Role, "NPC") -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, Groups  FROM "content/4. World/NPCs" WHERE contains(Role, "NPC") -->

| NPC Name                                                                      | Gender | Race                   | Location                                                                                            | Groups                                                                                           |
| ----------------------------------------------------------------------------- | ------ | ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [[content/4. World/NPCs/Aeloria Starwind.md\|Aeloria Starwind]]               | Female | Half-Elf               | Elmswatch Enclave                                                                                   | The Moonlit Order                                                                                |
| [[content/4. World/NPCs/Calarel Qizumin.md\|Calarel Qizumin]]                 | Female | [[Elf\|Elf]]           | <ul><li>[[content/4. World/Places/Calindor/Glitterfall/Glitterfall.md\|Glitterfall]]</li></ul>     | \-                                                                                               |
| [[content/4. World/NPCs/Elara Oakheart.md\|Elara Oakheart]]                   | Female | [[Half-Elf\|Half-Elf]] | \-                                                                                                  | \-                                                                                               |
| [[content/4. World/NPCs/Elias.md\|Elias]]                                     | Male   | [[Human\|Human]]       | [[content/4. World/Places/Calindor/Borfaldor/Petalwood/Petalwood.md\|Petalwood]]                    | \-                                                                                               |
| [[content/4. World/NPCs/Elrohir Telrun.md\|Elrohir Telrun]]                   | Male   | Leonin                 | Petalwood                                                                                           | The Dawn's Shadow, King's Guard                                                                  |
| [[content/4. World/NPCs/Elysandra Windwhisper.md\|Elysandra Windwhisper]]     | Female | Elf                    | Enchanted Glade in the Forest of Whispers                                                           | The Circle of Enchanters                                                                         |
| [[content/4. World/NPCs/Elysia Windwhisper.md\|Elysia Windwhisper]]           | Female | Half-Elf               | The Singing Woods Tavern                                                                            | The Whispering Lyre Performers                                                                   |
| [[content/4. World/NPCs/Finroth Tilvenar.md\|Finroth Tilvenar]]               | Male   | [[Elf\|Elf]]           | <ul><li>[[content/4. World/Places/Calindor/Borfaldor/Petalwood/Petalwood.md\|Petalwood]]</li></ul> | [[content/4. World/Factions/Welcomers.md\|Welcomers]]                                            |
| [[content/4. World/NPCs/Thistledown Whisperwind.md\|Thistledown Whisperwind]] | Female | [[pixie\|Pixie]]       | [[content/4. World/Places/Calindor/Borfaldor/Petalwood/Petalwood.md\|Petalwood]]                    | [[content/4. World/Factions/The Whispering Court/The Whispering Court.md\|The Whispering Court]] |
<!-- SerializedQuery END -->


> [!callout]-
>meta-bind-button
>label: New NPC
>hidden: false
>id: ""
>style: primary
>actions:
>- type: templaterCreateNote
>   templateFile: "z_Templates/Template - NPC New.md"
>    fileName: NewNPC
>


# Recently Modified Locations


<!-- QueryToSerialize: TABLE without id file.link as Place, Art, Region, Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "content/4. World/Places/Calindor" SORT file.mtime DESC LIMIT 10 -->
<!-- SerializedQuery: TABLE without id file.link as Place, Art, Region, Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "content/4. World/Places/Calindor" SORT file.mtime DESC LIMIT 10 -->

| Place                                                                                 | Art | Region      | Type        | Government | Ruler       | Defences | Law | Military | Factions    |
| ------------------------------------------------------------------------------------- | --- | ----------- | ----------- | ---------- | ----------- | -------- | --- | -------- | ----------- |
| [[content/4. World/Places/Calindor/Kiduzia/Al-Qulem/Wonard.md\|Wonard]]               | \-  | Kiduzia     | placeholder | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Kiduzia/Al-Qulem/Al-Qulem.md\|Al-Qulem]]           | \-  | Kiduzia     | placeholder | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Kiduzia/Kiduzia.md\|Kiduzia]]                      | \-  | Calindor    | Region      | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Isyesari/Imselon/Wonard.md\|Wonard]]               | \-  | Isyesari    | placeholder | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Isyesari/Imselon/Imselon.md\|Imselon]]             | \-  | Isyesari    | placeholder | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Isyesari/Isyesari.md\|Isyesari]]                   | \-  | Calindor    | Region      | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Glitterfall/Heartgrave/Wonard.md\|Wonard]]         | \-  | Glitterfall | placeholder | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Glitterfall/Heartgrave/Heartgrave.md\|Heartgrave]] | \-  | Glitterfall | placeholder | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Glitterfall/Glitterfall.md\|Glitterfall]]          | \-  | Calindor    | Region      | \-         | placeholder | \-       | \-  | \-       | placeholder |
| [[content/4. World/Places/Calindor/Erradirn/Heartgrave/Wonard.md\|Wonard]]            | \-  | Erradirn    | placeholder | \-         | placeholder | \-       | \-  | \-       | placeholder |
<!-- SerializedQuery END -->






# **Session Log**
#### **[[Session Notes Database|New Session Log]]**

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "SessionNote") AND contains(WhichParty, "Party 1") SORT file.name desc LIMIT 9 -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "SessionNote") AND contains(WhichParty, "Party 1") SORT file.name desc LIMIT 9 -->

| Name | QuickNotes |
| ---- | ---------- |
<!-- SerializedQuery END -->





# **Quests**
#### **[[Quest Database| New Quest]]**

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Quest") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Quest") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->

| Name | QuickNotes |
| ---- | ---------- |
<!-- SerializedQuery END -->



#### **[[Quest Database| New Side Quest]]**

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Side") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Side") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->

| Name | QuickNotes |
| ---- | ---------- |
<!-- SerializedQuery END -->



# **Notes**
