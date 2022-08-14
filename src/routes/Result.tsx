import { Header } from "../layout/Header";
import { GameDuration } from "../result/GameDuration";
import { ResultGrid, useGameFromUrl } from "../result/ResultGrid";
import { ResultLayout } from "../result/ResultLayout";

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
      <GameDuration duration={duration} />
    </ResultLayout>
  );
};
