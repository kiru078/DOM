function alterarImagem() {
    const img = document.getElementById("image");
    img.src = "Vert.png";
}

function alterarTitulo() {
    const title = document.getElementById("title");
    title.innerText = title.innerText === "Meu Título"
        ? "Oi"
        : "Tchau";
}

function alterarCorParagrafo() {
    const paragraph = document.getElementById("paragraph");
    paragraph.style.color = paragraph.style.color === "black"
        ? "blue"
        : "black";
}

function tocarAudio() {
    const audio = document.getElementById("audio");
    audio.play();
}

function toggleClass() {
    const buttons = document.querySelectorAll(".bt-outline");
    buttons.forEach(button => button.classList.toggle("highlight"));
}
