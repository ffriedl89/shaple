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
    }
  }, [props.open]);

  return (
    <dialog class={dialog({ open })} ref={dialogRef} onClose={onClose}>
      <div class={dialogContentClass}>{children}</div>
    </dialog>
  );
};
