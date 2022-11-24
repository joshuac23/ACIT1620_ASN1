// creating Dark Theme button behaviour
const darkModeButton = document.querySelector(".dark_theme");
const notes = document.querySelector(".notes");
const textarea = document.querySelector("textarea");


const textbox = document.querySelector(".text_container")
const cancelButton = document.querySelector(".cancel");
const saveButton = document.querySelector(".save")

const newNoteButton = document.querySelector(".new_note")

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

cancelButton.addEventListener("click", hideText)


function newNote () {
    textbox.classList.remove("hidden");
    textarea.value = ''; // clear text in textbox
    saveButton.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
}

newNoteButton.addEventListener("click", newNote)
