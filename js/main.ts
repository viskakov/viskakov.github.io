const themeButton = document.querySelector("#button");

function toggleDarkTheme(state: string) {
    const body = document.body;
    body.classList.toggle("darkTheme");
    localStorage.setItem("isDarkTheme", state)
    changeButtonText()
}

function changeButtonText() {
    const button = document.getElementById("button");
    if (document.body.classList.contains("darkTheme")) {
        button.innerHTML = "<i id=\"themeIcon\" class=\"bi bi-sun-fill\"></i>Светлая тема";
    } else {
        button.innerHTML = "<i id=\"themeIcon\" class=\"bi bi-moon-fill\"></i>Тёмная тема";
    }
}

let isDarkTheme = localStorage.getItem("isDarkTheme");
if (isDarkTheme === "1") {
    toggleDarkTheme("1")
}

themeButton.addEventListener("click", () => {
    let isDarkTheme = localStorage.getItem("isDarkTheme");
    if (isDarkTheme === "0") {
        toggleDarkTheme("1");
    } else {
        toggleDarkTheme("0");
    }
})