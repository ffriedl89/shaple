import { assignInlineVars } from "@vanilla-extract/dynamic";
import { JSX } from "preact";
import { Circle } from "../shapes/Circle";
import { Heart } from "../shapes/Heart";
import { Hectagon } from "../shapes/Hectagon";
import { Rhombus } from "../shapes/Rhombus";
import { Square } from "../shapes/Square";
import { Triangle } from "../shapes/Triangle";
import { PickStatus, Shape } from "../store/types";
import { variant } from "./Pick.css";

type PickProps = {
  pick: Shape;
  status: PickStatus;
  style: string | JSX.CSSProperties;
};

type ShapeProps = {
  pick: Shape;
};

const ShapeComp = (props: ShapeProps) => {
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
    <div class={variant[props.status]} style={props.style}>
      <ShapeComp pick={props.pick}></ShapeComp>
    </div>
  );
};
