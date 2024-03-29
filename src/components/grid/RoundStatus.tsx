import { ThemedTriangle } from "../shapes/Triangle";
import { TRoundStatus } from "../../logic/game-logic";
import { roundStatusClass, roundStatusVariant } from "./RoundStatus.css";
import { useConfig } from "../../store/hooks/useConfig";
import { ScreenReaderOnly } from "../a11y/ScreenReaderOnly";
import { useSelector } from "../../store/hooks/useSelector";

type RoundStatusProps = Pick<TRoundStatus, "summary"> & { round: number };

const singularPluralShape = (nr: number) =>
  nr === 0 || nr > 1 ? "shapes" : "shape";

export const RoundStatus = (props: RoundStatusProps) => {
  const { summary, round } = props;
  const config = useConfig();
  const currentRound = useSelector((state) => state.currentRound);
  const isAlreadyFinished = round < currentRound;

  const misses = config.roundLength - summary.hit - summary.shapeHit;

  return (
    <div className={roundStatusClass} role="region" aria-live="polite">
      {Array.from(Array(summary.hit)).map(() => (
        <>
          <ThemedTriangle class={roundStatusVariant["hit"]}></ThemedTriangle>
        </>
      ))}
      {Array.from(Array(summary.shapeHit)).map(() => (
        <>
          <ThemedTriangle
            class={roundStatusVariant["shape-hit"]}
          ></ThemedTriangle>
        </>
      ))}
      {Array.from(Array(misses)).map(() => (
        <ThemedTriangle
          filled={isAlreadyFinished}
          class={roundStatusVariant["default"]}
        ></ThemedTriangle>
      ))}
      <ScreenReaderOnly>
        {`Round ${round + 1}: ${summary.hit} ${singularPluralShape(
          summary.hit
        )} perfect, ${summary.shapeHit} ${singularPluralShape(
          summary.shapeHit
        )} correct, but wrong position, ${misses} ${singularPluralShape(
          misses
        )}  wrong.`}
      </ScreenReaderOnly>
    </div>
  );
};
