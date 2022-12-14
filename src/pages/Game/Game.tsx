import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { ObtainedCards } from "../../components/ObtainedCards";
import { DeckContext } from "../../context/DeckContext";
import useDeckCards from "../../hooks/useDeckCards";
import { getInitialCards } from "../../services/deckService";

export const Game: React.FC = () => {
  const {
    deckPlayerOne,
    deckPlayerTwo,
    setCards,
    setEndGame,
    setInitialCards,
    deleteCard,
  } = useDeckCards();
  const { deckState } = useContext(DeckContext);
  const navigate = useNavigate();

  //hook para vovler al menu inicial
  useEffect(() => {
    if (!deckPlayerOne.namePlayer || !deckPlayerTwo.namePlayer) {
      navigate("/");
    }
  }, []);

  //hook para obtener las primeras 10 cartas de cada jugador
  useEffect(() => {
    getInitialCards(deckState.deck.deck_id).then(({ cards }) => {
      setInitialCards(cards);
    });
  }, []);

  return (
    <>
      <Navbar
        setCardsRef={setCards}
        endGameRef={setEndGame}
        deckPlayerOneRef={deckPlayerOne}
        deckPlayerTwoRef={deckPlayerTwo}
      />

      <ObtainedCards
        deckPlayerOneRef={deckPlayerOne}
        deckPlayerTwoRef={deckPlayerTwo}
        deleteCard={deleteCard}
      />
    </>
  );
};
