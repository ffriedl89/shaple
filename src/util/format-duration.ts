import {
  differenceInMilliseconds,
  formatDuration,
  intervalToDuration,
} from "date-fns";

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
