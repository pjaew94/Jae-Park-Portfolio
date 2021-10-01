import React from 'react'
import { motion } from 'framer-motion';
import { IProjectOverlay } from './../../../types/interface';


export const ProjectOverlay: React.FC<IProjectOverlay>= ({ showProjectOverlay }) => {

    const {
        show,
        problem,
        solution,
        result,
        technologies,
        learned,
        name,
        link,
        github,
        type
    } = showProjectOverlay
    return (
        <motion.div style={{position: "fixed", top: 0, left: 0, background: "black", height: "100vh", width: "100vw"}}>
            
        </motion.div>
    )
}
