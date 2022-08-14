import { Circle } from "../shapes/Circle";
import { Heart } from "../shapes/Heart";
import { Hectagon } from "../shapes/Hectagon";
import { Rhombus } from "../shapes/Rhombus";
import { Square } from "../shapes/Square";
import { Triangle } from "../shapes/Triangle";
import { useMakePick, useRemovePick } from "../store/hooks/selectors";
import { Key } from "./Key";
import { keyboardClass } from "./Keyboard.css";

export const Keyboard = () => {
  const makePick = useMakePick();
  const removePick = useRemovePick();

  return (
    <div class={keyboardClass}>
      <Key aria-label="Pick square" onClick={() => makePick("square")}>
        <Square />
      </Key>
      <Key aria-label="Pick circle" onClick={() => makePick("circle")}>
        <Circle />
      </Key>
      <Key aria-label="Pick rhombus" onClick={() => makePick("rhombus")}>
        <Rhombus />
      </Key>
      <Key aria-label="Pick triangle" onClick={() => makePick("triangle")}>
        <Triangle />
      </Key>
      <Key aria-label="Pick hectagon" onClick={() => makePick("hectagon")}>
        <Hectagon />
      </Key>
      <Key aria-label="Pick heart" onClick={() => makePick("heart")}>
        <Heart />
      </Key>
      <Key aria-label="Remove last pick" onClick={() => removePick()}>
        &#x232b;
      </Key>
    </div>
  );
};
