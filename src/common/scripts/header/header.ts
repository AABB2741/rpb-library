class Header {
    get(autoImport = "../common/styles/header/header.css") {
        if (autoImport) {
            const head = document.getElementsByTagName("head")[0];
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = autoImport;
            head.appendChild(link);
        }

        const header = document.createElement("Header");
        header.id = "header";

        // Logotipo
        const logoContainer = document.createElement("div");
        logoContainer.classList.add("header-logo-container");
        const img = document.createElement("img");
        img.src = "../assets/logo.png";
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
        avatar.src = "../assets/demos/avatar.jpg";
        headerUser.appendChild(avatar);
        const headerUsername = document.createElement("p");
        headerUsername.classList.add("header-user-name");
        headerUsername.innerText = "Mario";
        headerUser.appendChild(headerUsername);
        header.appendChild(headerUser);

        return header;
    }

    search(q: string) {
        q = q.trim();

        if (!q)
            return;

        window.location.href = `../search/index.html?q=${encodeURI(q)}`;  // remover posição relativa
    }
}
