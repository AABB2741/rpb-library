"use strict";
var _a, _b, _c, _d;
const libraryHeader = new Header();
const libraryMenu = new Menu("library");
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(libraryHeader.get());
(_b = document.querySelector(".header-container")) === null || _b === void 0 ? void 0 : _b.appendChild(libraryMenu.get());
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
(_c = document.querySelector(".tabs-container")) === null || _c === void 0 ? void 0 : _c.appendChild(libraryTabManager.get());
const libraryFilter = new Filter("Procure por seus livros...");
(_d = document.querySelector(".filter-container")) === null || _d === void 0 ? void 0 : _d.appendChild(libraryFilter.get());
