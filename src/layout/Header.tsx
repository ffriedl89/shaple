import { FunctionalComponent } from "preact";
import { logoTextClass, logoTriangleClass } from "./Header.css";

export const Header: FunctionalComponent = () => {
  return (
    <h1 class={logoTextClass}>
      Sh<span class={logoTriangleClass}>&#9650;</span>ple
    </h1>
  );
};
