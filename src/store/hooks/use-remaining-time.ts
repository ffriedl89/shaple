import {
  differenceInMilliseconds,
  formatDistanceToNow,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { useEffect, useMemo, useState } from "preact/hooks";
import { useSetState } from "./set-state";
import { useSelector } from "./use-selector";

const formatDistanceLocale = {
  xSeconds: "{{count}} sec",
  xMinutes: "{{count}} min",
  xHours: "{{count}} h",
};
const shortEnLocale = {
  formatDistance: (token: "xSeconds" | "xMinutes" | "xHours", count: string) =>
    formatDistanceLocale[token].replace("{{count}}", count),
};

function formatRemainingTime(endDate: Date) {
  const duration = intervalToDuration({
    start: 0,
    end: Math.abs(differenceInMilliseconds(new Date(), endDate)),
  });
  return (
    formatDuration(duration, {
      format: ["hours", "minutes", "seconds"],
      locale: shortEnLocale,
    }) || "0 sec"
  );
}

export const useRemainingTime = () => {
  const playState = useSelector((state) => state);
  const [stringState, setStringState] = useState(() =>
    formatRemainingTime(playState.endDate)
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setStringState(formatRemainingTime(playState.endDate));
    }, 1000);

    return () => clearInterval(intervalID);
  }, [playState.endDate]);
  return stringState;
};
