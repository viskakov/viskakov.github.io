const themeButton = document.querySelector("#button");
themeButton.addEventListener("click", changeTheme);
themeButton.addEventListener("click", changeText);

function changeTheme() {
    if (document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
    } else {
        document.documentElement.setAttribute("theme", "dark");
    }
}

function changeText() {
    const button = document.getElementById("button");
    if (document.documentElement.hasAttribute("theme")) {
        button.innerText = "Светлая тема";
    } else {
        button.innerText = "Тёмная тема";
    }
}
