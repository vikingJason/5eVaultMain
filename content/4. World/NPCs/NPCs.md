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

| NPC | Pronounced | Art | Race | Gender | Pronouns | Sexuality | Age | Occupation | Alignment | Religion | Condition | Location | Associations | PartyRelationship |
| --- | ---------- | --- | ---- | ------ | -------- | --------- | --- | ---------- | --------- | -------- | --------- | -------- | ------------ | ----------------- |
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


