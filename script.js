function toggleMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}


function openSearch() {
    const searchBox = document.getElementById("searchBox");
    const input = document.getElementById("searchInput");

    searchBox.classList.add("active");

    setTimeout(function () {
        input.focus();
    }, 100);
}


function closeSearch() {
    const searchBox = document.getElementById("searchBox");

    searchBox.classList.remove("active");
}


document.addEventListener("click", function (event) {

    const menu = document.getElementById("menu");
    const menuButton = document.querySelector(".menu-btn");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        menu.classList.remove("active");
    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeSearch();

        const menu = document.getElementById("menu");
        menu.classList.remove("active");
    }

});
