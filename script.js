document.addEventListener("DOMContentLoaded", () => {
    function getComputerChoice() {
        const n = Math.random();
        let choice = "";
        console.log("Computer's random number:", n);

        if (n < 0.3333) {
            choice = "rock";
        } else if (n <= 0.6666) {
            choice = "paper";
        } else {
            choice = "scissors";
        }

        return choice;
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
    
        // Update choices in the HTML
        const humanChoiceP = document.querySelector("#humanchoice");
        const computerChoiceP = document.querySelector("#computerchoice");
        const roundWinP = document.querySelector("#roundwin");
    
        humanChoiceP.textContent = `You chose ${humanChoice}`;
        computerChoiceP.textContent = `Computer chose ${computerChoice}`;
    
        let message = "";
        let result = "";
    
        if (
            (computerChoice === "rock" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "rock")
        ) {
            message = `You win the round, ${humanChoice} beats ${computerChoice}.`;
            result = "human";
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            message = `You lose the round, ${computerChoice} beats ${humanChoice}.`;
            result = "computer";
        } else {
            message = "The round is a draw!";
            result = "draw";
        }

        roundWinP.textContent = `${message}`;
    
        console.log(message);
        return result;
    }
    

    function playGame() {
        let humanScore = 0;
        let computerScore = 0;
        let roundsPlayed = 0;

        const rockButton = document.getElementById("rock");
        const paperButton = document.getElementById("paper");
        const scissorsButton = document.getElementById("scissors");

        const buttons = [rockButton, paperButton, scissorsButton];

        function updateScores(result) {
            if (result === "human") {
                humanScore++;
            } else if (result === "computer") {
                computerScore++;
            }

            console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);

            const scoresP = document.querySelector("#scores");
            scoresP.textContent = `${humanScore} : ${computerScore}`;

            if (humanScore === 5 || computerScore === 5) {
                if (humanScore > computerScore) {
                    console.log("You won the game!");
                    scoresP.textContent = "You won the game!";
                } else if (humanScore < computerScore) {
                    console.log("You lost the game :(");
                    scoresP.textContent = "You lost the game!";
                } else {
                    console.log("The game is a draw!");
                    scoresP.textContent = "The game is a draw!";
                }
                humanScore = 0;
                computerScore = 0;
                roundsPlayed = 0;
            }
        }

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const humanChoice = button.id;
                const result = playRound(humanChoice);
                updateScores(result);
            });
        });
    }
    playGame();
});