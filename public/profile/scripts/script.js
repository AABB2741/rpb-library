"use strict";
var _a, _b;
const profileHeader = new Header();
const profileMenu = new Menu("profile");
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(profileHeader.get());
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(profileMenu.get());
