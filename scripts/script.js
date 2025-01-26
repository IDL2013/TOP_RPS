
// PRINT script linkage with "Hello World!"
console.log("Hello, world!")

// CREATE variable for computer choice
// CREATE variable for human choice
// CREATE variable for number of rounds played
// CREATE variable for human rounds won

// SELECT random number from 0-1 and multiply by 3, before rounding up

// TRANSLATE number into corresponding weapon for computer (1=Rock; 2=Paper; 3=Scissors)

// DISPLAY message "Choose your weapon: Rock; Paper; Scissors!"
const message = "Choose your weapon: Rock, Paper or Scissors!";
let humanChoice = window.prompt(message)

// IL: need to adapt this to remove case sensitivity (make all lower case).
if(humanChoice=="Rock"|humanChoice=="rock"){
console.log("Human chooses Rock!")}
else if (humanChoice=="Paper"){ 
    console.log("Human chooses Paper!")
}
else if (humanChoice==("Scissors"|"scissors")){
    console.log("Human chooses Scissors!")
}
else {
    console.log("I'm sorry, that's not an option. Please try again...")
}

// GET user input as string

// COMPARE computer and user selections: rock beats scissors; scissor beats paper; paper beats rock

// PRINT statement if human wins: "Human wins! 1:0 to humans!"

// PRINT statement if computer wins: "The computer wins this round! Humans are losing 0:1!"

// INCREASE round number by 1

// LOOP through the gams until row number = 5

// IF row number = 5 and human_rounds = 5 - comp_rounds, display game conclusion statement

// IF humans won the game, print "Humans win!"

// ELSE if computers won the game, print "Glory to the machine!"