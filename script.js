//Part 1
let functionCounter = 0;

function randomNumber(userGuess, computersNumber) {
  functionCounter++;
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    return "Please input a number between 1 and 100";
  } else if (userGuess < computersNumber) {
    return `Higher, that was guess number ${functionCounter}.`;
  } else if (userGuess > computersNumber) {
    return `Lower, that was guess number ${functionCounter}.`;
  } else {
    return `The number was ${userGuess}! You got it in ${functionCounter} guesses!`;
  }
}

//Part 2
let currentNumber = 1;
let lowest = 1;
let highest = 100;

let createGuess = () => {
  currentNumber = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
};

function startCompGuess(num) {
  lowest = 1;
  highest = 100;
  currentNumber = num;
  computerGuessCounter = 0;
  createGuess();
  return `Is your number ${currentNumber}?`;
}

function compGuess(reply) {
  computerGuessCounter++;
  switch (reply) {
    case "higher":
      lowest = currentNumber + 1;
      createGuess();
      return `Your number is higher? Is it ${currentNumber}? That's guess #${computerGuessCounter}`;
    case "lower":
      highest = currentNumber - 1;
      createGuess();
      return `Your number is lower? ${currentNumber}? That's guess #${computerGuessCounter}`;
    case "correct":
      return `I knew it was ${currentNumber}! It took me ${computerGuessCounter} guesses.`;
  }
};