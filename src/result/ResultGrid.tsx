import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useEffect, useState } from "preact/hooks";
import { Pick } from "../grid/Pick";
import { animationOrder } from "../grid/Pick.css";
import { roundLength } from "../grid/Round.css";
import { PickStatus } from "../store/types";
import {
  DURATION_SEARCH_PARAM,
  generatePickStatusRoundsFromSearchParam,
} from "../util/search-param-handling";
import { resultGridClass } from "./ResultGrid.css";
import { UpsSomethingWentWrong } from "./UpsSomethingWentWrong";

function getPath(paramsString: string) {
  return generatePickStatusRoundsFromSearchParam(paramsString);
}

function getDuration(paramsString: string) {
  const searchParams = new URLSearchParams(paramsString);
  const duration = searchParams.get(DURATION_SEARCH_PARAM);
  try {
    return (duration && atob(duration)) || "";
  } catch {
    return "";
  }
}

export function useGameFromUrl() {
  const [path, setPath] = useState(() => getPath(window.location.search));
  const [duration, setDuration] = useState(() =>
    getDuration(window.location.search)
  );

  useEffect(() => {
    const handler = () => {
      setPath(getPath(window.location.search));
      setDuration(getDuration(window.location.search));
    };
    window.addEventListener("locationchange", handler);
    return () => window.removeEventListener("locationchange", handler);
  }, []);
  console.log(duration);
  return { path, duration };
}

export const ResultGrid = (props: { path: PickStatus[][] | null }) => {
  const { path } = props;
  return (
    <div
      class={resultGridClass}
      style={assignInlineVars({ [roundLength]: `${path && path[0].length}` })}
    >
      {path !== null ? (
        path.map((round, roundIndex) => {
          return round.map((status, index) => {
            console.log(status);
            return (
              <Pick
                style={assignInlineVars({
                  [animationOrder]: `${roundIndex * round.length + index}`,
                })}
                pick={"square"}
                status={status}
              />
            );
          });
        })
      ) : (
        <UpsSomethingWentWrong />
      )}
    </div>
  );
};
