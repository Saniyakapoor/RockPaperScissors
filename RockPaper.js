// STEP 2: The logic to get the computer choice
function getComputerChoice() {
    let computerValue = Math.floor(Math.random() * 3) + 1;
    if (computerValue === 1) {
        return "rock";
    } else if (computerValue === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// // STEP 3: The logic to get the human choice
// function getHumanChoice() {
//     return prompt("Enter your choice: rock, paper or scissors");
//     // console.log("You entered: " + humanValue);
//     //return humanValue; // Return the user's input
// }

// STEP 3: The logic to get the human choice
function getHumanChoice() {
    return prompt("Enter your choice: rock, paper or scissors").toLowerCase();
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}

// Function to play the game for 5 rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Score after round ${i + 1}: You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Announce the final winner
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();