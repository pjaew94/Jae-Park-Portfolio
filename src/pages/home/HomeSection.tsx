import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ISection } from "../../types/interface";
import { useInView } from "react-intersection-observer";

import "../../styles/components/section.scss";
import {
  paragraphVariant,
  showHidingTextVariant,
} from "../../animations/index";

export const HomeSection: React.FC<ISection> = ({
  heading1,
  textColor,
  section,
  setComponentInView,
  background,
  componentInView,
  paragraph,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      setComponentInView({ section, textColor, background });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} className="home-section section">
      <div className="text-container">
        <div className="h4-container">
          <motion.h4
            variants={showHidingTextVariant}
            initial="initial"
            animate="animate"
          >
            Jae Park
          </motion.h4>
          <motion.div
            className="h4-hider"
            style={{
              background: componentInView.background,
              transition: "0.8s ease-in-out",
            }}
          ></motion.div>
        </div>
        <div className="h1-container h1-line1">
          <motion.h1
            variants={showHidingTextVariant}
            initial="initial"
            animate="animate"
            custom={0.15}
          >
            {heading1.line1}
          </motion.h1>
          <motion.div
            className="h1-hider"
            style={{
              background: componentInView.background,
              transition: "0.8s ease-in-out",
            }}
          ></motion.div>
        </div>
        <div className="h1-container h1-line2 last-line">
          <motion.h1
            variants={showHidingTextVariant}
            initial="initial"
            animate="animate"
            custom={0.3}
          >
            {heading1.line2}
          </motion.h1>
          <motion.div
            className="h1-hider"
            style={{
              background: componentInView.background,
              transition: "0.8s ease-in-out",
            }}
          ></motion.div>
        </div>
        <motion.p
          variants={paragraphVariant}
          initial="initial"
          animate="animate"
          custom={0.45}
        >
          {paragraph}
        </motion.p>
      </div>
    </motion.div>
  );
};
