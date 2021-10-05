import React from "react";
import { motion } from "framer-motion";

interface IPositionIndicator {
  currentPosition: number;
  projectListLength: number;
}

export const PositionIndicator: React.FC<IPositionIndicator> = ({
  currentPosition,
  projectListLength,
}) => {
  return (
    <motion.div>
      <h4>
        {currentPosition + 1} / {projectListLength}
      </h4>
    </motion.div>
  );
};
