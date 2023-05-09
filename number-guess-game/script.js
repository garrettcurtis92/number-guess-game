let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//generates random number between 0 and 9
const generateTarget = () => {
	return Math.floor(Math.random() * 10); //creates a random # between 0 - 9
};

//compares the guesses of each against the target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
	const userDiff = Math.abs(targetNumber - userGuess);
	const computerDiff = Math.abs(targetNumber - computerGuess);
	if (userDiff <= computerDiff) {
		return true;
	} else {
		return false;
	}
};
//updates interface with the winner and increases the score
const updateScore = (winner) => {
	if (winner === "human") {
		humanScore++;
	} else {
		computerScore++;
	}
};
//advances to the next round and increases the round counter
const advanceRound = () => {
	currentRoundNumber++;
};
