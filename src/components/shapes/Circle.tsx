import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Circle(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="50"
        cy="50"
        rx="50"
        ry="50"
        fill={filled ? "currentColor" : undefined}
        stroke={!filled ? "currentColor" : undefined}
        strokeWidth="4"
      />
    </svg>
  );
}
