
// CREATE variable for computer choice
// CREATE variable for human choice
// CREATE variable for number of rounds played
// CREATE variable for human rounds won

// TRANSLATE number into corresponding weapon for computer (1=Rock; 2=Paper; 3=Scissors)
let getComputerChoice = function(){
    let toolNum = (Math.random()*100)+1;
    let Choice;
    if (toolNum <= 33.33333){
        Choice = "Rock";
    }
    else if ((toolNum > 33.333333) && (toolNum <= 66.666666)){
        Choice = "Paper";
    }
    else if (toolNum <= 100){
        Choice = "Scissors";
    }
    return Choice
}

// DISPLAY message "Choose your weapon: Rock; Paper; Scissors!"
const getHumanChoice = function(){
const message = "Choose your weapon: Rock, Paper or Scissors!";
//let Choice = prompt(message);
if(Choice=="Rock"|Choice=="rock"){
console.log("You chose Rock!")}
else if (Choice=="Paper"|Choice=="paper"){ 
    console.log("You chose Paper!")
}
else if (Choice=="Scissors"|Choice=="scissors"){
    console.log("You chose Scissors!")
}
else {
    console.log("I'm sorry, that's not an option. Please try again...")
}
return Choice;
}

//let humanChoice = getHumanChoice();

// DECLARE players score variables
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let nRound = 0;

// LISTEN for click events on each button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        let compChoice = getComputerChoice();
        switch(button.id){
        case "rock": 
            humanChoice = "rock";
            playRound(humanChoice,compChoice);
            break;
        case "scissors":
            humanChoice = "scissors";
            playRound(humanChoice,compChoice);
            break;
        case "paper":
            humanChoice = "paper";
            playRound(humanChoice,compChoice);
            break;
        case "reset":
            reset();
            break
      }

let resultHuman = document.getElementById('scoreHum');
resultHuman.innerText = humanScore; 

let resultComp = document.getElementById('scoreComp');
resultComp.innerText = computerScore;

let roundNum = document.getElementById('roundOutcome');
roundNum.innerText = `Round ${nRound}. Player choice: ${humanChoice}. Computer choice: ${compChoice}.`;

    });
  });

buttons.forEach((button) => {
button.addEventListener("click", () => {
    if(nRound >= 5){
    if(humanScore > computerScore){
        let alertScore = document.getElementById('title')
        alertScore.innerText = "You win!";
    }
    if(computerScore > humanScore){
        let alertScore = document.getElementById('title')
        alertScore.innerText = "You lose!";
    }
}});
});

// COMPARE computer and user selections: rock beats scissors; scissor beats paper; paper beats rock

const playRound = function(humanChoice,computerChoice){
    let outcome;
    nRound++;
        if (humanChoice==="rock") {
            if (computerChoice==="Rock"){
                return; 
            }
            else if (computerChoice==="Paper") {
                return computerScore++;
            }
            else if (computerChoice==="Scissors") {
                return humanScore++;
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "Rock"){
                return humanScore++;
            }
            else if (computerChoice === "Scissors"){
                return computerScore++;
            }
            else if (computerChoice === "Paper"){
                return;
            }
        };
        if (humanChoice === "scissors") {
            if (computerChoice === "Rock"){
                return computerScore++;
            }
            else if (computerChoice === "Scissors"){
                return;
            } else if (computerChoice === "Paper"){
                return humanScore++;
            }
        }

    };

// event listener for humanScore or computerScore reaching 5
// if humanScore = 5, display "You win!"
// if computerScore = 5, display "You lose!"

// DISPLAY message "You win!" or "You lose!" when score reaches 5


// RESET scores to 0
let reset = function(){
    humanScore = 0;
    computerScore = 0;
    nRound = 0;

    let resultHuman = document.getElementById('scoreHum');
    resultHuman.innerText = "0";

    let resultComp = document.getElementById('scoreComp');
    resultComp.innerText = "0";

    let alertScore = document.getElementById('title')
        alertScore.innerText = "";

    return;
}




