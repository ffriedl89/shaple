import { Header } from "../components/layout/Header";
import { GameDuration } from "../components/result/GameDuration";
import { ResultGrid, useGameFromUrl } from "../components/result/ResultGrid";
import { ResultLayout } from "../components/result/ResultLayout";
import { ResultTextual } from "../components/result/ResultTextual";

type ResultProps = {
  r?: string;
  path: string;
};

export const Result = (props: ResultProps) => {
  const { path, duration } = useGameFromUrl();

  return (
    <ResultLayout>
      <Header />
      <ResultGrid path={path} />
      <ResultTextual path={path} />
      <GameDuration duration={duration} />
    </ResultLayout>
  );
};
