/*
Criar uma função pra gerar uma escolha aleatória do computador
Usar metódo math.random
Criar uma função pra pegar o input do usuário pela box de prompt
Criar duas variáveis humanScore e computerScore no escopo global
Criar a lógica do jogo pra jogar um round
Criar uma função playRound com os parametros de humanChoice e computerChoice
Fazer o input do usuário ser case-insensitive
No final o jogo vai ser jogado 5 rounds
Criar uma função playGame
teste
*/
let options = ["rock", "paper", "scissors"];
const humanButtons = document.querySelectorAll(".imgBtn");
const result = document.querySelector("#logContainer");
const iniciar = document.querySelector("#iniciar");
const placarHuman = document.querySelector(".placarHuman");
const placarCPU = document.querySelector(".placarCPU");

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

humanButtons.forEach(btn => btn.disabled = true);



iniciar.addEventListener('click', (e) => {
 iniciar.disabled = true;
 humanButtons.forEach(btn => btn.disabled = false);
 result.innerHTML= "Jogo iniciado! Escolha pedra, papel ou tesoura!";
   humanScore = 0;
    computerScore = 0;
    placarHuman.textContent = "0";
    placarCPU.textContent = "0";
})

humanButtons.forEach((choice) => {
choice.addEventListener('click', (e) => {
const human = e.target.id;
const computer = getComputerChoice();
playRound(human, computer);
})
})


  let humanScore = 0; 
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
  let p = document.createElement("p");

  if(humanChoice === computerChoice ) {
    p.textContent = `Draw! You've chose ${humanChoice} and the computer ${computerChoice}.`
  } else if (
    humanChoice === 'rock' && computerChoice === 'scissors' || 
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper') {
      p.textContent = `You've won the round! You chose ${humanChoice} and the computer ${computerChoice}.`
      humanScore++;
      placarHuman.textContent = humanScore;
    } else {
       p.textContent = `You've lost the round! You chose ${humanChoice} and the computer ${computerChoice}.`
       computerScore++;
       placarCPU.textContent = computerScore;
    }

    result.appendChild(p);
    result.scrollTop = result.scrollHeight; 

    const finalMsg = document.createElement("p");

    if(humanScore === 5 || computerScore === 5) {
    if(humanScore === 5) {
      finalMsg.textContent = "You've won the game!!!!!"
      finalMsg.style.color = "blue";
    
    } else if(computerScore === 5) {
      finalMsg.textContent = "You lost the game!!!!!"
      finalMsg.style.color = "red"; 
    }
    result.appendChild(finalMsg);

    humanButtons.forEach(btn => btn.disabled = true);
    iniciar.disabled = false;
  }
  }



