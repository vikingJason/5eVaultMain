

~~~dataviewjs
let input = {
  "query": 'TABLE without id file.link as Place, Art, Region, SettlementType as Type, GovtType as Government, Ruler, Defences, Law, Military, Factions FROM "4. World/Places/Calindor" WHERE contains(Type, "Settlement")',
  "filterColumnCount": 3,
  "markdownTable": false,
  "columnsWithoutFilters": ["Government","Defences","Art","Law","Military","Region","Ruler","Factions","Art",],
  "filterCalloutColor": "blue",
  "its_cards": {
      "enabled": false,
      "columns": 3
  }
}
await dv.view("z_Templates/custom/filtering_dv", input) 
~~~

