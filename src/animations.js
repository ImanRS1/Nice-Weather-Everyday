
export const titleAnim = {
    hidden: { 
        y: -200,
        opacity: 0,
        },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.25, ease: "easeOut"},
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
      transition: { duration: 1.25, ease: "easeOut"},
    },
  };

export const fadeInAnim = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {duration: 1, ease: "easeOut", delay: 1, staggerChildren: 0.5},
    },
    exit: {
        opacity: 0,
    }
};

export const fadeInAnim2 = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {duration: 3, ease: "easeOut"},
    }
};

export const animStagger = {
    hidden: {
  
    },
    show: {
      transition: {
        staggerChildren: 1.4,
      }
    }
  }

