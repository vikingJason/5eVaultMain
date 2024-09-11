

``` mermaid

%%{ init: { 'flowchart': { 'curve': 'catmullRom' },{ 'look': 'handDrawn' } } }%%

graph TD
	
	classDef level fill:#bbf
	classDef treasure fill:#a5d6b2
	
	subgraph Starting-Point
		A>Old Svalich Road]
		B(Gates of Barovia)
		C(Svalich Woods)
		D(River Ivlis)
		E>Village of Barovia] --> E1([Level 3]):::level
		
		A --> B
		B --> C
		C --> D
		D --> E
        E --> E2(Death House)
		
	end


    subgraph Vallaki
        N>Town of Vallaki]
        NA(Town Gates)
        NB(Searching Houses)
        N1(St Andal's Church)
        N2(Blue Water Inn)
        N3(Burgomaster's Mansion)
        N4(Wachterhaus)
        N5(Arasek Stockyard)
        N6(Coffin Maker's Shop)
        N7(Blinksy Toys)
        N8(Town Square)
        N9(Vistani Camp)
        
        N --> NN1([Level 4]):::level
        N --> NA
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
                
        NF{St Andral's <br> Feast}
        
        N1A{Bones of <br> St Andral} --> N1A2[\Bones returned/] --> 
        N1A1([Protected Grounds - Hallow])
        N1A --> N1A3[\Bones not returned/] --> NF
        
        N1 --> N1A
        
        N2A{Wizard of Wines <br> winery delivery}
        N2C{{Wolf Hunters}}
        N2D{{Wachter Brothers}}
        N2E{{Rictavio}}
        
        N2 --> N2A
        N2 --> N2C
        N2 --> N2D
        N2 --> N2E --> N2E1[/Rictavio's Journal\]
        
        N3A{{The Baron}}
        N3C{{The Baronet}} --> N3C1{Teleportation <br> Circle}
        N3D{Butler and <br> Lady in waiting <br> have gone missing} 
        N3E{Izek's Doll <br> Collection}
        N3F{The Captive <br> Shoemaker}
        N3G{Magic <br> Mirror}
        N3H[/Bridal Gown\]
        
        N3A --> N3A1A[/Friendly/] --> N3A1{Invites them to <br> next festival}
        N3A --> N3A1B[/Hostile/] --> N3A2{Baron Sends <br> Guards to <br> arrest them}

        N3 --> N3A
        N3 --> N3C
        N3 --> N3H
        N3 --> N3D
        N3 --> N3E -.-> N7
        N3 --> N3F --> N3F3[\If released/] --> N3F1[[Izek sent to find him]] --> N3F2[[Udo provides names and descrtiptions]] --> N3A2
        N3 --> N3G --> N3G4[\Non-evil Summoner/] --> N3G1{Assassin}
        N3G --> N3G5[\Evil Summoner/] --> N3G2{Ghost}
        N3G --> N3G6[\Touch the Mirror and say Strahd's name/] --> N3G3{Strahd's image <br> appears}
        N3D --> N3C1
        N3D --> N3D1[[Izek Investigating]]
        
        N4A{{Lady Wachter's spy}}
        N4B{{Lady Wachter}}
        N4B1[/Marry off daughter Stella to Burgmaster's son Victor/]
        N4B2[/Created a Cult/]
        N4B4{Suggests killing <br> Izek}
        N4B3[/Take over Vallaki/]
        
        NE --> N4B3
        N4 --> N2D
        N4B --> N4A
        N4 --> N4B
        
        N4B --> N4B3
        N4B3 --> N4B1
        N4B3 --> N4B2
        N4B3 --> N4B4
        
        NE --> NE1{Invite them <br> to dine and <br> discuss plan}

        NE1 --> NE1A[\They refuse/] --> N4B5
        N4B3 --> NE1B[\They thwart her plan/] --> N4B5
        NE1 --> NE1C[\They admit they are enemies of Strahd/] --> N4B5{Marks them <br> as enemies}

        N4B5 --> N4B6[[Puts bounty on their head]]

        N4B6 --> N4B7{Arrabelle saved?}
        N4B7 --Yes--> N4B8[Vistani return the gold]
        N4B7 --"No"--> N4B9[Send rider to inform Strahd]
        
        NC{Festival of the <br> Blazing Sun}
        ND{Tyger, <br> Tyger}
        NE{Lady Wachter's <br> Wish}

        NA --"3 Days later"--> NC
        
        NC --> NC1[[Yordis arrested]]
        NC1 --> NC2{Help Yordis <br> Challenge Burgomaster} --> N3A2
        N3A2 --> N3A2A[\Guards <br> fail/] --> NC3{Burgomaster Retreats <br> Free rein}
        N3A2 --> N3A2BB[\Arrested or weapons <br> taken/] --> N2B1[[Keepers of the Feather assist them]]
        
        NC --> ND
        N2D --> ND
        
        N5 --> N2E2[/Rictavio's Carnival Wagon\] -.-> ND
        
        N6 --> N6A[[Henrik paid Miivoj to steal the bones]] --> N1A
        
        N8 --> N81[[Izek and Guards take down posters]]
        N8 --> N82{Donkey Headed <br> Criminals}
        N82 --> N82A[\Free Criminals/] --> N3A2
        
        ND --> ND1[[Izek hunts down the tiger]]
        ND --> ND2[[Baron investigates and orders Rictavio arrested]]
        ND2 --> ND3{Rictavio asks them <br> to make a distraction <br> tells them about <br> Van Richten's Tower}
        
        N4A --> NE

        NF --> NF3[\Father Lucian is killed by Strahd/] --> NF1[[Izek flees]]  
        NF --> NF4[\Father Lucian is saved/] --> NF2{Strahd invites <br> them to dinner}

        N9 --> N91[/Vistani serve Strahd/]
        N9 --> N92([Arrigal is here])
        N9 --> N94{Help find <br> Arrabelle}
        N9 --> N95{Request Wine}

        N9 --> N93{{Kasimir}}
        N93 --> N93A{Bring Back <br> Patrina from <br> the Dead} 

        N93 --> NN2{{Strahd's Enemy}}:::treasure

        N92 --> N4B9
        N3A1 --> NC

    end

	
    subgraph Old-Bonegrinder
        O>Old Bonegrinder] --> O1([Level 4]):::level
        O ---> E2A[/Hag helped the cult create the shambling mound/]
        O ---> O3[[Kereza and Kereza will be waiting outside <br> Barovian scouts <br> Offers to take the children back to town <br> Shares the location of the cache]] 
    	O ---> O4[[ravens circling]] --> O2([Ring of four squat megaliths at the forest’s edge])

    end
	

    subgraph Castle-Ravenloft
    	I(Black Carriage)
        I --> J(Gates of Ravenloft)
	    K>Castle Ravenloft] --> K1([Level 9]):::level

        J --> K
        
        Kitem1[/Skull of Argynvost\]

        K --> Kitem1

        KZ{{Emil Toranescu}}
        K --> KZ

    end


    subgraph Argynvostholt
        Q>Argynvostholt] --> Q1([Level 7]):::level
        Q --> Q3{{Savid}}
        Q3 --> N4B9
        Kitem1A{Bring Skull <br> back}
        Kitem1 --> Kitem1A --> Q4{Dragon's Spirit <br> Transforms}
    	Q --> Q9(Beacon of Argynvostholt) --> Q2[/The Sunsword\]:::treasure
        Q --> Q4
        Q --> Q5(Can see other POIs)
        Q --> Q6{Beacon Lit}
        Q6 --> Q6A{{+1 to AC}}:::treasure
        Q6 --> Q6B{{No More Revenants}}:::treasure
        Q --> Q7{Special <br> Delivery}
        Q7 --> Q7A{{Kolya}}
        Q7A --> Q7B{Coffin with <br> character's <br> name}
        Q ---> Q8{Arrigal's <br> Hunt}
        Q8 --> Q8A{{Ezmerelda d'Avenir}}

    end


    subgraph Krezk
	    S>Village of Krezk] --> S1([Level 5]):::level
        S2{{Gatehouse}}
        S2 --> S2A[\Climb over/]
        S2A --> S2A1{Alarm <br> Sounds}
        S2 --> S2B[\Ask to be <br> let in/]
        S2B --> S3A1{Burgomaster <br> askes them to <br> secure wine from <br> Wizard of Wines} 
        S3A1 --> S2A2[\Force their way in/]
        S3 --> S3B[/Hides that he <br> is distraught/]
        S2A2 --> S2A3[[Guards ordered to stand down]]
        S2A2 --> S2A4[[Burgomaster expedites their departure]]
        S2A2 --> S
        S2A --> S
        S --> S4(Burgomaster's Cottage)
        S4 --> S3{{Burgomaster <br> Dmitri}}
        S3 --> S3A[/Wants to be treated <br> like a lord/]
        S3 --> S3A1
        S4 --> S4A(Family Graves)
        S4A --> S6A[[Mongrelfolk been robbing family graves]]
        S --> S5(Pool and Shrine)
        S --> S6(Abbey of Saint Markovia) 
        S3 --> S3C[/Recently lost his <br> son to illness/]
        S6 --> S6A
        S6 --> S6B{{Abbot}}
        S6B -.-> S5
        S6 --> S6D[[Bell rings at odd hours]]
        S6 --> S6E9[[Screams and horrible laughter can be heard]]
        S5 --> S5B([Lesser Restoration])
        S6 --> S6E(Sun's Grave)
        S6B --> S6B4{Something <br> Borrowed}
        S6B4 --> S6B5[\They refuse or <br> are hostile/]
        S6B5 --> S6B6{Ordered to <br> leave}
        S6B4 --> S6B7[\They help/]
        S6B7 --> S6B8[/Cast Raise Dead x 3\]:::treasure
        S6 --> S6F[\Have not yet met Ezmerelda/]
        S6F --> S6F1{{Ezmerelda d'Avenir}}
        S4 --> S4B{Something Old}
        S4B --> S4B1[\Ilya raised/]
        S4B1 --> S6B4
        S6B4 --> S6B9[\They do not help/]
        S6B9 --> S6B10[[Burgomaster's wife never returns]]
        S6B10 --> S6B11{Abbot releases <br> Mongrelfolk to <br> steal all the food}
        S6B11 --> S
        S6B11 --> S6B12[[Burgomaster hangs himself]]
        S6B11 --> S6B13[\Halt the Mongrels/]
        S6B11 --> S6B7
        S --> S7{Something New}
        S5 --> S5C[\Ireena is with them/] 
        S5C --> S5A{Something Blue}
        S5A --> S5D([Sergei spirit looks like Lars])
        S5A --> S5E[[Shrine destroyed by Strahd]]
        S5A --> S5F[\Ireena is pulled under/]
        S5F --> S5G{Strahd invites <br> them to dinner}

    end

	
    subgraph Tsolenka
	    T>Tsolenka Pass] --> T1([Level 8]):::level
        T --> T2([Extremely Cold])
        T --> T3{Roc of <br> Mount Ghakis}
        T --> T4{Bloodhorn's <br> Charge}
        T4 --> T4A[/Sangzor's Pelt\]:::treasure
        T4A --> T4B{{Beserkers no longer attack}}:::treasure

    end


    subgraph Berez
	    U>Ruins of Berez] --> U1([Level 8]):::level
        U --> U6(Ulrich's Mansion)
        U6 --> U7(Marina's Monument)
        U7 --> U2[/The Holy Symbol of Ravenkind\]:::treasure
        U --> U3{{Baba Lysaga}}
        U3 --> U3A[/Hunts Wereravens/]
        U3 --> U3B[[Stole magic gemstone]]
        U --> U4{{Muriel Vinshaw}}
        U --> U5(Standing Stones)
        U4 --> U5
        U --> U3C(Baba Lysaga's Hut)
        U3C --> U3D{The Creeping Hut}
        U3B --> U3D
        U5 --> U5A[/Some Blessing\]:::treasure
        U -----> U8{Lost Battelfield}
        U8 --> U8A[\Not yet been to Argynvostholt/]

    end


    subgraph Van-Richtens-Tower
	    V>Van Richten’s Tower] --> V1([Level 6]):::level
	    V --> V2[/Tome of Strahd\]:::treasure
        V --> V3[/Ezmeralda's Magic Wagon\]
        V3 --> V4[/Journal of Rudolph van Richten\]
        V3 --> V7[\Wagon blown up/] 
        V --> V8[\Tower collapsed/]
        V --> V9[\Lightnight Sheath activated/]
        V7 & V8 & V9 --> V5{Pack Attack}
        V ----> V6{Ezmerelda's <br> Retreat}    
        V6 --> V6A{Strahd invites <br> them to dinner}

    end


    subgraph Winery
        W>The Wizard of Wines] --> W1([Level 5]):::level
        W --> W2[/Magic Gems\]
        W2 --> W2A{Druids attacked <br> Stole gems <br> Poisoned vats}
        W2 --> W2B{Baba Lysaga <br> stole gems}
        W2A --> W2A1[\Druids Defeated/]
        W2A1 --> W2B2{Wine Delivery}
        W2B2 --> W3([Leave and return before Wintersplinter is destroyed])
        W3 --> W4{Wintersplinter Attacks}
        W2A & W2B --> W5[\Gems Returned/]
        W5 --> W6[\Vineyard can start to produce again/]


    end


    subgraph Yester-Hill
	    Y>Yester Hill] --> Y1([Level 6]):::level
        Y --> Y2[[Druids attacked winery]]
        Y --> Y3(Druid's Circle)
        Y3 --> Y4(Wooden Statue)
        Y4 --> Y4A[\Gemstones/]
        Y3 --> Y5(Hidden Graves)
        Y2 --> Y4A
        Y --> Y6(Wall of Fog)
        Y6 --> Y6A([Image of Strahd's ancestral home])
        Y5 & Y4 --> Y7{Druid's Ritual}
        Y5 --> Y8{Blood Spear of Kavan}
        Y8 --> Y8A([Kavan reaches out to Lars])
        Y8A --> Y8B[/Blood Spear\]:::treasure


    end


    subgraph Werewolf-Den
        Z>Werewolf Den] --> Z1([Level 7]):::level

        Z --> Z2[\If Emil present, werewolves do not attack/]
        Z --> Z3{Zuleika & the Children}
        Z3 --> Z4[\Emil alive, can convince Zuleika to release the children/]
        Z3 --> Z5[\If Emil is dead, asks them to deal with Kiril/]
        Z --> Z6[\Night Mother Treasure/]
        Z6 --> Z7[\Stealing leads to Night Mother curse/]
        Z --> Z8{Leader of the Pack}
        Z8 -->Z9[\Zuleika becomes leader/]
        Z3 --> Z10{Die Kinder}

    end


    subgraph Amber-Temple
	    X>The Amber Temple] --> X1([Level 9]):::level
        X --> X1{Rahadin's Prayer}
        X --> X2{Kasimir's Dark Gift}
       

    end


	Starting-Point --> F
	F(River Ivlis Crossroads)
	G>Tser Pool Encampment]
	H>Tser Falls]
	L(Lake Zarovich)
	M(Mad Mage of  Mount Baratok)
	P(Luna River Crossroads)
	R(Raven River Crossroads)

	


    ND3 --> Van-Richtens-Tower
    N2E1 --> Van-Richtens-Tower

    L --> L1{Save Arrabelle}
    L1 <--> N94

	F --> G
	G --> H
	H --> Old-Bonegrinder
    H --> Castle-Ravenloft
	H --> Vallaki

	L --> M
    R --> Tsolenka
    R --> Van-Richtens-Tower
    R --> Winery

    Tsolenka --> Amber-Temple
	
    S6B4 --> Vallaki
	N2A <--> W2B2
	N93A --> Amber-Temple
	ND --> Van-Richtens-Tower

    U4 --> Argynvostholt
    U4 --> Yester-Hill
    NF1 --> Argynvostholt  
	NF2 --> Castle-Ravenloft

    U8A -.-> Argynvostholt

    Tsolenka -.-> P
    P --> Vallaki
    P --> Krezk
    P --> Van-Richtens-Tower
    P --> U

    L1 -.-> N4B7

    O --Warning about Amber Temple <br> Treasure and Great Power--> Amber-Temple

    E2A -.-> E2
	O3 --> A2{Van Richten’s <br> Cache}
	click A2 "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C1b.+Van+Richten%E2%80%99s+Cache" _blank
    
    A2 --> A3{Skeletal Rider}
    click A3 "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C5.+The+Skeletal+Rider" _blank
    
    A3 --> A4(The Watchtower)
    click A4 "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C6.+The+Watchtower" _blank
	
    A4 --> Vallaki
    A3 --> Vallaki
	
    A4 --> L
    A3 --> L
	
    click L "https://www.strahdreloaded.com/Act+I+-+Into+the+Mists/Arc+C+-+Into+the+Valley#C10.+The+Deep+Woods" _blank

	click T2 "https://www.dndbeyond.com/sources/dnd/dmg-2014/adventure-environments#Weather" _blank

	G --> G2{{Eliza}} --> G2A[/Strahd Spy/]

    N92 -.-> Q8
    Q5 -.-> Vallaki & Krezk & Old-Bonegrinder

    N2B{Keepers of the Feather}:::treasure

    S3A1 <--> W2B2
    N3H --> S6B7
    S5G --> Castle-Ravenloft
    U3B <--> W2B
    U3A <--> N2B
    U4 --> N2B
    N2 --> N2B
    N2B --> N2B1
    U5 -.-> O2
    V5 --> Werewolf-Den
    V6A --> Castle-Ravenloft
    U3A --> Winery
    Winery <--> N2B
    Y2 <--> W2A
    W2B <--> N95
    W4 --> Yester-Hill
    KZ --> Z2
    Z10 -.-> Krezk
    X2 --> Castle-Ravenloft



```