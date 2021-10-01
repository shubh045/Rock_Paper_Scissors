const buttons = document.querySelectorAll('button');
const div = document.querySelector('.display');
const ul = document.createElement('ul');
let playerWin = 0;
let compWin = 0;
let game = 1;
let text;

function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let Paper = 'paper'.toUpperCase();
    let Rock = 'rock'.toUpperCase();
    let Scissors = 'scissors'.toUpperCase();
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    const psc = ps[0].toUpperCase() + ps.toLowerCase().slice(1);
    const csc = cs[0].toUpperCase() + cs.toLowerCase().slice(1);
    if ((ps === Rock && cs === Scissors) || (ps === Scissors && cs === Paper) ||
        (ps === Paper && cs === Rock)) {
        playerWin++;
        text = document.createTextNode(`You win! ${psc} beats ${csc}`);
    } else if (ps === cs) {
        text = document.createTextNode(`It's a tie`);
    } else {
        compWin++;
        text = document.createTextNode(`You lose! ${psc} lose to ${csc}`);
    }
    display(ps, cs);
    game++;
}

const display = (ps, cs) => {
    const psc = ps[0].toUpperCase() + ps.toLowerCase().slice(1);
    const csc = cs[0].toUpperCase() + cs.toLowerCase().slice(1);

    const newDiv = document.createElement('div');
    const li = document.createElement('li');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const textDiv = document.createElement('div');
    const spanDiv = document.createElement('div');
    spanDiv.classList.add("spanDiv");
    newDiv.appendChild(li);
    span1.appendChild(document.createTextNode(`Your Choice:  ${psc} `));
    span2.appendChild(document.createTextNode(`Computer Choice: ${csc} `));
    spanDiv.append(span1);
    spanDiv.append(span2);
    textDiv.appendChild(text);
    li.appendChild(spanDiv);
    li.appendChild(textDiv);
    displayScore(li);
    if (game === 5) {
        winner(li);
    }
    ul.appendChild(li);
    div.appendChild(ul);
}

const displayScore = (li) => {
    const scoreDiv = document.createElement('div');
    const scoreSpan1 = document.createElement('span');
    const scoreSpan2 = document.createElement('span');
    scoreDiv.classList.add('scoreDiv');
    scoreSpan1.appendChild(document.createTextNode(`your score: ${playerWin}`));
    scoreSpan2.appendChild(document.createTextNode(`computerscore:  ${compWin} `));
    scoreDiv.appendChild(scoreSpan1);
    scoreDiv.appendChild(scoreSpan2);
    li.appendChild(scoreDiv);
}

const winner = (li) => {
    const winSpan = document.createElement('span');
    if (playerWin > compWin) {
        winSpan.appendChild(document.createTextNode(`Game over, You win the game!`));
    } else if (playerWin < compWin) {
        winSpan.appendChild(document.createTextNode(`Game over, You lose the game!`));
    } else {
        winSpan.appendChild(document.createTextNode(`Game over, Match draw!`));
    }
    li.appendChild(winSpan);
}



const afterSelection = () => {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (game > 0 && game <= 5)
                playRound(e.target.value, computerPlay());
            else
                alert('Game Over, Reload the page to play again');
        })
    });
}

afterSelection();