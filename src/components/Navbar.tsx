import { makeStyles } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import VerifiedIcon from '@mui/icons-material/Verified';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import { DeckContext } from '../context/DeckContext';
import { useContext, useEffect } from 'react';
import { Card, DeckPlayer } from '../interfaces/interface';
import { getCards } from '../services/deckService';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	image: {
		marginRight: '10px',
		height: '3rem',
	},
	grow: {
		flexGrow: 1,
	},
}));

const FinalIcon = ({ success }: { success: boolean }) => (
	success ? (
		<VerifiedIcon sx={{ fontSize: 40 }} color="success" />
	) : (
		<CancelIcon sx={{ fontSize: 40 }} color="error" />
	)
);

interface Props {
	getCardsRef: (newCards: Card[]) => void;
	endGameRef: () => void;
	deckPlayerOneRef: DeckPlayer;
	deckPlayerTwoRef: DeckPlayer;
}

export const Navbar = ({
	getCardsRef,
	endGameRef,
	deckPlayerOneRef,
	deckPlayerTwoRef,
}: Props) => {
	const classes = useStyles();
	const { deckState } = useContext(DeckContext);
	const navigate = useNavigate();

	useEffect(() => {
		endGameRef();
	}, [deckPlayerTwoRef.cards]);

	const getCardsClick = async () => {
		if (deckState.endGame) {
			navigate('/');
			return
		}

		const { cards } = await getCards(deckState.deck.deck_id);
		getCardsRef(cards);
	};

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h5" component="div">
					{`Jugador 1: ${deckState.playerOne}`}
				</Typography>
				{deckState.endGame && <FinalIcon success={deckPlayerOneRef.winner} />}
				<div className={classes.grow}></div>
				<IconButton onClick={getCardsClick}>
					<PlayCircleOutlineIcon sx={{ fontSize: 40 }} />
				</IconButton>
				<div className={classes.grow}></div>
				<Typography variant="h5" component="div">
					{`Jugador 2: ${deckState.playerTwo}`}
				</Typography>
				{deckState.endGame && <FinalIcon success={deckPlayerTwoRef.winner} />}
			</Toolbar>
		</AppBar>
	);
};
