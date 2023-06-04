type KeyofObj<T> = {
    [K in keyof T]?: string;
}

const bookModalDetailsLang: KeyofObj<BookDetails> = {
    coverType: "Tipo de capa",
    edition: "Edição",
    isbn: "ISBN",
    isbn10: "ISBN 10",
    pages: "Páginas",
    language: "Idioma",
    publishDate: "Data de publicação",
    subtitle: "Subtítulo",
    type: "Tipo"
}
