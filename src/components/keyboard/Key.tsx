import type { FunctionComponent } from "preact";
import { useGameState } from "../../store/hooks/useGameState";
import { keyClass } from "./Key.css";

type KeyProps = {
  onClick: (e: MouseEvent) => void;
  "aria-label": string;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { children, onClick, "aria-label": ariaLabel } = props;

  const gameState = useGameState();
  const disabled = gameState === "finished";

  return (
    <button
      class={keyClass}
      aria-label={ariaLabel}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};