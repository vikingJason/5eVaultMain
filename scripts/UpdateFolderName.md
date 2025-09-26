<%*
// ==== CONFIGURE THIS ====
const targetFolder = ".../Checks"; // Folder you want to update (relative to vault root)
// ========================

// Get all notes in the vault
const allFiles = app.vault.getMarkdownFiles();

// Filter notes that are in the target folder
const folderNotes = allFiles.filter(f => f.path.startsWith(`${targetFolder}/`));

for (let file of folderNotes) {
    // Compute the last folder name
    const pathSegments = file.path.split("/");
    const folderName = pathSegments.slice(-2, -1)[0]; // second-to-last segment

    // Load the file and update frontmatter
    await tp.file.update_frontmatter({ folderName: folderName }, file.path);
}

tR += `✅ Updated ${folderNotes.length} notes in folder "${targetFolder}" with folderName`;
%>
