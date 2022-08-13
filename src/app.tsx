import { GameGrid } from "./grid/GameGrid";
import { Keyboard } from "./keyboard/Keyboard";
import { Header } from "./layout/Header";
import { Layout } from "./layout/Layout";
import { useSyncTabs } from "./store/hooks/sync-tabs";
import { useDailyGame } from "./store/hooks/use-daily-game";
import { useRemainingTime } from "./store/hooks/use-remaining-time";

export function App() {
  useDailyGame();
  useSyncTabs();
  const remainingTime = useRemainingTime();

  return (
    <Layout>
      <Header></Header>
      <GameGrid></GameGrid>
      <p>Time remaining: {remainingTime}</p>
      <Keyboard></Keyboard>
    </Layout>
  );
}
