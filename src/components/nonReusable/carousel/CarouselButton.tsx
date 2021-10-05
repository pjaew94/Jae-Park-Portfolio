import React from 'react'
import {motion} from 'framer-motion';
import { ICarouselButton } from './../../../types/interface';
import { buttonUnderLineVariant } from './../../../animations/index';


export const CarouselButton: React.FC<ICarouselButton> = ({ currentPosition, type, onCarouselButtonClick}) => {
    return (
        <motion.button whileHover="hide" className='carousel-button' onClick={() => onCarouselButtonClick(type)}>
            <h4>{type === "prev" ? "Previous" : "Next"}</h4>
            <motion.div variants={buttonUnderLineVariant} className='button-underline'></motion.div>
        </motion.button>
    )
}
