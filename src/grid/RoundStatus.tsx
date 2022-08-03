import { roundStatusClass, roundStatusItemClass } from "./RoundStatus.css";

export const RoundStatus = () => {
  return (
    <div className={roundStatusClass}>
      <div className={roundStatusItemClass}></div>
      <div className={roundStatusItemClass}></div>
      <div className={roundStatusItemClass}></div>
      <div className={roundStatusItemClass}></div>
    </div>
  );
};
