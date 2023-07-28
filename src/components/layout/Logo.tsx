import { Link } from "preact-router";
import { heading } from "../../styles/heading.css";
import {
  logoBarbieClass,
  logoHalloweenClass,
  logoTextClass,
  logoTriangleClass,
} from "./Logo.css";
import { useTheme } from "../../store/hooks/useTheme";
import { PointyHat } from "../shapes/Triangle";
import { ScreenReaderOnly } from "../a11y/ScreenReaderOnly";

import clsx from "clsx";

const BarbieLogo = () => {
  return (
    <Link href="/" class={clsx(logoTextClass, logoBarbieClass)}>
      <h1 class={heading({ level: 3 })}>Shaple</h1>
    </Link>
  );
};

const HalloweenLogo = () => {
  return (
    <Link href="/" class={logoTextClass}>
      <h1 class={heading({ level: 3 })}>
        Sh
        <PointyHat class={logoHalloweenClass} aria-hidden="true" />
        <ScreenReaderOnly>a</ScreenReaderOnly>
        ple
      </h1>
    </Link>
  );
};

const OriginalLogo = () => {
  return (
    <Link href="/" class={logoTextClass}>
      <h1 class={heading({ level: 3 })}>
        Sh<span class={logoTriangleClass}>&#9650;</span>ple
      </h1>
    </Link>
  );
};

export const Logo = () => {
  const theme = useTheme();
  switch (theme) {
    case "original":
      return <OriginalLogo />;
    case "halloween":
      return <HalloweenLogo />;
    case "barbie":
      return <BarbieLogo />;
  }
};
