import { shapeClass } from "./shape.css";

export function Square() {
  return (
    <svg
      class={shapeClass}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" />
    </svg>
  );
}
