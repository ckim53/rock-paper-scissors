
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
