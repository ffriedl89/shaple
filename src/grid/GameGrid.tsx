import { useSelector } from "../store/hooks/use-selector";
import { gameGridClass } from "./GameGrid.css";
import { Round } from "./Round";

export const GameGrid = () => {
  const result = useSelector((state) => state.result);
  return (
    <div className={gameGridClass}>
      <h2>Result</h2>
      <div>{JSON.stringify(result, null, 2)}</div>
      <Round round={0}></Round>
      <Round round={1}></Round>
      <Round round={2}></Round>
      <Round round={3}></Round>
      <Round round={4}></Round>
      <Round round={5}></Round>
    </div>
  );
};
