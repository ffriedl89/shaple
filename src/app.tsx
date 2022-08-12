import { GameGrid } from "./grid/GameGrid";
import { Keyboard } from "./keyboard/Keyboard";
import { Header } from "./layout/Header";
import { Layout } from "./layout/Layout";
import { useSyncTabs } from "./store/hooks/sync-tabs";
import { useDailyGame } from "./store/hooks/use-daily-game";

export function App() {
  useDailyGame();
  useSyncTabs();

  return (
    <Layout>
      <Header></Header>
      <GameGrid></GameGrid>
      <p></p>
      <Keyboard></Keyboard>
    </Layout>
  );
}
