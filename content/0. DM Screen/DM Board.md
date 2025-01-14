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
| [[Nox]]     | He/Him    | Male   | Gnome   | Chaotic Neutral | Warlock  | Acrobat    | \-       |
| [[Reeva]] | They/Them | Other  | Eladrin | Chaotic Good    | Sorceror | Folk Hero  | \-       |
<!-- SerializedQuery END -->






<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players from "1-Session Journals" where (type = "Session Journal") SORT file.name DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players from "1-Session Journals" where (type = "Session Journal") SORT file.name DESC -->

| Session Date | Status | players |
| ------------ | ------ | ------- |
<!-- SerializedQuery END -->



# NPCs

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, Groups  FROM "content/4. World/NPCs" WHERE contains(Role, "NPC") -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, Groups  FROM "content/4. World/NPCs" WHERE contains(Role, "NPC") -->

| NPC Name                                                                      | Gender | Race             | Location                                                                         | Groups                                                                                           |
| ----------------------------------------------------------------------------- | ------ | ---------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [[Laundithas]]                           | Male   | Eladrin          | Petalwood                                                                        | The Syndicate                                                                                    |
| [[Lerendrie Silkban]]             | Female | Half-elf         | Petalwood                                                                        | The Syndicate                                                                                    |
| [[Martha Underbough]]             | Female | Halfling         | The Troll's Tollbooth, Starcrest                                                 | Local Merchants Guild, Halfling Community of Starcrest                                           |
| [[Master Aric Valtoris]]       | Male   | Human            | The Gilded Edge, Starcrest, The Silver Marches                                   | Starcrest Merchant's Guild                                                                       |
| [[Rhyvesh]]                                 | Male   | Darkling Elder   | Unknown                                                                          | Fae Separatists                                                                                  |
| [[Rorick]]                                   | Male   | Redcap           | Petalwood                                                                        | None                                                                                             |
| [[Thistledown Whisperwind]] | Female | [[pixie\|Pixie]] | [[Petalwood]] | [[The Whispering Court]] |
<!-- SerializedQuery END -->






# Recently Modified Locations


<!-- QueryToSerialize: TABLE without id file.link as Place, Art, Region, Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "content/4. World/Places/Calindor" SORT file.mtime DESC LIMIT 10 -->
<!-- SerializedQuery: TABLE without id file.link as Place, Art, Region, Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "content/4. World/Places/Calindor" SORT file.mtime DESC LIMIT 10 -->

| Place                                                                                                                                          | Art                                                              | Region                                                                 | Type                      | Government               | Ruler                                  | Defences   | Law    | Military | Factions    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------- | ------------------------ | -------------------------------------- | ---------- | ------ | -------- | ----------- |
| [[Blacksmith - True As Copper]]                           | \-                                                               | \-                                                                     | \-                        | \-                       | \-                                     | \-         | \-     | \-       | \-          |
| [[Petalwood]]                                                               | [[Petalwood - DM.jpg\|Petalwood - DM.jpg]] | [[Borfaldor]] | Settlement                | [[Feudalism]] | [[Finroth Tilvenar]] | None       | Warden | None     | placeholder |
| [[Borfaldor]]                                                                         | \-                                                               | [[Calindor]]             | <ul><li>Region</li></ul>  | \-                       | placeholder                            | \-         | \-     | \-       | placeholder |
| [[Calindor]]                                                                                     | \-                                                               | [[The Feywild]]                                           | <ul><li>Kingdom</li></ul> | \-                       | \-                                     | Formidable | \-     | \-       | \-          |
| [[Fight Club Club]]                                                             | \-                                                               | \-                                                                     | \-                        | \-                       | \-                                     | \-         | \-     | \-       | \-          |
| [[Carpenter Automaton - Oakheart Carpentry]] | \-                                                               | Borfaldor                                                              | \-                        | \-                       | \-                                     | \-         | \-     | \-       | \-          |
| [[Blacksmith - The Iron Arms]]                             | \-                                                               | \-                                                                     | \-                        | \-                       | \-                                     | \-         | \-     | \-       | \-          |
| [[Fairweather Haven]]                                                                   | \-                                                               | \-                                                                     | \-                        | \-                       | \-                                     | \-         | \-     | \-       | \-          |
| [[The Jester's Jest]]                                               | \-                                                               | \-                                                                     | \-                        | \-                       | \-                                     | \-         | \-     | \-       | \-          |
| [[The Fermentery]]                                                     | \-                                                               | \-                                                                     | \-                        | \-                       | \-                                     | \-         | \-     | \-       | \-          |
<!-- SerializedQuery END -->









# **Session Log**
#### **[[Session Notes Database|New Session Log]]**

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "SessionNote") AND contains(WhichParty, "Party 1") SORT file.name desc LIMIT 9 -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "SessionNote") AND contains(WhichParty, "Party 1") SORT file.name desc LIMIT 9 -->

| Name | QuickNotes |
| ---- | ---------- |
<!-- SerializedQuery END -->

<!-- SerializedQuery END -->





# **Quests**
#### **[[Quest Database| New Quest]]**

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Quest") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Quest") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->

| Name | QuickNotes |
| ---- | ---------- |
<!-- SerializedQuery END -->

<!-- SerializedQuery END -->



#### **[[Quest Database| New Side Quest]]**

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Side") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.path, name) AS "Name", QuickNotes AS "QuickNotes" WHERE contains(NoteIcon, "Side") AND contains(WhichParty, "Party 1") AND contains(status, "Active") SORT file.name asc -->

| Name | QuickNotes |
| ---- | ---------- |
<!-- SerializedQuery END -->

<!-- SerializedQuery END -->



# **Notes**
