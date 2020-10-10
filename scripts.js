// initial variables

const winCounter = document.querySelector('div#wins');
const lossCounter = document.querySelector('div#losses');
const tieCounter = document.querySelector('div#ties');
const scoreBoard = document.querySelector('div#scoreboard');
const resetButton = document.querySelector('button.reset');
const computerChoice = document.querySelector('div#computerPick');
let wins = 0
let losses = 0 
let ties = 0
tieCounter.textContent = "Ties: " + ties;
winCounter.textContent = "Wins: " + wins;
lossCounter.textContent = "Losses: " + losses;

// Appends the game status element to the DOM. Didn't add to HTML directly because wanted to practice DOM manipulation

const gameStatus = document.createElement("div");
scoreBoard.appendChild(gameStatus);
gameStatus.textContent = "Make your first pick";

// Add event listener to each player choice button

const buttons = document.querySelectorAll('button.choice');
buttons.forEach(button => button.addEventListener('click', playRound));

// Event listener for reset game button
resetButton.addEventListener('click', resetGame)

// updates the scoreboard depending on game state

function gameController() {
    if (wins < 5 && losses < 5) {
    }
    else if (wins === 5) {
        gameStatus.textContent = "Hey, you won";
        removeEvents();
    }
    else if (losses === 5) {
        gameStatus.textContent = "You lose!";
        removeEvents();
    }
}

// reset the game to the starting position

function resetGame() {
    wins = 0;
    losses = 0; 
    ties = 0;
    tieCounter.textContent = "Ties: " + ties;
    winCounter.textContent = "Wins: " + wins;
    lossCounter.textContent = "Losses: " + losses;
    buttons.forEach(button => button.addEventListener('click', playRound));
    gameStatus.textContent = "Make your first pick"
    computerChoice.textContent = "Computer chose: "
}

// remove event listeners from player choice buttons after a win or loss 

function removeEvents() {
    buttons.forEach(button => button.removeEventListener('click', playRound));
}

// plays a single round of rock paper scissors 

function playRound(playerChoice) {
    let computerSelection = computerPlay();
    let playerSelection = playerChoice.target.id;
    if (tieChecker(playerSelection, computerSelection) === true) {
        ties += 1;
        gameStatus.textContent = "Tie! Pick again!";
        tieCounter.textContent = "Ties: " + ties;
    }

    else if (winChecker(playerSelection, computerSelection) === true) {
        wins += 1;
        gameStatus.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
        winCounter.textContent = "Wins: " + wins;
    }
    else {
        losses += 1;
        gameStatus.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        lossCounter.textContent = "Losses: " + losses;
    }
    computerChoice.textContent = `Computer chose: ${computerSelection}`
    gameController();
    
}

// check if a win or tie. 

function winChecker(playerSelection, computerSelection) {
    let winStatus = true
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winStatus = false;
        }
        else {
            winStatus = true;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            winStatus = false;
        }
        else {
            winStatus = true;
        }
    }
    else {
        if (computerSelection === "rock") {
            winStatus = false;
        }
        else {
            winStatus = true;
        }
    }
    return winStatus;
}

function tieChecker(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return true;
    }
    else {
        return false;
    }
} 

// have a computer randomly select rock, paper, or scissors

function computerPlay() {
    let computerChoice = "";
    let computerNumber = (Math.random());
    if (computerNumber < .333) {
        computerChoice = "rock"
    }
    else if (computerNumber <.666) {
        computerChoice = "paper"
    }
    else {computerChoice = "scissors"}
    return computerChoice;
    
}



