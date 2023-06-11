function basicButton() {
    var pagina1 = document.getElementById("basicButton");
    var pagina2 = document.getElementById("customButton");

    pagina1.classList.remove("oculto");
    pagina2.classList.add("oculto");
}

function customButton() {
    var pagina1 = document.getElementById("basicButton");
    var pagina2 = document.getElementById("customButton");

    pagina1.classList.add("oculto");
    pagina2.classList.remove("oculto");
}
