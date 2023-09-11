let userWins = 0;
let compWins = 0;



let restartBtn = document.createElement("button");
restartBtn.textContent ="Play Again?";
restartBtn.addEventListener("click",playAgain);



let bod = document.getElementById("bod");

let roundsBox = document.createElement("div");

let threeRnd = document.createElement("button");
threeRnd.textContent = "3";
threeRnd.addEventListener("click",determineRounds);

let fiveRnd = document.createElement("button");
fiveRnd.textContent ="5";
fiveRnd.addEventListener("click",determineRounds);

let tenRnd = document.createElement("button");
tenRnd.textContent ="10";
tenRnd.addEventListener("click",determineRounds);

roundsBox.appendChild(threeRnd);
roundsBox.appendChild(fiveRnd);
roundsBox.appendChild(tenRnd);





let choiceBox = document.createElement("div");

let rock = document.createElement("button"); rock.textContent ="rock"
rock.addEventListener("click", playRound);

let paper = document.createElement("button"); paper.textContent ="paper";
paper.addEventListener("click", playRound);

let scissors = document.createElement("button"); scissors.textContent ="scissors";
scissors.addEventListener("click", playRound);


choiceBox.appendChild(rock);
choiceBox.appendChild(paper);
choiceBox.appendChild(scissors);


let resultBox = document.createElement("div");
resultBox.textContent = "Please choose rock, paper, or scissors";

let scoreBox = document.createElement("div");


let question = document.createElement("div");
question.textContent = "How many rounds would you like to play?";



function start(){
	bod.appendChild(question);
	bod.appendChild(roundsBox);
	
}

let numRounds = 0;

function determineRounds(e){
	numRounds = parseInt(e.target.textContent);
	changeScreen();
	
}

function changeScreen(){
	
bod.removeChild(roundsBox);
bod.removeChild(question);
bod.appendChild(choiceBox);
bod.appendChild(resultBox);
bod.appendChild(scoreBox);
	
	
}

let userChoice ="";
let compChoice ="";
let roundsPlayed = 0;
function playRound(e){
	
		
	
	userChoice = e.target.textContent;
	compChoice = getCompChoice();
	resultBox.textContent = compareChoices(userChoice,compChoice);
	
	scoreBox.textContent = `Player wins: ${userWins} \nComputer wins: ${compWins}`
	
	roundsPlayed += 1;
	
	
	if(roundsPlayed >= numRounds){
		
		bod.removeChild(choiceBox);
		if(userWins > compWins){
			resultBox.textContent = `You won ${userWins} out of ${numRounds} rounds, and are the final winner!`
		}
		else if( userWins < compWins){
			
			resultBox.textContent = `You only won ${userWins} out of ${numRounds} rounds... You lose...`;
			
		}
		
		else{
			resultBox.textContent = `You tied all ${numRounds} rounds.`
			
		}
		
		bod.appendChild(restartBtn);
	}


	
	
}

let choices = ["rock", "paper","scissors"];

function getCompChoice(){
	
	return choices[Math.floor(Math.random() * choices.length)];
	
}


function compareChoices(user,comp){
	
	if(user == "rock"){
		if(comp == "rock"){
			
			return `You both chose ${userChoice}. Tie`;
			
		}
		else if (comp == "scissors"){
			
			userWins += 1;
			return `You chose ${userChoice} and the computer chose ${compChoice}. You win!`;
			
		}
		else{
			
			compWins += 1;
			return `You chose ${userChoice} and the computer chose ${compChoice}. You lose...`;
			
		}
		
	}
	
	if(user == "scissors"){
		if(comp == "rock"){
			
			compWins += 1;
			return `You chose ${userChoice} and the computer chose ${compChoice}. You lose...`;
			
		}
		else if (comp == "scissors"){
			
			return `You both chose ${userChoice}. Tie`;
			
		}
		else{
			
			userWins += 1;
			return `You chose ${userChoice} and the computer chose ${compChoice}. You win!`;
			
		}
		
	}
	
	if(user == "paper"){
		if(comp == "rock"){
			
			userWins += 1;
			return `You chose ${userChoice} and the computer chose ${compChoice}. You win!`;
			
		}
		else if (comp == "scissors"){
			
			compWins += 1;
			return `You chose ${userChoice} and the computer chose ${compChoice}. You lose...`;
			
			
		}
		else{
			
			return `You both chose ${userChoice}. Tie`;
			
		}
		
	}
	
	
	
}


function playAgain(){
	numRounds = 0;
	userWins = 0;
	compWins = 0;
	roundsPlayed=0;
	userChoice = "";
	compChoice = "";
	scoreBox.textContent ="";
	resultBox.textContent = "Please choose rock, paper, or scissors";
	bod.removeChild(restartBtn);
	//bod.removeChild(choiceBox);
	bod.removeChild(scoreBox);
	bod.removeChild(resultBox)
	bod.appendChild(roundsBox)
	bod.appendChild(question);
	start();
}



start();









