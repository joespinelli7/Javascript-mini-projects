const userScore = 0;
const compScore = 0;
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const scoreboardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getCompChoice() {
  const choices = ["r", "p", "s"]
  const randomNum = Math.floor(Math.random(choices) * 3)
  return choices[randomNum]
}

function game(userChoice) {
  const compChoice = getCompChoice()
  switch(userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("user wins!");
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("comp wins!")
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("It's a tie!")
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', () => game('r'))
  paperDiv.addEventListener('click', () => game('p'))
  scissorsDiv.addEventListener('click', () => game('s'))
}

main();
