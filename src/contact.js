function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  let phone = document.createElement("h5");
  phone.textContent = "123-456-7890";

  let email = document.createElement("p");
  email.textContent = "1234@pizzaplace.com";

  contact.appendChild(phone);
  contact.appendChild(email);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
