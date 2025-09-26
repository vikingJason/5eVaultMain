---
SessionNote: CoS
---
```base
formulas:
  LinkedViaPlace: |
    list(MyContainer)                                          
      .filter( file(value)                                     
               && list(file(value).properties.MyContainer)     
                    .contains(this) )                          
      .length > 0
  PlacesForThis: |
    list(MyContainer)
      .filter( file(value)
               && list(file(value).properties.MyContainer).contains(this) )
      .map( link(value, file(value).name) )
properties:
  file.name:
    displayName: Person
  PlacesForThis:
    displayName: Places (for this note)
views:
  - type: cards
    name: People linked via Places → this note
    filters:
      and:
        - file.inFolder("2-World/People")
        - formula.LinkedViaPlace
    order:
      - file.name
      - char_age
      - char_gender
      - char_race
    image: note.image
  - type: table
    name: View

```