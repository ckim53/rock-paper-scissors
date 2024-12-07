let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1){
        return "rock";
    }
    else if (num == 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    const input = prompt("Choose between rock, paper, and scissors.").toLowerCase();
    return input;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock"){
        switch (computerChoice){
            case ("paper"):
                computerScore += 1;
                console.log("You lose! Paper beats rock.");
                break;
            case("scissors"):
                humanScore += 1;
                console.log("You win! Rock beats scissors.");
                break;
            default:
                console.log("It's a tie!");
                break;
        }
    }
    else if(humanChoice == "paper"){
        switch (computerChoice){
            case ("scissors"):
                computerScore += 1;
                console.log("You lose! Scissors beats paper.");
                break;
            case("rock"):
                humanScore += 1;
                console.log("You win! Paper beats rock.");
                break;
            default:
                console.log("It's a tie!");
                break;
        }
    }
    else {
        switch (computerChoice){
            case ("rock"):
                computerScore += 1;
                console.log("You lose! Rock beats scissors.");
                break;
            case("paper"):
                humanScore += 1;
                console.log("You win! Scissors beats paper.");
                break;
            default:
                console.log("It's a tie!");
                break;
        }
    }
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const body = document.querySelector("body");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
