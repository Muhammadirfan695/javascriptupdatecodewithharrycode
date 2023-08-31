
// Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from 
// the user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 – (no of guesses) is the score of the user. The program is expected to terminate once 
// the number is guesses. Number should be between 1 – 100. in javasript
// Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;


// generate a random number between 1 and 100

const randomNumber = Math.floor(Math.random() * 100) + 1;

// // initialize the number of guesses and score variables
let numGuesses = 0;
let score = 100;

// // prompt the user to make a guess
let guess = parseInt(prompt("Guess a number between 1 and 100"));

// // keep prompting the user until they guess the correct number
while (guess !== randomNumber) {
// //   // increment the number of guesses
  numGuesses++;

// //   // check whether the guess was greater or lesser than the random number
  if (guess < randomNumber) {
    alert("Your guess is too low.");
  } else {
    alert("Your guess is too high.");
  }

// //   // subtract one point from the score for each guess
  score--;

// //   // prompt the user to make another guess
  guess = parseInt(prompt("Guess another number between 1 and 100"));
}

// // increment the number of guesses one final time to include the correct guess
numGuesses++;

// // output the number of guesses and the final score to the user
alert(`Congratulations! You guessed the number in ${numGuesses} tries. Your final score is ${score}.`);

























































/*
// Initialize variables for the user's guess, number of guesses, and score
let guess = 0;
let numGuesses = 0;
let score = 100;

// Loop until the user guesses the correct number
while (guess !== randomNumber) {
  // Ask the user to guess the number and convert their input to a number
  guess = Number(prompt("Guess a number between 1 and 100"));

  // If the user didn't enter a valid number, prompt them to try again
  if (isNaN(guess)) {
    alert("Please enter a valid number between 1 and 100");
    continue;
  }

  // Increment the number of guesses
  numGuesses++;

  // Check if the guess was correct, greater than or less than the original number
  if (guess === randomNumber) {
    alert(`Congratulations! You guessed the number in ${numGuesses} guesses. Your score is ${score}.`);
  } else if (guess > randomNumber) {
    alert("Your guess was too high. Try again!");
    score -= 10;
  } else {
    alert("Your guess was too low. Try again!");
    score -= 10;
  }

  // If the user has made too many guesses, end the game
  if (numGuesses >= 10) {
    alert(`Sorry, you didn't guess the number in time. The number was ${randomNumber}.`);
    break;
  }
}
*/