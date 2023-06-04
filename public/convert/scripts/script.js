"use strict";
var _a, _b, _c;
const convertHeader = new Header();
const converMenu = new Menu("convert");
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(convertHeader.get());
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(converMenu.get());
const convertTabs = new TabManager("metadata", [{
        label: "Metadados",
        code: "metadata",
        content: document.getElementById("metadata")
    }, {
        label: "Aparência",
        code: "appearance",
        content: document.getElementById("appearance")
    }, {
        label: "Processamento Heurístico",
        code: "proccess",
        content: document.getElementById("proccess")
    }, {
        label: "Configurar Página",
        code: "configure",
        content: document.getElementById("configure")
    }, {
        label: "Detecção da Estrutura",
        code: "detection",
        content: document.getElementById("detection")
    }, {
        label: "Índice",
        code: "index",
        content: document.getElementById("index")
    }, {
        label: "Buscar & Substituir",
        code: "search",
        content: document.getElementById("search")
    }, {
        label: "Saída EPUB",
        code: "output",
        content: document.getElementById("output")
    }, {
        label: "Depuração",
        code: "debug",
        content: document.getElementById("debug")
    }]);
(_c = document.querySelector(".tabs-container")) === null || _c === void 0 ? void 0 : _c.appendChild(convertTabs.get());
console.log(convertTabs);
