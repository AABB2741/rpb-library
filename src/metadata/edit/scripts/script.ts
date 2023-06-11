const metadataEditHeader = new Header({
    baseUrl: "../../"
});
const metadataEditMenu = new Menu("edit-metadata", {
    baseUrl: "../../"
});

document.querySelector(".header-container")?.appendChild(metadataEditHeader.get());
document.querySelector(".menu-container")?.appendChild(metadataEditMenu.get());

const metadataEditPages = new TabManager("basic", [{
    code: "basic",
    label: "Metadados básicos",
    content: document.getElementById("basic-metadata")
}, {
    code: "custom",
    label: "Metadados personalizados",
    content: document.getElementById("custom-metadata")
}], { baseUrl: "../../" });
document.querySelector(".tab-container")?.appendChild(metadataEditPages.get());

themeManager.options = {
    ...themeManager.options,
    baseUrl: "../../"
}
themeManager.setTheme(themeManager.theme); // Atualizando para trocar opções
