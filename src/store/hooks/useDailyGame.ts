import { useEffect } from "preact/hooks";
import {
  generateInitialRounds,
  generateResult,
  getStartEndDate,
} from "../store-state";
import { useSetState } from "./useSetState";
import { useSelector } from "./useSelector";

export const useDailyGame = () => {
  const seed = useSelector((state) => state.resultSeed);
  const setState = useSetState();
  useEffect(() => {
    const intervalID = setInterval(() => {
      const { resultSeed, result } = generateResult();
      if (resultSeed !== seed) {
        setState((prev) => {
          return {
            ...prev,
            result,
            resultSeed,
            currentRound: 0,
            gameState: "not-started",
            try: {
              start: null,
              end: null,
            },
            rounds: generateInitialRounds(),
            ...getStartEndDate(),
          };
        });
      }
    }, 2000);
    return () => clearInterval(intervalID);
  }, [seed]);
};
