import { FunctionalComponent } from "preact";
import { screenReaderOnlyClass } from "./ScreenReaderOnly.css";

export const ScreenReaderOnly: FunctionalComponent = ({ children }) => {
  return <span class={screenReaderOnlyClass}>{children}</span>;
};
