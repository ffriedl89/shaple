import { button } from "../../styles/button.css";
import clsx from "clsx";
import { themeSwitcherToggleButtonClass } from "./Header.css";
import { useState } from "preact/hooks";

export const ThemeSwitcherToggleButton = () => {
  const [checked, setChecked] = useState<boolean>(false);

  function toggleCheckbox() {
    setChecked((prev) => !prev);
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  function onKeyup(event: KeyboardEvent) {
    let flag = false;

    switch (event.key) {
      case " ":
        toggleCheckbox();
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
    }
  }

  function onClick() {
    toggleCheckbox();
  }

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={onClick}
      onKeyUp={onKeyup}
      onKeyDown={onKeyDown}
      class={clsx(
        themeSwitcherToggleButtonClass,
        button({ variant: "secondary" })
      )}
    >
      Theme
    </div>
  );
};
