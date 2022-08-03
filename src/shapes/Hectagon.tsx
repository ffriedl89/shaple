import { shapeClass } from "./shape.css";

export function Hectagon() {
  return (
    <svg
      class={shapeClass}
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 0,45 L25,0 L75,0 L100,45 L75,90 L25,90 z" />
    </svg>
  );
}
