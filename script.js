console.log("import it's working")



function getComputerChoice(max){

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

function getPlayerSelection() {

    playerChoice = prompt("Select Rock, paper or Scissors")

    let playerSelection = 0;
    
    if (playerChoice == 'rock' || 'ROCK' || 'Rock'){
        playerSelection = 0;
    } else if (playerChoice == 'paper' || 'PAPER' || 'Paper'){
        playerSelection = 1;
    } else if (playerChoice == 'scissors' || 'SCISSORS' || 'Scissors'){
        playerSelection = 2;
    } 

    return playerSelection;
}




console.log(getComputerChoice());
console.log(getPlayerSelection());


