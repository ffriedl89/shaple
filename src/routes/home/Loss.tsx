import { differenceInMilliseconds, parseISO } from "date-fns";
import { route } from "preact-router";
import { Dialog } from "../../components/dialogs/Dialog";
import { RemainingTime } from "../../components/RemainingTime";
import { GameDuration } from "../../components/result/GameDuration";
import { Redirect } from "../../components/routing/Redirect";
import { CopyButton } from "../../components/share/CopyButton";
import { TwitterShareButton } from "../../components/share/TwitterShareButton";
import { useGameState } from "../../store/hooks/useGameState";
import { useSelector } from "../../store/hooks/useSelector";
import { button } from "../../styles/button.css";
import { heading } from "../../styles/heading.css";
import { lossDialogFormClass } from "./Loss.css";

type LossProps = {
  path: string;
};

export const Loss = (props: LossProps) => {
  const gameState = useGameState();
  return gameState === "lost" ? (
    <Dialog open={true} onClose={() => route("/home")}>
      <div class={lossDialogFormClass}>
        <p class={heading({ level: 1 })}>Oops!</p>
        <p class={heading({ level: 2 })}>
          You didn't win today, but you can try again in:
        </p>
        <p>
          <RemainingTime />
        </p>
        <div>
          <button
            autofocus
            class={button({ element: "inline", variant: "secondary" })}
            id="confirmBtn"
            value="default"
          >
            Close
          </button>
        </div>
      </div>
    </Dialog>
  ) : (
    <Redirect to="/home" />
  );
};
