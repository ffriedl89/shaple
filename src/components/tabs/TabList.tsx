import { FunctionalComponent } from "preact";
import { tabListClass } from "./TabList.css";
import { useRovingTabindex } from "use-roving-tabindex";

type TabListProps = {};

export const TabList: FunctionalComponent<TabListProps> = (props) => {
  const { children } = props;
  const [compositeRef] = useRovingTabindex({ selector: ":scope > button" });

  return (
    <div ref={compositeRef} class={tabListClass}>
      {children}
    </div>
  );
};
