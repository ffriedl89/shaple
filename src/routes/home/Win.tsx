import { differenceInMilliseconds, parseISO } from "date-fns";
import { route } from "preact-router";
import { Dialog } from "../../components/dialogs/Dialog";
import { GameDuration } from "../../components/result/GameDuration";
import { Redirect } from "../../components/routing/Redirect";
import { CopyButton } from "../../components/share/CopyButton";
import { TwitterShareButton } from "../../components/share/TwitterShareButton";
import { useGameState } from "../../store/hooks/useGameState";
import { useSelector } from "../../store/hooks/useSelector";
import { button } from "../../styles/button.css";
import { heading } from "../../styles/heading.css";
import { winDialogFormClass, sharingContainerClass } from "./Win.css";

type WinProps = {
  path: string;
};

export const Win = (props: WinProps) => {
  const gameState = useGameState();
  const { start, end } = useSelector((state) => state.try);
  let duration = "";
  if (start && end) {
    duration = differenceInMilliseconds(
      parseISO(end),
      parseISO(start)
    ).toString();
  }
  return gameState === "finished" ? (
    <Dialog open={true} onClose={() => route("/home")}>
      <div class={winDialogFormClass}>
        <p class={heading({ level: 1 })}>Congratz!</p>
        <p class={heading({ level: 2 })}>You have completed today's game!</p>
        <p>
          <GameDuration duration={duration} />
        </p>
        <div class={sharingContainerClass}>
          <TwitterShareButton />
          <CopyButton />
        </div>
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
