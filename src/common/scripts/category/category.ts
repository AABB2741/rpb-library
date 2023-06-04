class Category {
    title: string;
    desc?: string;
    content: HTMLElement[];
    categoryContent: HTMLElement | null;

    constructor(title: string, desc?: string, content?: HTMLElement[]) {
        this.title = title;
        this.desc = desc;
        this.content = content ?? [];
        this.categoryContent = null;
    }

    get() {
        const category = document.createElement("div");
        category.classList.add("category");

        const categoryHeader = document.createElement("div");
        categoryHeader.classList.add("category-header");

        const categoryInfos = document.createElement("div");
        categoryInfos.classList.add("category-infos");
        
        const h2 = document.createElement("h2");
        h2.innerText = this.title;
        categoryInfos.appendChild(h2);
        
        if (this.desc) {
            const p = document.createElement("p");
            p.innerText = this.desc;
            categoryInfos.appendChild(p);
        }

        categoryHeader.appendChild(categoryInfos);
        const categoryControls = document.createElement("div");
        categoryControls.classList.add("category-controls");
        const categoryLeft = document.createElement("i");
        categoryLeft.classList.add("ph", "ph-caret-left");
        categoryLeft.addEventListener("click", this.scrollLeft);
        categoryControls.appendChild(categoryLeft);
        const categoryRight = document.createElement("i");
        categoryRight.classList.add("ph", "ph-caret-right");
        categoryRight.addEventListener("click", this.scrollRight);
        categoryControls.appendChild(categoryRight);

        categoryHeader.appendChild(categoryControls);
        category.appendChild(categoryHeader);

        const categoryContent = document.createElement("div");
        categoryContent.classList.add("category-content");
        this.categoryContent = categoryContent;
        if (this.content.length > 0) {
            for (let elm of this.content) {
                categoryContent.appendChild(elm);
            }
        }
        
        category.appendChild(categoryContent);
        return category;
    }

    private scrollLeft() {
        if (this.categoryContent) {
            this.categoryContent.scrollLeft += 30;
        }
    }

    private scrollRight() {
        console.log(this.categoryContent)
        if (this.categoryContent) {
            this.categoryContent.scrollLeft -= 30;
            console.log("Scrollando direita");
        }
    }
}
