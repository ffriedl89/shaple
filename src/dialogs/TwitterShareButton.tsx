import { getRoundPicks } from "../store/hooks/game-logic";
import { useSelector } from "../store/hooks/use-selector";
import {
  DURATION_SEARCH_PARAM,
  generateSearchParam,
  PATH_SEARCH_PARAM,
} from "../util/search-param-handling";
import { buttonVariant } from "./WinDialog.css";

function getOrdinal(value: number) {
  const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
  const ordinals = {
    one: "st",
    two: "nd",
    few: "rd",
    many: "th",
    zero: "th",
    other: "th",
  };
  return `${value}${ordinals[pr.select(value)]}`;
}

export const TwitterShareButton = () => {
  const state = useSelector((state) => {
    return {
      rounds: state.rounds,
      config: state.config,
      result: state.result,
      tryStartEnd: state.try,
    };
  });

  const path = state.rounds
    .filter((round) => {
      return round.length === state.config.roundLength;
    })
    .map((_, index) => getRoundPicks({ ...state, roundNumber: index }));

  // const lines = path.map((round) => {
  //   const lineStatus: { hits: Array<string>; shapeHits: Array<string> } = {
  //     hits: [],
  //     shapeHits: [],
  //   };
  //   for (const [index, pick] of round.picks.entries()) {
  //     if (pick.status === "hit") {
  //       lineStatus.hits.push(getOrdinal(index + 1));
  //     }
  //     if (pick.status === "shape-hit") {
  //       lineStatus.shapeHits.push(getOrdinal(index + 1));
  //     }
  //   }
  //   const hits =
  //     lineStatus.hits.length > 0 ? `${lineStatus.hits.join(",")} x` : "";
  //   const shapeHits =
  //     lineStatus.shapeHits.length > 0
  //       ? `${lineStatus.shapeHits.join(",")}~`
  //       : "";
  //   const lineResult =
  //     hits || shapeHits ? `${hits}${hits ? ` ${shapeHits}` : shapeHits}` : "";

  //   return `${lineResult}`;
  // });

  const emojis = path.map((round) => {
    let emojiString = "";
    for (const pick of round.picks) {
      let emoji = "⬜";
      switch (pick.status) {
        case "hit":
          emoji = "🟣";
          break;
        case "shape-hit":
          emoji = "💛";
          break;
      }
      emojiString += emoji;
    }
    return emojiString;
  });

  let text = emojis.join("\n");

  const searchParams = generateSearchParam(
    state.rounds,
    state.config,
    state.result,
    state.tryStartEnd
  );
  console.log(searchParams.toString());
  text += "\n" + window.location.href + "result?" + searchParams.toString();

  return (
    <a
      class={buttonVariant.primary}
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
    >
      Share on twitter
    </a>
  );
};
