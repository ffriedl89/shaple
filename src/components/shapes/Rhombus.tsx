import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

// Halloween edition - Skull
export function Rhombus(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={filled ? "currentColor" : undefined}
        d="M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0 0 48 224v100.67A79.62 79.62 0 0 0 98.29 399l23.71 9.42a15.92 15.92 0 0 1 9.75 11.72l10 50.13A32.09 32.09 0 0 0 173.12 496H184a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 448v40a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 448v40a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 320 448v40a8 8 0 0 0 8 8h10.88a32.09 32.09 0 0 0 31.38-25.72l10-50.14a16 16 0 0 1 9.74-11.72l23.71-9.42A79.62 79.62 0 0 0 464 324.67v-99c0-56-22-108.81-62-148.73zM171.66 335.88a56 56 0 1 1 52.22-52.22 56 56 0 0 1-52.22 52.22zM281 397.25a16.37 16.37 0 0 1-9.3 2.75h-31.4a16.37 16.37 0 0 1-9.28-2.75 16 16 0 0 1-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 0 1-6.61 16.9zm66.68-61.37a56 56 0 1 1 52.22-52.22 56 56 0 0 1-52.24 52.22z"
      ></path>
    </svg>
  );
}

// <path
//         fill={filled ? "currentColor" : undefined}
//         stroke={!filled ? "currentColor" : undefined}
//         d="M 0,50 L25,0 L50,50 L25,100 z"
//         strokeWidth="4"
//       />
