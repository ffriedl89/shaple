import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { dialog, dialogContentClass } from "./Dialog.css";

type DialogProps = {
  open?: boolean;
  onClose?: () => void;
};

export const Dialog: FunctionalComponent<DialogProps> = (props) => {
  const { children, open = false, onClose } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.open = open;

      if (open) {
        const focusTarget = dialogRef.current.querySelector(
          "[autofocus]"
        ) as HTMLElement;
        focusTarget
          ? focusTarget.focus()
          : dialogRef.current.querySelector("button")?.focus();
      }
    }
  }, [props.open]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <dialog
      class={dialog({ open })}
      ref={dialogRef}
      onClose={() => onClose?.()}
    >
      <form method="dialog" class={dialogContentClass}>
        {children}
      </form>
    </dialog>
  );
};
