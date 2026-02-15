function NavItem(name, link) {
  this.name = name;
  this.link = link;
}

function Nav() {
  this.navItems = [];
}

NavItem.prototype.isActive = function () {
    const currentUrl = new URL(window.location.href);
    const path = currentUrl.pathname;
    if(this.link === path.substring(1)) {
        return true;
    }
    return false;
}

Nav.prototype.addNavItem = function (navItem) {
  this.navItems.push(navItem);
};

const homeLink = new NavItem("Home", "index.html");
const aboutLink = new NavItem("About", "Aboutandreservations.html");
const menuLink = new NavItem("Menu", "Menu.html");

const nav = new Nav();
nav.addNavItem(homeLink);
nav.addNavItem(aboutLink);
nav.addNavItem(menuLink);

function createNav(navItem, navList) {
  const nav = document.createElement("a");
  nav.textContent = navItem.name;
  nav.href = navItem.link;

  nav.className = "navLink";
  navList.className = "nav";

  if(navItem.isActive()) {
    nav.className = "navLinkActive";
  }

  navList.appendChild(nav);
}

function showNav() {
  for (let i = 0; i < nav.navItems.length; i++) {
    const item = nav.navItems[i];
    const navList = document.querySelector("nav");
    createNav(item, navList);
  }
}

window.addEventListener("DOMContentLoaded", function show() {
  showNav();
});
