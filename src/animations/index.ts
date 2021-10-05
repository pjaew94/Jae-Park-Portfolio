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
    })
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
    })
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