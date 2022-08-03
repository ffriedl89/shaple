import { createContext } from "preact";
import { PlayState } from "./play-state";
import { createStore, Store } from "./store";

export const PlayStateContext = createContext<Store<PlayState>>(
  createStore<PlayState>({
    currentRound: 0,
    rounds: [[], [], [], [], [], []],
    config: {
      gameLength: 10,
      roundLength: 5,
    },
  })
);
