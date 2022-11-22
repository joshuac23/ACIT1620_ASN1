// creating Dark Theme button behaviour
const darkModeButton = document.querySelector(".dark_theme");
const notes = document.querySelector(".notes");
const textarea = document.querySelector("textarea");

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