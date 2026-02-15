function MenuItem(name, price, category, description, image) {
  this.name = name;
  this.price = price;
  this.category = category;
  this.description = description;
  this.image = image;
}

function Menu() {
  this.menuItems = [];
}

Menu.prototype.addMenuItem = function (menuItem) {
  this.menuItems.push(menuItem);
};

const ugali = new MenuItem(
  "Ugali",
  "100",
  "mains",
  "An African maize meal dish ",
  "ugali.jpg",
);
const samosa = new MenuItem(
  "Beef Samosa",
  "150",
  "appetizers",
  "Crispy pastry filled with spiced minced beef",
  "sammosa.jpg",
);
const springRolls = new MenuItem(
  "Vegetable Spring Rolls",
  "250",
  "appetizers",
  "Golden rolls stuffed with seasoned vegetables",
  "Spring-Roll.jpg",
);
const chickenWings = new MenuItem(
  "Spicy Chicken Wings",
  "320",
  "appetizers",
  "Grilled wings tossed in house spicy sauce",
  "chicken.jpg",
);
const fries = new MenuItem(
  "French Fries",
  "150",
  "appetizers",
  "Crispy golden fries with ketchup",
  "fries.jpg",
);
const garlicBread = new MenuItem(
  "Garlic Bread",
  "200",
  "appetizers",
  "Toasted bread with garlic butter and herbs",
  "garlicbread.jpg",
);
const spaghetti = new MenuItem(
  "Spaghetti",
  "@ 150 KSH",
  "mains",
  "Italian Delicacy often had with meatballs",
  "spagheti.jpg",
);
const pilau = new MenuItem(
  "Pilau",
  "250",
  "mains",
  "Swahili Delicacy often had with kachumbari",
  "pilau.jpg",
);
const chickenTikka = new MenuItem(
  "Chicken Tikka Masala",
  "350",
  "mains",
  "Indian Delicacy often had with Naan",
  "chicken.jpg",
);
const icecream = new MenuItem(
  "Ice Cream",
  "350",
  "desserts",
  "Italian Dessert",
  "icecream.jpg",
);
const chocolateCake = new MenuItem(
  "Chocolate Cake",
  "300",
  "desserts",
  "Rich moist chocolate cake slice",
  "choclate.jpg",
);
const cheesecake = new MenuItem(
  "Strawberry Cheesecake",
  "380",
  "desserts",
  "Creamy cheesecake topped with strawberry glaze",
  "chesee.jpeg",
);
const tiramisu = new MenuItem(
  "Tiramisu",
  "420",
  "desserts",
  "Italian layered coffee dessert",
  "tiriamisu.jpg",
);
const brownie = new MenuItem(
  "Chocolate Brownie",
  "300",
  "desserts",
  "Warm fudgy brownie with chocolate drizzle",
  "brownie.jpg",
);

const menu = new Menu();
menu.addMenuItem(ugali);
menu.addMenuItem(spaghetti);
menu.addMenuItem(pilau);
menu.addMenuItem(chickenTikka);
menu.addMenuItem(icecream);
menu.addMenuItem(samosa);
menu.addMenuItem(springRolls);
menu.addMenuItem(fries);
menu.addMenuItem(garlicBread);
menu.addMenuItem(spaghetti);
menu.addMenuItem(brownie);
menu.addMenuItem(tiramisu);
menu.addMenuItem(cheesecake);
menu.addMenuItem(chocolateCake);

function createMenu(menuItem, itemList) {
  const itemDiv = document.createElement("div");
  const nameParagraph = document.createElement("p");
  const priceParagraph = document.createElement("p");
  const descriptionParagraph = document.createElement("p");
  const foodImage = document.createElement("img");

  nameParagraph.textContent = menuItem.name;
  priceParagraph.textContent = menuItem.price;
  descriptionParagraph.textContent = menuItem.description;
  foodImage.src = "./images/" + menuItem.image;

  nameParagraph.className = "menuItemName";
  itemDiv.className = "menuCard";
  foodImage.className = "menuImage";

  itemDiv.appendChild(foodImage);
  itemDiv.appendChild(nameParagraph);
  itemDiv.appendChild(descriptionParagraph);
  itemDiv.appendChild(priceParagraph);
  itemList.appendChild(itemDiv);
}

function showMenu() {
  for (let i = 0; i < menu.menuItems.length; i++) {
    const item = menu.menuItems[i];
    const itemList = document.querySelector("#" + item.category);
    createMenu(item, itemList);
  }
}

window.addEventListener("DOMContentLoaded", function show() {
  showMenu();
});
