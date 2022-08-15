import { createContext } from "preact";
import { initialState, StoreState } from "./store-state";
import { createStore, Store } from "./store";

export const PlayStateContext = createContext<Store<StoreState>>(
  createStore<StoreState>(initialState, (state) => {
    if (window.localStorage) {
      window.localStorage.setItem("playState", JSON.stringify(state));
    }
    return state;
  })
);
