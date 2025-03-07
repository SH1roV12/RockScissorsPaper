

function getComputerChoice(){
    const choices = ["rock", "scissors","paper"];
    return choices[Math.floor(Math.random() * choices.length)];
};
const humans = document.querySelectorAll(".main-content__button");
humans.forEach(human => human.addEventListener("click", (event) => {
    let humanSelection = event.target.closest("button").getAttribute("data-button");
    let botSelection = getComputerChoice()
    console.log(humanSelection, botSelection)
    playRound(humanSelection, botSelection)
    document.querySelector(".bot_choise").textContent = "Бот выбрал:" + botSelection
}
))






let human = 0;
let bot = 0;



let results = document.querySelector(".result")
console.log(results)





function playRound(humanChoice, botChoice){
    if (humanChoice === botChoice){
        console.log("ничья")
        document.body.style.backgroundColor = "rgb(218, 222, 90)";
        results.textContent = "Ничья лол"  
    }
    else if (humanChoice == "scissors"){
        if (botChoice == "rock"){
            console.log("бот выйграл");
            document.body.style.backgroundColor = "rgb(216, 20, 20)";
            results.textContent = "Увы,ты проиграл"    
        }
        else {
            console.log("ты победил");
            document.body.style.backgroundColor = "rgb(56, 153, 26)";
            results.textContent = "Ты победил, поздравляю"
        }

    }
    else if (humanChoice == "paper"){
        if (botChoice == "rock"){
            console.log("ты победил");
            document.body.style.backgroundColor = "rgb(56, 153, 26)";
            results.textContent = "Ты победил, поздравляю"; 
        }
        else {
            console.log("бот выйграл");
            document.body.style.backgroundColor = "rgb(216, 20, 20)";
            results.textContent = "Увы,ты проиграл"  
        }
    }
    else if (humanChoice == "rock"){
        if (botChoice == "paper"){
            console.log("бот выйграл");
            document.body.style.backgroundColor = "rgb(216, 20, 20)";
            results.textContent = "Увы,ты проиграл"   
        }
        else {
            console.log("ты победил");
            document.body.style.backgroundColor = "rgb(56, 153, 26)";
            results.textContent = "Ты победил, поздравляю" 
        }
    }
}




