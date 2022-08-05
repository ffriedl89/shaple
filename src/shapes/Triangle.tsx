import { shapeClass } from "./shape.css";

export function Triangle() {
  return (
    <svg
      class={shapeClass}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M 0,100 L50,0 L100,100 z" />
    </svg>
  );
}
