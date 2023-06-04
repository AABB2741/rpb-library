type BookDetails = {
    subtitle?: string;
    summary?: string;
    pages?: number;
    coverType?: string;
    isbn?: string;
    isbn10?: string;
    publishDate?: Date;
    language?: "pt",
    edition?: number;
    type?: "physical" | "ebook"
}

class Book {
    title: string;
    authors: string[];
    cover: string;
    details?: BookDetails;
    modal: BookModal;

    constructor(title: string, authors: string[], cover: string, details?: BookDetails) {
        this.title = title;
        this.authors = authors;
        this.cover = cover;
        this.details = details;
        this.modal = new BookModal(title, authors, cover, details);
    }

    get() {
        const book = document.createElement("div");
        book.classList.add("book-container");

        const cover = document.createElement("img");
        cover.classList.add("book-cover");
        cover.src = this.cover;
        book.appendChild(cover);

        const bookDetails = document.createElement("button");
        bookDetails.classList.add("book-details");
        const infosIcon = document.createElement("i");
        infosIcon.classList.add("ph", "ph-info");
        bookDetails.appendChild(infosIcon);
        book.appendChild(bookDetails);
        bookDetails.addEventListener("click", _ => {
            this.modal.open();
        });

        const bookInfos = document.createElement("div");
        bookInfos.classList.add("book-infos");
        const bookTitle = document.createElement("p");
        bookTitle.classList.add("book-title");
        bookTitle.innerText = this.title;
        bookInfos.appendChild(bookTitle);
        const bookAuthors = document.createElement("p");
        bookAuthors.classList.add("book-author");
        bookAuthors.innerText = this.authors.join(", ");
        bookInfos.appendChild(bookAuthors);
        const bookOptions = document.createElement("div");
        bookOptions.classList.add("book-options");
        const seeButton = document.createElement("a");
        seeButton.innerText = "Ver";
        seeButton.href = "../overview/index.html?id=40"; // remover posição relativa
        bookOptions.appendChild(seeButton);
        const add = document.createElement("button");
        const addIcon = document.createElement("i");
        addIcon.classList.add("ph", "ph-plus");
        add.appendChild(addIcon);
        bookOptions.appendChild(add);
        bookInfos.appendChild(bookOptions);
        book.appendChild(bookInfos);

        return book;
    }
}
