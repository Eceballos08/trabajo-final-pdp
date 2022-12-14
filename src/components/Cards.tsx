import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface Props {
	cardRef: string;
	enableDelete?: boolean;
	onClick?: () => void;
}

export const Cards = ({ cardRef, enableDelete, onClick = () => undefined }: Props) => {
	return (
		<>
			<Card
				sx={{ maxWidth: 200, maxHeight: 400 }}
				style={{
					border: 'none',
					boxShadow: 'none',
					cursor: enableDelete ? 'not-allowed' : 'default'
				}}
			>
				<CardMedia component="img" image={cardRef} alt="card" onClick={() => {
					if (!enableDelete) { return; }
					onClick()
				}} />
			</Card>
		</>
	);
};
