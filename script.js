function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}


// Menu-এর বাইরে চাপলে menu বন্ধ হবে
document.addEventListener("click", function(event) {

    const menu = document.getElementById("menu");
    const button = document.querySelector(".menu-btn");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.classList.remove("active");
    }

});
