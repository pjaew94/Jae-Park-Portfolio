export  const showHidingTextVariant = {
    initial: () => ({
        y: "100%"
    }),
    animate:(custom?: number) => ({
        y: 0,
        transition: {
            type: 'spring',
            duration: 0.9,
            bounce: 0,
      
            delay: custom
        }
    }),
    hide: {
        y: "100%"
    }
}

export const paragraphVariant = {
    initial: {
        y: "60%",
        opacity: 0
    },
    animate: (custom?: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.9,
            bounce: 0,
            delay: custom
        }
    }),
    exit: {
        y: "60%",
        opacity: 0,
        transition: {
            type: 'spring',
            duration: 0.3,
            bounce: 0,
        }
    }
}


export const carouselVariant = {
    fadeInLeft:() => ({
        x:[200, 0],
        opacity: [0, 1],
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }
    }),
    fadeInRight:() => ({
        x:[-200, 0],
        opacity: [0, 1],
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }
    }),
    fadeOutLeft:() => ({
        x:[0, -200],
        opacity: [1, 0],
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }
    }),
    fadeOutRight:() => ({
        x:[0, 200],
        opacity: [1, 0],
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }
    })
}

export const carouselImageVariant = {
    dragReset: () => ({
        x: 0,
        y: 0,
        transition: {
            type: "linear",
            duration: 0.1
        }
    }),
    onHover: (custom: boolean) => ({
        y: -10,
        boxShadow: custom ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "",
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.5
        }
    })
}

export const dummyVariant = {
    
}

export const buttonUnderLineVariant = {
    hide: {
        scaleX: 0,
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }
    }
}

export const scrollGuideVariant = {
    animate: {
        x:[-5, 5, -5],
        transition: {
            ease: "linear",
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1
        }
    },
    hide: {
        opacity: 0,
        transition: {
            ease: "linear",
            duration: 1
        }
    }
}

export const learnMoreVariant = {
    animate: {
        scale: 0.8,
        transition: {
            ease: "linear",
            duration: 0.5
        }
    },
    hide: {
        x: -100,
        opacity: 0,
        transition: {
            ease: "linear",
            duration: 0.5
        }
    }

}


export const backdropVariant = {
    fadeIn: {
        background: "rgba(0, 0, 0, 0.7)",
        transition: {
            ease: 'linear',
            duration: 0.5
        }
    },
    fadeOut: {
        background: "rgba(0, 0, 0, 0)",
        transition: {
            ease: 'linear',
            duration: 0.5
        }
    }
}


export const contentVariant = {
    initial: {
        opacity: 0,
        y: 100
    },
    fadeIn: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.3
        }
    },
    fadeOut: {
        opacity: 0,
        y: 100,
        transition: {
            ease: 'easeInOut',
            duration: 0.2
        }
    }
}

export const warningVariant = {
    initial: {
        opacity: 0,
        y: "20%"
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 0.9,
            bounce: 0,
        }
    },
    hide: {
        opacity: 0,
        y: "20%",
        transition: {
            type: 'spring',
            duration: 0.4,
            bounce: 0,
        }
    }
}