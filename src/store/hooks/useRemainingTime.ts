import { useEffect, useState } from "preact/hooks";
import { formatDurationFromStartToEnd } from "../../util/format-duration";
import { useSelector } from "./useSelector";

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
