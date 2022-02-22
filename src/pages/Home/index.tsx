import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { newDeck } from '../../services/deckService';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DeckContext } from '../../context/DeckContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
	const navigate = useNavigate();
	const { addPlayerOne, addPlayerTwo, addDeck, endGame } =
		useContext(DeckContext);

	const formPlayers = useFormik({
		initialValues: {
			playerOne: '',
			playerTwo: '',
		},
		validationSchema: Yup.object({
			playerOne: Yup.string().required('Jugador uno es requerido'),
			playerTwo: Yup.string().required('Jugador dos es requerido'),
		}),
		onSubmit: async (players) => {
			endGame(false);
			addPlayerOne(players.playerOne);
			addPlayerTwo(players.playerTwo);
			const data = await newDeck();
			addDeck(data);
			navigate('/game');
		},
	});
	return (
		<>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '100vh' }}
			>
				<Box>
					<form onSubmit={formPlayers.handleSubmit}>
						<TextField
							value={formPlayers.values.playerOne}
							onChange={formPlayers.handleChange}
							fullWidth
							id="playerOne"
							label="Player 1"
							variant="standard"
							error={
								formPlayers.errors.playerOne &&
								Boolean(formPlayers.errors.playerOne)
									? true
									: false
							}
							helperText={
								formPlayers.touched.playerOne && formPlayers.errors.playerOne
							}
						/>
						<TextField
							value={formPlayers.values.playerTwo}
							onChange={formPlayers.handleChange}
							fullWidth
							id="playerTwo"
							label="Player 2"
							variant="standard"
							error={
								formPlayers.errors.playerTwo &&
								Boolean(formPlayers.errors.playerTwo)
									? true
									: false
							}
							helperText={
								formPlayers.touched.playerTwo && formPlayers.errors.playerTwo
							}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							endIcon={<SportsEsportsIcon />}
						>
							Jugar
						</Button>
					</form>
				</Box>
			</Grid>
		</>
	);
};
