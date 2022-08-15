import { getRoundPicks } from "../../logic/game-logic";
import { useSelector } from "./useSelector";

export const useRoundPick = (roundNumber: number) =>
  useSelector((state) =>
    getRoundPicks({
      result: state.result,
      config: state.config,
      rounds: state.rounds,
      roundNumber,
    })
  );
