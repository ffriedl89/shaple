import { useMakePick } from "../../store/hooks/useMakePick";
import { useRemovePick } from "../../store/hooks/useRemovePick";
import { Ribbon as Circle } from "../shapes/Circle";
import { Poodle as Heart } from "../shapes/Heart";
import { Mouth as Hectagon } from "../shapes/Hectagon";
import { Hat as Rhombus } from "../shapes/Rhombus";
import { Dress as Square } from "../shapes/Square";
import { Diamond as Triangle } from "../shapes/Triangle";
import { Key } from "./Key";
import { keyboardClass } from "./Keyboard.css";
import { useRovingTabindex } from "use-roving-tabindex";

export const Keyboard = () => {
  const makePick = useMakePick();
  const removePick = useRemovePick();

  const [compositeRef] = useRovingTabindex();

  return (
    <div
      class={keyboardClass}
      role="toolbar"
      aria-label="Make your pick with one of the shapes"
      ref={compositeRef}
    >
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
