"use strict";
var _a, _b, _c;
function setResultsMode() {
    var _a;
    const searchParams = new URLSearchParams(window.location.search);
    const q = (_a = searchParams.get("q")) === null || _a === void 0 ? void 0 : _a.toString().trim();
    const searchMode = searchParams.get("mode");
    if (!q)
        return window.location.href = "../discover/index.html"; // remover posição relativa
    const banner = document.querySelector(".banner");
    const title = document.querySelector(".search");
    title.innerText = q;
    if (searchMode == "tag" && banner) {
        const bannerColors = [
            '#800000',
            '#B24C00',
            '#CCCC00',
            '#006400',
            '#000080',
            '#1E0064',
            '#4B0082',
            '#800080',
            '#8B0A50',
            '#CD6600',
            '#006400',
            '#008080',
            '#003535',
            '#000040',
            '#400040',
            '#800080',
            '#C0B283',
            '#79C477',
            '#8AA1B5',
            '#B8B8D9',
            '#B8860B',
            '#5F9EA0',
            '#104646',
            '#9932CC',
            '#8C9EB8' // Azul-aço escuro
        ];
        banner.style.background = bannerColors[Math.round(Math.random() * (bannerColors.length - 1))];
        banner.classList.add("tag");
    }
    else
        banner === null || banner === void 0 ? void 0 : banner.classList.add("search");
}
setResultsMode();
const searchHeader = new Header();
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(searchHeader.get());
const searchMenu = new Menu("discover");
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(searchMenu.get());
const searchCategories = [
    new Category("Autores", undefined, [
        new Author("John Cena", "../assets/demos/authors/john_cena.jpg", 81238).get(),
        new Author("Manoel Gomes", "../assets/demos/authors/manoel_gomes.jpg", 81238).get(),
    ]),
    new Category("Fontes de notícias"),
    new Category("Editoras"),
    new Category("Da sua biblioteca"),
    new Category("Notícias", undefined, [
        new Notice("COVID-19: já é hora de se despreocupar dessa ameaça?", "../assets/demos/news/covid-banner.jpg", "CNN", "../assets/demos/sources/cnn.png").get()
    ]),
    new Category("Livros", undefined, [
        new Book("13 razões para votar no PT", ["Aurélio Marcondes Bittencourt", "Lins"], "../assets/demos/books/13_razoes_para_votar_no_pt.jpg").get()
    ]),
    new Category("Coleções")
];
for (let s of searchCategories) {
    (_c = document.querySelector(".search-categories")) === null || _c === void 0 ? void 0 : _c.appendChild(s.get());
}
