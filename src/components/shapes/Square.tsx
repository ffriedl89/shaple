import { useTheme } from "../../store/hooks/useTheme";
import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Dress(props: TShapeProps) {
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M36,24.6438L29.4165,16V4h-5.5052v12c0,6.0279,4.0037,19.9583,4.0037,19.9583L16,67.9792h20h20L44.0849,35.9583 c0,0,4.0037-13.9304,4.0037-19.9583V4h-5.5052v12L36,24.6438z"
      />
      <line
        x1="31.6821"
        x2="40.3264"
        y1="35.9583"
        y2="35.9583"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </svg>
  );
}

// Halloween edition ghost
function Ghost(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={filled ? "currentColor" : "transparent"}
        d="M12 2c3.5 0 6 3 7 6 3 1 4 3.73 4 6l-2.775.793a1 1 0 0 0-.725.961v1.496A1.75 1.75 0 0 1 17.75 19h-.596a2 2 0 0 0-1.668.896C14.558 21.3 13.396 22 12 22c-1.396 0-2.558-.701-3.486-2.104A2 2 0 0 0 6.846 19H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.496a1 1 0 0 0-.725-.961L1 14c0-2.266 1-5 4-6 1-3 3.5-6 7-6zm0 10c-.828 0-1.5 1.12-1.5 2.5S11.172 17 12 17s1.5-1.12 1.5-2.5S12.828 12 12 12zM9.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
      ></path>
    </svg>
  );
}

function Square(props: TShapeProps) {
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

export function ThemedSquare(props: TShapeProps) {
  const theme = useTheme();

  switch (theme) {
    case "original":
      return <Square {...props} />;
    case "halloween":
      return <Ghost {...props} />;
    case "barbie":
      return <Dress {...props} />;
  }
}
