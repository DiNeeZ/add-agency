export const stairsAnimation = {
  hidden: { x: 0, opacity: 0 },
  visible: (custom) => ({
    x: `${custom * 82}px`,
    opacity: 1,
    transition: {
      delay: custom * 0.25,
      type: "tween",
    },
  }),
};

export const textAnimation = (direction = "left") => ({
  hidden: {
    x: direction === "right" ? 100 : -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.25,
      duration: 0.5,
      type: "tween",
    },
  }),
});

export const zoomIn = (duration) => ({
  hidden: {
    scale: 0,
    opacity: 0.5,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration,
    },
  },
});
