import { generateEmojiGamePath } from "../../logic/result-processing";
import { useGamePathSearchParams } from "../../util/search-param-handling";
import { useGamePath } from "./useGamePath";

export const useSharing = () => {
  const path = useGamePath();

  const emojis = generateEmojiGamePath(path);

  const text = `Shaple

${emojis}`;

  const gamePathSearchParams = useGamePathSearchParams();
  const resultUrl = new URL(
    "/result",
    window.location.protocol + "//" + window.location.host
  );
  const url = `${resultUrl.href}?${gamePathSearchParams}`;

  return { text, url };
};
