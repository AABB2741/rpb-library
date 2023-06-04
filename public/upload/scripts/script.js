"use strict";
var _a, _b;
const uploadHeader = new Header();
const uploadMenu = new Menu("upload");
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(uploadHeader.get());
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(uploadMenu.get());
