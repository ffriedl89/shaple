import { useEffect } from "preact/hooks";
import {
  generateInitialRounds,
  generateResult,
  getStartEndDate,
} from "../play-state";
import { useSetState } from "./set-state";
import { useSelector } from "./use-selector";

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
            rounds: generateInitialRounds(),
            ...getStartEndDate(),
          };
        });
      }
    }, 2000);
    return () => clearInterval(intervalID);
  }, [seed]);
};
