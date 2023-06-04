const libraryHeader = new Header();
const libraryMenu = new Menu("library");

document.querySelector<HTMLDivElement>(".header-container")?.appendChild(libraryHeader.get());
document.querySelector<HTMLDivElement>(".header-container")?.appendChild(libraryMenu.get());

const libraryTabManager = new TabManager("downloaded-books", [{
    code: "downloaded-books",
    label: "Livros baixados",
    content: document.getElementById("downloadedBooks")
}, {
    code: "my-books",
    label: "Meus livros",
    content: document.getElementById("myBooks")
}, {
    code: "collections",
    label: "Minhas coleções",
    content: document.getElementById("collections")
}, {
    code: "wishlist",
    label: "Lista de desejos",
    content: document.getElementById("wishlist")
}]);

document.querySelector(".tabs-container")?.appendChild(libraryTabManager.get());

const libraryFilter = new Filter("Procure por seus livros...");
document.querySelector(".filter-container")?.appendChild(libraryFilter.get());
