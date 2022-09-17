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

    
    const playerChoice = prompt('Enter paper, rock or scissors');
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


console.log(getPlayerChoice());

console.log(getComputerChoice());



