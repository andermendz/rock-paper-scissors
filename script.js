console.log("import it's working")

function getComputerChoice(max){

    return Math.floor(Math.random() * max);

}

let choice = getComputerChoice(3);

console.log(choice);
