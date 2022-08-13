import { useEffect, useRef } from "preact/hooks";
import { useGameState } from "../store/hooks/game-logic";
import { useConfig } from "../store/hooks/selectors";
import { gameGridClass } from "./GameGrid.css";
import { Round } from "./Round";
import { sparkles, Color } from "party-js";
import { theme, themeVars } from "../app.css";

const extractHsl = (color: string) => {
  const groups = color.match(
    /hsl\((?<h>\d+),\s*(?<s>\d+)%,\s*(?<l>\d+)%\)/
  )?.groups;
  console.log(groups, color);
  if (groups) {
    return [
      parseInt(groups.h),
      parseInt(groups.s),
      parseInt(groups.l),
    ] as const;
  }
  return [0, 0, 0] as const;
};

export const GameGrid = () => {
  const config = useConfig();
  const gameState = useGameState();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameState === "finished" && gridRef.current) {
      console.log(Color.fromHsl(...extractHsl(themeVars.colors.hit)));
      sparkles(gridRef.current, {
        lifetime: [10, 20],
        count: [150, 200],
        shapes: ["square", "circle"],
        color: [
          Color.fromHsl(...extractHsl(theme.colors.hit)),
          Color.fromHsl(...extractHsl(theme.colors.miss)),
          Color.fromHsl(...extractHsl(theme.colors.shapeHit)),
        ],
      });
    }
  }, [gameState]);

  return (
    <div className={gameGridClass} ref={gridRef}>
      {Array.from(Array(config.gameLength)).map((_, index) => (
        <Round round={index}></Round>
      ))}
    </div>
  );
};
