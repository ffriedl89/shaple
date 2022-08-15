import { useState } from "preact/hooks";
import { WinDialog } from "../components/dialogs/WinDialog";
import { RemainingTime } from "../components/RemainingTime";
import { GameGrid } from "../components/grid/GameGrid";
import { Keyboard } from "../components/keyboard/Keyboard";
import { Header } from "../components/layout/Header";
import { Layout } from "../components/layout/Layout";
import { useSyncTabs } from "../store/hooks/useSyncTabs";
import { useDailyGame } from "../store/hooks/useDailyGame";
import { useGameState } from "../store/hooks/useGameState";

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
