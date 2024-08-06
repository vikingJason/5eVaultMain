---
database-plugin: basic
---

<%%
name: new database
description: new description
columns:
  __file__:
    key: __file__
    input: markdown
    label: File
    accessor: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    config:
  __created__:
    key: __created__
    input: calendar_time
    label: Created
    accessor: __created__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    position: 4
    config:
  __modified__:
    key: __modified__
    input: calendar_time
    label: Modified
    accessor: __modified__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    position: 5
    config:
  sessionDate:
    input: calendar
    key: sessionDate
    accessor: sessionDate
    label: sessionDate
    position: 2
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
  players:
    input: number
    accessor: players
    key: players
    label: players
    position: 3
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
      source_data: current_folder
config:
  enable_show_state: false
  group_folder_column: 
  remove_field_when_delete_column: true
  show_metadata_created: true
  show_metadata_modified: true
  source_data: current_folder
  source_form_result: root
filters:
  - {field: players, operator: GREATER_THAN_OR_EQUAL,value: 1}
%%>