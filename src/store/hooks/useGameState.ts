import { determineGameState } from "../../logic/game-logic";
import { GameState } from "../types";
import { useSelector } from "./useSelector";

export function useGameState(): GameState {
  return useSelector(determineGameState);
}
