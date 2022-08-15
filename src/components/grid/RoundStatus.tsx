import { Triangle } from "../shapes/Triangle";
import { TRoundStatus } from "../../logic/game-logic";
import { roundStatusClass, variant } from "./RoundStatus.css";
import { useConfig } from "../../store/hooks/useConfig";

type RoundStatusProps = Pick<TRoundStatus, "summary">;

export const RoundStatus = (props: RoundStatusProps) => {
  const { summary } = props;
  const config = useConfig();

  return (
    <div className={roundStatusClass}>
      {Array.from(Array(summary.hit)).map(() => (
        <Triangle class={variant["hit"]}></Triangle>
      ))}
      {Array.from(Array(summary.shapeHit)).map(() => (
        <Triangle class={variant["shape-hit"]}></Triangle>
      ))}
      {Array.from(
        Array(config.roundLength - summary.hit - summary.shapeHit)
      ).map(() => (
        <Triangle class={variant["default"]}></Triangle>
      ))}
    </div>
  );
};
