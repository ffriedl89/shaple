import JSX = preact.JSX;

namespace JSX {
  export interface IntrinsicElements extends preact.JSX.IntrinsicElements {
    dialog: JSX.HTMLAttributes<HTMLDialogElement> & {
      onClose: JSX.GenericEventHandler<EventTarget>;
    };
  }
}
