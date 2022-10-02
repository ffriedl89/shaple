import { Link } from "preact-router";
import { heading } from "../../styles/heading.css";
import { ScreenReaderOnly } from "../a11y/ScreenReaderOnly";
import { Triangle } from "../shapes/Triangle";
import { logoHalloweenClass, logoTextClass } from "./Logo.css";

export const Logo = () => {
  return (
    <Link href="/" class={logoTextClass}>
      <h1 class={heading({ level: 3 })}>
        Sh
        <Triangle class={logoHalloweenClass} aria-hidden="true" />
        <ScreenReaderOnly>a</ScreenReaderOnly>
        ple
      </h1>
    </Link>
  );
};
