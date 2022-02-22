import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DeckPlayer } from '../interfaces/interface';
import { Cards } from './Cards';

interface Props {
	deckPlayerOneRef: DeckPlayer;
	deckPlayerTwoRef: DeckPlayer;
}

export const OptionCards = ({ deckPlayerOneRef, deckPlayerTwoRef }: Props) => {
	const imageOption =
		'https://i.pinimg.com/564x/f3/13/d1/f313d1306e8729f3b2215c5339b1e8c6.jpg';
	return (
		<Grid container spacing={2} columns={16}>
			<Grid item xs={8} sx={{ border: '2px solid', borderRight: 'none' }}>
				<Typography align="center" variant="h6">
					Cartas opcionadas
				</Typography>
				<Grid container spacing={1} columns={8}>
					<Grid item xs={1.5}></Grid>
					{deckPlayerOneRef.cardsWins.length > 0 ? (
						deckPlayerOneRef.cardsWins.map((card, index) => (
							<Grid item xs={2} key={index}>
								<Cards cardRef={card.image} key={index} />
							</Grid>
						))
					) : (
						<>
							<Grid item xs={2}>
								<Cards cardRef={imageOption} />
							</Grid>
							<Grid item xs={2}>
								<Cards cardRef={imageOption} />
							</Grid>
						</>
					)}
				</Grid>
			</Grid>
			<Grid item xs={8} sx={{ border: '2px solid', borderTop: 'none' }}>
				<Typography align="center" variant="h6">
					Cartas opcionadas
				</Typography>
				<Grid container spacing={1} columns={8}>
					<Grid item xs={1.5}></Grid>
					{deckPlayerTwoRef.cardsWins.length > 0 ? (
						deckPlayerTwoRef.cardsWins.map((card, index) => (
							<Grid item xs={2} key={index}>
								<Cards cardRef={card.image} key={index} />
							</Grid>
						))
					) : (
						<>
							<Grid item xs={2}>
								<Cards cardRef={imageOption} />
							</Grid>
							<Grid item xs={2}>
								<Cards cardRef={imageOption} />
							</Grid>
						</>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
};
