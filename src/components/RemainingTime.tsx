import { useRemainingTime } from "../store/hooks/useRemainingTime";

export const RemainingTime = () => {
  const remainingTime = useRemainingTime();

  return <>{remainingTime}</>;
};
