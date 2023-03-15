const hamburgerBtn = document.querySelector(".mobile-hamburger");
const navMobile = document.querySelector("#menu");
const cancelBtn = document.querySelector(".mobile-close");
hamburgerBtn.addEventListener("click", function () {
    navMobile.classList.add("active-nav");
});

cancelBtn.addEventListener("click", function () {
    navMobile.classList.remove("active-nav");
});