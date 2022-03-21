function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem("Margaritia", "Delicious woodfired Margarita Pizza")
  );

  menu.appendChild(
    createMenuItem("Meat-Lovers", "Delicious woodfired Meat Lovers Pizza")
  );

  menu.appendChild(
    createMenuItem(
      "Spicy-Sicilian",
      "Delicious woodfired spicy pizza from the foothills of Italia"
    )
  );

  return menu;
}

function createMenuItem(title, discription) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodTitle = document.createElement("h3");
  foodTitle.textContent = title;

  let disc = document.createElement("p");
  disc.classList.add("foodDisc");
  disc.textContent = discription;

  const foodImage = document.createElement("img");
  foodImage.classList.add("menuImg");
  foodImage.src = `img/${title.toLowerCase()}.jpeg`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodTitle);
  menuItem.appendChild(disc);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
