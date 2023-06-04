function setResultsMode() {
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get("q")?.toString().trim();
    const searchMode = searchParams.get("mode");

    if (!q)
        return window.location.href = "../discover/index.html"; // remover posição relativa

    const banner = document.querySelector<HTMLDivElement>(".banner");
    const title = document.querySelector(".search") as HTMLElement;
    title.innerText = q;

    if (searchMode == "tag") {
        banner?.classList.add("tag");
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
