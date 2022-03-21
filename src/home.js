function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const homeImage = document.createElement("img");
  homeImage.src = "img/chef.jpeg";

  home.appendChild(createParagraph("Best Italian Food in Town!"));
  home.appendChild(homeImage);
  home.appendChild(createParagraph("Order now for takeout or delivery"));
  home.appendChild(createParagraph("Thank you for your support!"));

  return home;
}

function createParagraph(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
