import { useTheme } from "../../store/hooks/useTheme";
import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

function Poodle(props: TShapeProps) {
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        points="49.447 51.455 45.237 41.911 41.373 41.389"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M59.02,19.8207c.3977-5.3988-4.4057-4.9472-5.8823-4.9019,0,0-3.9216,0-3.9216,3.9215s3.9216,4.902,3.9216,4.902c0,5.8824-3.9216,7.8431-3.9216,7.8431.2419.0071-7.9453-1.9351-11.7647-.98L34.51,24.7227c0,.98-.98-4.902-.98-4.902-1.9608-10.7843-8.8235-8.8235-8.8235-8.8235-5.8824,0-6.8628,6.8628-6.8628,6.8628L10,18.84l.98,3.9216,7.8431.98C13.9216,34.5266,16.49,44.9,25.6863,46.2913c0,0,7.8431,1.9608,11.7647-3.9215a11.8954,11.8954,0,0,0,.98-4.902"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M24.7059,18.84c-.2975.7806-3.92,19.4774,7.8431,9.804"
      />
      <line
        x1="52.9612"
        x2="52.1569"
        y1="50.5129"
        y2="38.4482"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M31.5686,54.1345c0,1.6243-1.7557,2.9411-3.9215,2.9411s-3.9216-1.3168-3.9216-2.9411a3.0663,3.0663,0,0,1,2.3951-2.71,5.0572,5.0572,0,0,1,1.5265-.2311C29.8129,51.1933,31.5686,52.51,31.5686,54.1345Z"
      />
      <line
        x1="29.5451"
        x2="29.6078"
        y1="51.1933"
        y2="47.2717"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <line
        x1="25.6863"
        x2="24.7059"
        y1="51.1933"
        y2="46.2913"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M24.986,57.0756c-1.0981.2352-2.2409.9422-2.2409,1.9608v1.9608h7.8431V56.7837"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M49.4958,57.0756c-1.0981.2352-2.2409.9422-2.2409,1.9608v1.9608H55.098V56.7837"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M56.0784,54.1345c0,1.6243-1.7557,2.9411-3.9215,2.9411s-3.9216-1.3168-3.9216-2.9411a3.0663,3.0663,0,0,1,2.3951-2.71,5.0572,5.0572,0,0,1,1.5265-.2311,5.2219,5.2219,0,0,1,.79.06C54.7342,51.5273,56.0784,52.7131,56.0784,54.1345Z"
      />
    </svg>
  );
}

// Halloween edition - bat
function Bat(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="rotate(33 256 256) scale(1.3) translate(-50)"
        fill={filled ? "currentColor" : undefined}
        xmlns="http://www.w3.org/2000/svg"
        d="M362.005 149.115s-7 55.77-79 83.36v-24.69c-2.76-1-4.63 7.88-7.26 9.15h-39.49c-2.63-1.27-4.5-10.11-7.26-9.15v24.69c-72-27.59-79-83.36-79-83.36-60.71 67.68-121.41 80-121.41 80 102.53-16.11 101.36 44.89 101.36 44.89 69.71-11.91 65.64 36.31 65.64 36.31 60.63-6.9 60.41 52.57 60.41 52.57s-.22-59.47 60.41-52.57c0 0-4.07-48.22 65.64-36.31 0 0-1.16-61 101.37-44.88.02.01-60.69-12.33-121.41-80.01z"
      ></path>
    </svg>
  );
}

function Heart(props: TShapeProps) {
  const { filled = true } = props;
  return (
    <svg
      class={`${shapeClass} ${props.class}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={filled ? "currentColor" : undefined}
        stroke={!filled ? "currentColor" : undefined}
        strokeWidth="4"
        d="M 10,30
   A 20,20 0,0,1 50,30
   A 20,20 0,0,1 90,30
   Q 90,60 50,90
   Q 10,60 10,30 z"
      />
    </svg>
  );
}

export function ThemedHeart(props: TShapeProps) {
  const theme = useTheme();

  switch (theme) {
    case "original":
      return <Heart {...props} />;
    case "halloween":
      return <Bat {...props} />;
    case "barbie":
      return <Poodle {...props} />;
  }
}
