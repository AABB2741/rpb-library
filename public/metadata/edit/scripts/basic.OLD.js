var titleBookInput = document.getElementById("titleBook"); //Nome do livro
var titlleBInput = document.getElementById("titleB");
var arrowElement = document.querySelector(".titleBook > p:nth-child(2)");
var authorNameInput = document.getElementById("author"); //Nome do autor
var authorNInput = document.getElementById("authorN");
var arrowElementB = document.querySelector(".authorName > p:nth-child(2)");

arrowElement.addEventListener("click", function () {
    titlleBInput.value = titleBookInput.value;
});

arrowElementB.addEventListener("click", function () {
    authorNInput.value = authorNameInput.value;
});