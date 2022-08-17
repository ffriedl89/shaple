import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Rhombus(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 50 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={filled ? "currentColor" : undefined}
        stroke={!filled ? "currentColor" : undefined}
        d="M 0,50 L25,0 L50,50 L25,100 z"
        strokeWidth="4"
      />
    </svg>
  );
}
