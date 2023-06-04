const newsHeader = new Header();
const newsMenu = new Menu("news");

document.querySelector(".header-container")?.appendChild(newsHeader.get());
document.querySelector(".menu-container")?.appendChild(newsMenu.get());

const newsCategories: Category[] = [
    new Category("Últimas notícias", "Veja as notícias mais importantes acontecendo no momento.", [
        new Notice("COVID-19: já é hora de se despreocupar com essa ameaça?", "../assets/demos/news/covid-banner.jpg", "CNN", "../assets/demos/sources/cnn.png").get(),
        new Notice("Menos você: novo programa é anunciado na Globe", "../assets/demos/news/menos-voce.jpg", "CNN", "../assets/demos/sources/globe.jpg").get()
    ]),
    new Category("Principais fontes de notícia", "Fontes de notícias confiáveis para você acompanhar.", [

    ])
];


function loadCategories(categories: Category[]) {
    const newsCategoriesContainer = document.getElementById("newsCategories") as HTMLDivElement;
    newsCategoriesContainer.innerHTML = "";
    
    for (let c of categories) {
        newsCategoriesContainer.appendChild(c.get());
    }
}
loadCategories(newsCategories);
