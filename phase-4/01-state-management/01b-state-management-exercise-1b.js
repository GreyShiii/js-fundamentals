// Create an HTML page with:
// Text input for note title
// Text area for note content
// Button "Save Note"
// Div showing list of saved notes
// Each note has a "Delete" button
const appState = {
    notes: [],
    noteId: 1,
}

function saveNote(title, content) {
    if (title.trim() === "" || content.trim() === "") {
        alert("Fields cannot be empty!")
        return;
    }

    appState.notes.push({
        id: appState.noteId,
        title: title,
        content: content
    })
    appState.noteId += 1
}

function render() {
    const noteLists = document.getElementById("noteLists");
    noteLists.innerHTML = "";

    appState.notes.forEach((note) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>ID: ${note.id}</strong><br>
            <p>Title: ${note.title}</p>
            <p>Content: ${note.content}</p>
            <button onclick="removeNote(${note.id})">Remove</button>
        `;
        noteLists.appendChild(div);
    });
}

function removeNote(id) {
    appState.notes = appState.notes.filter((note) => note.id !== id);
    render();
}


const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    const titleInput = noteTitle.value;
    const contentInput = noteContent.value;
    saveNote(titleInput, contentInput);
    noteTitle.value = "";
    noteContent.value = "";
    render();
})

render();