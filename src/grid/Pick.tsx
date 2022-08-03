import { Circle } from "../shapes/Circle";
import { Heart } from "../shapes/Heart";
import { Hectagon } from "../shapes/Hectagon";
import { Rhombus } from "../shapes/Rhombus";
import { Square } from "../shapes/Square";
import { Triangle } from "../shapes/Triangle";
import { Shape } from "../store/types";
import { pickClass } from "./Pick.css";

type PickProps = {
  pick: Shape;
};

const ShapeComp = (props: PickProps) => {
  switch (props.pick) {
    case "square":
      return <Square />;
    case "circle":
      return <Circle />;
    case "rhombus":
      return <Rhombus />;
    case "triangle":
      return <Triangle />;
    case "hectagon":
      return <Hectagon />;
    case "heart":
      return <Heart />;
    default:
      return null;
  }
};

export const Pick = (props: PickProps) => {
  return (
    <div class={pickClass}>
      <ShapeComp pick={props.pick}></ShapeComp>
    </div>
  );
};
