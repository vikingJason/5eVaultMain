---
CoinsCopper: 100
CoinsSilver: 47
CoinsElectrum: 0
CoinsGold: 10
CoinsPlatinum: 0
PartySize: 2
bind_target: "[[3. Mechanics/Alignments/True Neutral.md|True Neutral]]"
draft: true
obsidianUIMode: preview
---


## Currency Exchange Rates

|Coin|CP|SP|EP|GP|PP|
|---|---|---|---|---|---|
|Copper|**1**|1/10|1/50|1/100|1/1000|
|Silver|10|**1**|1/5|1/10|1/100|
|Electrum|50|5|**1**|1/2|1/20|
|Gold|100|10|2|**1**|1/10|
|Platinum|1000|100|50|10|**1**|


# Amount
 
| Type     | Input                         | Copper                       | Silver                      | Electrum                   | Gold                       | Platinum                   |
| -------- | ----------------------------- | ---------------------------- | --------------------------- | -------------------------- | -------------------------- | -------------------------- |
| Copper   | `INPUT[number:CoinsCopper]`   | `VIEW[{CoinsCopper}]`        | `VIEW[({CoinsCopper}/10)]`  | `VIEW[{CoinsCopper}/50]`   | `VIEW[{CoinsCopper}/100]`  | `VIEW[{CoinsCopper}/1000]` |
| Silver   | `INPUT[number:CoinsSilver]`   | `VIEW[{CoinsSilver}*10]`     | `VIEW[{CoinsSilver}]`       | `VIEW[{CoinsSilver}/5]`    | `VIEW[{CoinsSilver}/10]`   | `VIEW[{CoinsSilver}/100]`  |
| Electrum | `INPUT[number:CoinsElectrum]` | `VIEW[{CoinsElectrum}*50]`   | `VIEW[{CoinsElectrum}*5]`   | `VIEW[{CoinsElectrum}]`    | `VIEW[{CoinsElectrum}/2]`  | `VIEW[{CoinsElectrum}/20]` |
| Gold     | `INPUT[number:CoinsGold]`     | `VIEW[{CoinsGold}*100]`      | `VIEW[{CoinsGold}*10]`      | `VIEW[{CoinsGold}*2]`      | `VIEW[{CoinsGold}]`        | `VIEW[{CoinsGold}/10]`     |
| Platinum | `INPUT[number:CoinsPlatinum]` | `VIEW[{CoinsPlatinum}*1000]` | `VIEW[{CoinsPlatinum}*100]` | `VIEW[{CoinsPlatinum}*20]` | `VIEW[{CoinsPlatinum}*10]` | `VIEW[{CoinsPlatinum}]`    | 

 Party Size: `INPUT[number:PartySize]`  


## Total Converted Value
 

| Type     | Total                                                                                                           | Total Per Player                                                                                                            |     
| -------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | 
| Copper   | `VIEW[{CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000)]`          | `VIEW[({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/{PartySize}]`        |     
| Silver   | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/10)]`   | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/10)/{PartySize}]`   |     
| Electrum | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/50)]`   | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/50)/{PartySize}]`   |     
| Gold     | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/100)]`  | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/100)/{PartySize}]`  |     
| Platinum | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/1000)]` | `VIEW[(({CoinsCopper}+({CoinsSilver}*10)+({CoinsElectrum}*50)+({CoinsGold}*100)+({CoinsPlatinum}*1000))/1000)/{PartySize}]` |     



