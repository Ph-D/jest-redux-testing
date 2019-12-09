/**
	* @method getLetterMatchCount
	* @param {string} guessedWord - Guessed word.
	* @param {string} secretWord - Secret word.
	* @return {number} - Number of letter matched between guessed word 
	*/

export function getLetterMatchCount(guessedWord, secretWord) {
	const secretLetterSet = new Set(secretWord.split(''));
	const guessedLetterSet = new Set(guessedWord.split(''));
	return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}