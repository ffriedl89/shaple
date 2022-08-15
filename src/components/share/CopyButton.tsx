import { useEffect, useState } from "preact/hooks";
import { useSharing } from "../../store/hooks/useSharing";
import { button } from "../../styles/button.css";

export const CopyButton = () => {
  const { url, text } = useSharing();
  const [state, setState] = useState<"Copy" | "Copied!">("Copy");

  async function handleCopy() {
    if (state === "Copy") {
      await navigator.clipboard.writeText(
        `${text}\n\nCheck my shaple at: ${url}`
      );
      setState("Copied!");
    }
  }

  useEffect(() => {
    if (state === "Copied!") {
      const timeoutID = setTimeout(() => {
        setState("Copy");
      }, 3000);

      return () => clearTimeout(timeoutID);
    }
  }, [state]);

  return (
    <button class={button({ variant: "primary" })} onClick={handleCopy}>
      {state}
    </button>
  );
};
