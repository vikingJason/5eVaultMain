````
```dataviewjs
const headers = ["NPC","Art","Pronounced","Race","Alignment","Gender","Condition","Location","Occupation","Associations"];
const rows = dv.pages('"4. World/NPCs"')
	.where(p => p.Role && p.Role.includes("NPC"))
	.map(p => [p.file.link, p.Art, p.Pronounced, p.Race, p.Alignment, p.Gender, p.Condition, p.Location, p.Occupation, p.AssociatedGroup]);
	
dv.table(headers, rows)
```
````