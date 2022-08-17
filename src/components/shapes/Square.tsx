import { FunctionalComponent } from "preact";
import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Square(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill={filled ? "currentColor" : undefined}
        stroke={!filled ? "currentColor" : undefined}
        width="100"
        height="100"
        strokeWidth="4"
      />
    </svg>
  );
}
