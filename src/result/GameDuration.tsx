import { intervalToDuration } from "date-fns";
import { formatDurationString } from "../store/hooks/use-remaining-time";

type GameDurationProps = {
  duration: string;
};

export const GameDuration = (props: GameDurationProps) => {
  const { duration } = props;
  if (!duration) {
    return null;
  }
  const dateDuration = intervalToDuration({
    start: 0,
    end: Math.abs(parseInt(duration, 10)),
  });

  return <>The game was finished in {formatDurationString(dateDuration)}</>;
};
