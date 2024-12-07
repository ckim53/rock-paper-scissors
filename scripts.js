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
    const results = document.querySelector("div");
    const runningScore = document.createElement("div");
    if(humanChoice == "rock"){
        switch (computerChoice){
            case ("paper"):
                computerScore += 1;
                results.textContent = "You lose! Paper beats rock.";
                break;
            case("scissors"):
                humanScore += 1;
                results.textContent = "You win! Rock beats scissors.";
                break;
            default:
                results.textContent = "It's a tie!";
                break;
        }
    }
    else if(humanChoice == "paper"){
        switch (computerChoice){
            case ("scissors"):
                computerScore += 1;
                results.textContent = "You lose! Scissors beats paper.";
                break;
            case("rock"):
                humanScore += 1;
                results.textContent = "You win! Paper beats rock.";
                break;
            default:
                results.textContent = "It's a tie!";
                break;
        }
    }
    else {
        switch (computerChoice){
            case ("rock"):
                computerScore += 1;
                results.textContent = "You lose! Rock beats scissors.";
                break;
            case("paper"):
                humanScore += 1;
                results.textContent = "You win! Scissors beats paper.";
                break;
            default:
                results.textContent = "It's a tie!";
                break;
        }
    }
    runningScore.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    results.appendChild(runningScore);

    if (humanScore == 5 || computerScore == 5){
        if (humanScore == computerScore){
            results.textContent = "Final Result: It's a tie! Good game.";
            humanScore = 0, computerScore = 0;
        }
        else {
            switch (Math.max(humanScore, computerScore)){
                case(humanScore):
                    results.textContent = "You won the game! Congrats!";
                    humanScore = 0, computerScore = 0;
                    break;
                case(computerScore):
                    results.textContent = "The computer won. Good luck next time.";
                    humanScore = 0, computerScore = 0;
                default:;
            }
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

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);