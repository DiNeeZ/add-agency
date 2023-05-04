export const stairsAnimation = {
  hidden: { x: 0, opacity: 0 },
  visible: (custom) => ({
    x: `${custom * 82}px`,
    opacity: 1,
    transition: {
      delay: custom * 0.05,
      duration: 0.75,
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

export const fadeIn = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
});

export const fadeInY = (direction) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.15,
    },
  }),
});

export const cascade = () => ({
  hidden: (custom) => ({
    opacity: 0,
    y: -100 * custom,
  }),
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: custom * 0.5,
    },
  }),
});
