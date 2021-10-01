import React from 'react'
import './button.scss';
import { motion } from 'framer-motion';
import { IButton } from '../../../types/interface';

export const Button: React.FC <IButton> = ({ text, type, link }) => {
    return (
        <motion.button
        className={type === "one" ? "button1" : "button2"}
        onClick={() => null}>
            {text}
        </motion.button>
    )
}

