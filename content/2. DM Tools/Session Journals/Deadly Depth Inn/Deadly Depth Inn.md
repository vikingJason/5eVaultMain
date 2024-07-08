---
players:
---
# Deadly Depth Inn Overview
 
```dataviewjs

dv.span("**💀🧙‍♂️🧙‍♀️ D&D Session 🧙‍♀️🧙‍♂️💀**")

const calendarData = {
entries: [], // Populated in the DataviewJS loop below
year: 2022, // (optional) Defaults to current year
colors: { // (optional) Defaults to green
blue: ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"], // first entry is considered default if supplied
green: ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
red: ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
orange: ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
pink: ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
},
showCurrentDayBorder: true // (optional) Defaults to true
}
//DataviewJS loop
for(let page of dv.pages('"0. Session Journals/Deadly Depth Inn"')
.where(p=>p.sessionDate)
.sort(p=>p.sessionDate)){
calendarData.entries.push({
date: page.sessionDate, // (required) Format YYYY-MM-DD
intensity: page.sessionDate, // (required) Color intensity for entry, will map intensities automatically
})
}
/**
* param1 HTMLElement DOM reference for calendar rendering
* param2 CalendarData Calendar data object from above
*/
renderHeatmapCalendar(this.container, calendarData)
```

## Notes modified in last 10 days

```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AS "Note",
    file.mtime AS "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(10 days)
AND file.name != this.file.name
    AND file.name != "Inbox"
    AND file.name != "TODOs"
SORT file.mtime DESC 
```

<br>

> [!timeline|t-l] **01/01/2022** _Investigate the Manor_
> ![[Amastacia Manor.jpg|300]]

> [!timeline|t-r] **06/02/2022** *Reunited in Phlan*
> ![[06-02-2022 Reunited in Phlan#Short Summary]]

> [!timeline|t-l] **20-02-2022** _Graveyard Trip_
> The party accept a quest to venture into the graveyard and investigate rumors that one of the recently deceased may not have been who she says she was. 

> [!timeline|t-r] **01-03-2022** *The Chase Begins*
> The party accept a quest to chase down the soldiers and attempt to discover their plans. 

