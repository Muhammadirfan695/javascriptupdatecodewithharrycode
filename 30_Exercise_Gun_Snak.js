// Use JS to create a game of Snake, Water & Gun. The game should ask you to enter S, W or G. 
// The computer should be able to randomly generate S, W or G and declare Win or Loss using alert.
//  Use confirm and prompt wherever required.

// Function to generate a random choice of S, W or G
// function getComputerChoice() {
//     const choices = ['S', 'W', 'G'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
//   }
//   debugger;
//   // Function to play a round of the game
//   function playRound() {
//     const userChoice = prompt("Enter S for Snake, W for Water or G for Gun:");
//     const computerChoice = getComputerChoice();
  
//     if (userChoice === computerChoice) {
//       alert(`Tie! You chose ${userChoice} and computer chose ${computerChoice}.`);
//     } else if (
//       (userChoice === 'S' && computerChoice === 'W') ||
//       (userChoice === 'W' && computerChoice === 'G') ||
//       (userChoice === 'G' && computerChoice === 'S')
//     ) {
//       alert(`You win! You chose ${userChoice} and computer chose ${computerChoice}.`);
//     } else {
//       alert(`You lose! You chose ${userChoice} and computer chose ${computerChoice}.`);
//     }
//   }
  
//   // Play multiple rounds of the game until the user chooses to stop
//   let playAgain = true;
//   while (playAgain) {
//     playRound();
//     playAgain = confirm("Do you want to play again?");
//   }
  

let user = prompt("Enter S, W, or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]
 
const match = (cpu, user)=>{
  if(cpu === user){
    return "Nobody"
  }

else if(cpu === "S" && user==="W"){
  return "cpu"
}
else if(cpu === "S" && user==="G"){
  return "user"
}
else if(cpu === "G" && user==="W"){
  return "user"
}
else if(cpu === "G" && user==="S"){
  return "cpu"
}
else if(cpu === "W" && user==="S"){
  return "user"
}
else if(cpu === "W" && user==="G"){
  return "cpu"
}
}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )
       
// https://www.amazon.in/g/9P82UKN45LPQ6N6V - Rs 500 gift voucher