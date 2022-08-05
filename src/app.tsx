import { GameGrid } from "./grid/GameGrid";
import { Keyboard } from "./keyboard/Keyboard";
import { Header } from "./layout/Header";
import { Layout } from "./layout/Layout";

export function App() {
  return (
    <Layout>
      <Header></Header>
      <Keyboard></Keyboard>
      <GameGrid></GameGrid>
    </Layout>
  );
}
