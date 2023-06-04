class TabManager {
    container: HTMLElement;
    content: HTMLUListElement;
    currentTab: string;
    tabs: Tab[];

    public constructor(currentTab: string, tabs: Tab[]) {
        this.currentTab = currentTab;
        this.tabs = tabs;

        const nav = document.createElement("nav");
        nav.classList.add("tabs");
        const ul = document.createElement("ul");
        nav.appendChild(ul);

        this.container = nav;
        this.content = ul;

        this.setTab(currentTab);
        this.updateTabs();
    }

    get() {
        return this.container;
    }

    public updateTabs() {
        this.content.innerHTML = "";

        for (let tab of this.tabs) {
            if (!tab.content)
                throw new TypeError(`O conteúdo da guia "${tab.label}" (${tab.code}) não é um elemento válido`);


            const li = document.createElement("li");
            const button = document.createElement("button");

            li.appendChild(button);
            button.innerText = tab.label;

            if (this.currentTab == tab.code) {
                button.classList.add("selected");
                tab.content.classList.remove("hidden");
            } else tab.content.classList.add("hidden");

            button.addEventListener("click", _ => {
                this.setTab(tab.code);
            });

            this.content.appendChild(button);
        }
    }

    private setTab(tab: string) {
        this.currentTab = tab;
        this.updateTabs();
    }
}
