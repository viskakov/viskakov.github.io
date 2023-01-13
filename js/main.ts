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
        button.textContent = "Светлая тема";
    } else {
        button.textContent = "Тёмная тема";
    }
}