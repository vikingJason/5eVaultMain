

``` mermaid
graph TD

	N[Vallaki]
	NA[Town Gates]
	NB[Searching Houses]
	N1[St Andal's Church]
	N2[Blue Water Inn]
	N3[Burgomaster's Mansion]
	N4[Wachterhaus]
	N5[Arasek Stockyard]
	N6[Coffin Maker's Shop]
	N7[Blinksy Toys]
	N8[Town Square]
	N9[Vistani Camp]
	
	NA --> NB
	NA --> N1
	NA --> N2
	NA --> N3
	NA --> N4
	NA --> N5
	NA --> N6
	NA --> N7
	NA --> N8
	NA --> N9
	
	
	
	NF(St Andral's Feast)
	
	N1A(Bones of St Andral) --Bones returned-->
	N1A1(Protected Grounds - Hallow)
	N1A --Bones not returned--> NF
	
	N1 --> N1A
	
	N2A(Wizard of Wines winery delivery)
	N2B(Keepers of the Feather)
	N2C(Wolf Hunters)
	N2D(Wachter Brothers)
	N2E(Rictavio)
	
	N2 --> N2A
	N2 --> N2B
	N2 --> N2C
	N2 --> N2D
	N2 --> N2E --> N2E1(Rictavio's Journal)
	
	N3A(The Baron <br> Good Side / Bad Side)
	N3B(The Baroness)
	N3C(The Baronet) --> N3C1(Teleportation Circle)
	N3D(Butler and Lady in waiting have gone missing) --> N3D1(Izek Investigating)
	N3E(Izek's Doll Collection)
	N3F(The Captive Shoemaker)
	N3G(Magic Mirror)
	N3H(Bridal Gown)
	
	N3A --Good--> N3A1(Invites them to next festival)
	N3A --Bad--> N3A2(Sends Guards to arrest)
	
	N3 --> N3A
	N3 --> N3B
	N3 --> N3C
	N3 --> N3H
	N3 --> N3D
	N3 --> N3E --> N7
	N3 --> N3F --If released--> N3F1(Izek sent to find him) --> N3F2(Udo provides names and descrtiptions) --> N3A2
	N3 --> N3G --Non-evil Summoner --> N3G1(Assassin)
	N3G --Evil Summoner --> N3G2(Ghost)
	N3G --Touch the Mirror and say Strahd's name--> N3G3(Strahd's image appears)
	N3D --> N3C1
	
	N4A(Lady Wachter's spy)
	N4B(Lady Wachter)
	N4B1(Marry off daughter Stella to Burgmaster's son Victor)
	N4B2(Created Cult)
	N4B4(Suggests killing Izek)
	N4B3(Take over Vallaki)
	
	
	N4 --> N2D
	N4 --> N4A
	N4 --> N4B
	
	N4B --> N4B3
	N4B3 --> N4B1
	N4B3 --> N4B2
	N4B3 --> N4B4
	
	N4B --If they admit they are enemies of Strahd--> N4B5(Marks them as enemies)
	
	NC(Festival of the Blazing Sun)
	ND(Tyger, Tyger)
	NE(Lady Wachter's Wish)
	
	NC --> NC1(Yordis arrested)
	NC1 --> NC2(Help Yordis/Challenge Burgomaster) --> N3A2
	N3A2 --If guards fail--> NC3(Burgomaster Retreats <br> Free rein)
	
	N2D --> ND
	
	N5 --> N2E2(Rictavio's Carnival Wagon)
	
	N6 --> N6A(Henrik paid Miivoj to steal the bones) --> N1A
	
	N8 --> N81(Izek and Guards take down posters)
	N8 --> N82(Donkey Headed Criminals)
	N82 --Free Criminals-->N3A2
	
	NC --> ND
	ND --> ND1(Izek hunts down the tiger)
	ND --> ND2(Baron investigates and orders Rictavio arrested)
	ND2 --> ND3(Rictavio asks them to make a distraction <br> tells them about Van Richten's Tower)
	
	N4A --> NE
	
```

