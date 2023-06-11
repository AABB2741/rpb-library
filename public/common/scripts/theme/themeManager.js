"use strict";
const ThemeDefaultOptions = {
    baseUrl: "../"
};
class ThemeManager {
    constructor(options) {
        var _a, _b, _c, _d;
        this.options = Object.assign(Object.assign({}, ThemeDefaultOptions), options);
        this.options.baseUrl = ((_a = this.options.baseUrl) === null || _a === void 0 ? void 0 : _a.endsWith("/")) ? this.options.baseUrl.substring(0, this.options.baseUrl.length - 1) : this.options.baseUrl;
        this.theme = (_d = (_c = JSON.parse((_b = localStorage.getItem("theme")) !== null && _b !== void 0 ? _b : "{}")) === null || _c === void 0 ? void 0 : _c.theme) !== null && _d !== void 0 ? _d : "light";
        this.setTheme(this.theme);
    }
    setTheme(theme) {
        if (this.link)
            this.link.remove();
        const head = document.getElementsByTagName("head")[0];
        this.link = document.createElement("link");
        this.link.rel = "stylesheet";
        this.link.href = `${this.options.baseUrl}/common/styles/${theme}-theme.css`;
        head.appendChild(this.link);
        localStorage.setItem("theme", JSON.stringify({ theme }));
        this.theme = theme;
    }
}
const themeManager = new ThemeManager();
