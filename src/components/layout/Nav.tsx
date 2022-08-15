import { Link } from "preact-router";
import { button } from "../../styles/button.css";
import { navClass } from "./Header.css";

export const Nav = () => {
  return (
    <nav class={navClass}>
      <Link
        href="/intro"
        class={button({ variant: "secondary", disabled: true })}
      >
        Intro
      </Link>
      <Link
        href="/stats"
        class={button({ variant: "secondary", disabled: true })}
      >
        Stats
      </Link>
    </nav>
  );
};
