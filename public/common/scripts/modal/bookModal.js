"use strict";
class BookModal {
    constructor(title, authors, cover, details) {
        this.title = title;
        this.authors = authors;
        this.cover = cover;
        this.details = details;
        this.container = this.build();
        this.modal = new Modal(this.container);
    }
    build() {
        var _a, _b, _c;
        const bookModal = document.createElement("div");
        bookModal.classList.add("book-modal");
        const bookModalCover = document.createElement("div");
        bookModalCover.classList.add("book-modal-cover");
        const img = document.createElement("img");
        img.src = this.cover;
        bookModalCover.appendChild(img);
        bookModal.appendChild(bookModalCover);
        const bookModalContent = document.createElement("div");
        bookModalContent.classList.add("book-modal-content");
        const bookModalHeader = document.createElement("div");
        bookModalHeader.classList.add("book-modal-header");
        const bookModalInfos = document.createElement("div");
        bookModalInfos.classList.add("book-modal-infos");
        const h1 = document.createElement("h1");
        h1.innerText = this.title;
        bookModalInfos.appendChild(h1);
        const authors = document.createElement("p");
        authors.classList.add("authors");
        authors.innerText = this.authors.join(", ");
        bookModalInfos.appendChild(authors);
        bookModalHeader.appendChild(bookModalInfos);
        bookModalContent.appendChild(bookModalHeader);
        const bookModalClose = document.createElement("div");
        bookModalClose.classList.add("book-modal-close");
        const bookModalCloseIcon = document.createElement("i");
        bookModalCloseIcon.classList.add("ph", "ph-x");
        bookModalClose.appendChild(bookModalCloseIcon);
        bookModalHeader.appendChild(bookModalClose);
        bookModalClose.addEventListener("click", _ => {
            this.close();
        });
        const bookModalSummary = document.createElement("article");
        bookModalSummary.classList.add("book-modal-summary");
        bookModalSummary.innerHTML = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.summary) !== null && _b !== void 0 ? _b : "Este livro não possui um resumo.";
        bookModalContent.appendChild(bookModalSummary);
        const bookModalDetails = document.createElement("div");
        bookModalDetails.classList.add("book-modal-details");
        if (this.details) {
            const detailsTable = document.createElement("table");
            for (let k of Object.keys(this.details)) {
                let tr = document.createElement("tr");
                let tdk = document.createElement("td"); // chave
                let tdv = document.createElement("td"); // valor
                tdk.innerText = (_c = bookModalDetailsLang[k]) !== null && _c !== void 0 ? _c : k;
                tdv.innerText = String(this.details[k]);
                tr.appendChild(tdk);
                tr.appendChild(tdv);
                detailsTable.appendChild(tr);
            }
            bookModalDetails.appendChild(detailsTable);
        }
        else {
        }
        bookModalContent.appendChild(bookModalDetails);
        bookModal.appendChild(bookModalContent);
        return bookModal;
    }
    open() {
        this.modal.open();
    }
    close() {
        this.modal.close();
    }
}
// <div class="book-modal">
//     <div class="book-modal-cover">
//         <img src="../assets/demos/books/a_divina_comedia.jpg" alt="">
//     </div>
//     <div class="book-modal-content">
//         <div class="book-modal-header">
//             <div class="book-modal-infos">
//                 <h1>A divina comédia</h1>
//                 <p class="author">Dante Alighieri</p>
//             </div>
//             <div class="book-modal-close">
//                 <i class="ph ph-x"></i>
//             </div>
//         </div>
//         <article class="book-modal-summary">
//             ABCDE. Um resumo doido demaise.
//         </article>
//         <div class="book-modal-details">
//             <table>
//                 <tr>
//                     <td>Autores</td>
//                     <td>1, 2, 3, 4</td>
//                 </tr>
//                 <tr>
//                     <td>Formatos:</td>
//                     <td>EPUB</td>
//                 </tr>
//                 <tr>
//                     <td>Série:</td>
//                     <td>Uma serie aí</td>
//                 </tr>
//                 <tr>
//                     <td>TAGs:</td>
//                     <td>Aventura, Comédia, Ação</td>
//                 </tr>
//                 <tr>
//                     <td>Baixado:</td>
//                     <td>Não</td>
//                 </tr>
//                 <tr>
//                     <td>Localização:</td>
//                     <td>-</td>
//                 </tr>
//                 <tr>
//                     <td>Data de publicação:</td>
//                     <td>28/01/2005</td>
//                 </tr>
//                 <tr>
//                     <td>Tamanho</td>
//                     <td>0.24MB</td>
//                 </tr>
//             </table>
//         </div>
//     </div>
// </div>
