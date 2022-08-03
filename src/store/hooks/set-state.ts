import { useContext } from "preact/hooks";
import { PlayStateContext } from "../context";

export const useSetState = () => {
  const store = useContext(PlayStateContext);
  return store.setState;
};
