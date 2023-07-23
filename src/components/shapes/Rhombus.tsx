import { shapeClass } from "./shape.css";
import { TShapeProps } from "./types";

export function Hat(props: TShapeProps) {
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
        stroke-width="2"
        d="M40.804,40.4862c-1.5373,.0325-2.8099-1.1873-2.8425-2.7247s1.1873-2.8099,2.7247-2.8425c3.775-.0799,5.1354,3.8004,5.168,5.3377l-5.0502,.2294h0Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M50.7844,39.881c1.5287-.166,2.6334-1.5397,2.4674-3.0684s-1.5397-2.6334-3.0684-2.4674c-3.7538,.4075-4.6025,4.4309-4.4366,5.9595l5.0376-.4237Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M22.861,34.8822c-7.9436,1.0862-13.2916,3.1227-13.2916,5.4558,0,3.4745,11.8602,6.2911,26.4906,6.2911s26.4906-2.8166,26.4906-6.2911c0-1.4884-2.1764-2.8561-5.8147-3.9333"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M44.3146,36.5258c.5046-.0299,.9767-.0607,1.4129-.0913,.3976-.0279,.7654-.0556,1.101-.0822"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M49.179,34.3287c-.557-5.6525-3.1401-13.5768-13.254-13.5223-15.71,.0846-12.93,19.082-12.93,19.082,0,0,5.5237,.7667,13.065,.7667,4.0714,0,7.7174-.2067,9.6869-.3503"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M22.995,36.1368s5.5237,.6344,13.065,.6344c.7052,0,1.3933-.0055,2.0611-.0156"
      />
    </svg>
  );
}
// Halloween edition - Skull
// export function Rhombus(props: TShapeProps) {
//   const { filled = true } = props;
//   return (
//     <svg
//       class={`${shapeClass} ${props.class}`}
//       viewBox="0 0 512 512"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fill={filled ? "currentColor" : undefined}
//         d="M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0 0 48 224v100.67A79.62 79.62 0 0 0 98.29 399l23.71 9.42a15.92 15.92 0 0 1 9.75 11.72l10 50.13A32.09 32.09 0 0 0 173.12 496H184a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 448v40a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 448v40a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 320 448v40a8 8 0 0 0 8 8h10.88a32.09 32.09 0 0 0 31.38-25.72l10-50.14a16 16 0 0 1 9.74-11.72l23.71-9.42A79.62 79.62 0 0 0 464 324.67v-99c0-56-22-108.81-62-148.73zM171.66 335.88a56 56 0 1 1 52.22-52.22 56 56 0 0 1-52.22 52.22zM281 397.25a16.37 16.37 0 0 1-9.3 2.75h-31.4a16.37 16.37 0 0 1-9.28-2.75 16 16 0 0 1-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 0 1-6.61 16.9zm66.68-61.37a56 56 0 1 1 52.22-52.22 56 56 0 0 1-52.24 52.22z"
//       ></path>
//     </svg>
//   );
// }

// <path
//         fill={filled ? "currentColor" : undefined}
//         stroke={!filled ? "currentColor" : undefined}
//         d="M 0,50 L25,0 L50,50 L25,100 z"
//         strokeWidth="4"
//       />
