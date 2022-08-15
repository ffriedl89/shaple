import { keyframes } from "@vanilla-extract/css";

export const headshake = keyframes({
  "0%": { transform: "translateX(0)" },
  "6.5%": { transform: "translateX(-6px) rotateY(-9deg)" },
  "18.5%": { transform: "translateX(5px) rotateY(7deg)" },
  "31.5%": { transform: "translateX(-3px) rotateY(-5deg);" },
  "43.5%": { transform: "translateX(2px) rotateY(3deg);" },
  "50%": { transform: "transform: translateX(0);" },
});

export const tada = keyframes({
  from: {
    transform: "scale3d(1, 1, 1)",
  },
  "10%, 20%": {
    transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
  },
  "30%, 50%, 70%, 90%": {
    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
  },
  "40%, 60%, 80%": {
    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
  },
  to: {
    transform: "scale3d(1, 1, 1)",
  },
});

export const swing = keyframes({
  "20%": {
    transform: "rotate3d(0, 0, 1, 15deg)",
  },
  "40%": {
    transform: "rotate3d(0, 0, 1, -10deg)",
  },
  "60%": {
    transform: "rotate3d(0, 0, 1, 5deg)",
  },
  "80%": {
    transform: "rotate3d(0, 0, 1, -5deg)",
  },
  to: {
    transform: "rotate3d(0, 0, 1, 0deg)",
  },
});
