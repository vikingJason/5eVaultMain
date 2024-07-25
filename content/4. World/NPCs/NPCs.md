---
Type:
  - NPCTable
dg-publish: false
---



````
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
````

````
```dataview  
TABLE without id file.link as NPC, Pronounced, Art, Race, Gender, Pronouns, Sexuality, Age, Occupation, Alignment, Religion, Condition, Location, Groups as Associations, PartyStanding as PartyRelationship FROM "content/4. World" WHERE contains(Role, "NPC")

```
````


<!-- QueryToSerialize: TABLE without id file.link as NPC, Pronounced, Art, Race, Gender, Pronouns, Sexuality, Age, Occupation, Alignment, Religion, Condition, Location, Groups as Associations, PartyStanding as PartyRelationship FROM "content/4. World" WHERE contains(Role, "NPC") -->
<!-- SerializedQuery: TABLE without id file.link as NPC, Pronounced, Art, Race, Gender, Pronouns, Sexuality, Age, Occupation, Alignment, Religion, Condition, Location, Groups as Associations, PartyStanding as PartyRelationship FROM "content/4. World" WHERE contains(Role, "NPC") -->

| NPC                                                                           | Pronounced | Art | Race                   | Gender | Pronouns | Sexuality | Age          | Occupation                                                                       | Alignment                          | Religion                                                                | Condition | Location                                                                                            | Associations                                                                                     | PartyRelationship |
| ----------------------------------------------------------------------------- | ---------- | --- | ---------------------- | ------ | -------- | --------- | ------------ | -------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------- |
| [[content/4. World/NPCs/Aeloria Starwind.md\|Aeloria Starwind]]               | \-         | \-  | Half-Elf               | Female | \-       | \-        | \-           | Enchanter                                                                        | Chaotic Good                       | Sehanine Moonbow                                                        | Alive     | Elmswatch Enclave                                                                                   | The Moonlit Order                                                                                | Friendly          |
| [[content/4. World/NPCs/Calarel Qizumin.md\|Calarel Qizumin]]                 | \-         | \-  | [[Elf\|Elf]]           | Female | He/Him   | Asexual   | Mature Adult | [[6. Database/World-Building-main/Occupations/Government/summoner.md\|summoner]] | [[Lawful Neutral\|Lawful Neutral]] | \-                                                                      | Healthy   | <ul><li>[[content/4. World/Places/Calindor/Glitterfall/Glitterfall.md\|Glitterfall]]</li></ul>     | \-                                                                                               | Friendly          |
| [[content/4. World/NPCs/Elara Oakheart.md\|Elara Oakheart]]                   | \-         | \-  | [[Half-Elf\|Half-Elf]] | Female | She/Her  | Bisexual  | Mature Adult | \-                                                                               | [[Chaotic Good\|Chaotic Good]]     | \-                                                                      | Healthy   | \-                                                                                                  | \-                                                                                               | \-                |
| [[content/4. World/NPCs/Elias.md\|Elias]]                                     | \-         | \-  | [[Human\|Human]]       | Male   | He/Him   | Straight  | Mature Adult | [[6. Database/World-Building-main/Occupations/Services/miller.md\|miller]]       | [[Neutral Good\|Neutral Good]]     | \-                                                                      | Healthy   | [[content/4. World/Places/Calindor/Borfaldor/Petalwood/Petalwood.md\|Petalwood]]                    | \-                                                                                               | Friendly          |
| [[content/4. World/NPCs/Elrohir Telrun.md\|Elrohir Telrun]]                   | \-         | \-  | Leonin                 | Male   | \-       | \-        | \-           | Sheriff of Petalwood                                                             | Lawful Neutral                     | Worships Solonor Thelandira                                             | Healthy   | Petalwood                                                                                           | The Dawn's Shadow, King's Guard                                                                  | Potential Ally    |
| [[content/4. World/NPCs/Elysandra Windwhisper.md\|Elysandra Windwhisper]]     | \-         | \-  | Elf                    | Female | \-       | \-        | \-           | Enchanter                                                                        | Chaotic Good                       | Follower of Corellon Larethian                                          | Healthy   | Enchanted Glade in the Forest of Whispers                                                           | The Circle of Enchanters                                                                         | Potential Ally    |
| [[content/4. World/NPCs/Elysia Windwhisper.md\|Elysia Windwhisper]]           | \-         | \-  | Half-Elf               | Female | \-       | \-        | \-           | Bard and Storyteller                                                             | Chaotic Good                       | Sehanine Moonbow                                                        | Healthy   | The Singing Woods Tavern                                                                            | The Whispering Lyre Performers                                                                   | Friendly          |
| [[content/4. World/NPCs/Finroth Tilvenar.md\|Finroth Tilvenar]]               | Fin-Roth   | \-  | [[Elf\|Elf]]           | Male   | He/Him   | Straight  | Mature Adult | \-                                                                               | [[Neutral Evil\|Neutral Evil]]     | [[content/4. World/Religion/Deities/elven-zandilar.md\|elven-zandilar]] | Healthy   | <ul><li>[[content/4. World/Places/Calindor/Borfaldor/Petalwood/Petalwood.md\|Petalwood]]</li></ul> | [[content/4. World/Factions/Welcomers.md\|Welcomers]]                                            | Hostile           |
| [[content/4. World/NPCs/Thistledown Whisperwind.md\|Thistledown Whisperwind]] | \-         | \-  | [[pixie\|Pixie]]       | Female | She/Her  | Bisexual  | Adult        | [[baker\|baker]]                                                                 | [[Chaotic Good\|Chaotic Good]]     | \-                                                                      | Healthy   | [[content/4. World/Places/Calindor/Borfaldor/Petalwood/Petalwood.md\|Petalwood]]                    | [[content/4. World/Factions/The Whispering Court/The Whispering Court.md\|The Whispering Court]] | Friendly          |
<!-- SerializedQuery END -->


````
~~~dataviewjs
let input = {
  "query": 'TABLE without id file.link as NPC, Pronounced, Art, Race, Gender, Pronouns, Sexuality, Age, Occupation, Alignment, Religion, Condition, Location, Groups as Associations, PartyStanding as PartyRelationship FROM "4. World" WHERE contains(Role, "NPC")',
  "filterColumnCount": 3,
  "markdownTable": false,
  "columnsWithoutFilters": ["NPC", "Pronounced", "Art", "Pronouns", "Sexuality", "Occupation", "Alignment", "Religion", "Associations", "PartyRelationship", "Location", "Age", "Race", "Gender", "Condition",],
  "filterCalloutColor": "blue",
  "its_cards": {
      "enabled": false,
      "columns": 3
  }
}
await dv.view("z_Templates/custom/filtering_dv", input) 
~~~
````


