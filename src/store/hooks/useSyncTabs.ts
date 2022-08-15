import { useEffect } from "preact/hooks";
import { useSetState } from "./useSetState";

export const useSyncTabs = (): void => {
  const setState = useSetState();
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === "playState" && e.newValue) {
        setState(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);
};
