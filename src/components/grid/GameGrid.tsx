import { useRef } from "preact/hooks";
import { gameGridClass } from "./GameGrid.css";
import { Round } from "./Round";
import { useConfig } from "../../store/hooks/useConfig";

export const GameGrid = () => {
  const config = useConfig();
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div className={gameGridClass} ref={gridRef}>
      {Array.from(Array(config.gameLength)).map((_, index) => (
        <Round round={index}></Round>
      ))}
    </div>
  );
};
