const startGameBtn = document.getElementById('game_btn');

let isGameRunning = false;
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = "ROCK";

const DRAW = "Draw, Well Played";
const PLAYER_WIN = "Congratulations, You Win!";
const COMPUTER_WIN = "Computer win this round, Better luck next time!";


function playerSelection () {
    const selection = prompt("Rock, Paper, Scissors ?", "").toUpperCase();

    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`you have chosen wrong selection, we have chosen ${DEFAULT_SELECTION}`);
        return DEFAULT_SELECTION;
    }
    return selection;
}

function ComputerSelection () {
    const randomSelection = Math.random();

    if(randomSelection < 0.34) {
        return ROCK;
    } else if (randomSelection < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getWinner(pChoice, cChoice) {
    if(cChoice === pChoice) {
        return DRAW;
    } else if(
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return PLAYER_WIN;
    } else {
        return COMPUTER_WIN;
    }
}



startGameBtn.addEventListener('click', function() {
    if(isGameRunning) return;
    isGameRunning = true;
    console.log("Game started...");
    const playerChoice = playerSelection();
    const computerChoice = ComputerSelection();

    const winner = getWinner(playerChoice, computerChoice);
    let message = `You choose ${playerChoice} and computer choose ${computerChoice}`;
    if(winner === DRAW) {
        message += ` ${DRAW}`;
    } else if(winner === PLAYER_WIN) {
        message += ` ${PLAYER_WIN}`;
    } else {
        message += ` ${COMPUTER_WIN}`;
    }
    alert(message);
    isGameRunning = false;
    
});