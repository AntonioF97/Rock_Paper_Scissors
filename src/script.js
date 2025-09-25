function getRandomIntInclusive(min, max) {   // This funtion return an integer between min and max included
    const minCeiled = Math.ceil(min);        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    switch(getRandomIntInclusive(1, 3)) {
        case 1: return "Rock"; break;
        case 2: return "Paper"; break;
        case 3: return "Scissors"; break;
    }
}

function getHumanChoice() {
    switch(prompt("Rock, Paper or Scissors? (r,p,s) Default = Rock.", "r").toLowerCase()) {
        case "r": return "Rock"; break;
        case "p": return "Paper"; break;
        case "s": return "Scissors"; break;
        default: return "Rock";
    }
}

function playRound(humanChoice, computerChoice) { // This function declares the winner but it sucks because every case is handled individually.
    switch(humanChoice) {                         // If we associate r,p and s to integers 0, 1 and 2 however, we could use a matrix with humanChoice
        case "Rock":                              // on row index and computerChoice on column index and compile it with the outcome of the round.
            switch(computerChoice) {
                case "Rock":
                    console.log("DORO!!!!!!")
                break;

                case "Paper":
                    console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
                    computerScore++;
                break;

                case "Scissors":
                    console.log("You win!! " + humanChoice + " beats " + computerChoice + "!");
                    humanScore++;
                break;
            }
        break;

        case "Paper":
            switch(computerChoice) {
                case "Rock":
                    console.log("You win!! " + humanChoice + " beats " + computerChoice + "!");
                    humanScore++;
                break;

                case "Paper":
                    console.log("DORO!!!!!!")
                break;

                case "Scissors":
                    console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
                    computerScore++;
                break;
            }
        break;

        case "Scissors":
            switch(computerChoice) {
                case "Rock":
                    console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
                    computerScore++;
                break;

                case "Paper":
                    console.log("You win!! " + humanChoice + " beats " + computerChoice + "!");
                    humanScore++;
                break;

                case "Scissors":
                    console.log("DORO!!!!!!")
                break;
            }
        break;
    }
}

function playGame() {
    for(let i = 0; i < 10; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();