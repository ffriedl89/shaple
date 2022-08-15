import { Link } from "preact-router";
import { Header } from "../components/layout/Header";
import { GameDuration } from "../components/result/GameDuration";
import { ResultGrid, useGameFromUrl } from "../components/result/ResultGrid";
import { ResultLayout } from "../components/result/ResultLayout";
import { ResultTextual } from "../components/result/ResultTextual";
import { button } from "../styles/button.css";

type ResultProps = {
  r?: string;
  path: string;
};

export const Result = (props: ResultProps) => {
  const { path, duration } = useGameFromUrl();

  return (
    <>
      <Header />
      <ResultLayout>
        <ResultGrid path={path} />
        <ResultTextual path={path} />
        <GameDuration duration={duration} />
        <Link
          href="/"
          class={button({ variant: "primary", element: "inline" })}
        >
          Play yourself!
        </Link>
      </ResultLayout>
    </>
  );
};
