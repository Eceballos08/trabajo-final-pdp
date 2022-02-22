import { useReducer } from 'react';
import { Deck, DeckState } from '../interfaces/interface';
import { DeckContext } from './DeckContext';
import { deckReducer } from './deckReducer';

interface DeckProviderProps {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: DeckState = {
	playerOne: '',
	playerTwo: '',
	deck: {
		success: false,
		// eslint-disable-next-line camelcase
		deck_id: '',
		shuffled: false,
		remaining: 0,
	},
	endGame: false,
};

export const DeckProvider = ({ children }: DeckProviderProps) => {
	const [deckState, dispatch] = useReducer(deckReducer, INITIAL_STATE);

	const addPlayerOne = (name: string) => {
		dispatch({ type: 'addPlayerOne', payload: name });
	};

	const addPlayerTwo = (name: string) => {
		dispatch({ type: 'addPlayerTwo', payload: name });
	};

	const addDeck = (deck: Deck) => {
		dispatch({ type: 'addDeck', payload: deck });
	};

	const endGame = (end: boolean) => {
		dispatch({ type: 'endGame', payload: end });
	};

	return (
		<DeckContext.Provider
			value={{ deckState, addPlayerOne, addPlayerTwo, addDeck, endGame }}
		>
			{children}
		</DeckContext.Provider>
	);
};
