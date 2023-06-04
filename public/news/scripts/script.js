"use strict";
var _a, _b;
const newsHeader = new Header();
const newsMenu = new Menu("news");
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(newsHeader.get());
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(newsMenu.get());
const newsCategories = [
    new Category("Últimas notícias", "Veja as notícias mais importantes acontecendo no momento.", [
        new Notice("COVID-19: já é hora de se despreocupar com essa ameaça?", "../assets/demos/news/covid-banner.jpg", "CNN", "../assets/demos/sources/cnn.png").get(),
        new Notice("Menos você: novo programa é anunciado na Globe", "../assets/demos/news/menos-voce.jpg", "CNN", "../assets/demos/sources/globe.jpg").get()
    ]),
    new Category("Principais fontes de notícia", "Fontes de notícias confiáveis para você acompanhar.", [])
];
function loadCategories(categories) {
    const newsCategoriesContainer = document.getElementById("newsCategories");
    newsCategoriesContainer.innerHTML = "";
    for (let c of categories) {
        newsCategoriesContainer.appendChild(c.get());
    }
}
loadCategories(newsCategories);
