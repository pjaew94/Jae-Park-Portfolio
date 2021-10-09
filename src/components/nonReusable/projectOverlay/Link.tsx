import { AnimationControls, motion } from "framer-motion";
import React, { useState } from "react";
import { ILink } from "../../../types/interface";
import { showHidingTextVariant } from "./../../../animations/index";

export const Link: React.FC<ILink> = ({
  text,
  link,
  index,
  showHidingTextControl,
  setShowWarning,
}) => {
  const [isHovered, setHovered] = useState(false);

  const linkHovered = () => {
    setHovered(true);
    if (index === 0) {
      setShowWarning(true);
    }
  };

  const linkUnhovered = () => {
    setHovered(false);
    if (index === 0) {
      setShowWarning(false);
    }
  };

  return (
    <div className={`link link-${index + 1}`}>
      <motion.a
        href={link}
        target="_blank"
        onMouseEnter={() => linkHovered()}
        onMouseLeave={() => linkUnhovered()}
        variants={showHidingTextVariant}
        initial="initial"
        animate={showHidingTextControl}
        custom={1.4}
      >
        <motion.div
          className={`link-expand-line ${isHovered && "expand-line"}`}
        />
        <h4>{text}</h4>
      </motion.a>
      <motion.div className="link-hider" />
    </div>
  );
};
