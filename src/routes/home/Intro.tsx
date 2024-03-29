import { route } from "preact-router";
import { ScreenReaderOnly } from "../../components/a11y/ScreenReaderOnly";
import { Dialog } from "../../components/dialogs/Dialog";
import { roundStatusVariant } from "../../components/grid/RoundStatus.css";
import { ThemedTriangle } from "../../components/shapes/Triangle";
import { button } from "../../styles/button.css";
import { heading } from "../../styles/heading.css";
import { descriptionListClass, introClass } from "./Intro.css";

type IntroProps = {
  path: string;
};

export const Intro = (props: IntroProps) => {
  return (
    <Dialog open={true} onClose={() => route("/home")}>
      <div class={introClass}>
        <h2 class={heading({ level: 3 })}>Welcome</h2>
        <p>
          Everyone in the world gets the same combination of shapes once per
          day!
        </p>
        <p>
          Each round has 4 picks! A shape can be used multiple times per round.
        </p>
        <p>
          When you finish a round the 4 shapes show you how you did that round.
        </p>
        <p>
          The shapes will get different colors:
          <dl class={descriptionListClass}>
            <dt>
              <ThemedTriangle class={roundStatusVariant.hit}></ThemedTriangle>
              <ScreenReaderOnly>A purple shape</ScreenReaderOnly>
            </dt>
            <dd>1 perfect shape. Position and shape are correct.</dd>

            <dt>
              <ThemedTriangle
                class={roundStatusVariant["shape-hit"]}
              ></ThemedTriangle>
              <ScreenReaderOnly>A yellow shape</ScreenReaderOnly>
            </dt>
            <dd>1 correct shape, but wrong position.</dd>

            <dt>
              <ThemedTriangle
                class={roundStatusVariant.default}
              ></ThemedTriangle>
              <ScreenReaderOnly>A gray shape</ScreenReaderOnly>
            </dt>
            <dd>1 shape wrong.</dd>
          </dl>
        </p>
        <button
          class={button({ variant: "secondary" })}
          autofocus
          style={{ alignSelf: "center" }}
        >
          Start playing
        </button>
        <p>
          Barbie themed emojis designed by{" "}
          <a href="https://openmoji.org/">OpenMoji</a> - the open-source emoji
          and icon project. License:{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/#">
            CC BY-SA 4.0
          </a>
        </p>
      </div>
    </Dialog>
  );
};
