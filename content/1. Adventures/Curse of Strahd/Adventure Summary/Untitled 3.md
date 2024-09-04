``` mermaid
graph TD

    A[Start: Introduction to Barovia]
    A1(Arrive in Barovia)
    A2(Donavich and the Church)
    A3(Strahd's Arrival)
    
    B[Village of Barovia]
    B1(Meet Ismark and Ireena)
    B2(Defend Ireena from Strahd's Assault)
    B3(Travel to Vallaki or Tser Pool)

    C[Tser Pool]
    C1(Meet Madam Eva)
    C2(Tarokka Reading)
    
    D[Vallaki]
    D1(Meet Lady Wachter)
    D2(Investigate the Martikov Family)
    D3(Strahd's Visit to Vallaki)
    D4(Blinsky's Toys)
    D5(Battle with Izek Strazni)
    
    E[Old Bonegrinder]
    E1(Witches and the Dream Pastries)
    E2(Rescue Children)

    F[Argynvostholt]
    F1(Discover the History of the Order)
    F2(Retrieve the Skull of Argynvost)
    F3(Confront Vladimir Horngaard)

    G[Yester Hill]
    G1(Battle with the Druids)
    G2(Obtain the Gulthias Staff)
    
    H[Krezk]
    H1(The Abbey of Saint Markovia)
    H2(The Mongrelfolk and the Abbot)
    H3(Revive the Deceased with the Pool's Power)

    I[Amber Temple]
    I1(Meet Exethanter)
    I2(Learn of the Dark Gifts)
    I3(Confront the Vestiges)

    J[Castle Ravenloft]
    J1(Navigate the Castle)
    J2(Find the Tome of Strahd)
    J3(Confront Rahadin)
    J4(Final Showdown with Strahd)

    %% Connecting the nodes
    A --> B
    B --> C
    C --> D
    D --> E
    D --> F
    D --> G
    D --> H
    G --> I
    I --> J

    %% Sub connections
    B1 --> B2
    B2 --> B3

    C1 --> C2
    C2 --> D
    C2 --> E
    C2 --> F
    C2 --> G
    C2 --> H
    C2 --> I

    D1 --> D2
    D2 --> D3
    D3 --> D4
    D4 --> D5

    F1 --> F2
    F2 --> F3

    G1 --> G2
    
    H1 --> H2
    H2 --> H3

    I1 --> I2
    I2 --> I3

    J1 --> J2
    J2 --> J3
    J3 --> J4
```