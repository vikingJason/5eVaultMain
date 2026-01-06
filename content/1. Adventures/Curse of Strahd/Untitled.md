---
draft: true
---
```base
filters:
  and:
    - file.hasProperty("table")
views:
  - type: table
    name: Sessions
    order:
      - file.name
      - tableType
    sort: []
    image: note.image
    cardSize: 200
    imageFit: contain
    imageAspectRatio: 0.25

```