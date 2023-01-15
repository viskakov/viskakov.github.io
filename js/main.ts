const themeButton = document.querySelector("#button");
themeButton.addEventListener("click", changeTheme);
themeButton.addEventListener("click", changeText);

function changeTheme() {
    const body = document.body;
    body.classList.toggle("darkTheme");
}

function changeText() {
    const button = document.getElementById("button");
    if (document.body.classList.contains("darkTheme")) {
        button.innerHTML = "<i id=\"themeIcon\" class=\"bi bi-sun-fill\"></i>Светлая тема";
    } else {
        button.innerHTML = "<i id=\"themeIcon\" class=\"bi bi-moon-fill\"></i>Тёмная тема";
    }
}