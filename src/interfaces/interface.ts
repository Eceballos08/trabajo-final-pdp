export interface Deck {
	success: boolean;
	deck_id: string;
	shuffled: boolean;
	remaining: number;
}

export interface DeckState {
	playerOne: string;
	playerTwo: string;
	deck: Deck;
	endGame: boolean;
}

export interface Card {
	code: string;
	image: string;
	images: {
		svg: string;
		png: string;
	};
	value: string;
	suit: string;
}

export interface DeckPlayer {
	namePlayer: string;
	cards: Card[];
	cardsWins: Card[];
	winner: boolean;
}
