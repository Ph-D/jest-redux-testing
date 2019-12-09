import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
	const secretWord = 'party';
	const unsuccessfulGuess = 'train'
	describe('no guessed words', () => {
		test('updates state crrectly for un successful guess', () => {

		});
		test('updates state correctly for successful guess', () => {

		});
	});
	describe('some guessed words', () => {
		test('updates state correctly for unsuccessful guess', () => {

		});
		test('updates state correctly for succesful guess', () => {

		});
	});
});