const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;



// Lista de imagens para o cacto
const cactoImages = [
  'url(imagens/dorflex.png)',
  'url(imagens/rivotril.png)',
  'url(imagens/proibido-fumar-logo-8AB957081F-seeklogo.com.png)'
];

// Função para escolher uma imagem aleatória
function randomizeCactoImage() {
  const randomIndex = Math.floor(Math.random() * cactoImages.length);
  cacto.style.backgroundImage = cactoImages[randomIndex];
}

// Evento para detectar salto
document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

document.querySelector('#pular').addEventListener("click", function(){
  jump();
})

// Função de pulo
function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;
    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyJump = false;
    }, 1100)
  }
}

// Intervalo que verifica colisão e score
setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 15 && cactoLeft < 100 && dinoBottom <= 60 && !alreadyJump) {
    alert(`Game Over! Seu Score Foi: ${count}`)
    count = 0;
    // Randomiza a imagem do cacto ao reiniciar o jogo
    randomizeCactoImage();
  }else if (cactoLeft > 15 && cactoLeft < 100 && dinoBottom <= 88 && alreadyJump){
    alert(`Game Over! Seu Score Foi: ${count}`)
    count = 0;
    // Randomiza a imagem do cacto ao reiniciar o jogo
    randomizeCactoImage();
  }else if (cactoLeft > 15 && cactoLeft < 100 && dinoBottom >= 89 && alreadyJump){
    console.log("EZ")
    setTimeout(() => {
      randomizeCactoImage();
    }, 100)
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);
randomizeCactoImage();
// Randomiza a imagem do cacto ao iniciar o jogo