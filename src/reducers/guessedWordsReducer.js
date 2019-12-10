import { actionTypes } from '../actions';

/**
	* @function guessedWordsReducer
	* @param {object} state - Array of guessed words.
	* @param {object} action - action to be reduced.
	* @returns {array} - new guessedWords state.
 */
export default (state=[], action) => {
	switch(action.type) {
		case actionTypes.CORRECT_GUESS:
			return [...state, action.payload];
		default:
			return state;   
	}
}