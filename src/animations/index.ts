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
