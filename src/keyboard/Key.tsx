import type { FunctionComponent } from "preact";
import { keyClass } from "./Key.css";

type KeyProps = {
  onClick: (e: MouseEvent) => void;
  "aria-label": string;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { children, onClick, "aria-label": ariaLabel } = props;
  return (
    <button class={keyClass} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
};
