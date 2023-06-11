interface ThemeOptions {
    baseUrl: string;
    forceMode?: "dark" | "light";
}

const ThemeDefaultOptions: ThemeOptions = {
    baseUrl: "../"
}

class ThemeManager {
    options: ThemeOptions;
    theme: "light" | "dark";
    link?: HTMLLinkElement;

    constructor(options?: Partial<ThemeOptions>) {
        this.options = { ...ThemeDefaultOptions, ...options };
        this.options.baseUrl = this.options.baseUrl?.endsWith("/") ? this.options.baseUrl.substring(0, this.options.baseUrl.length - 1) : this.options.baseUrl;

        this.theme = JSON.parse(localStorage.getItem("theme") ?? "{}")?.theme ?? "light";

        this.setTheme(this.theme);
    }

    setTheme(theme: "light" | "dark") {
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
