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

*/
let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function humanChoice() {
  let str = prompt("Choose between Rock Papers Scissors");
  return str.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      console.log(
        `You choose Rock and the computer choose Paper. You lost the round. Score: You: ${humanScore} Computer: ${computerScore}`
      );
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      console.log(
        `You choose Rock and the computer choose Scissors. You won the round. Score: You: ${humanScore} Computer: ${computerScore}`
      );
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      console.log(
        `You choose Paper and the computer choose Rock. You won the round. Score: You: ${humanScore} Computer: ${computerScore}`
      );
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      console.log(
        `You choose Paper and the computer choose Scissors. You lost the round. Score: You: ${humanScore} Computer: ${computerScore}`
      );
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      console.log(
        `You choose Scissors and the computer choose Rock. You lost the round. Score: You: ${humanScore} Computer: ${computerScore}`
      );
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      console.log(
        `You choose Scissors and the computer choose Paper. You won the round. Score: You: ${humanScore} Computer: ${computerScore}`
      );
    } else {
      console.log("It's a tie!");
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = humanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("You've won!!");
  } else {
    console.log("The computer won :(");
  }
}

playGame();
