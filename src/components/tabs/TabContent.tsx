import { FunctionalComponent } from "preact";
import { tabpanel } from "./TabContent.css";
import { useTabContext } from "./TabsProvider";

type TabContentProps = {
  id: string;
};

export const TabContent: FunctionalComponent<TabContentProps> = (props) => {
  const { id, children } = props;

  const { selectedId } = useTabContext();

  const contentId = `${id}-content`;

  return (
    <div
      role="tabpanel"
      id={contentId}
      aria-labelledby={id}
      tabIndex={-1}
      class={tabpanel({ selected: selectedId === id })}
    >
      {children}
    </div>
  );
};
