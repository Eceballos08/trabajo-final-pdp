import { createContext } from 'react';
import { Deck, DeckState } from '../interfaces/interface';

export type DeckContextProps = {
	deckState: DeckState;
	addPlayerOne: (name: string) => void;
	addPlayerTwo: (name: string) => void;
	addDeck: (deck: Deck) => void;
	endGame: (end: boolean) => void;
};

export const DeckContext = createContext<DeckContextProps>(
	{} as DeckContextProps
);
