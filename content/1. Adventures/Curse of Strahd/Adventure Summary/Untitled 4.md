

``` mermaid

%%{ init: { 'flowchart': { 'curve': 'catmullRom' } }%%

graph TD
	
	classDef level fill:#bbf
	classDef treasure fill:#a5d6b2
	
	
	subgraph one
		direction LR
		A{Old Svalich Road}
		B{Gates of Barovia}
		C{Svalich Woods}
		D{River Ivlis}
		E{Village of Barovia} --> E1[Level 3]
		
		A --> B
		B --> C
		C --> D
		D --> E
		
	end
	
	
	F{River Ivlis Crossroads} --> F1[Level 3]:::level
	G{Tser Pool Envcampment} --> G1[Level 3]:::level
	H{Tser Falls} --> H1[Level 3]:::level
	I{Black Carriage}
	J{Gates of Ravenloft}
	K{Castle Ravenloft} --> K1[Level 9]:::level
	L{Lake Zarovich}
	M{Mad Mage of  Mount Baratok}
	N{Town of Vallaki} --> NN1[Level 4]:::level
	O{Old Bonegrinder} --> O1[Level 4]:::level
	P{Luna River Crossroads}
	Q{Argynvostholt} --> Q1[Level 7]:::level
	R{Raven River Crossroads}
	S{Village of Krezk} --> S1[Level 5]:::level
	T{Tsolenka Pass} --> T1[Level 8]:::level
	U{Ruins of Berez} --> U1[Level 8]:::level
	V{Van Richten’s Tower} --> V1[Level 6]:::level
	W{The Wizard of Wines} --> W1[Level 5]:::level
	X{The Amber Temple} --> X1[Level 9]:::level
	Y{Yester Hill} --> Y1[Level 6]:::level
	Z{Werewolf Den} --> Z1[Level 7]:::level
	E2[Death House]
	
	one --> F
	E --> E2
	F --> G
	G --> H
	H --> I
	I --> J
	I --> O
	I --> N
	J --> K
	L --> M
	S --"Something Borrowed" event--> N
	one --> S
	S <--> W
	N --> W
	S --"Something Blue" event <br> Strahd invites--> J
	N --"St Andral's Feast" event <br> Strahd invites--> J
	N --Bring Back Patrina from the Dead--> X
	N --"Tyger, Tyger" event--> V
	
	V --> V2[Tome of Strahd]:::treasure
	U --> U2[The Holy Symbol of Ravenkind]:::treasure
	Q --> Q2[The Sunsword]:::treasure
	N --> N2[Strahd's Enemy]
	
	E2 --Hag helped the cult create the shambling mound--> O
	
	O --Kereza and Kereza will be waiting outside <br> Barovian scouts <br> Offers to take the children back to town <br> Shares the location of the cache --> A2{{Van Richten’s Cache}}
	click A2 "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C1b.+Van+Richten%E2%80%99s+Cache" _blank
    
    A2 --> A3{{Skeletal Rider}}
    click A3 "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C5.+The+Skeletal+Rider" _blank
    
    A3 --> A4[The Watchtower]
    click A4 "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C6.+The+Watchtower" _blank
	
    A4 --> N
    A3 --> N
	
    A4 --> L
    A3 --> L
	
    click L "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C10.+The+Deep+Woods" _blank
	O --Map to Amber Temple <br> and warning--> X
	O --Map to Argynvostholt <br> and warning--> Q
	
	G --Strahd Spy--> G2((Eliza))
	
	O --ravens circling--> O2[ring of four squat megaliths at the forest’s edge]
	
```