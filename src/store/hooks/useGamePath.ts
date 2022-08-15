import { GamePath } from "../types";
import { getRoundPicks } from "../../logic/game-logic";
import { useSelector } from "./useSelector";

export function useGamePath(): GamePath {
  const { config, rounds, result } = useSelector((state) => ({
    config: state.config,
    rounds: state.rounds,
    result: state.result,
  }));

  const path = rounds
    .filter((round) => {
      return round.length === config.roundLength;
    })
    .map((_, index) =>
      getRoundPicks({ result, config, rounds, roundNumber: index })
    );
  return path;
}
