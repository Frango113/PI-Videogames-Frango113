import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./cards.module.css";

const CardsContainer = () => {
  const videoGames = useSelector((state) => state.videoGames);
  return (
    <div className={style.CardsContainer}>
      {videoGames.map((game) => (
        <Card
          id={game.id}
          key={game.id}
          name={game.name}
          platforms={game.platforms}
          genres={game.genres}
          image={game.image}
          released={game.released}
          rating={game.rating}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
