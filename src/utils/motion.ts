export const upAnimateVariants = {
    visible: () => ({
        y: 0, 
        opacity: 1,
        transition: { duration: 0.7 }
    }),
    hidden: { y: 100, opacity: 0 }
}

export const leftAnimateVariants = {
    visible: () => ({
        x: 0, 
        opacity: 1,
        transition: { duration: 0.7 }
    }),
    hidden: { x: -100, opacity: 0 }
}

export const rightAnimateVariants = {
    visible: () => ({
        x: 0, 
        opacity: 1,
        transition: { duration: 0.7 }
    }),
    hidden: { x: 100, opacity: 0 }
}

export const upListAnimateVariants = {
    visible: (custom: unknown) => ({
        y: 0, 
        opacity: 1,
        transition: { delay: (typeof custom === 'number' ? custom : 0) * 0.1, duration: 0.7 }
    }),
    hidden: { y: 100, opacity: 0 }
}





export const heightListAnimateVariants = {
    visible: () => ({
        height: 'auto',
        opacity: 1,
        transition: { duration: 0.3 }
    }),
    hidden: { height: 0, opacity: 0 }
}





export const hoverUpAnimateVariants = {
    hover: () => ({
        y: -15,
        transition: { duration: 0.3 }
    })
}

export const opacityAnimateVariants = {
    visible: () => ({
        opacity: 1,
        transition: { duration: 0.7 }
    }),
    hidden: { opacity: 0 }
}

export const upListHoverAnimateVariants = {
    visible: (custom: unknown) => ({
        y: 0,
        opacity: 1,
        transition: { delay: (typeof custom === 'number' ? custom : 0) * 0.1, duration: 0.4 }
    }),
    hidden: { y: 60, opacity: 0 },
}
