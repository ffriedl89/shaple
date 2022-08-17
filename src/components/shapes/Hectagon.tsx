import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Hectagon(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={filled ? "currentColor" : undefined}
        stroke={!filled ? "currentColor" : undefined}
        d="M 0,45 L25,0 L75,0 L100,45 L75,90 L25,90 z"
        strokeWidth="4"
      />
    </svg>
  );
}
