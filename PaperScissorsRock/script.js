function getComputerChoice(){
    const choices = ["rock", "scissors","paper"];
    return choices[Math.floor(Math.random() * choices.length)];
};

function getHumanChoice(){
    let human = prompt("Please write Paper, Scissors or Rock");
    return human.toLowerCase();
};

let human = 0;
let bot = 0;


let humanSelection = getHumanChoice();
let botSelection = getComputerChoice();


function playRound(humanChoice, botChoice){
    if (humanChoice === botChoice){
        ++human;
        ++bot;
    }
    else if (humanChoice == "scissors"){
        if (botChoice == "rock"){
            ++bot;
        }
        else {
            ++human;
        }

    }
    else if (humanChoice == "paper"){
        if (botChoice == "rock"){
            ++human;
        }
        else {
            ++bot;
        }
    }
    else if (humanChoice == "rock"){
        if (botChoice == "paper"){
            ++bot;
        }
        else {
            ++human;
        }
    }
}


function playGame(){
    while (human < 5 && bot < 5){
    humanSelection = getHumanChoice();
    botSelection = getComputerChoice();
    console.log(`Human selected ${humanSelection} and bot selected ${botSelection}`);
    console.log(`Human = ${human} Bot = ${bot}`)
    playRound(humanSelection, botSelection);
    }
    if (human > bot){
        console.log("You win!");
    }
    else if (human < bot){
        console.log("Bot wins!");
    }
    else {
        console.log("It's a draw!");
    }
}

playGame();

