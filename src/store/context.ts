import { createContext } from "preact";
import { initialState, PlayState } from "./play-state";
import { createStore, Store } from "./store";

export const PlayStateContext = createContext<Store<PlayState>>(
  createStore<PlayState>(initialState, (state) => {
    if (window.localStorage) {
      window.localStorage.setItem("playState", JSON.stringify(state));
    }
    return state;
  })
);
