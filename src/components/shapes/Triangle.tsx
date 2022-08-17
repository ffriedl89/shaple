import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Triangle(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={filled ? "currentColor" : "transparent"}
        stroke={!filled ? "currentColor" : undefined}
        strokeWidth="4"
        d="M 0,100 L50,0 L100,100 z"
      />
    </svg>
  );
}
