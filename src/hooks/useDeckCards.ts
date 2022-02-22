import { useContext, useState } from 'react';

import { DeckContext } from '../context/DeckContext';
import { Card, DeckPlayer } from '../interfaces/interface';

const useDeckCards = () => {
	const { deckState, endGame } = useContext(DeckContext);

	const INITIAL_STATE_PLAYER_ONE: DeckPlayer = {
		namePlayer: deckState.playerOne,
		cards: [],
		cardsWins: [],
		winner: false,
	};

	const INITIAL_STATE_PLAYER_TWO: DeckPlayer = {
		namePlayer: deckState.playerTwo,
		cards: [],
		cardsWins: [],
		winner: false,
	};

	const SUITS_VALUE: { [suit: string]: number } = {
		HEARTS: 4,
		SPADES: 3,
		DIAMONDS: 2,
		CLUBS: 1
	};

	const searchCards = (newCard: Card, deckPlayer: DeckPlayer): Card[] => {
		return deckPlayer.cards.filter((card) => card.value === newCard.value);
	};

	const [deckPlayerOne, setDeckPlayerOne] = useState<DeckPlayer>(
		INITIAL_STATE_PLAYER_ONE
	);

	const [deckPlayerTwo, setDeckPlayerTwo] = useState<DeckPlayer>(
		INITIAL_STATE_PLAYER_TWO
	);

	const getCards = (newCards: Card[]): void => {
		const cardRepeatPlayerOne = searchCards(newCards[0], deckPlayerOne);
		if (cardRepeatPlayerOne.length > 0) {
			cardRepeatPlayerOne.push(newCards[0]);
		}

		const cardRepeatPlayerTwo = searchCards(newCards[1], deckPlayerTwo);
		if (cardRepeatPlayerTwo.length > 0) {
			cardRepeatPlayerTwo.push(newCards[1]);
		}

		setDeckPlayerOne({
			...deckPlayerOne,
			cards: [...deckPlayerOne.cards, newCards[0]],
			cardsWins: cardRepeatPlayerOne,
		});

		setDeckPlayerTwo({
			...deckPlayerTwo,
			cards: [...deckPlayerTwo.cards, newCards[1]],
			cardsWins: cardRepeatPlayerTwo,
		});
	};

	const setEndGame = (): void => {
		if (!deckPlayerOne.cardsWins.length && !deckPlayerTwo.cardsWins.length) {
			return;
		}

		endGame(true);

		if (deckPlayerOne.cardsWins.length !== deckPlayerTwo.cardsWins.length) {
			deckPlayerOne.cardsWins.length > 0
				? setDeckPlayerOne({ ...deckPlayerOne, winner: true })
				: setDeckPlayerTwo({ ...deckPlayerTwo, winner: true });
			return;
		}

		const playerOneScore = deckPlayerOne.cardsWins
			.reduce((sum, card) => sum + winForSuit(card.suit), 0);

		const playerTwoScore = deckPlayerTwo.cardsWins
			.reduce((sum, card) => sum + winForSuit(card.suit), 0);

		if (playerOneScore > playerTwoScore) {
			setDeckPlayerOne({ ...deckPlayerOne, winner: true });
			return;
		}

		setDeckPlayerTwo({ ...deckPlayerTwo, winner: true });
	};

	const winForSuit = (suit: string): number => SUITS_VALUE[suit] ?? 0;

	return {
		deckPlayerOne,
		deckPlayerTwo,
		getCards,
		setEndGame,
	};
};

export default useDeckCards;
