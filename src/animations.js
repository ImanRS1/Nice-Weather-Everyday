export const titleAnim = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.25, ease: "easeOut" },
  },
};

export const searchBarAnim = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.25, ease: "easeOut" },
  },
};

export const fadeInAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 5,
      ease: "easeOut",
    },
  },
};

export const fadeInAnim2 = {
  hidden: {
    scale: 0.1,
    opacity: 0,
    y: -125,
  },
  show: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.1,
    opacity: 0,
    y: -125,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fadeInAnim3 = {
  hidden: {
    opacity: 0,
    y: -100,
    scale: 0.1,
  },
  show: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.1,
    y: -100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const animStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.4,
    },
  },
};
