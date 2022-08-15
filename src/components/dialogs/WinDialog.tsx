import { button } from "../../styles/button.css";
import { heading } from "../../styles/heading.css";
import { RemainingTime } from "../RemainingTime";
import { CopyButton } from "../share/CopyButton";
import { TwitterShareButton } from "../share/TwitterShareButton";
import { Dialog } from "./Dialog";
import { sharingContainerClass, winDialogFormClass } from "./WinDialog.css";

type WinDialogProps = {
  open: boolean;
  onOpenChange?: (shouldOpen: boolean) => void;
};

export const WinDialog = (props: WinDialogProps) => {
  return (
    <Dialog
      open={props.open}
      onClose={() => {
        props.onOpenChange?.(false);
      }}
    >
      <form method="dialog" class={winDialogFormClass}>
        <p class={heading({ level: 1 })}>Congratulations!</p>
        <p class={heading({ level: 2 })}>You have completed today's game!</p>
        <p>
          A new game will be available in:
          <br />
          <RemainingTime />
        </p>
        <div class={sharingContainerClass}>
          <TwitterShareButton />
          <CopyButton />
        </div>
        <div>
          <button
            class={button({ element: "inline", variant: "secondary" })}
            id="confirmBtn"
            value="default"
          >
            Close
          </button>
        </div>
      </form>
    </Dialog>
  );
};
