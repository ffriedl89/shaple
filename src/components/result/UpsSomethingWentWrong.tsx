import { Link } from "preact-router";
import { button } from "../../styles/button.css";
import { heading } from "../../styles/heading.css";
import { upsClass } from "./UpsSomethingWentWrong.css";

export const UpsSomethingWentWrong = () => {
  return (
    <div class={upsClass}>
      <p class={heading({ level: 2 })}>Ups something went wrong!</p>
      <p>
        <Link
          class={button({ variant: "primary", element: "inline" })}
          href="/"
        >
          Play!
        </Link>
      </p>
    </div>
  );
};
