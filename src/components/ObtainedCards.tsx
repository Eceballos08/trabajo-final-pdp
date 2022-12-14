import Grid from '@mui/material/Grid';
import { Cards } from './Cards';
import Typography from '@mui/material/Typography';
import { DeckPlayer, Card } from '../interfaces/interface';
import { useMemo } from 'react';

interface Props {
	deckPlayerOneRef: DeckPlayer;
	deckPlayerTwoRef: DeckPlayer;
	deleteCard: (card: Card, player: 0 | 1) => void
}

interface CardGroupProps {
	cards: Card[];
	border?: boolean;
	enableDelete: boolean;
	deleteCard: (card: Card) => void;
}

const CartGroup = ({ cards, border, enableDelete, deleteCard }: CardGroupProps) => (
	<Grid item xs={8} sx={{ borderTop: 'none', padding: '1rem 0' }}
		style={{ borderLeft: border ? '2px solid' : 'none', borderBottom: '2px solid' }}>
		<Typography align="center" variant="h6">
			Cartas obtenidas
		</Typography>
		<Grid container spacing={1} columns={8}>
			{cards.map((card, index) => (
				<Grid item xs={2} key={index}>
					<Cards
						cardRef={card.image}
						enableDelete={!!enableDelete}
						onClick={() => deleteCard(card)}
					/>
				</Grid>
			))}
		</Grid>
	</Grid >
)

export const ObtainedCards = ({
	deckPlayerOneRef,
	deckPlayerTwoRef,
	deleteCard,
}: Props) => {
	const enableDelete = useMemo(() => {
		return deckPlayerOneRef.cards.length + deckPlayerTwoRef.cards.length > 20
	}, [deckPlayerOneRef.cards, deckPlayerTwoRef.cards])

	return (
		<Grid container spacing={2} columns={16} style={{ padding: '1rem' }}>
			<CartGroup
				cards={deckPlayerOneRef.cards}
				enableDelete={enableDelete}
				deleteCard={(card: Card) => deleteCard(card, 0)}
			/>
			<CartGroup
				cards={deckPlayerTwoRef.cards}
				enableDelete={enableDelete}
				deleteCard={(card: Card) => deleteCard(card, 1)}
				border
			/>
		</Grid>
	)
};

