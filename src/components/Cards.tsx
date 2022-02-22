import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface Props {
	cardRef: string;
}

export const Cards = ({ cardRef }: Props) => {
	return (
		<>
			<Card
				sx={{ maxWidth: 200, maxHeight: 400 }}
				style={{ border: 'none', boxShadow: 'none' }}
			>
				<CardMedia component="img" image={cardRef} alt="card" />
			</Card>
		</>
	);
};
