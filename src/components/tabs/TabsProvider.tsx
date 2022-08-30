import { createContext, FunctionalComponent } from "preact";
import { useContext } from "preact/hooks";

type TabsContextType = {
  onTabFocus: (id: string) => void;
  selectedId: string;
};

const TabsContext = createContext<TabsContextType>({
  onTabFocus: () => {},
  selectedId: "",
});

export const TabsProvider: FunctionalComponent<
  Omit<TabsContextType, "firstTabRef">
> = (props) => {
  const { children, ...rest } = props;

  return <TabsContext.Provider children={children} value={rest} />;
};

export const useTabContext = () => {
  return useContext(TabsContext);
};
