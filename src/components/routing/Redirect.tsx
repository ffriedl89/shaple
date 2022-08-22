import { route } from "preact-router";
import { useEffect } from "preact/hooks";

type RedirectProps = {
  to: string;
  path?: string;
};

export const Redirect = (props: RedirectProps) => {
  useEffect(() => {
    route(props.to, true);
  }, []);

  return null;
};
