

function getComputerChoice() {
    n = Math.random()
    choice = "";
    console.log(n)
    if (n < 0.3333) {
        choice = "rock";
    }
    else if (n >= 0.3333 && n <= 0.6666) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    input = prompt("Rock, Paper or Scissor?");
    input = input.toLowerCase();
    return input;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        if((computerChoice === "rock" && humanChoice === "paper") || 
            (computerChoice === "paper" && humanChoice === "scissors") || 
                (computerChoice === "scissors" && humanChoice === "rock")) {
            message = `You win, ${humanChoice} beats ${computerChoice}.`;
            console.log(message);
            humanScore++;
        }
        else if((humanChoice === "rock" && computerChoice === "paper") || 
                (humanChoice === "paper" && computerChoice === "scissors") || 
                    (humanChoice === "scissors" && computerChoice === "rock")) {
            message = `You lose, ${computerChoice} beats ${humanChoice}.`;
            console.log(message);
            computerScore++;
        }
        else {
            console.log("Draw!");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("You won the game!")
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game :(")
    }
    else {
        console.log("The game was a draw.")
    }
}

playGame()