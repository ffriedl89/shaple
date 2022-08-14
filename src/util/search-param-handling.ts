import { differenceInMilliseconds, parseISO } from "date-fns";
import { getRoundPicks } from "../store/hooks/game-logic";
import { PlayState } from "../store/play-state";
import { PickStatus } from "../store/types";

const pathIndices: Array<PickStatus> = ["hit", "shape-hit", "miss", "default"];

export const PATH_SEARCH_PARAM = "p";
export const DURATION_SEARCH_PARAM = "d";

export function generateSearchParam(
  rounds: PlayState["rounds"],
  config: PlayState["config"],
  result: PlayState["result"],
  tryStartEnd: PlayState["try"]
) {
  const pathArray: Array<number | string> = [];
  for (const [index] of rounds.entries()) {
    const roundPicks = getRoundPicks({
      roundNumber: index,
      rounds,
      config,
      result,
    });
    for (const [resultIndex] of result.entries()) {
      const pathValue = pathIndices.indexOf(
        roundPicks.picks[resultIndex]?.status || "default"
      );
      pathArray.push(pathValue);
    }
    if (roundPicks.summary.hit === config.roundLength) {
      break;
    }
    if (index < rounds.length - 1) {
      pathArray.push("|");
    }
  }
  const searchParams = new URLSearchParams();
  searchParams.set(PATH_SEARCH_PARAM, btoa(pathArray.join("")));
  const { start, end } = tryStartEnd;
  if (start && end) {
    const difference = differenceInMilliseconds(
      parseISO(end),
      parseISO(start)
    ).toString();
    searchParams.set(DURATION_SEARCH_PARAM, btoa(difference));
  }
  return searchParams;
}

export function generatePickStatusRoundsFromSearchParam(paramsString: string) {
  const searchParams = new URLSearchParams(paramsString);
  const path = searchParams.get(PATH_SEARCH_PARAM);
  try {
    return path
      ? atob(path)
          .split("|")
          .map((roundString: string) => {
            return roundString
              .split("")
              .map((index) => pathIndices[parseInt(index, 10)]);
          })
      : null;
  } catch {
    return null;
  }
}
