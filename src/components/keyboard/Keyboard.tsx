import { useMakePick } from "../../store/hooks/useMakePick";
import { useRemovePick } from "../../store/hooks/useRemovePick";
import { ThemedCircle } from "../shapes/Circle";
import { ThemedHeart } from "../shapes/Heart";
import { ThemedHectagon } from "../shapes/Hectagon";
import { ThemedRhombus } from "../shapes/Rhombus";
import { ThemedSquare } from "../shapes/Square";
import { ThemedTriangle } from "../shapes/Triangle";
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
        <ThemedSquare />
      </Key>
      <Key aria-label="Pick circle" onClick={() => makePick("circle")}>
        <ThemedCircle />
      </Key>
      <Key aria-label="Pick rhombus" onClick={() => makePick("rhombus")}>
        <ThemedRhombus />
      </Key>
      <Key aria-label="Pick triangle" onClick={() => makePick("triangle")}>
        <ThemedTriangle />
      </Key>
      <Key aria-label="Pick hectagon" onClick={() => makePick("hectagon")}>
        <ThemedHectagon />
      </Key>
      <Key aria-label="Pick heart" onClick={() => makePick("heart")}>
        <ThemedHeart />
      </Key>
      <Key aria-label="Remove last pick" onClick={() => removePick()}>
        Del
      </Key>
    </div>
  );
};
