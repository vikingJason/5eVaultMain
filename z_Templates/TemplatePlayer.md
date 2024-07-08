---
NoteIcon: player
aliases:
  - Bob
tags:
  - player
Player: Bob
Role: Player
Class:
  - Barbarian
Race:
  - Human
level: 8
hp: 71
ac: 22
modifier: 4
pasperc: 13
Status:
  - Active
PlayerKnownLanguages:
  - Celestial
  - Common
  - Dwarvish
---

<% await tp.file.move("/1-Party/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewPlayer");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Player Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

[[Pasted image 20220612052639.png]]

# `=this.file.name`

| Image                                              | Char Name         | Player Name    | Class         | Race         | Level         |
| -------------------------------------------------- | ----------------- | -------------- | ------------- | ------------ | ------------- |
| ![[z_Templates/zz_asset-files/ImagePlaceholder.png\|cover hsmall]] | `=this.file.name` | `=this.player` | `=this.class` | `=this.race` | `=this.level` |

```custom-frames
frame: ConfigureInCustomFramesPlugin
```

