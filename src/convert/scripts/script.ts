const convertHeader = new Header();
const converMenu = new Menu("convert");

document.querySelector(".header-container")?.appendChild(convertHeader.get());
document.querySelector(".menu-container")?.appendChild(converMenu.get());

const convertTabs = new TabManager("metadata", [{
    label: "Metadados",
    code: "metadata",
    content: document.getElementById("metadata")
}, {
    label: "Aparência",
    code: "appearance",
    content: document.getElementById("appearance")
}, {
    label: "Processamento Heurístico",
    code: "proccess",
    content: document.getElementById("proccess")
}, {
    label: "Configurar Página",
    code: "configure",
    content: document.getElementById("configure")
}, {
    label: "Detecção da Estrutura",
    code: "detection",
    content: document.getElementById("detection")
}, {
    label: "Índice",
    code: "index",
    content: document.getElementById("index")
}, {
    label: "Buscar & Substituir",
    code: "search",
    content: document.getElementById("search")
}, {
    label: "Saída EPUB",
    code: "output",
    content: document.getElementById("output")
}, {
    label: "Depuração",
    code: "debug",
    content: document.getElementById("debug")
}]);

document.querySelector(".tabs-container")?.appendChild(convertTabs.get());
console.log(convertTabs);
