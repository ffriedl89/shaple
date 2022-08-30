import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { tabClass } from "./Tab.css";
import { useTabContext } from "./TabsProvider";

type TabProps = {
  id: string;
  autofocus?: boolean;
};

export const Tab: FunctionalComponent<TabProps> = (props) => {
  const { id, children, autofocus } = props;
  const ref = useRef<HTMLButtonElement>(null);

  const { onTabFocus } = useTabContext();

  const contentId = `${id}-content`;

  useEffect(() => {
    if (autofocus && ref.current) {
      ref.current.focus();
    }
  }, [autofocus]);

  function handleFocus() {
    onTabFocus(id);
  }

  return (
    <button
      ref={ref}
      class={tabClass}
      aria-selected="true"
      aria-controls={contentId}
      id={id}
      onFocus={handleFocus}
    >
      {children}
    </button>
  );
};
