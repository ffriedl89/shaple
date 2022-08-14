import { useRemainingTime } from "../store/hooks/use-remaining-time";

export const RemainingTime = () => {
  const remainingTime = useRemainingTime();

  return <>{remainingTime}</>;
};
