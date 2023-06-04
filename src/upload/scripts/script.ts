const uploadHeader = new Header();
const uploadMenu = new Menu("upload");

document.querySelector(".header-container")?.appendChild(uploadHeader.get());
document.querySelector(".menu-container")?.appendChild(uploadMenu.get());
