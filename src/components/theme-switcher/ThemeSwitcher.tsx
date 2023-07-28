import { useRovingTabindex } from "use-roving-tabindex";
import { useSetState } from "../../store/hooks/useSetState";
import { Theme } from "../../store/types";
import { themeButton, themeSwitcherCss } from "./ThemeSwitcher.css";
import { Triangle } from "../shapes/Triangle";
import { SpidyWeb } from "../shapes/Hectagon";
import { Dress } from "../shapes/Square";

export const ThemeSwitcher = () => {
  const [compositeRef] = useRovingTabindex({ selector: ":scope > button" });
  const setState = useSetState();

  function selectTheme(theme: Theme) {
    setState((prev) => ({ ...prev, theme }));

    document.body.dataset.theme = theme;
  }

  return (
    <div
      role="toolbar"
      aria-label="Switch themes"
      ref={compositeRef}
      class={themeSwitcherCss}
    >
      <button
        class={themeButton({ theme: "original" })}
        role="radio"
        onClick={() => selectTheme("original")}
      >
        <span>
          <Triangle />
        </span>
        <span>Original</span>
      </button>
      <button
        class={themeButton({ theme: "halloween" })}
        role="radio"
        onClick={() => selectTheme("halloween")}
      >
        <span>
          <SpidyWeb />
        </span>
        <span>Halloween</span>
      </button>
      <button
        class={themeButton({ theme: "barbie" })}
        role="radio"
        onClick={() => selectTheme("barbie")}
      >
        <span>
          <Dress />
        </span>
        <span>Barbie</span>
      </button>
    </div>
  );
};
