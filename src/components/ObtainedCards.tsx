import Grid from '@mui/material/Grid';
import { Cards } from './Cards';
import Typography from '@mui/material/Typography';
import { DeckPlayer } from '../interfaces/interface';

interface Props {
	deckPlayerOneRef: DeckPlayer;
	deckPlayerTwoRef: DeckPlayer;
}

export const ObtainedCards = ({
	deckPlayerOneRef,
	deckPlayerTwoRef,
}: Props) => {
	return (
		<Grid container spacing={2} columns={16}>
			<Grid
				item
				xs={8}
				sx={{ border: '2px solid', borderRight: 'none', borderTop: 'none' }}
			>
				<Typography align="center" variant="h6">
					Cartas obtenidas
				</Typography>
				<Grid container spacing={1} columns={8}>
					{deckPlayerOneRef.cards.map((card, index) => (
						<Grid item xs={2} key={index}>
							<Cards cardRef={card.image} key={index} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={8} sx={{ border: '2px solid', borderTop: 'none' }}>
				<Typography align="center" variant="h6">
					Cartas obtenidas
				</Typography>
				<Grid container spacing={1} columns={8}>
					{deckPlayerTwoRef.cards.map((card, index) => (
						<Grid item xs={2} key={index}>
							<Cards cardRef={card.image} key={index} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};
