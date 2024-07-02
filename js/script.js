const list = document.querySelector("button");
const dropdown = document.querySelector("#drop");

list.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

const btn = document.querySelector("#btn");
const popop = document.querySelector("#popup");

btn.addEventListener("click", () => {
  popop.classList.toggle("active");
});

const headerButton = document.getElementById("header__button");

headerButton.addEventListener("click", function () {
  this.classList.toggle("hamburger--open");
});

const navItems = [...document.getElementsByClassName("nav__item")];

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((oldItem) => oldItem.classList.remove("active"));

    item.classList.add("active");
  });
});

const burger = document.querySelector(".burger");
const popup = document.querySelector(".popup");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    // Если бургер в виде крестика, закрываем popups
    burger.classList.remove("active");
    popup.style.display = "none";
  } else {
    // Если бургер в обычном виде, открываем popup
    burger.classList.add("active");
    popup.style.display = "block";
  }
});
