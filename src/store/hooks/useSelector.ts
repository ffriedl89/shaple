import { useCallback, useContext } from "preact/hooks";
import { useSyncExternalStore } from "use-sync-external-store/shim";
import { PlayStateContext } from "../context";
import { StoreState } from "../store-state";

export const useSelector = <S extends unknown>(
  selector: (state: StoreState) => S
): S => {
  const store = useContext(PlayStateContext);
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  );
};
