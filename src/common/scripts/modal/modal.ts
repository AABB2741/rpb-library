class Modal {
    visible: boolean;
    private container: HTMLElement;
    private contentContainer: HTMLElement;
    content?: HTMLElement;

    constructor(content?: HTMLElement) {
        this.visible = false;
        this.content = content;

        const container = document.createElement("div");
        container.classList.add("modal");

        const contentContainer = document.createElement("div");
        contentContainer.classList.add("modal-content");
        container.appendChild(contentContainer);

        if (content)
            contentContainer.appendChild(content);

        this.contentContainer = contentContainer;
        this.container = container;
    }

    setContent(content: HTMLElement) {
        this.content = content;
        this.contentContainer.innerHTML = "";
        this.contentContainer.appendChild(content);
    }

    open() {
        if (this.visible)
            return;
        
        document.body.appendChild(this.container);
        this.visible = true;
    }

    close() {
        if (!this.visible)
            return;
        
        this.container.remove();
        this.visible = false;
    }
}
