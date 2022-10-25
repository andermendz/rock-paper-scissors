console.log("import it's working");

   // TODO DOM
   // testing merge

function getComputerChoice() {
  let ComputerSelection = Math.floor(Math.random() * 3);

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
  const playerChoice = prompt("Enter Rock, Paper or Scissors");
  let playerSelection;

  switch (playerChoice) {
    // rock
    case "rock": {
      playerSelection = 0;
      break;
    }
    case "ROCK": {
      playerSelection = 0;
      break;
    }
    case "Rock": {
      playerSelection = 0;
      break;
    }
    case "rOCK": {
      playerSelection = 0;
      break;
    }

    // paper
    case "paper": {
      playerSelection = 1;
      break;
    }
    case "PAPER": {
      playerSelection = 1;
      break;
    }
    case "Paper": {
      playerSelection = 1;
      break;
    }
    case "pAPER": {
      playerSelection = 1;
      break;
    }

    // scissors

    case "scissors": {
      playerSelection = 2;
      break;
    }
    case "SCISSORS": {
      playerSelection = 2;
      break;
    }
    case "Scissors": {
      playerSelection = 2;
      break;
    }
    case "sCISSORS": {
      playerSelection = 2;
      break;
    }
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let roundResult;

  if (playerSelection === 0) {
    if (playerSelection === 0 && computerSelection === 0) {
      roundResult = "No winner";
    } else if (playerSelection === 0 && computerSelection === 1) {
      roundResult = "You Lose";
    } else if (playerSelection === 0 && computerSelection === 2) {
      roundResult = "You Win";
    }
  } else if (playerSelection === 1) {
    if (playerSelection === 1 && computerSelection === 0) {
      roundResult = "You Win";
    } else if (playerSelection === 1 && computerSelection == 1) {
      roundResult = "No winner";
    } else if (playerSelection === 1 && computerSelection === 2) {
      roundResult = "You Lose";
    }
  } else if (playerSelection === 2) {
    if (playerSelection === 2 && computerSelection === 0) {
      roundResult = "You Lose";
    } else if (playerSelection === 2 && computerSelection == 1) {
      roundResult = "You Win";
    } else if (playerSelection === 2 && computerSelection === 2) {
      roundResult = "No winner";
    }
  }

  return roundResult;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(roundResult);

    if (playRound(playerSelection, computerSelection) == "You Win") {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection) == "You Lose") {
      computerScore++;
    }
  }

  console.log(playerScore);
  console.log(computerScore);

  if (playerScore > computerScore) {
    console.log("Player Wins");
  } else if (computerScore > playerScore) {
    console.log("Computer Wins");
  } else if (playerScore == computerScore) {
    console.log("No Winners");
  }
}

game();
