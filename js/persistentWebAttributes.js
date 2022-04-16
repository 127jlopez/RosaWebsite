const navItems = [
  { href: "index.html", class: "link active", text: "home" },
  { href: "product.html", class: "link", text: "product" },
  { href: "about.html", class: "link", text: "about" },
  { href: "contact.html", class: "link", text: "contact" },
];

const navImage = "images/ROSA'sLogo.png";
const navImageClass = "logo-icon";

function populateNavBar() {
  console.log("Start of adding Nav bar");
  let navElem = document.createElement("nav"),
    navImg,
    navItem,
    navLink;

  navImg = document.createElement("img");
  navImg.src = navImage;
  navImage.className = navImageClass;
  navImage.alt = "";
  for (let i = 0; i < navItems.length; i++) {
    navLink = document.createElement("a");
    navLink.href = navItems[i].href;
    navLink.className = navItems[i].class;
    navLink.innerHTML = navItems[i].text;

    navItem.appendChild(navLink);
  }

  document.body.appendChild(navElem);
}

function JustSaySomething() {
  console.log("Please see this message!!!");
}
