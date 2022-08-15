import { FunctionalComponent } from "preact";
import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Square(props: TShapeProps) {
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="currentColor" width="100" height="100" />
    </svg>
  );
}
