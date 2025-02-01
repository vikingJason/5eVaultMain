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

| Player | Pronouns | Gender | Race | Alignment | Class | Background | Religion |
| ------ | -------- | ------ | ---- | --------- | ----- | ---------- | -------- |
<!-- SerializedQuery END -->






<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players from "1-Session Journals" where (type = "Session Journal") SORT file.name DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players from "1-Session Journals" where (type = "Session Journal") SORT file.name DESC -->

| Session Date | Status | players |
| ------------ | ------ | ------- |
<!-- SerializedQuery END -->



# NPCs

<!-- QueryToSerialize: TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, Groups  FROM "content/4. World/NPCs" WHERE contains(Role, "NPC") -->
<!-- SerializedQuery: TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, Race, Location, Groups  FROM "content/4. World/NPCs" WHERE contains(Role, "NPC") -->

| NPC Name | Gender | Race | Location | Groups |
| -------- | ------ | ---- | -------- | ------ |
<!-- SerializedQuery END -->






# Recently Modified Locations


<!-- QueryToSerialize: TABLE without id file.link as Place, Art, Region, Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "content/4. World/Places/Calindor" SORT file.mtime DESC LIMIT 10 -->
<!-- SerializedQuery: TABLE without id file.link as Place, Art, Region, Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "content/4. World/Places/Calindor" SORT file.mtime DESC LIMIT 10 -->

| Place | Art | Region | Type | Government | Ruler | Defences | Law | Military | Factions |
| ----- | --- | ------ | ---- | ---------- | ----- | -------- | --- | -------- | -------- |
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
