export type Store<T> = {
  getState: () => T;
  setState: (action: T | ((prev: T) => T)) => void;
  subscribe: (callback: () => void) => () => void;
};

export const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<() => void>();
  const getState = () => state;
  const setState = (nextState: T | ((prev: T) => T)) => {
    state =
      typeof nextState === "function"
        ? (nextState as (prev: T) => T)(state)
        : nextState;
    callbacks.forEach((callback) => callback());
  };

  const subscribe = (callback: () => void) => {
    const wrapped = () => {
      console.log("callback called");
      callback();
    };
    callbacks.add(wrapped);
    return () => {
      callbacks.delete(wrapped);
    };
  };

  return { getState, setState, subscribe };
};
