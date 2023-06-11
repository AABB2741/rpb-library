"use strict";
var _a, _b, _c;
const overviewHeader = new Header();
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(overviewHeader.get());
const overviewMenu = new Menu("overview");
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(overviewMenu.get());
const overviewTabs = new TabManager("summary", [{
        label: "Resumo",
        code: "summary",
        content: document.getElementById("summary")
    }, {
        label: "Avaliações",
        code: "ratings",
        content: document.getElementById("ratings")
    }, {
        label: "Notícias",
        code: "news",
        content: document.getElementById("news")
    }, {
        label: "Detalhes",
        code: "details",
        content: document.getElementById("details")
    }]);
(_c = document.querySelector(".tabs-container")) === null || _c === void 0 ? void 0 : _c.appendChild(overviewTabs.get());
