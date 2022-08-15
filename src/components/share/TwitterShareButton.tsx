import { useSharing } from "../../store/hooks/useSharing";
import { button } from "../../styles/button.css";

export const TwitterShareButton = () => {
  const { url, text } = useSharing();

  const twitterIntentUrl = new URL("https://twitter.com/intent/tweet");
  const twitterIntentSearchParams = new URLSearchParams({
    text,
    url: encodeURI(url),
    hashtags: "shaple",
  });

  const twitterIntentUrlString = `${twitterIntentUrl.href}?${twitterIntentSearchParams}`;

  return (
    <a class={button({ variant: "primary" })} href={twitterIntentUrlString}>
      Tweet
    </a>
  );
};
