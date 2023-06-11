"use strict";
var _a, _b, _c;
const metadataEditHeader = new Header({
    baseUrl: "../../"
});
const metadataEditMenu = new Menu("edit-metadata", {
    baseUrl: "../../"
});
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(metadataEditHeader.get());
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(metadataEditMenu.get());
const metadataEditPages = new TabManager("basic", [{
        code: "basic",
        label: "Metadados básicos",
        content: document.getElementById("basic-metadata")
    }, {
        code: "custom",
        label: "Metadados personalizados",
        content: document.getElementById("custom-metadata")
    }], { baseUrl: "../../" });
(_c = document.querySelector(".tab-container")) === null || _c === void 0 ? void 0 : _c.appendChild(metadataEditPages.get());
themeManager.options = Object.assign(Object.assign({}, themeManager.options), { baseUrl: "../../" });
themeManager.setTheme(themeManager.theme); // Atualizando para trocar opções
