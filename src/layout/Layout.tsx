import { FunctionalComponent } from "preact";
import { layoutClass } from "./Layout.css";

export const Layout: FunctionalComponent = ({ children }) => {
  return <div class={layoutClass}>{children}</div>;
};
