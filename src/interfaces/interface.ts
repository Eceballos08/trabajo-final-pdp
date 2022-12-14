//baraja
export interface Deck {
	success: boolean;
	deck_id: string;
	shuffled: boolean;
	remaining: number;
}
//informacion del juego
export interface DeckState {
	playerOne: string;
	playerTwo: string;
	deck: Deck;
	endGame: boolean;
}
//dibujar cartas
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
//informacion del jugador que gano
export interface DeckPlayer {
	namePlayer: string;
	cards: Card[];
	cardsWins: Card[];
	winner: boolean;
}
