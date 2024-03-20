let list = document.querySelector(".nav__list");
let burgerBtn = document.querySelector(".burger-menu");

burgerBtn.addEventListener("click", function () {
        list.classList.toggle("active__navbar")
})