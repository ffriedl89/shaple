import { Link } from "preact-router";
import { buttonVariant } from "../dialogs/WinDialog.css";
import { heading2Class } from "../util/heading.css";
import { upsClass } from "./UpsSomethingWentWrong.css";

export const UpsSomethingWentWrong = () => {
  return (
    <div class={upsClass}>
      <p class={heading2Class}>Ups something went wrong!</p>
      <p>
        <Link class={buttonVariant.primary} href="/">
          Play!
        </Link>
      </p>
    </div>
  );
};
