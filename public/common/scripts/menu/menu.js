"use strict";
const DefaultMenuOptions = {
    baseUrl: "../",
    autoImport: true
};
class Menu {
    constructor(currentScreen, options) {
        this.tabs = [{
                label: "Descobrir",
                code: "discover",
                icon: "compass"
            }, {
                label: "Notícias",
                code: "news",
                icon: "newspaper"
            }, {
                label: "Converter livros",
                code: "convert",
                icon: "arrows-clockwise"
            }];
        this.menuOptions = [{
                label: "Meu perfil",
                code: "profile",
                icon: "user-circle"
            }, {
                label: "Minha biblioteca",
                code: "library",
                icon: "books"
            }, {
                label: "Dowloads",
                code: "schedule",
                icon: "download"
            }, {
                label: "Configurações",
                code: "settings",
                icon: "gear-six"
            }];
        this.options = Object.assign(Object.assign({}, DefaultMenuOptions), options);
        this.options.baseUrl = this.options.baseUrl.endsWith("/") ? this.options.baseUrl.substring(0, this.options.baseUrl.length - 1) : this.options.baseUrl;
        if (this.options.autoImport) {
            const head = document.getElementsByTagName("head")[0];
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `${this.options.baseUrl}/common/styles/menu/menu.css`;
            head.appendChild(link);
        }
        this.currentScreen = currentScreen;
    }
    get() {
        const menu = document.createElement("aside");
        menu.id = "menu";
        // Guias
        const menuTabs = document.createElement("div");
        menuTabs.classList.add("menu-tabs");
        this.addOptions(menuTabs, this.tabs);
        menu.appendChild(menuTabs);
        // Opções
        const menuOptions = document.createElement("div");
        menuOptions.classList.add("menu-options");
        this.addOptions(menuOptions, this.menuOptions);
        menu.appendChild(menuOptions);
        return menu;
    }
    addOptions(container, options) {
        for (let o of options) {
            const a = document.createElement("a");
            a.href = `${this.options.baseUrl}/${o.code}/index.html`; // remover posição relativa
            a.title = o.label;
            if (this.currentScreen == o.code)
                a.classList.add("selected");
            const i = document.createElement("i");
            i.classList.add(this.currentScreen == o.code ? "ph-fill" : "ph");
            i.classList.add(`ph-${o.icon}`);
            a.appendChild(i);
            container.appendChild(a);
        }
    }
}
