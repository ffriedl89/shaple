import JSX = preact.JSX;

// extending the shipped JSX types with a onClose callback for the native HTMLDialogElement
namespace JSX {
  export interface IntrinsicElements extends preact.JSX.IntrinsicElements {
    dialog: JSX.HTMLAttributes<HTMLDialogElement> & {
      onClose: JSX.GenericEventHandler<EventTarget>;
    };
  }
}
