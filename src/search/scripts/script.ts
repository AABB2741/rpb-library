function setResultsMode() {
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get("q")?.toString().trim();
    const searchMode = searchParams.get("mode");

    if (!q)
        return window.location.href = "../discover/index.html"; // remover posição relativa

    const banner = document.querySelector<HTMLDivElement>(".banner");
    const title = document.querySelector(".search") as HTMLElement;
    title.innerText = q;

    if (searchMode == "tag" && banner) {
        const bannerColors = [
            '#800000',   // Vermelho escuro
            '#B24C00',   // Laranja escuro
            '#CCCC00',   // Amarelo escuro
            '#006400',   // Verde escuro
            '#000080',   // Azul escuro
            '#1E0064',   // Índigo escuro
            '#4B0082',   // Violeta escuro
            '#800080',   // Magenta escuro
            '#8B0A50',   // Rosa escuro
            '#CD6600',   // Laranja-avermelhado escuro
            '#006400',   // Verde-amarelado escuro
            '#008080',   // Ciano escuro
            '#003535',   // Verde-azulado escuro
            '#000040',   // Azul-marinho escuro
            '#400040',   // Roxo escuro
            '#800080',   // Rosa-claro (sem alteração)
            '#C0B283',   // Amarelo-claro escuro
            '#79C477',   // Verde-pálido escuro
            '#8AA1B5',   // Azul-pálido escuro
            '#B8B8D9',   // Lavanda escuro
            '#B8860B',   // Ouro escuro
            '#5F9EA0',   // Azul-celeste escuro
            '#104646',   // Verde-mar escuro
            '#9932CC',   // Orquídea escuro
            '#8C9EB8'    // Azul-aço escuro
        ];

        banner.style.background = bannerColors[Math.round(Math.random() * (bannerColors.length - 1))];
        banner.classList.add("tag");
    } else banner?.classList.add("search");
}
setResultsMode();

const searchHeader = new Header();
document.querySelector(".header-container")?.appendChild(searchHeader.get());
const searchMenu = new Menu("discover");
document.querySelector(".menu-container")?.appendChild(searchMenu.get());

const searchCategories: Category[] = [
    new Category("Autores", undefined, [
        new Author("John Cena", "../assets/demos/authors/john_cena.jpg", 81238).get(),
        new Author("Manoel Gomes", "../assets/demos/authors/manoel_gomes.jpg", 81238).get(),
    ]),
    new Category("Fontes de notícias"),
    new Category("Editoras"),
    new Category("Da sua biblioteca"),
    new Category("Notícias", undefined, [
        new Notice("COVID-19: já é hora de se despreocupar dessa ameaça?", "../assets/demos/news/covid-banner.jpg", "CNN", "../assets/demos/sources/cnn.png").get()
    ]),
    new Category("Livros", undefined, [
        new Book("13 razões para votar no PT", ["Aurélio Marcondes Bittencourt", "Lins"], "../assets/demos/books/13_razoes_para_votar_no_pt.jpg").get()
    ]),
    new Category("Coleções")
]

for (let s of searchCategories) {
    document.querySelector(".search-categories")?.appendChild(s.get());
}
