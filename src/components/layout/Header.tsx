import { FunctionalComponent } from "preact";
import { headerClass } from "./Header.css";
import { Logo } from "./Logo";

export const Header: FunctionalComponent = ({ children }) => {
  return (
    <header class={headerClass}>
      <Logo />
      {children}
    </header>
  );
};
