document.querySelector("#toggle-theme").onclick = changeTheme;
function changeTheme() {
    if (document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
    } else {
        document.documentElement.setAttribute("theme", "dark");
    }
}