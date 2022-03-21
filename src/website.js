import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const name = document.createElement("h1");
  name.textContent = "A Pizza for all";

  header.appendChild(name);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-bar");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.textContent = "Home";

  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.textContent = "Menu";

  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "Contact";

  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(contactBtn);
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActiveBtn(button) {
  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  return main;
}

function loadWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());

  setActiveBtn(document.querySelector(".button-nav"));
  loadHome();
}

export default loadWebsite;
