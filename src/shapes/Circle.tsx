import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Circle(props: TShapeProps) {
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="50" rx="50" ry="50" fill="currentColor" />
    </svg>
  );
}
