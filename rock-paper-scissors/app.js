let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const scoreboardDiv = document.querySelector('.score-board');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getCompChoice() {
  const choices = ["r", "p", "s"]
  let randomNum = Math.floor(Math.random(choices) * 3)
  return choices[randomNum]
}

function convertToWord(letter) {
  if(letter === 'r') {
    return "Rock"
  } else if(letter === 'p') {
    return "Paper"
  } else {
    return "Scissors"
  }
}

function win(userChoice, compChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  const userWord = "(user)".fontsize(3).sub();
  const compWord = "(comp)".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice)
  resultP.innerHTML = `${convertToWord(userChoice)}${userWord} beats ${convertToWord(compChoice)}${compWord}. You win! 🏆`
  userChoiceDiv.classList.add('green-glow');
  setTimeout( () => userChoiceDiv.classList.remove('green-glow'), 300)
}

function lose(userChoice, compChoice) {
  compScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  const userWord = "(user)".fontsize(3).sub();
  const compWord = "(comp)".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice)
  resultP.innerHTML = `${convertToWord(userChoice)}${userWord} loses to ${convertToWord(compChoice)}${compWord}. You lost... ❌`
  userChoiceDiv.classList.add('red-glow');
  setTimeout( () => userChoiceDiv.classList.remove('red-glow'), 300)
}

function tie(userChoice, compChoice) {
  const userWord = "(user)".fontsize(3).sub();
  const compWord = "(comp)".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice)
  resultP.innerHTML = `${convertToWord(compChoice)}${userWord} = ${convertToWord(userChoice)}${compWord}. You tied.`
  userChoiceDiv.classList.add('gray-glow');
  setTimeout( () => userChoiceDiv.classList.remove('gray-glow'), 300)
}

function game(userChoice) {
  const compChoice = getCompChoice()
  switch(userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, compChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', () => game('r'))
  paperDiv.addEventListener('click', () => game('p'))
  scissorsDiv.addEventListener('click', () => game('s'))
}

main();
