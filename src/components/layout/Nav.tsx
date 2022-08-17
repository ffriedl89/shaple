import { Link } from "preact-router";
import { button } from "../../styles/button.css";
import { navClass } from "./Header.css";

export const Nav = () => {
  return (
    <nav class={navClass}>
      <Link href="/home/intro" class={button({ variant: "secondary" })}>
        Intro
      </Link>
    </nav>
  );
};
