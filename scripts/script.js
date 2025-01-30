
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
let Choice = prompt(message);
if(Choice=="Rock"|Choice=="rock"){
console.log("Human chooses Rock!")}
else if (Choice=="Paper"|Choice=="paper"){ 
    console.log("Human chooses Paper!")
}
else if (Choice=="Scissors"|Choice=="scissors"){
    console.log("Human chooses Scissors!")
}
else {
    console.log("I'm sorry, that's not an option. Please try again...")
}
return Choice;
}

let humanChoice = getHumanChoice();

// DECLARE players score variables
let humanScore = 0;
let computerScore = 0;

// COMPARE computer and user selections: rock beats scissors; scissor beats paper; paper beats rock

const playRound = function(humanChoice,computerChoice){
    let outcome;
        if (humanChoice=="rock") {
            if (computerChoice=="Rock"){
                console.log("Draw! Try again."); 
            }
            else if (computerChoice=="Paper") {
                computerScore++;
                console.log("Paper beats rock. You lose!");
            }
            else if (computerChoice=="Scissors") {
                humanScore++;
                console.log("Rock beats scissors. You win!");
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "Rock"){
                humanScore++;
                console.log("Paper beats rock. You win!");
            }
            else if (computerChoice == "Scissors"){
                computerScore++;
                console.log("Scissors beat paper. You lose!");
            }
            else if (computerChoice == "Paper"){
                console.log("Draw! Try again.");
            }
        };
        if (humanChoice == "scissors") {
            if (computerChoice == "Rock"){
                computerScore++;
                console.log("Rock beats scissors. You lose!");
            }
            else if (computerChoice == "Scissors"){
                console.log("Draw. Try again!");
            } else if (computerChoice == "Paper"){
                humanScore++;
                console.log("Scissors beat paper. You win!");
            }
        }
    };

// PRINT statement on outcome of round
compChoice = getComputerChoice();
console.log("Computer chooses: " + compChoice);
playRound(humanChoice,compChoice);
console.log("Human score: " + humanScore);
console.log("Computer score: "+ computerScore);

// LOOP through the games until row number = 5

// IF row number = 5 and human_rounds = 5 - comp_rounds, display game conclusion statement

// IF humans won the game, print "Humans win!"

// ELSE if computers won the game, print "Glory to the machine!"