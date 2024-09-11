let contado = 15690;
const tempoUp = 2000;

function updateContador() {
    contado++;
    document.querySelector("#contador").innerText = contado;
}

updateContador();

setInterval(updateContador, tempoUp);