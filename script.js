
function getComputerChoice() {
    n = Math.random()
    choice = "";
    console.log(n)
    if (n < 0.3333) {
        choice = "Rock";
    }
    else if (n >= 0.3333 && n <= 0.6666) {
        choice = "Paper";
    }
    else {
        choice = "Scissor";
    }
    console.log(choice)
}

getComputerChoice()