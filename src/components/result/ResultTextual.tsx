import { GamePath, PickStatus } from "../../store/types";

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

export function generateTextualGamePath(path: GamePath) {
  const lines = path.map((round) => {
    const lineStatus: { hits: Array<string>; shapeHits: Array<string> } = {
      hits: [],
      shapeHits: [],
    };
    for (const [index, pick] of round.picks.entries()) {
      if (pick.status === "hit") {
        lineStatus.hits.push(getOrdinal(index + 1));
      }
      if (pick.status === "shape-hit") {
        lineStatus.shapeHits.push(getOrdinal(index + 1));
      }
    }
    const hits =
      lineStatus.hits.length > 0 ? `${lineStatus.hits.join(",")} x` : "";
    const shapeHits =
      lineStatus.shapeHits.length > 0
        ? `${lineStatus.shapeHits.join(",")}~`
        : "";
    const lineResult =
      hits || shapeHits ? `${hits}${hits ? ` ${shapeHits}` : shapeHits}` : "";

    return `${lineResult}`;
  });
  return lines.join("\n");
}

type ResultTextualProps = { path: PickStatus[][] | null };

export const ResultTextual = (props: ResultTextualProps) => {
  return <p></p>;
};
