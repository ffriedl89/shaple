import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useConfig, useRoundPick } from "../store/hooks/selectors";
import { Pick } from "./Pick";
import { animationOrder } from "./Pick.css";
import { picksClass, roundLength } from "./Round.css";
import { RoundStatus } from "./RoundStatus";

type RoundProps = {
  round: number;
};

export const Round = (props: RoundProps) => {
  const { round } = props;
  const { picks, summary } = useRoundPick(round);
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
        return pick ? (
          <Pick
            style={assignInlineVars({ [animationOrder]: `${index}` })}
            key={`${round}_${index}`}
            pick={pick.shape}
            status={pick.status}
          />
        ) : null;
      })}
    </div>
  );
};
