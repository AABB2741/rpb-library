"use strict";
var _a;
const HeaderParams = new URLSearchParams(window.location.search);
const DefaultHeaderOptions = {
    baseUrl: "../",
    autoImport: true,
    q: (_a = (HeaderParams.get("mode") == "tag" ? `#${HeaderParams.get("q")}` : HeaderParams.get("q"))) !== null && _a !== void 0 ? _a : ""
};
class Header {
    constructor(options) {
        var _a, _b;
        this.options = Object.assign(Object.assign({}, DefaultHeaderOptions), options);
        this.options.baseUrl = ((_a = this.options.baseUrl) === null || _a === void 0 ? void 0 : _a.endsWith("/")) ? this.options.baseUrl.substring(0, this.options.baseUrl.length - 1) : this.options.baseUrl;
        if ((_b = this.options) === null || _b === void 0 ? void 0 : _b.autoImport) {
            const head = document.getElementsByTagName("head")[0];
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `${this.options.baseUrl}/common/styles/header/header.css`;
            head.appendChild(link);
        }
    }
    get() {
        var _a;
        const header = document.createElement("Header");
        header.id = "header";
        // Logotipo
        const logoContainer = document.createElement("div");
        logoContainer.classList.add("header-logo-container");
        const img = document.createElement("img");
        img.src = `${this.options.baseUrl}/assets/logo.png`;
        img.alt = "RPB Library";
        logoContainer.appendChild(img);
        header.appendChild(logoContainer);
        // Barra de pesquisa
        const headerSearch = document.createElement("di");
        headerSearch.classList.add("header-search");
        const headerInput = document.createElement("input");
        headerInput.type = "text";
        headerInput.name = "search";
        headerInput.id = "headerSearch";
        headerInput.placeholder = "Procure por livros, autores, séries...";
        headerInput.value = (_a = this.options.q) !== null && _a !== void 0 ? _a : "";
        headerSearch.appendChild(headerInput);
        header.appendChild(headerSearch);
        headerInput.addEventListener("keyup", e => {
            if (e.key == "Enter") {
                this.search(headerInput.value);
            }
        });
        // Usuário
        const headerUser = document.createElement("div");
        headerUser.classList.add("header-user");
        const avatar = document.createElement("img");
        avatar.src = `${this.options.baseUrl}/assets/demos/avatar.jpg`;
        headerUser.appendChild(avatar);
        const headerUsername = document.createElement("p");
        headerUsername.classList.add("header-user-name");
        headerUsername.innerText = "Mario";
        headerUser.appendChild(headerUsername);
        header.appendChild(headerUser);
        return header;
    }
    search(q) {
        q = q.trim();
        if (!q)
            return;
        if (q.startsWith("#")) {
            window.location.href = `${this.options.baseUrl}/search/index.html?q=${encodeURI(q.replace(/#/g, ""))}&mode=tag`;
        }
        else
            window.location.href = `${this.options.baseUrl}/search/index.html?q=${encodeURI(q)}`; // remover index.html
    }
}
