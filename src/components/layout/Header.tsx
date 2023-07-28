import { FunctionalComponent } from "preact";
import { headerClass } from "./Header.css";

export const Header: FunctionalComponent = ({ children }) => {
  return <header class={headerClass}>{children}</header>;
};
