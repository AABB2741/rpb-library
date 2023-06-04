const overviewHeader = new Header();
document.querySelector(".header-container")?.appendChild(overviewHeader.get());
const overviewMenu = new Menu("");
document.querySelector(".menu-container")?.appendChild(overviewMenu.get());

const overviewTabs = new TabManager("summary", [{
    label: "Resumo",
    code: "summary",
    content: document.getElementById("summary")
}, {
    label: "Avaliações",
    code: "ratings",
    content: document.getElementById("ratings")
}, {
    label: "Notícias",
    code: "news",
    content: document.getElementById("news")
}, {
    label: "Detalhes",
    code: "details",
    content: document.getElementById("details")
}]);
document.querySelector(".tabs-container")?.appendChild(overviewTabs.get());
