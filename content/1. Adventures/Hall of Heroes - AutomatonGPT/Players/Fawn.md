---
name: Fawn
faction_standing:
  The Knights of the First Order: 1
  Neighbourhood Watch: 2
tags: []
---

```dataviewjs
const player = dv.current();
const factions = dv.pages('"content/1. Adventures/Hall of Heroes - AutomatonGPT/Factions"')
	.where(p => p.type ==="faction");

let tableData = [];

for (let faction of factions) {
    let factionName = faction.faction;
    let playerStanding = player.faction_standing?.[factionName] || 0;

    // Ensure benefits is treated as an array
    let benefitsList = Array.isArray(faction.benefits) ? faction.benefits : [];

    // Filter benefits the player qualifies for
    let qualifiedBenefits = benefitsList
        .filter(b => playerStanding >= b.standing)
        .map(b => b.reward)
        .join(", "); 

    tableData.push([factionName, playerStanding, qualifiedBenefits || "No benefits yet"]);
}

dv.table(["Faction", "Your Standing", "Benefits"], tableData);

```