import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { ObtainedCards } from '../../components/ObtainedCards';
import { OptionCards } from '../../components/OptionCards';
import useDeckCards from '../../hooks/useDeckCards';

export const Game: React.FC = () => {
	const { deckPlayerOne, deckPlayerTwo, getCards, setEndGame } = useDeckCards();
	const navigate = useNavigate();

	useEffect(() => {
		if (!deckPlayerOne.namePlayer || !deckPlayerTwo.namePlayer) {
			navigate('/');
		}
	}, []);

	return (
		<>
			<Navbar
				getCardsRef={getCards}
				endGameRef={setEndGame}
				deckPlayerOneRef={deckPlayerOne}
				deckPlayerTwoRef={deckPlayerTwo}
			/>
			<OptionCards
				deckPlayerOneRef={deckPlayerOne}
				deckPlayerTwoRef={deckPlayerTwo}
			/>
			<ObtainedCards
				deckPlayerOneRef={deckPlayerOne}
				deckPlayerTwoRef={deckPlayerTwo}
			/>
		</>
	);
};
