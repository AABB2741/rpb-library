type MenuTab = {
    label: string;
    code: string;
    icon: string;
}

class Menu {
    currentScreen: string;
    tabs: MenuTab[] = [{
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

    options: MenuTab[] = [{
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

    constructor(currentScreen: string, autoImport = "../common/styles/menu/menu.css", tabs?: MenuTab[], options?: MenuTab[]) {
        if (autoImport) {
            const head = document.getElementsByTagName("head")[0];
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = autoImport;
            head.appendChild(link);
        }

        this.currentScreen = currentScreen;
        this.tabs = tabs ?? this.tabs;
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
        this.addOptions(menuOptions, this.options);
        menu.appendChild(menuOptions);

        return menu;
    }

    private addOptions(container: HTMLElement, options: MenuTab[]) {
        for (let o of options) {
            const a = document.createElement("a");
            a.href = `../${o.code}/index.html`; // remover posição relativa
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
