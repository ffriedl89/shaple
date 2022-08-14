import { useState } from "preact/hooks";
import { WinDialog } from "../dialogs/WinDialog";
import { RemainingTime } from "../game/RemainingTime";
import { GameGrid } from "../grid/GameGrid";
import { Keyboard } from "../keyboard/Keyboard";
import { Header } from "../layout/Header";
import { Layout } from "../layout/Layout";
import { useGameState } from "../store/hooks/selectors";
import { useSyncTabs } from "../store/hooks/sync-tabs";
import { useDailyGame } from "../store/hooks/use-daily-game";

export const Home = () => {
  useDailyGame();
  useSyncTabs();
  const gameState = useGameState();
  const [dialogState, setDialogState] = useState({ dismissed: false });

  const winDialogIsOpen = !dialogState.dismissed && gameState === "finished";

  function handleClose() {
    setDialogState({ dismissed: true });
  }

  return (
    <Layout>
      <Header></Header>
      <GameGrid></GameGrid>
      <p>
        Time remaining: <RemainingTime />
      </p>
      <Keyboard></Keyboard>
      <WinDialog open={winDialogIsOpen} onOpenChange={handleClose}></WinDialog>
    </Layout>
  );
};
