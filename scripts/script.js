// variable declarations
const darkModeButton = document.querySelector(".dark_theme");
const notes = document.querySelector(".notes");
const textarea = document.querySelector("textarea");


const textbox = document.querySelector(".text_container")
const cancelButton = document.querySelector(".cancel");
const saveButton = document.querySelector(".save")

const newNoteButton = document.querySelector(".new_note")

let notes_list = [
    {title: "note one", body: "this is my first note"},
    {title: "note two", body: "this is my second note"}
]

let note_entry = {
    title: "",
    body: ""
}

// creating Dark Theme button functionality
function darkMode () {
    document.body.classList.toggle("dark_mode");
    notes.classList.toggle("dark_mode2");
    textarea.classList.toggle("dark_mode2");
    if (darkModeButton.textContent === "Dark Theme") {
        darkModeButton.textContent = "Light Theme";
    }

    else {
        darkModeButton.textContent = "Dark Theme";
    }
}

darkModeButton.addEventListener("click", darkMode)


// creating cancel button functionality
function hideText () {
    textbox.classList.toggle("hidden"); 
    saveButton.classList.toggle("hidden");
    cancelButton.classList.toggle("hidden");
}

cancelButton.addEventListener("click", hideText);

// creating new note button functionality
function newNote () {
    textbox.classList.remove("hidden");
    textarea.value = ''; // clear text in textbox
    saveButton.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
}

newNoteButton.addEventListener("click", newNote);


function saveTextEntry () {
    let user_title = prompt("Give your note a title");
    // create note entry
    note_entry.title = user_title;
    note_entry.body = textarea.value;
    // add note entry to note array ("note list")
    notes_list.push(note_entry);
}

saveButton.addEventListener("click", saveTextEntry)

