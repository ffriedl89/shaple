import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useConfig, useRoundPick } from "../store/hooks/selectors";
import { Pick } from "./Pick";
import { picksClass, roundClass, roundLength } from "./Round.css";
import { RoundStatus } from "./RoundStatus";

type RoundProps = {
  round: number;
};

export const Round = (props: RoundProps) => {
  const { round } = props;
  const picks = useRoundPick(round);
  const config = useConfig();

  const ROUND_ARRAY = Array.from(Array(config.roundLength));
  return (
    <div class={roundClass}>
      <RoundStatus></RoundStatus>
      <div
        class={picksClass}
        style={assignInlineVars({ [roundLength]: `${config.roundLength}` })}
      >
        {ROUND_ARRAY.map((_, index) => {
          const pick = picks[index];
          return <Pick key={`${round}_${index}`} pick={pick} />;
        })}
      </div>
    </div>
  );
};
