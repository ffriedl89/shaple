import { Circle } from "../shapes/Circle";
import { Heart } from "../shapes/Heart";
import { Hectagon } from "../shapes/Hectagon";
import { Rhombus } from "../shapes/Rhombus";
import { Square } from "../shapes/Square";
import { Triangle } from "../shapes/Triangle";
import { useMakePick } from "../store/hooks/game-logic";

export const Keyboard = () => {
  const makePick = useMakePick();

  return (
    <div>
      <button aria-label="Pick square" onClick={() => makePick("square")}>
        <Square />
      </button>
      <button aria-label="Pick circle" onClick={() => makePick("circle")}>
        <Circle />
      </button>
      <button aria-label="Pick rhombus" onClick={() => makePick("rhombus")}>
        <Rhombus />
      </button>
      <button aria-label="Pick triangle" onClick={() => makePick("triangle")}>
        <Triangle />
      </button>
      <button aria-label="Pick hectagon" onClick={() => makePick("hectagon")}>
        <Hectagon />
      </button>
      <button aria-label="Pick heart" onClick={() => makePick("heart")}>
        <Heart />
      </button>
    </div>
  );
};
