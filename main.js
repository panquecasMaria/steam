const modalBackground = document.getElementById('modalBackground');
const modalBackground2 = document.getElementById('modalBackground2');
const modalBackground3 = document.querySelector('#modalBackground3');
const modalBackground4 = document.querySelector('#modalBackground4');
const modalBackground5 = document.querySelector('#modalBackground5');
const modalBackground6 = document.querySelector('#modalBackground6');
const modalBackground7 = document.querySelector('#modalBackground7');
const modalBackgroundCocaina2 = document.querySelector(".modal-content-cocaina");
const modalBackgroundVape = document.querySelector(".modal-content-vape");
const modalBackgroundMaconha = document.querySelector(".modal-content-maconha");
const modalBackgroundHeroina = document.querySelector(".modal-content-heroina");
const saibaMaisBtn = document.querySelector('.cocainaButtonSM');
const saibaMaisBtn2 = document.querySelector(".vapeButtonSM");
const saibaMaisBtn3 = document.querySelector('.maconhaButtonSM');
const saibaMaisBtn4 = document.querySelector('.heroinaButtonSM');
const closeModal = document.querySelector('#closeModal');
const closeModal1 = document.querySelector('#closeModal1');
const closeModal2 = document.querySelector('#closeModal2');
const closeModal3 = document.querySelector('#closeModal3');
const input = document.querySelector('#search');
const modalBackgroundJumpScare = document.querySelector('.modal-content-jumpscare');
const modalBackgroundbobbymarley = document.querySelector('.modal-content-bobbymarley');
const modalBackgroundmm = document.querySelector('.modal-content-mm');
const modalBackgroundcc = document.querySelector('.modal-content-cc');
const modalBackgroundPendrive = document.querySelector('.modal-content-Pendrive');
const modalBackgroundSukuna = document.querySelector('.modal-content-sukuna');
let contado = 15690;
const tempoUp = 2000;

function updateContador() {
    contado++;
    document.querySelector("#contador").innerText = contado;
}

function maconha() {
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "canabis") {
    const audio = new Audio("audios/BobMarley-IsThisLove(Official Music Video)_[cut_224sec].mp3");
    audio.play();
    modalBackground3.style.display = "flex";
    modalBackgroundbobbymarley.style.display = 'block';
  } else {
    modalBackground3.style.display = "none";
    modalBackgroundbobbymarley.style.display = 'none';
  }
}

function jogodoDino(){
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "jogo do dino") {
    
  } else {
    console.log('no dino')
  }
}

document.querySelector(".imgSearch").addEventListener("click", function() {
  maconha();
});

updateContador();

setInterval(updateContador, tempoUp);

closeModal.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

closeModal1.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

closeModal2.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

closeModal3.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

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