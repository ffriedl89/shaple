import { RemainingTime } from "../components/RemainingTime";
import { GameGrid } from "../components/grid/GameGrid";
import { Keyboard } from "../components/keyboard/Keyboard";
import { Header } from "../components/layout/Header";
import { Layout } from "../components/layout/Layout";
import { useSyncTabs } from "../store/hooks/useSyncTabs";
import { useDailyGame } from "../store/hooks/useDailyGame";
import { Nav } from "../components/layout/Nav";
import Router from "preact-router";
import { Win } from "./home/Win";
import { Intro } from "./home/Intro";
import { useGameState } from "../store/hooks/useGameState";
import { Redirect } from "../components/routing/Redirect";

export const Home = () => {
  useDailyGame();
  useSyncTabs();
  const gameState = useGameState();

  return (
    <>
      {gameState === "finished" ? <Redirect to="/home/win" /> : null}
      <Layout>
        <Header>
          <Nav></Nav>
        </Header>
        <GameGrid></GameGrid>
        <div>
          Time remaining: <RemainingTime />
        </div>
        <Keyboard></Keyboard>
      </Layout>
      <Router>
        <Intro path="/home/intro" />
        <Win path="/home/win" />
      </Router>
    </>
  );
};
