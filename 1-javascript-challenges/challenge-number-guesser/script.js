let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
let compareGuesses = (human, computer, secret) => {
  let h1 = Math.abs(human - secret);
  let c1 = Math.abs(computer - secret);
  if (human > 10 || human <= 0) {
    return 'Select a number between 0 and 9'
  };
  if ( c1 > h1 ) {
    return true;
  } else if ( c1 < h1) {
    return false;
  } else if (c1 === h1) {
    return 'a tie :/'
  }
}

let updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  }
  if (winner === 'computer') {
    computerScore += 1;
  }
}
let advanceRound = () => {
  currentRoundNumber += 1
}
