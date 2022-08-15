import { FunctionalComponent } from "preact";
import { Link } from "preact-router";
import { heading } from "../../styles/heading.css";
import { headerClass, logoTextClass, logoTriangleClass } from "./Header.css";

export const Header: FunctionalComponent = ({ children }) => {
  return (
    <header class={headerClass}>
      <Link href="/" class={logoTextClass}>
        <h1 class={heading({ level: 3 })}>
          Sh<span class={logoTriangleClass}>&#9650;</span>ple
        </h1>
      </Link>
      {children}
    </header>
  );
};
