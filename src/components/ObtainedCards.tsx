import Grid from '@mui/material/Grid';
import { Cards } from './Cards';
import Typography from '@mui/material/Typography';
import { DeckPlayer, Card } from '../interfaces/interface';

interface Props {
	deckPlayerOneRef: DeckPlayer;
	deckPlayerTwoRef: DeckPlayer;
}

const CartGroup = ({ cards, border }: { cards: Card[], border?: boolean }) => (
	<Grid item xs={8} sx={{ borderTop: 'none', padding: '1rem 0' }}
		style={{ borderLeft: border ? '2px solid' : 'none', borderBottom: '2px solid' }}>
		<Typography align="center" variant="h6">
			Cartas obtenidas
		</Typography>
		<Grid container spacing={1} columns={8}>
			{cards.map((card, index) => (
				<Grid item xs={2} key={index}>
					<Cards cardRef={card.image} key={index} />
				</Grid>
			))}
		</Grid>
	</Grid >
)

export const ObtainedCards = ({
	deckPlayerOneRef,
	deckPlayerTwoRef,
}: Props) => (
	<Grid container spacing={2} columns={16} style={{ padding: '1rem' }}>
		<CartGroup cards={deckPlayerOneRef.cards} />
		<CartGroup cards={deckPlayerTwoRef.cards} border />
	</Grid>
);

