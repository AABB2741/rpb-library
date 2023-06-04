"use strict";
var _a, _b;
const convertHeader = new Header();
const convertMenu = new Menu("convert");
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(convertHeader.get());
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(convertMenu.get());
