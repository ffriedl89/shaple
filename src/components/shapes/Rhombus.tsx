import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Rhombus(props: TShapeProps) {
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 50 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M 0,50 L25,0 L50,50 L25,100 z" />
    </svg>
  );
}
