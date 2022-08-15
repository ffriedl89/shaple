import Router from "preact-router";
import { Home } from "./routes/Home";
import { Result } from "./routes/Result";
import "./styles/global.css";

export function App() {
  return (
    <Router>
      <Home path="/" />
      <Result path="/result" />
    </Router>
  );
}
