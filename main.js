const modalBackground = document.getElementById('modalBackground');
const modalBackgroundCocaina2 = document.querySelector(".modal-content-cocaina");
const modalBackgroundVape = document.querySelector(".modal-content-vape");
const modalBackgroundMaconha = document.querySelector(".modal-content-maconha");
const modalBackgroundHeroina = document.querySelector(".modal-content-heroina");
const saibaMaisBtn = document.querySelector('.cocainaButtonSM');
const saibaMaisBtn2 = document.querySelector(".vapeButtonSM");
const saibaMaisBtn3 = document.querySelector('.maconhaButtonSM');
const saibaMaisBtn4 = document.querySelector('.heroinaButtonSM');
const closeModal = document.getElementById('closeModal');
let contado = 15690;
const tempoUp = 2000;

function updateContador() {
    contado++;
    document.querySelector("#contador").innerText = contado;
}

updateContador();

setInterval(updateContador, tempoUp);

saibaMaisBtn.addEventListener('click', function() {
    modalBackground.style.display = 'flex';
    modalBackgroundCocaina2.style.display = 'block';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
  }
});


saibaMaisBtn2.addEventListener('click', function() {
    modalBackground.style.display = 'flex';
    modalBackgroundVape.style.display = 'block';
    modalBackgroundCocaina2.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
  }
});

saibaMaisBtn3.addEventListener('click', function() {
    modalBackground.style.display = 'flex';
    modalBackgroundMaconha.style.display = 'block';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
  }
});

saibaMaisBtn4.addEventListener('click', function() {
  modalBackground.style.display = 'flex';
  modalBackgroundHeroina.style.display = 'block';
  modalBackgroundMaconha.style.display = 'none';
  modalBackgroundVape.style.display = 'none';
  modalBackgroundCocaina2.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
if (event.target === modalBackground) {
  modalBackground.style.display = 'none';
  modalBackgroundHeroina.style.display = 'none';
  modalBackgroundMaconha.style.display = 'none';
  modalBackgroundVape.style.display = 'none';
  modalBackgroundCocaina2.style.display = 'none';
}
});