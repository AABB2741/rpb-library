const profileHeader = new Header();
const profileMenu = new Menu("profile");

document.querySelector(".header-container")?.appendChild(profileHeader.get());
document.querySelector(".menu-container")?.appendChild(profileMenu.get());
