import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  useConfig,
  useGameState,
  useRoundPick,
} from "../store/hooks/selectors";
import { Pick } from "./Pick";
import { animationOrder } from "./Pick.css";
import { PickPlaceholder } from "./PickPlaceholder";
import { picksClass, roundLength } from "./Round.css";
import { RoundStatus } from "./RoundStatus";

type RoundProps = {
  round: number;
};

export const Round = (props: RoundProps) => {
  const { round } = props;
  const { picks, summary } = useRoundPick(round);
  const gameState = useGameState();

  const config = useConfig();

  const ROUND_ARRAY = Array.from(Array(config.roundLength));
  return (
    <div
      class={picksClass}
      style={assignInlineVars({ [roundLength]: `${config.roundLength}` })}
    >
      <RoundStatus summary={summary}></RoundStatus>
      {ROUND_ARRAY.map((_, index) => {
        const pick = picks[index];
        const status =
          pick && gameState === "finished" ? pick.status : "default";
        return pick ? (
          <Pick
            style={assignInlineVars({
              [animationOrder]: `${round * config.roundLength + index}`,
            })}
            pick={pick.shape}
            status={status}
          />
        ) : (
          <PickPlaceholder />
        );
      })}
    </div>
  );
};
