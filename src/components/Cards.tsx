import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

//tipado de las props
interface Props {
  cardRef: string;
  enableDelete?: boolean;
  onClick?: () => void;
}

export const Cards = ({
  cardRef,
  enableDelete,
  onClick = () => undefined,
}: Props) => {
  return (
    <>
      {/* Contenedor de la carta */}
      <Card
        sx={{ maxWidth: 200, maxHeight: 400 }}
        style={{
          border: "none",
          boxShadow: "none",
          cursor: enableDelete ? "not-allowed" : "default",
        }}
      >
        {/* Carta en cuestion */}
        <CardMedia
          component="img"
          image={cardRef}
          alt="card"
          onClick={() => {
            if (!enableDelete) {
              return;
            }
            onClick();
          }}
        />
      </Card>
    </>
  );
};
