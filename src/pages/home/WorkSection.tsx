import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ISection } from "../../types/interface";
import { useInView } from "react-intersection-observer";
import {
  paragraphVariant,
  showHidingTextVariant,
} from "./../../animations/index";
import "../../styles/components/section.scss";
import { Carousel } from "../../components/nonReusable/carousel/Carousel";

export const WorkSection: React.FC<ISection> = ({
  heading1,
  textColor,
  section,
  background,
  setComponentInView,
  setShowProjectOverlay,
  showProjectOverlay,
  componentInView,
  paragraph,
  isMobile,
  isTablet
}) => {
  const { ref, inView } = useInView({
    threshold: [0.4, 0.9]
  });

  const h1Controls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (inView) {
        h1Controls.start("animate");
        paragraphControls.start("animate");
      setComponentInView({ section, textColor, background });
    }
  }, [inView, background, h1Controls, paragraphControls, section, setComponentInView , textColor]);

  return (
    <motion.div ref={ref} className="work-section section">
      <div className="text-container">
        <div className="h1-container h1-line1 last-line">
          <motion.h1
            variants={showHidingTextVariant}
            initial="initial"
            animate={h1Controls}
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
          />
        </div>

        <motion.p
          variants={paragraphVariant}
          initial="initial"
          animate={paragraphControls}
          custom={0.45}
        >
          {paragraph}
        </motion.p>
      </div>

      <Carousel 
        setShowProjectOverlay={setShowProjectOverlay!}
        showProjectOverlay={showProjectOverlay!}
        isMobile={isMobile!}
        isTablet={isTablet!}
      />
    </motion.div>
  );
};
