function computerPlay(){
    let arr = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = arr[Math.floor(Math.random()*arr.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    let Paper = 'paper'.toUpperCase();
    let Rock = 'rock'.toUpperCase();
    let Scissors = 'scissors'.toUpperCase();
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    if(ps === Rock && cs === Paper)
    return 'You lose! Paper beats Rock';
    else if(ps === Rock && cs === Scissors)
    return 'You win! Rock beats Scissors';
    if(ps === Scissors && cs === Paper)
    return 'You win! Scissors beat paper';
    else if(ps === Scissors && cs === Rock)
    return 'you lose';
    else if(ps === Paper && cs === Rock)
    return 'you win';
    else if(ps === Paper && cs === Scissors)
    return 'you lose';
    else if(ps === ' ')
    return 'Please enter correct value';
    else 
    return 'tie';
}

function game(){
        let playerSelection = prompt("Enter your selection");
        return (playRound(playerSelection, computerPlay()));  
}
for(let i=0; i<5; i++)
console.log(game());