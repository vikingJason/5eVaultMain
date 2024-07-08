---
database-plugin: basic
---

```yaml:dbfolder
name: Calindor NPC database
description: NPC database
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    accessor: __file__
    position: 1
    isSorted: true
    isSortedDesc: false
    width: 201
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  __created__:
    key: __created__
    id: __created__
    input: calendar_time
    label: Created
    accessorKey: __created__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    accessor: __created__
    position: 25
    width: 150
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  __modified__:
    key: __modified__
    id: __modified__
    input: calendar_time
    label: Modified
    accessorKey: __modified__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    accessor: __modified__
    position: 26
    width: 150
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Alignment:
    input: select
    accessor: Alignment
    key: Alignment
    label: Alignment
    position: 9
    skipPersist: false
    accessorKey: Alignment
    width: -53
    isHidden: false
    sortIndex: -1
    options:
      - { label: "CG", value: "CG", color: "hsl(174, 95%, 90%)"}
      - { label: "NG", value: "NG", color: "hsl(152, 95%, 90%)"}
      - { label: "LG", value: "LG", color: "hsl(287, 95%, 90%)"}
      - { label: "CN", value: "CN", color: "hsl(177, 95%, 90%)"}
      - { label: "Neutral", value: "Neutral", color: "hsl(99, 95%, 90%)"}
      - { label: "LN", value: "LN", color: "hsl(240, 95%, 90%)"}
      - { label: "CE", value: "CE", color: "hsl(225, 95%, 90%)"}
      - { label: "NE", value: "NE", color: "hsl(339, 95%, 90%)"}
      - { label: "LE", value: "LE", color: "hsl(36, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Race:
    input: select
    accessor: Race
    key: Race
    label: Race
    position: 8
    skipPersist: false
    accessorKey: Race
    width: 128
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Aasimar", value: "Aasimar", color: "hsl(31, 95%, 85%)"}
      - { label: "Aetherborn", value: "Aetherborn", color: "hsl(180, 85%, 65%)"}
      - { label: "Aven", value: "Aven", color: "hsl(335, 75%, 70%)"}
      - { label: "Bugbear", value: "Bugbear", color: "hsl(55, 90%, 45%)"}
      - { label: "Bullywug", value: "Bullywug", color: "hsl(240, 90%, 55%)"}
      - { label: "Aarakocra", value: "Aarakocra", color: "hsl(100, 80%, 70%)"}
      - { label: "Centaur", value: "Centaur", color: "hsl(20, 90%, 60%)"}
      - { label: "Dhampir", value: "Dhampir", color: "hsl(340, 80%, 40%)"}
      - { label: "Changeling", value: "Changeling", color: "hsl(210, 85%, 80%)"}
      - { label: "Dragonborn", value: "Dragonborn", color: "hsl(270, 75%, 55%)"}
      - { label: "Dwarf", value: "Dwarf", color: "hsl(15, 85%, 60%)"}
      - { label: "Elf", value: "Elf", color: "hsl(80, 85%, 75%)"}
      - { label: "Fairy", value: "Fairy", color: "hsl(240, 80%, 80%)"}
      - { label: "Genasi", value: "Genasi", color: "hsl(90, 85%, 70%)"}
      - { label: "Gith", value: "Gith", color: "hsl(230, 80%, 55%)"}
      - { label: "Firbolg", value: "Firbolg", color: "hsl(120, 80%, 55%)"}
      - { label: "Gnome", value: "Gnome", color: "hsl(70, 90%, 70%)"}
      - { label: "Gnoll", value: "Gnoll", color: "hsl(40, 85%, 50%)"}
      - { label: "Goblin", value: "Goblin", color: "hsl(60, 85%, 50%)"}
      - { label: "Goliath", value: "Goliath", color: "hsl(91, 59%, 73%)"}
      - { label: "Grimlock", value: "Grimlock", color: "hsl(50, 62%, 50%)"}
      - { label: "Grung", value: "Grung", color: "hsl(179, 77%, 74%)"}
      - { label: "Half-Elf", value: "Half-Elf", color: "hsl(347, 54%, 74%)"}
      - { label: "Half-Orc", value: "Half-Orc", color: "hsl(136, 60%, 60%)"}
      - { label: "Halfling", value: "Halfling", color: "hsl(318, 72%, 57%)"}
      - { label: "Hexblood", value: "Hexblood", color: "hsl(115, 59%, 68%)"}
      - { label: "Hobgoblin", value: "Hobgoblin", color: "hsl(281, 96%, 88%)"}
      - { label: "Human", value: "Human", color: "hsl(12, 79%, 61%)"}
      - { label: "Kalashtar", value: "Kalashtar", color: "hsl(225, 91%, 71%)"}
      - { label: "Kenku", value: "Kenku", color: "hsl(329, 90%, 55%)"}
      - { label: "Khenra", value: "Khenra", color: "hsl(60, 99%, 69%)"}
      - { label: "Kobold", value: "Kobold", color: "hsl(35, 80%, 46%)"}
      - { label: "Leonin", value: "Leonin", color: "hsl(32, 96%, 60%)"}
      - { label: "Locathah", value: "Locathah", color: "hsl(190, 53%, 51%)"}
      - { label: "Kor", value: "Kor", color: "hsl(20, 72%, 69%)"}
      - { label: "Kuo-Toa", value: "Kuo-Toa", color: "hsl(196, 75%, 39%)"}
      - { label: "Lizardfolk", value: "Lizardfolk", color: "hsl(82, 61%, 46%)"}
      - { label: "Merfolk", value: "Merfolk", color: "hsl(204, 86%, 66%)"}
      - { label: "Loxodon", value: "Loxodon", color: "hsl(35, 35%, 85%)"}
      - { label: "Minotaur", value: "Minotaur", color: "hsl(12, 66%, 45%)"}
      - { label: "Naga", value: "Naga", color: "hsl(357, 86%, 50%)"}
      - { label: "Rabbitfolk", value: "Rabbitfolk", color: "hsl(227, 80%, 79%)"}
      - { label: "Owlfolk", value: "Owlfolk", color: "hsl(208, 71%, 52%)"}
      - { label: "Orc", value: "Orc", color: "hsl(10, 71%, 46%)"}
      - { label: "Reborn", value: "Reborn", color: "hsl(217, 90%, 80%)"}
      - { label: "Revenant", value: "Revenant", color: "hsl(325, 54%, 44%)"}
      - { label: "Satyr", value: "Satyr", color: "hsl(342, 70%, 61%)"}
      - { label: "Skeleton", value: "Skeleton", color: "hsl(30, 100%, 92%)"}
      - { label: "Shifter", value: "Shifter", color: "hsl(270, 63%, 61%)"}
      - { label: "Simic Hybrid", value: "Simic Hybrid", color: "hsl(167, 72%, 65%)"}
      - { label: "Siren", value: "Siren", color: "hsl(205, 94%, 70%)"}
      - { label: "Tabaxi", value: "Tabaxi", color: "hsl(25, 91%, 59%)"}
      - { label: "Tiefling", value: "Tiefling", color: "hsl(342, 99%, 56%)"}
      - { label: "Tortle", value: "Tortle", color: "hsl(77, 51%, 36%)"}
      - { label: "Triton", value: "Triton", color: "hsl(200, 81%, 50%)"}
      - { label: "Troglodyte", value: "Troglodyte", color: "hsl(40, 60%, 33%)"}
      - { label: "Vedalken", value: "Vedalken", color: "hsl(210, 54%, 69%)"}
      - { label: "Verdan", value: "Verdan", color: "hsl(152, 62%, 77%)"}
      - { label: "Viashino", value: "Viashino", color: "hsl(8, 82%, 43%)"}
      - { label: "Warforged", value: "Warforged", color: "hsl(45, 32%, 60%)"}
      - { label: "Yuan-ti", value: "Yuan-ti", color: "hsl(45, 81%, 41%)"}
      - { label: "Zombie", value: "Zombie", color: "hsl(30, 20%, 74%)"}
      - { label: "Eladrin", value: "Eladrin", color: "hsl(279, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Gender:
    input: select
    accessor: Gender
    key: Gender
    label: Gender
    position: 10
    skipPersist: false
    accessorKey: Gender
    width: 101
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Female", value: "Female", color: "hsl(111, 95%, 90%)"}
      - { label: "Male", value: "Male", color: "hsl(74, 95%, 90%)"}
      - { label: "N/A", value: "N/A", color: "hsl(296, 95%, 90%)"}
      - { label: "Other", value: "Other", color: "hsl(345, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Age:
    input: select
    accessor: Age
    key: Age
    label: Age
    position: 13
    skipPersist: false
    accessorKey: Age
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Adult", value: "Adult", color: "hsl(4, 95%, 90%)"}
      - { label: "Ancient", value: "Ancient", color: "hsl(270, 95%, 90%)"}
      - { label: "Child", value: "Child", color: "hsl(271, 95%, 90%)"}
      - { label: "Elderly", value: "Elderly", color: "hsl(231, 95%, 90%)"}
      - { label: "Infant", value: "Infant", color: "hsl(94, 95%, 90%)"}
      - { label: "Mature Adult", value: "Mature Adult", color: "hsl(331, 95%, 90%)"}
      - { label: "Teen", value: "Teen", color: "hsl(328, 95%, 90%)"}
      - { label: "Young Adult", value: "Young Adult", color: "hsl(86, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  NoteIcon:
    input: select
    accessor: NoteIcon
    key: NoteIcon
    label: NoteIcon
    position: 5
    skipPersist: false
    accessorKey: NoteIcon
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Character", value: "Character", color: "hsl(221, 95%, 90%)"}
      - { label: "npc", value: "npc", color: "hsl(242, 95%, 90%)"}
      - { label: "player", value: "player", color: "hsl(304, 95%, 90%)"}
      - { label: "map", value: "map", color: "hsl(212, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Condition:
    input: select
    accessor: Condition
    key: Condition
    label: Condition
    position: 14
    skipPersist: false
    accessorKey: Condition
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Dead", value: "Dead", color: "hsl(280, 95%, 90%)"}
      - { label: "Dying", value: "Dying", color: "hsl(323, 95%, 90%)"}
      - { label: "Healthy", value: "Healthy", color: "hsl(342, 95%, 90%)"}
      - { label: "Hurt", value: "Hurt", color: "hsl(10, 95%, 90%)"}
      - { label: "Sick", value: "Sick", color: "hsl(80, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Location:
    input: select
    accessor: Location
    key: Location
    label: Location
    position: 15
    skipPersist: false
    accessorKey: Location
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "TEesting", value: "TEesting", color: "hsl(18, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
      option_source: manual
  Alias:
    input: text
    accessor: Alias
    key: Alias
    label: Alias
    position: 4
    skipPersist: false
    accessorKey: Alias
    width: 176
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Occupation:
    input: tags
    accessor: Occupation
    key: Occupation
    label: Occupation
    position: 17
    skipPersist: false
    accessorKey: Occupation
    width: 132
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Guard", value: "Guard", color: "hsl(320, 95%, 90%)"}
      - { label: "Historian", value: "Historian", color: "hsl(24, 95%, 90%)"}
      - { label: "Libarian", value: "Libarian", color: "hsl(7, 95%, 90%)"}
      - { label: "Mage", value: "Mage", color: "hsl(194, 95%, 90%)"}
      - { label: "Merchant", value: "Merchant", color: "hsl(140, 95%, 90%)"}
      - { label: "Noble", value: "Noble", color: "hsl(28, 95%, 90%)"}
      - { label: "Priest", value: "Priest", color: "hsl(322, 95%, 90%)"}
      - { label: "Royal", value: "Royal", color: "hsl(126, 95%, 90%)"}
      - { label: "Servant", value: "Servant", color: "hsl(249, 95%, 90%)"}
      - { label: "Stablehand", value: "Stablehand", color: "hsl(25, 95%, 90%)"}
      - { label: "Steward", value: "Steward", color: "hsl(339, 95%, 90%)"}
      - { label: "Teacher", value: "Teacher", color: "hsl(36, 95%, 90%)"}
      - { label: "Hunter", value: "Hunter", color: "hsl(354, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  AssociatedGroup:
    input: tags
    accessor: AssociatedGroup
    key: AssociatedGroup
    label: AssociatedGroup
    position: 18
    skipPersist: false
    accessorKey: AssociatedGroup
    width: 150
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Nords", value: "Nords", color: "hsl(276, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
      option_source: manual
  AssociatedReligion:
    input: tags
    accessor: AssociatedReligion
    key: AssociatedReligion
    label: AssociatedReligion
    position: 19
    skipPersist: false
    accessorKey: AssociatedReligion
    width: 78
    isHidden: false
    sortIndex: -1
    options:
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Pronounced:
    input: text
    accessor: Pronounced
    key: Pronounced
    label: Pronounced
    position: 3
    skipPersist: false
    accessorKey: Pronounced
    width: 190
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
      content_alignment: text-align-center
      content_vertical_alignment: align-middle
      wrap_content: true
  WhichParty:
    input: select
    accessor: WhichParty
    key: WhichParty
    label: WhichParty
    position: 16
    skipPersist: false
    accessorKey: WhichParty
    width: 138
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Party 1", value: "Party 1", color: "hsl(152, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Type:
    input: tags
    accessor: Type
    key: Type
    label: Type
    position: 6
    skipPersist: false
    accessorKey: Type
    width: 115
    isHidden: false
    sortIndex: -1
    options:
      - { label: "NPC", value: "NPC", color: "hsl(175, 95%, 90%)"}
      - { label: "VIP", value: "VIP", color: "hsl(38, 95%, 90%)"}
      - { label: "Celestial", value: "Celestial", color: "hsl(100, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  Sexuality:
    input: select
    accessorKey: Sexuality
    key: Sexuality
    label: Sexuality
    position: 11
    width: 150
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Asexual", value: "Asexual", color: "hsl(36, 95%, 90%)"}
      - { label: "Bisexual", value: "Bisexual", color: "hsl(313, 95%, 90%)"}
      - { label: "Gay", value: "Gay", color: "hsl(235, 95%, 90%)"}
      - { label: "Straight", value: "Straight", color: "hsl(355, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
      source_data: current_folder
  SocialTrait:
    input: tags
    accessorKey: SocialTrait
    key: SocialTrait
    label: SocialTrait
    position: 21
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Bossy", value: "Bossy", color: "hsl(115, 95%, 90%)"}
      - { label: "Cruel", value: "Cruel", color: "hsl(116, 95%, 90%)"}
      - { label: "Deferential", value: "Deferential", color: "hsl(325, 95%, 90%)"}
      - { label: "Demanding", value: "Demanding", color: "hsl(111, 95%, 90%)"}
      - { label: "Dependable", value: "Dependable", color: "hsl(217, 95%, 90%)"}
      - { label: "Dishonest", value: "Dishonest", color: "hsl(100, 95%, 90%)"}
      - { label: "Forthcoming", value: "Forthcoming", color: "hsl(110, 95%, 90%)"}
      - { label: "Friendly", value: "Friendly", color: "hsl(234, 95%, 90%)"}
      - { label: "Generous", value: "Generous", color: "hsl(297, 95%, 90%)"}
      - { label: "Helpful", value: "Helpful", color: "hsl(303, 95%, 90%)"}
      - { label: "Honest", value: "Honest", color: "hsl(145, 95%, 90%)"}
      - { label: "Impartial", value: "Impartial", color: "hsl(70, 95%, 90%)"}
      - { label: "Intolerant", value: "Intolerant", color: "hsl(136, 95%, 90%)"}
      - { label: "Lenient", value: "Lenient", color: "hsl(343, 95%, 90%)"}
      - { label: "Loyal", value: "Loyal", color: "hsl(280, 95%, 90%)"}
      - { label: "Peaceful", value: "Peaceful", color: "hsl(105, 95%, 90%)"}
      - { label: "Quite", value: "Quite", color: "hsl(218, 95%, 90%)"}
      - { label: "Secretive", value: "Secretive", color: "hsl(310, 95%, 90%)"}
      - { label: "Selfish", value: "Selfish", color: "hsl(70, 95%, 90%)"}
      - { label: "Selfless", value: "Selfless", color: "hsl(79, 95%, 90%)"}
      - { label: "Stingy", value: "Stingy", color: "hsl(129, 95%, 90%)"}
      - { label: "Suspicious", value: "Suspicious", color: "hsl(80, 95%, 90%)"}
      - { label: "Talkative", value: "Talkative", color: "hsl(198, 95%, 90%)"}
      - { label: "Tolerant", value: "Tolerant", color: "hsl(154, 95%, 90%)"}
      - { label: "Trusting", value: "Trusting", color: "hsl(207, 95%, 90%)"}
      - { label: "Uncooperative", value: "Uncooperative", color: "hsl(66, 95%, 90%)"}
      - { label: "Unfair", value: "Unfair", color: "hsl(176, 95%, 90%)"}
      - { label: "Unfaithful", value: "Unfaithful", color: "hsl(329, 95%, 90%)"}
      - { label: "Unfriendly", value: "Unfriendly", color: "hsl(37, 95%, 90%)"}
      - { label: "Unreliable", value: "Unreliable", color: "hsl(318, 95%, 90%)"}
      - { label: "Violent", value: "Violent", color: "hsl(124, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
  MentalTrait:
    input: tags
    accessorKey: MentalTrait
    key: MentalTrait
    label: MentalTrait
    position: 22
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Adaptive", value: "Adaptive", color: "hsl(346, 95%, 90%)"}
      - { label: "Ambitious", value: "Ambitious", color: "hsl(191, 95%, 90%)"}
      - { label: "Analytical", value: "Analytical", color: "hsl(124, 95%, 90%)"}
      - { label: "Cautious", value: "Cautious", color: "hsl(329, 95%, 90%)"}
      - { label: "Comformist", value: "Comformist", color: "hsl(73, 95%, 90%)"}
      - { label: "Complacent", value: "Complacent", color: "hsl(258, 95%, 90%)"}
      - { label: "Courageous", value: "Courageous", color: "hsl(53, 95%, 90%)"}
      - { label: "Cowardly", value: "Cowardly", color: "hsl(247, 95%, 90%)"}
      - { label: "Creative", value: "Creative", color: "hsl(96, 95%, 90%)"}
      - { label: "Decisive", value: "Decisive", color: "hsl(336, 95%, 90%)"}
      - { label: "Emotional", value: "Emotional", color: "hsl(212, 95%, 90%)"}
      - { label: "Impatient", value: "Impatient", color: "hsl(84, 95%, 90%)"}
      - { label: "Inattentive", value: "Inattentive", color: "hsl(281, 95%, 90%)"}
      - { label: "Incompetent", value: "Incompetent", color: "hsl(186, 95%, 90%)"}
      - { label: "Indecisive", value: "Indecisive", color: "hsl(270, 95%, 90%)"}
      - { label: "Independent", value: "Independent", color: "hsl(319, 95%, 90%)"}
      - { label: "Intelligent", value: "Intelligent", color: "hsl(66, 95%, 90%)"}
      - { label: "Patient", value: "Patient", color: "hsl(290, 95%, 90%)"}
      - { label: "Perceptive", value: "Perceptive", color: "hsl(21, 95%, 90%)"}
      - { label: "Reckless", value: "Reckless", color: "hsl(59, 95%, 90%)"}
      - { label: "Religious", value: "Religious", color: "hsl(279, 95%, 90%)"}
      - { label: "Secular", value: "Secular", color: "hsl(352, 95%, 90%)"}
      - { label: "Skeptical", value: "Skeptical", color: "hsl(11, 95%, 90%)"}
      - { label: "Skillful", value: "Skillful", color: "hsl(354, 95%, 90%)"}
      - { label: "Stupid", value: "Stupid", color: "hsl(315, 95%, 90%)"}
      - { label: "Superstitious", value: "Superstitious", color: "hsl(355, 95%, 90%)"}
      - { label: "Tenacious", value: "Tenacious", color: "hsl(195, 95%, 90%)"}
      - { label: "Uninventive", value: "Uninventive", color: "hsl(207, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
  PersonalityTrait:
    input: tags
    accessorKey: PersonalityTrait
    key: PersonalityTrait
    label: PersonalityTrait
    position: 20
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Anxious", value: "Anxious", color: "hsl(21, 95%, 90%)"}
      - { label: "Apathetic", value: "Apathetic", color: "hsl(38, 95%, 90%)"}
      - { label: "Articulate", value: "Articulate", color: "hsl(131, 95%, 90%)"}
      - { label: "Awkward", value: "Awkward", color: "hsl(278, 95%, 90%)"}
      - { label: "Calm", value: "Calm", color: "hsl(136, 95%, 90%)"}
      - { label: "Caring", value: "Caring", color: "hsl(196, 95%, 90%)"}
      - { label: "Charming", value: "Charming", color: "hsl(12, 95%, 90%)"}
      - { label: "Cheerful", value: "Cheerful", color: "hsl(293, 95%, 90%)"}
      - { label: "Childish", value: "Childish", color: "hsl(339, 95%, 90%)"}
      - { label: "Cold", value: "Cold", color: "hsl(266, 95%, 90%)"}
      - { label: "Depressed", value: "Depressed", color: "hsl(130, 95%, 90%)"}
      - { label: "Dull", value: "Dull", color: "hsl(248, 95%, 90%)"}
      - { label: "Eccentric", value: "Eccentric", color: "hsl(244, 95%, 90%)"}
      - { label: "Energetic", value: "Energetic", color: "hsl(74, 95%, 90%)"}
      - { label: "Enthusiastic", value: "Enthusiastic", color: "hsl(333, 95%, 90%)"}
      - { label: "Funny", value: "Funny", color: "hsl(205, 95%, 90%)"}
      - { label: "Gentle", value: "Gentle", color: "hsl(233, 95%, 90%)"}
      - { label: "Humble", value: "Humble", color: "hsl(197, 95%, 90%)"}
      - { label: "Humorless", value: "Humorless", color: "hsl(128, 95%, 90%)"}
      - { label: "Impolite", value: "Impolite", color: "hsl(67, 95%, 90%)"}
      - { label: "Incoherent", value: "Incoherent", color: "hsl(49, 95%, 90%)"}
      - { label: "Listless", value: "Listless", color: "hsl(127, 95%, 90%)"}
      - { label: "Mature", value: "Mature", color: "hsl(138, 95%, 90%)"}
      - { label: "Naive", value: "Naive", color: "hsl(320, 95%, 90%)"}
      - { label: "Optimistic", value: "Optimistic", color: "hsl(136, 95%, 90%)"}
      - { label: "Overt", value: "Overt", color: "hsl(187, 95%, 90%)"}
      - { label: "Pessimistic", value: "Pessimistic", color: "hsl(345, 95%, 90%)"}
      - { label: "Polite", value: "Polite", color: "hsl(251, 95%, 90%)"}
      - { label: "Proud", value: "Proud", color: "hsl(353, 95%, 90%)"}
      - { label: "Repulsive", value: "Repulsive", color: "hsl(77, 95%, 90%)"}
      - { label: "Respectful", value: "Respectful", color: "hsl(61, 95%, 90%)"}
      - { label: "Savvy", value: "Savvy", color: "hsl(85, 95%, 90%)"}
      - { label: "Sensitive", value: "Sensitive", color: "hsl(186, 95%, 90%)"}
      - { label: "Smooth", value: "Smooth", color: "hsl(81, 95%, 90%)"}
      - { label: "Subtle", value: "Subtle", color: "hsl(266, 95%, 90%)"}
      - { label: "Thick-skinned", value: "Thick-skinned", color: "hsl(69, 95%, 90%)"}
      - { label: "Wrathful", value: "Wrathful", color: "hsl(186, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
  Likes:
    input: text
    accessorKey: Likes
    key: Likes
    label: Likes
    position: 23
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
  Dislikes:
    input: text
    accessorKey: Dislikes
    key: Dislikes
    label: Dislikes
    position: 24
    skipPersist: false
    isHidden: false
    width: 152
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
  Art:
    input: text
    accessorKey: Art
    key: Art
    id: Art
    label: Art
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      persist_formula: false
  Party1Standing:
    input: select
    accessorKey: Party1Standing
    key: Party1Standing
    id: PartyStanding
    label: Party1Standing
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Friend", value: "Friend", color: "hsl(243, 95%, 90%)"}
      - { label: "Family", value: "Family", color: "hsl(208, 95%, 90%)"}
      - { label: "Ally", value: "Ally", color: "hsl(91, 95%, 90%)"}
      - { label: "Enemy", value: "Enemy", color: "hsl(238, 95%, 90%)"}
      - { label: "Unmet", value: "Unmet", color: "undefined"}
      - { label: "Acquaintance", value: "Acquaintance", color: "hsl(10, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Pronouns:
    input: select
    accessorKey: Pronouns
    key: Pronouns
    id: Pronouns
    label: Pronouns
    position: 12
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "He/Him", value: "He/Him", color: "hsl(111, 95%, 90%)"}
      - { label: "She/Her", value: "She/Her", color: "hsl(17, 95%, 90%)"}
      - { label: "They/Them", value: "They/Them", color: "hsl(187, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  enable_show_state: false
  group_folder_column: 
  remove_field_when_delete_column: true
  cell_size: normal
  sticky_first_column: true
  show_metadata_created: true
  show_metadata_modified: true
  source_data: current_folder
  source_form_result: root
  show_metadata_tasks: false
  frontmatter_quote_wrap: false
  row_templates_folder: /
  current_row_template: z_Templates/1_Story World Templates/People/Template - NPC.md
  pagination_size: 50
  source_destination_path: /
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: top
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  font_size: 16
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
  show_metadata_tags: false
filters:
  enabled: false
  conditions:
```