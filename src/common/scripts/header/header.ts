const HeaderParams = new URLSearchParams(window.location.search);

const DefaultHeaderOptions = {
    baseUrl: "../",
    autoImport: true,
    q: (HeaderParams.get("mode") == "tag" ? `#${HeaderParams.get("q")}` : HeaderParams.get("q")) ?? ""
}

type HeaderOptions = Partial<typeof DefaultHeaderOptions>;

class Header {
    options: HeaderOptions;

    constructor(options?: HeaderOptions) {
        this.options = { ...DefaultHeaderOptions, ...options };

        this.options.baseUrl = this.options.baseUrl?.endsWith("/") ? this.options.baseUrl.substring(0, this.options.baseUrl.length - 1) : this.options.baseUrl;

        if (this.options?.autoImport) {
            const head = document.getElementsByTagName("head")[0];
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `${this.options.baseUrl}/common/styles/header/header.css`;
            head.appendChild(link);
        }
    }
    get() {

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
        headerInput.id = "headerSearch"
        headerInput.placeholder = "Procure por livros, autores, séries...";
        headerInput.value = this.options.q ?? "";
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
        const theme = document.createElement("button");
        theme.classList.add("header-theme-selector");
        theme.innerText = themeManager.theme == "dark" ? "Modo claro" : "Modo escuro";
        headerUser.appendChild(theme);
        theme.addEventListener("click", _ => {
            themeManager.setTheme(themeManager.theme == "dark" ? "light" : "dark");
            theme.innerText = themeManager.theme == "dark" ? "Modo claro" : "Modo escuro";
        });

        return header;
    }

    search(q: string) {
        q = q.trim();

        if (!q)
            return;

        if (q.startsWith("#")) {
            window.location.href = `${this.options.baseUrl}/search/index.html?q=${encodeURI(q.replace(/#/g, ""))}&mode=tag`;
        } else window.location.href = `${this.options.baseUrl}/search/index.html?q=${encodeURI(q)}`;  // remover index.html
    }
}
