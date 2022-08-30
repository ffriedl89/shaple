import { FunctionalComponent } from "preact";
import { useLayoutEffect, useState } from "preact/hooks";
import { rootClass } from "./Root.css";
import { TabsProvider } from "./TabsProvider";

type RootProps = {
  labelledby: string;
};

export const Root: FunctionalComponent<RootProps> = (props) => {
  const { labelledby, children } = props;

  const [selectedId, setSelectedId] = useState<string>("");

  function handleTabFocus(id: string) {
    setSelectedId(id);
  }

  return (
    <div class={rootClass} role="tablist" aria-labelledby={labelledby}>
      <TabsProvider onTabFocus={handleTabFocus} selectedId={selectedId}>
        {children}
      </TabsProvider>
    </div>
  );
};
