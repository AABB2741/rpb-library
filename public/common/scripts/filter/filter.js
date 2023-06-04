"use strict";
const defaultFilterOptions = [
    { value: "title", label: "Título do livro" },
    { value: "author", label: "Autor" },
    { value: "publisher", label: "Editora" },
    { value: "rate", label: "Avaliação" },
    { value: "publish-date", label: "Data de publicação" },
    { value: "added-date", label: "Data de adição" },
    { value: "tags", label: "TAGs" },
    { value: "size", label: "Tamanho" }
];
class Filter {
    constructor(placeholder, filterOptions) {
        var _a, _b;
        const params = new URLSearchParams();
        this.searchPlaceholder = placeholder;
        this.filterOptions = filterOptions;
        this.search = (_a = params.get("search")) !== null && _a !== void 0 ? _a : "";
        this.order = (_b = params.get("order")) !== null && _b !== void 0 ? _b : "title";
        this.viewMode = (params.get("viewMode") == "list" || params.get("viewMode") == "grid") ? params.get("viewMode") : "list";
        this.sort = (params.get("sort") == "asc" || params.get("sort") == "desc") ? params.get("sort") : "asc";
        const container = document.createElement("div");
        container.classList.add("filter");
        this.container = container;
    }
    get() {
        var _a, _b;
        const search = document.createElement("div");
        search.classList.add("search");
        const searchIcon = document.createElement("i");
        searchIcon.classList.add("ph", "ph-magnifying-glass");
        search.appendChild(searchIcon);
        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.name = "search";
        searchInput.classList.add("filter-search");
        searchInput.placeholder = (_a = this.searchPlaceholder) !== null && _a !== void 0 ? _a : "Pesquise aqui...";
        search.appendChild(searchInput);
        this.container.appendChild(search);
        const order = document.createElement("div");
        order.classList.add("order");
        const selectOrder = document.createElement("select");
        selectOrder.name = "order";
        selectOrder.classList.add("order-by");
        for (let o of (_b = this.filterOptions) !== null && _b !== void 0 ? _b : defaultFilterOptions) {
            const option = document.createElement("option");
            option.value = o.value;
            option.innerText = o.label;
            selectOrder.appendChild(option);
        }
        order.appendChild(selectOrder);
        const viewMode = document.createElement("button");
        const viewModeIcon = document.createElement("i");
        viewModeIcon.classList.add("ph", `ph-${this.viewMode == "list" ? "list-dashes" : "squares-four"}`);
        viewMode.appendChild(viewModeIcon);
        order.appendChild(viewMode);
        const sort = document.createElement("button");
        const sortIcon = document.createElement("i");
        sortIcon.classList.add("ph", `ph-arrow-${this.sort == "asc" ? "up" : "down"}`);
        sort.appendChild(sortIcon);
        order.appendChild(sort);
        this.container.appendChild(order);
        return this.container;
    }
}
