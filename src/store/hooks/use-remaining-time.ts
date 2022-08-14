import {
  differenceInMilliseconds,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { useEffect, useState } from "preact/hooks";
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

export function formatDurationString(duration: Duration) {
  return (
    formatDuration(duration, {
      format: ["hours", "minutes", "seconds"],
      locale: shortEnLocale,
    }) || "0 sec"
  );
}

export function formatDurationFromStartToEnd(startDate: Date, endDate: Date) {
  const duration = intervalToDuration({
    start: 0,
    end: Math.abs(differenceInMilliseconds(startDate, endDate)),
  });
  return formatDurationString(duration);
}

export const useRemainingTime = () => {
  const playState = useSelector((state) => state);
  const [stringState, setStringState] = useState(() =>
    formatDurationFromStartToEnd(new Date(), playState.endDate)
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setStringState(
        formatDurationFromStartToEnd(new Date(), playState.endDate)
      );
    }, 1000);

    return () => clearInterval(intervalID);
  }, [playState.endDate]);
  return stringState;
};
