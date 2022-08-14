import clsx from "clsx";
import { useEffect, useRef } from "preact/hooks";
import { RemainingTime } from "../game/RemainingTime";
import { useRemainingTime } from "../store/hooks/use-remaining-time";
import { heading1Class, heading2Class } from "../util/heading.css";
import { TwitterShareButton } from "./TwitterShareButton";
import {
  buttonVariant,
  winDialogClass,
  winDialogContentClass,
  winDialogFormClass,
  winDialogVariant,
} from "./WinDialog.css";

type WinDialogProps = {
  open: boolean;
  onOpenChange?: (shouldOpen: boolean) => void;
};

export const WinDialog = (props: WinDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.open = props.open;
    }
  }, [props.open]);

  return (
    <dialog
      class={winDialogVariant[props.open ? "open" : "closed"]}
      id="winDialog"
      ref={dialogRef}
      onClose={() => {
        props.onOpenChange?.(false);
        console.log("onClose");
      }}
    >
      <div class={winDialogContentClass}>
        <form method="dialog" class={winDialogFormClass}>
          <p class={heading1Class}>Congratulations!</p>
          <p class={heading2Class}>You have completed today's game!</p>
          <p>
            A new game will be available in:
            <br />
            <RemainingTime />
          </p>
          <TwitterShareButton />
          <div>
            <button
              class={buttonVariant.secondary}
              id="confirmBtn"
              value="default"
            >
              Got it!
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
