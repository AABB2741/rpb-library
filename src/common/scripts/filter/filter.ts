type FilterOption = {
    value: string;
    label: string;
}

const defaultFilterOptions: FilterOption[] = [
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
    searchPlaceholder: string | null | undefined;
    filterOptions: FilterOption[] | null | undefined;

    search: string;
    order: string;
    viewMode: "list" | "grid";
    sort: "asc" | "desc";

    container: HTMLDivElement;

    constructor(placeholder?: string, filterOptions?: FilterOption[]) {
        const params = new URLSearchParams();
        this.searchPlaceholder = placeholder;
        this.filterOptions = filterOptions;

        this.search = params.get("search") ?? "";
        this.order = params.get("order") ?? "title";
        this.viewMode = (params.get("viewMode") == "list" || params.get("viewMode") == "grid") ? params.get("viewMode") as ("list" | "grid") : "list";
        this.sort = (params.get("sort") == "asc" || params.get("sort") == "desc") ? params.get("sort") as ("asc" | "desc") : "asc";

        const container = document.createElement("div");
        container.classList.add("filter");
        this.container = container;
    }

    get() {
        const search = document.createElement("div");
        search.classList.add("search");
        const searchIcon = document.createElement("i");
        searchIcon.classList.add("ph", "ph-magnifying-glass");
        search.appendChild(searchIcon);
        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.name = "search";
        searchInput.classList.add("filter-search");
        searchInput.placeholder = this.searchPlaceholder ?? "Pesquise aqui...";
        search.appendChild(searchInput);
        this.container.appendChild(search);

        const order = document.createElement("div");
        order.classList.add("order");
        const selectOrder = document.createElement("select");
        selectOrder.name = "order";
        selectOrder.classList.add("order-by");

        for (let o of this.filterOptions ?? defaultFilterOptions) {
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
