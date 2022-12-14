import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, DeckPlayer } from '../interfaces/interface';
import { Cards } from './Cards';

interface Props {
	deckPlayerOneRef: DeckPlayer;
	deckPlayerTwoRef: DeckPlayer;
}

const imageOption =
	'https://i.pinimg.com/564x/f3/13/d1/f313d1306e8729f3b2215c5339b1e8c6.jpg';

const CardsWin = ({ cards }: { cards: Card[] }) => (
	<Grid item xs={8} sx={{ border: '2px solid', borderRight: 'none' }}>
		<Typography align="center" variant="h6">
			Cartas opcionadas
		</Typography>
		<Grid container spacing={1} columns={8}>
			<Grid item xs={1.5}></Grid>
			{cards.length > 0 ? (
				cards.map((card, index) => (
					<Grid item xs={2} key={index}>
						<Cards cardRef={card.image} />
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
);

export const OptionCards = ({ deckPlayerOneRef, deckPlayerTwoRef }: Props) => (
	<Grid container spacing={2} columns={16}>
		<CardsWin cards={deckPlayerOneRef.cardsWins} />
		<CardsWin cards={deckPlayerTwoRef.cardsWins} />
	</Grid>
);
