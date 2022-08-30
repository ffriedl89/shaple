import { differenceInMilliseconds, parseISO } from "date-fns";
import { route } from "preact-router";
import { ScreenReaderOnly } from "../../components/a11y/ScreenReaderOnly";
import { Dialog } from "../../components/dialogs/Dialog";
import { GameDuration } from "../../components/result/GameDuration";
import { Redirect } from "../../components/routing/Redirect";
import { CopyButton } from "../../components/share/CopyButton";
import { TwitterShareButton } from "../../components/share/TwitterShareButton";
import Tabs from "../../components/tabs";
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
  return gameState === "won" ? (
    <Dialog open={true} onClose={() => route("/home")}>
      <div class={winDialogFormClass}>
        <p class={heading({ level: 1 })}>Congratz!</p>
        <p>You completed today's game</p>
        <p>
          <GameDuration duration={duration} />
        </p>
        {/* <p id="personal-records">Personal records</p>
        <Tabs.Root labelledby="personal-records">
          <Tabs.TabList>
            <Tabs.Tab autofocus id="current-streak">
              Current streak
            </Tabs.Tab>
            <Tabs.Tab id="fastest-game">Fastest game</Tabs.Tab>
            <Tabs.Tab id="longest-streak">Longest streak</Tabs.Tab>
            <Tabs.Tab id="stats">Stats</Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabContent id="current-streak">
            Your current streak
          </Tabs.TabContent>
          <Tabs.TabContent id="fastest-game">Your fastest game</Tabs.TabContent>
          <Tabs.TabContent id="longest-streak">
            Your longest streak
          </Tabs.TabContent>
          <Tabs.TabContent id="stats">Your stats</Tabs.TabContent>
        </Tabs.Root> */}
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
