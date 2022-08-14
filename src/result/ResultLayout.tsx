import { FunctionalComponent } from "preact";
import { resultLayoutClass } from "./ResultLayout.css";

export const ResultLayout: FunctionalComponent = ({ children }) => {
  return <div class={resultLayoutClass}>{children}</div>;
};
