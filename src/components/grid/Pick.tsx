import { JSX } from "preact";
import { Ribbon as Circle } from "../shapes/Circle";
import { Poodle as Heart } from "../shapes/Heart";
import { Mouth as Hectagon } from "../shapes/Hectagon";
import { Hat as Rhombus } from "../shapes/Rhombus";
import { Dress as Square } from "../shapes/Square";
import { Diamond as Triangle } from "../shapes/Triangle";
import { PickStatus, Shape } from "../../store/types";
import { pickShapeClass, variant } from "./Pick.css";

type PickProps = {
  pick: Shape;
  status: PickStatus;
  style: string | JSX.CSSProperties;
};

type ShapeProps = {
  pick: Shape;
  class?: string;
};

const ShapeComp = (props: ShapeProps) => {
  switch (props.pick) {
    case "square":
      return <Square {...props} />;
    case "circle":
      return <Circle {...props} />;
    case "rhombus":
      return <Rhombus {...props} />;
    case "triangle":
      return <Triangle {...props} />;
    case "hectagon":
      return <Hectagon {...props} />;
    case "heart":
      return <Heart {...props} />;
    default:
      return null;
  }
};

export const Pick = (props: PickProps) => {
  return (
    <div class={variant[props.status]} style={props.style}>
      <ShapeComp class={pickShapeClass} pick={props.pick}></ShapeComp>
    </div>
  );
};
