import { JSX } from "preact";
import { ThemedCircle } from "../shapes/Circle";
import { ThemedHeart } from "../shapes/Heart";
import { ThemedHectagon } from "../shapes/Hectagon";
import { ThemedRhombus } from "../shapes/Rhombus";
import { ThemedSquare } from "../shapes/Square";
import { ThemedTriangle } from "../shapes/Triangle";
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
      return <ThemedSquare {...props} />;
    case "circle":
      return <ThemedCircle {...props} />;
    case "rhombus":
      return <ThemedRhombus {...props} />;
    case "triangle":
      return <ThemedTriangle {...props} />;
    case "hectagon":
      return <ThemedHectagon {...props} />;
    case "heart":
      return <ThemedHeart {...props} />;
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
