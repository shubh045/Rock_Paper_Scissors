const buttons = document.querySelectorAll('button');


// ul.appendChild(li);
// div.appendChild(li);

function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    let Paper = 'paper'.toUpperCase();
    let Rock = 'rock'.toUpperCase();
    let Scissors = 'scissors'.toUpperCase();
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    if (ps === Rock && cs === Paper)
        return 'You lose! Paper beats Rock';
    else if (ps === Rock && cs === Scissors)
        return 'You win! Rock beats Scissors';
    if (ps === Scissors && cs === Paper)
        return 'You win! Scissors beat paper';
    else if (ps === Scissors && cs === Rock)
        return 'you lose';
    else if (ps === Paper && cs === Rock)
        return 'you win';
    else if (ps === Paper && cs === Scissors)
        return 'you lose';
    else if (ps === ' ')
        return 'Please enter correct value';
    else
        return 'tie';
}

// function game() {
//     let playerSelection = prompt("Enter your selection");
//     return (playRound(playerSelection, computerPlay()));
// }

const userSelection = event => {
    const div = document.querySelector('div');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const newDiv = document.createElement('div');
    const li = document.createElement('li');
    const userInput = document.createTextNode(event);
    newDiv.appendChild(li);
    li.appendChild(userInput);
    ul.appendChild(li);
    div.appendChild(ul);
};

buttons.forEach(button => {
    button.addEventListener('click', (e) => userSelection(e.target.value))
});