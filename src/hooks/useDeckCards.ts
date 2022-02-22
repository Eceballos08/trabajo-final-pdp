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

	const searchCards = (newCard: Card, deckPlayer: DeckPlayer): Card[] => {
		return deckPlayer.cards.filter((card) => card.value === newCard.value);
	};

	const setEndGame = (): void => {
		if (
			deckPlayerOne.cardsWins.length > 0 ||
			deckPlayerTwo.cardsWins.length > 0
		) {
			endGame(true);
			if (deckPlayerOne.cardsWins.length === deckPlayerTwo.cardsWins.length) {
				let playerOneScore = 0;
				let playerTwoScore = 0;
				deckPlayerOne.cardsWins.forEach((card) => {
					playerOneScore += winForSuit(card.suit);
				});
				deckPlayerTwo.cardsWins.forEach((card) => {
					playerTwoScore += winForSuit(card.suit);
				});

				if (playerOneScore > playerTwoScore) {
					setDeckPlayerOne({ ...deckPlayerOne, winner: true });
				} else {
					setDeckPlayerTwo({ ...deckPlayerTwo, winner: true });
				}
			} else {
				deckPlayerOne.cardsWins.length > 0
					? setDeckPlayerOne({ ...deckPlayerOne, winner: true })
					: setDeckPlayerTwo({ ...deckPlayerTwo, winner: true });
			}
		}
	};

	const winForSuit = (suit: string): number => {
		switch (suit) {
			case 'HEARTS':
				return 4;
			case 'SPADES':
				return 3;
			case 'DIAMONDS':
				return 2;
			case 'CLUBS':
				return 1;
			default:
				return 0;
		}
	};

	return {
		deckPlayerOne,
		deckPlayerTwo,
		getCards,
		setEndGame,
	};
};

export default useDeckCards;
