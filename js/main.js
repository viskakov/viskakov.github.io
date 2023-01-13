var themeButton = document.querySelector("#button");
themeButton.addEventListener("click", changeTheme);
themeButton.addEventListener("click", changeText);
function changeTheme() {
    var body = document.body;
    body.classList.toggle("darkTheme");
}
function changeText() {
    var button = document.getElementById("button");
    if (document.body.classList.contains("darkTheme")) {
        button.textContent = "Светлая тема";
    }
    else {
        button.textContent = "Тёмная тема";
    }
}
//# sourceMappingURL=main.js.map