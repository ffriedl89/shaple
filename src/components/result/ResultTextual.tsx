import { useGamePath } from "../../store/hooks/useGamePath";
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

export function generateTextualGamePath(path: PickStatus[][]) {
  const lines = path.map((picks, index) => {
    const lineStatus: { hits: Array<string>; shapeHits: Array<string> } = {
      hits: [],
      shapeHits: [],
    };
    for (const [index, status] of picks.entries()) {
      if (status === "hit") {
        lineStatus.hits.push(getOrdinal(index + 1));
      }
      if (status === "shape-hit") {
        lineStatus.shapeHits.push(getOrdinal(index + 1));
      }
    }
    const hits =
      lineStatus.hits.length > 0
        ? `${lineStatus.hits.join(", ")} perfect!`
        : "";
    const shapeHits =
      lineStatus.shapeHits.length > 0
        ? `${lineStatus.shapeHits.join(
            ", "
          )} shape correct, but wrong position!`
        : "";
    const lineResult =
      hits || shapeHits
        ? `Line: ${index + 1}: ${hits}${hits ? ` ${shapeHits}` : shapeHits}`
        : "";

    return `${lineResult}`;
  });
  return lines;
}

type ResultTextualProps = { path: PickStatus[][] | null };

export const ResultTextual = (props: ResultTextualProps) => {
  const lines = props.path ? generateTextualGamePath(props.path) : null;
  return lines ? (
    <ol role="list">
      {lines.map((line) => (
        <li>{line}</li>
      ))}
    </ol>
  ) : null;
};
