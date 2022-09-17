console.log("import it's working")



function getComputerChoice(){

    let ComputerSelection =  Math.floor(Math.random() * 3);

    // if (choice == 0){
    //     choice = 'Rock'
    // } else if (choice == 1){
    //     choice = 'Paper'
    // } else if (choice == 2){
    //     choice = 'Scissors'
    // }

    return ComputerSelection;

}

function getPlayerChoice() {

    
    const playerChoice = prompt('Enter Rock, Paper or Scissors');
    let playerSelection;
   
  
    switch (playerChoice) {
        

        // rock
        case 'rock':{
            playerSelection = 0;
           break;

        }
        case 'ROCK':{
            playerSelection = 0;
           break;
        }
        case 'Rock':{
            playerSelection = 0;
           break;
        }
        case 'rOCK':{
            playerSelection = 0;
           break;
        }

        // paper    
        case 'paper':{
            playerSelection = 1;
           break;
        }
        case 'PAPER':{
            playerSelection = 1;
           break;
        }
        case 'Paper':{
            playerSelection = 1;
           break;
        }
        case 'pAPER':{
            playerSelection = 1;
           break;
        }

        // scissors

        case 'scissors':{
            playerSelection = 2;
           break;
        }
        case 'SCISSORS':{
            playerSelection = 2;
           break;
        }
        case 'Scissors':{
            playerSelection = 2;
           break;
        }
        case 'sCISSORS':{
            playerSelection = 2;
           break;
        }
        

      } 
      return playerSelection;
}

function playRound(playerSelection, computerSelection) {

    let roundResult;

    if (playerSelection === 0) {

        if  (playerSelection === 0 && computerSelection === 0) {
            roundResult = 'draw'      
    } else if (playerSelection === 0 && computerSelection === 1) {
            roundResult = 'lose'
    } else if (playerSelection === 0 && computerSelection === 2) {
            roundResult = 'winner'
    }

    } else if (playerSelection === 1){

        if  (playerSelection === 1 && computerSelection === 0) {
            roundResult = 'winner'      
    } else if (playerSelection === 1 && computerSelection == 1) {
            roundResult = 'draw'
    } else if (playerSelection === 1 && computerSelection === 2) {
            roundResult = 'lose'
    }

    } else if (playerSelection === 2){

        if  (playerSelection === 2 && computerSelection === 0) {
            roundResult = 'lose'      
    } else if (playerSelection === 2 && computerSelection == 1) {
            roundResult = 'winner'
    } else if (playerSelection === 2 && computerSelection === 2) {
            roundResult = 'draw'
    }

    }


return roundResult;

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);



console.log(playRound(playerSelection, computerSelection));
