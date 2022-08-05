import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useConfig, useRoundPick } from "../store/hooks/selectors";
import { Pick } from "./Pick";
import { picksClass, roundLength } from "./Round.css";

type RoundProps = {
  round: number;
};

export const Round = (props: RoundProps) => {
  const { round } = props;
  const picks = useRoundPick(round);
  const config = useConfig();

  const ROUND_ARRAY = Array.from(Array(config.roundLength));
  return (
    <div
      class={picksClass}
      style={assignInlineVars({ [roundLength]: `${config.roundLength}` })}
    >
      {ROUND_ARRAY.map((_, index) => {
        console.log(picks[index]);
        const pick = picks[index];
        return pick ? (
          <Pick
            key={`${round}_${index}`}
            pick={pick.shape}
            status={pick.status}
          />
        ) : null;
      })}
    </div>
  );
};
