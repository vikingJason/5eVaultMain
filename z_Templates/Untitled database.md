---

database-plugin: basic

---

<%%
name: new database
description: new description
columns:
  column1:
    input: text
    key: column1
    accessor: column1
    label: Column 1
    position: 0
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
  __file__:
    key: __file__
    input: markdown
    label: File
    accessor: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
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
    config:
  New_Column_5:
    input: text
    accessor: New_Column_5
    key: New_Column_5
    label: New Column 5
    position: 100
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
%%>