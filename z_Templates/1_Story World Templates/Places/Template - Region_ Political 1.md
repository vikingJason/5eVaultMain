---
NoteIcon: Region
Tags:
  - Category/Region
type: Region
parentRegion:
government:
ruler:
alignment:
population:
capital:
majorSettlements:
factions:
commonRaces:
religions:
exports:
imports:
terrain:
climate:
warStatus:
dragonarmyPresence:
---

# <% tp.file.title %>

> [!infobox]
> # `=this.file.name`
>
> ![[z_Assets/Misc/MapPlaceholder.png|cover hsmall]]
>
> #### Geography
>
> | | |
> |---|---|
> | Type | `=this.type` |
> | Parent Region | `=this.parentRegion` |
> | Terrain | `=this.terrain` |
> | Climate | `=this.climate` |
>
> #### Government
>
> | | |
> |---|---|
> | Government | `=this.government` |
> | Ruler | `=this.ruler` |
>
> #### Society
>
> | | |
> |---|---|
> | Population | `=this.population` |
> | Common Races | `=this.commonRaces` |
> | Religions | `=this.religions` |
>
> #### Commerce
>
> | | |
> |---|---|
> | Exports | `=this.exports` |
> | Imports | `=this.imports` |
>
> #### Current Situation
>
> | | |
> |---|---|
> | War Status | `=this.warStatus` |
> | Dragon Army Activity | `=this.dragonarmyPresence` |

---

# Overview

## Description

## History

## Geography

## Culture

## Government

## Military

## Factions

## Religion

## Current Events

## Settlements

```dataview
TABLE settlementType AS "Type"
FROM ""
WHERE contains(region,this.file.link)
SORT file.name