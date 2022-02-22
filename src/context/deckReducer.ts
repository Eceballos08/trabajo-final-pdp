import { DeckState, Deck } from '../interfaces/interface';

type DeckAction =
	| { type: 'addPlayerOne'; payload: string }
	| { type: 'addPlayerTwo'; payload: string }
	| { type: 'addDeck'; payload: Deck }
	| { type: 'endGame'; payload: boolean };

export const deckReducer = (state: DeckState, action: DeckAction): DeckState => {
	switch (action.type) {
		case 'addPlayerOne':
			return {
				...state,
				playerOne: action.payload,
			};

		case 'addPlayerTwo':
			return {
				...state,
				playerTwo: action.payload,
			};

		case 'addDeck':
			return {
				...state,
				deck: action.payload,
			};

		case 'endGame':
			return {
				...state,
				endGame: action.payload,
			};

		default:
			return state;
	}
};
