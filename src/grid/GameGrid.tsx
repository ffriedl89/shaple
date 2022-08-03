import { gameGridClass } from "./GameGrid.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Round } from "./Round";

export const GameGrid = () => {
  return (
    <div className={gameGridClass}>
      <Round round={0}></Round>
      <Round round={1}></Round>
      <Round round={2}></Round>
      <Round round={3}></Round>
      <Round round={4}></Round>
      <Round round={5}></Round>
    </div>
  );
};
