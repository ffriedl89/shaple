import { Triangle } from "../shapes/Triangle";
import { TRoundStatus } from "../store/hooks/game-logic";
import { useConfig, useRoundPick } from "../store/hooks/selectors";
import {
  roundStatusClass,
  roundStatusShapeClass,
  variant,
} from "./RoundStatus.css";

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
