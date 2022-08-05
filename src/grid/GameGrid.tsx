import { useConfig } from "../store/hooks/selectors";
import { useSelector } from "../store/hooks/use-selector";
import { gameGridClass } from "./GameGrid.css";
import { Round } from "./Round";

export const GameGrid = () => {
  const config = useConfig();

  return (
    <div className={gameGridClass}>
      {Array.from(Array(config.gameLength)).map((_, index) => (
        <Round round={index}></Round>
      ))}
    </div>
  );
};
