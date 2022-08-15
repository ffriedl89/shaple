import { GamePath } from "../store/types";

export function generateEmojiGamePath(path: GamePath) {
  const emojis = path.map((round) => {
    let emojiString = "";
    for (const pick of round.picks) {
      let emoji = "🤍";
      switch (pick.status) {
        case "hit":
          emoji = "💜";
          break;
        case "shape-hit":
          emoji = "💛";
          break;
      }
      emojiString += emoji;
    }
    return emojiString;
  });
  return emojis.join("\n");
}
