"use strict";
var _a, _b;
const header = new Header();
(_a = document.querySelector(".header-container")) === null || _a === void 0 ? void 0 : _a.appendChild(header.get());
const menu = new Menu("discover");
(_b = document.querySelector(".menu-container")) === null || _b === void 0 ? void 0 : _b.appendChild(menu.get());
// Remover dados mocados depois
const categories = [
    new Category("Autores que achamos que você vai gostar", "", [
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
        new Author("Bram Stoker", "../assets/demos/authors/bram_stoker.jpg", 50000).get(),
    ]),
    new Category("Descubra novas aventuras", "Histórias que não receberam tanta atenção quando deviam, mas que devem fazer parte da sua leitura", [
        new Book("Moby Dick", ["Herman Melville"], "../assets/demos/books/moby_dick.jpg", { edition: 1, language: "pt", publishDate: new Date(), summary: "Este é um resumo sobre o livro Moby Dick. Lorem ipsum dolor sit amet, consectetud adipiscing elit." }).get(),
        new Book("A divina comédia", ["Dante Alighieri"], "../assets/demos/books/a_divina_comedia.jpg").get(),
        new Book("Ao farol", ["Virginia Woolf"], "../assets/demos/books/ao_farol.jpg").get(),
        new Book("Dracula", ["Bram Stoker", "Jair Messias Bolsonaro"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
    ]),
    new Category("Livros em alta", "Livros mais lidos no momento", [
        new Book("Moby Dick", ["Herman Melville"], "../assets/demos/books/moby_dick.jpg").get(),
        new Book("A divina comédia", ["Dante Alighieri"], "../assets/demos/books/a_divina_comedia.jpg").get(),
        new Book("Ao farol", ["Virginia Woolf"], "../assets/demos/books/ao_farol.jpg").get(),
        new Book("Dracula", ["Bram Stoker", "Jair Messias Bolsonaro"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
    ]),
    new Category("Histórias curtas", "Uma história somente para passar o tempo", [
        new Book("Moby Dick", ["Herman Melville"], "../assets/demos/books/moby_dick.jpg").get(),
        new Book("A divina comédia", ["Dante Alighieri"], "../assets/demos/books/a_divina_comedia.jpg").get(),
        new Book("Ao farol", ["Virginia Woolf"], "../assets/demos/books/ao_farol.jpg").get(),
        new Book("Dracula", ["Bram Stoker", "Jair Messias Bolsonaro"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
    ]),
    new Category("Histórias para emocionar", "Aviso: Pegue um lenço antes de começar a ler essas histórias", [
        new Book("Moby Dick", ["Herman Melville"], "../assets/demos/books/moby_dick.jpg").get(),
        new Book("A divina comédia", ["Dante Alighieri"], "../assets/demos/books/a_divina_comedia.jpg").get(),
        new Book("Ao farol", ["Virginia Woolf"], "../assets/demos/books/ao_farol.jpg").get(),
        new Book("Dracula", ["Bram Stoker", "Jair Messias Bolsonaro"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
    ]),
    new Category("Seus livros estão com saudade", "Você adicionou estes livros à sua biblioteca, mas nunca chegou a ler", [
        new Book("Moby Dick", ["Herman Melville"], "../assets/demos/books/moby_dick.jpg").get(),
        new Book("A divina comédia", ["Dante Alighieri"], "../assets/demos/books/a_divina_comedia.jpg").get(),
        new Book("Ao farol", ["Virginia Woolf"], "../assets/demos/books/ao_farol.jpg").get(),
        new Book("Dracula", ["Bram Stoker", "Jair Messias Bolsonaro"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
        new Book("Dracula", ["Bram Stoker"], "../assets/demos/books/dracula.jpg").get(),
    ]),
    new Category("Clássicos", ""),
];
const categoriesContainer = document.getElementById("categories");
for (let c of categories) {
    categoriesContainer === null || categoriesContainer === void 0 ? void 0 : categoriesContainer.appendChild(c.get());
}
