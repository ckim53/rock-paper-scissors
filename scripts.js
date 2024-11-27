let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //generate a random number between 1 and 3
    const num = Math.floor(Math.random() * 3) + 1;
    //if number is 1: return rock, 2: return paper, 3: return scissors
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
    //prompt user for input
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

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore){
        console.log("Congrats! You won the game!");
    }
    else if (humanScore < computerScore){
        console.log("The computer won. Better luck next time!");
    }
    else{
        console.log("It's a tie! Good game.");
    }
}