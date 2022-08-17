import Router from "preact-router";
import { Redirect } from "./components/routing/Redirect";
import { Home } from "./routes/Home";
import { Result } from "./routes/Result";
import "./styles/global.css";

export function App() {
  return (
    <Router>
      <Redirect path="/" to="/home" />
      <Home path="/home/:rest*" />
      <Result path="/result" />
    </Router>
  );
}
