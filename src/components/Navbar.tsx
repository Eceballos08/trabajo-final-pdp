import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import VerifiedIcon from "@mui/icons-material/Verified";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { DeckContext } from "../context/DeckContext";
import { useContext, useEffect } from "react";
import { Card, DeckPlayer } from "../interfaces/interface";
import { getCards } from "../services/deckService";
import { useNavigate } from "react-router-dom";

//llamado de los estilos de material ui
const useStyles = makeStyles(() => ({
  image: {
    marginRight: "10px",
    height: "3rem",
  },
  grow: {
    flexGrow: 1,
  },
}));

const FinalIcon = ({ success }: { success: boolean }) =>
  success ? (
    <VerifiedIcon sx={{ fontSize: 40 }} color="success" />
  ) : (
    <CancelIcon sx={{ fontSize: 40 }} color="error" />
  );

//tipado de las variables
interface Props {
  setCardsRef: (newCards: Card[]) => void;
  endGameRef: () => void;
  deckPlayerOneRef: DeckPlayer;
  deckPlayerTwoRef: DeckPlayer;
}

export const Navbar = ({
  setCardsRef,
  endGameRef,
  deckPlayerOneRef,
  deckPlayerTwoRef,
}: Props) => {
  const classes = useStyles(); //llamado de los estilos
  const navigate = useNavigate(); //navegacion del react router
  const { deckState } = useContext(DeckContext); //llamado del context

  //hook para mostrar cuando se termine el juego
  useEffect(() => {
    endGameRef();
  }, [deckPlayerTwoRef.cards]);

  //funcion: cuando se acaba el juego se regresa al home
  const getCardsClick = async () => {
    if (deckState.endGame || deckState.deck.remaining === 0) {
      navigate("/");
      return;
    }
    //obtiene las cartas y las reparte
    const { cards } = await getCards(deckState.deck.deck_id);
    setCardsRef(cards);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" component="div">
          {`Jugador 1: ${deckState.playerOne}`}
        </Typography>
        {deckState.endGame && <FinalIcon success={deckPlayerOneRef.winner} />}
        <div className={classes.grow}></div>
        {/* si entre ambos jugadores tienen mas de 20 cartas se deshabilita el boton*/}
        <IconButton
          onClick={getCardsClick}
          disabled={
            deckPlayerOneRef.cards.length + deckPlayerTwoRef.cards.length > 20
          }
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
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
