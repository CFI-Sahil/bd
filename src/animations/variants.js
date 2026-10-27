/**
 * Animation variants and transitions for Birthday Scrapbook
 * Uses Framer Motion configurations
 */

export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: '0%',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.25, 1, 0.5, 1], // easeOutQuart
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.38,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

export const floatVariant = {
  animate: {
    y: [-4, 5, -4],
    rotate: [-1, 1.5, -1],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const gentlePulse = {
  animate: {
    scale: [1, 1.06, 1],
    opacity: [0.85, 1, 0.85],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  hover: { scale: 1.04, y: -6, transition: { duration: 0.25, ease: "easeOut" } },
};

export const polaroidHover = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, rotate: 0, zIndex: 40, transition: { duration: 0.3 } },
};
