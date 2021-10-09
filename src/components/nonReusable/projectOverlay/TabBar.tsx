import { motion } from "framer-motion";
import React, { useState } from "react";
import { ITabBar } from "../../../types/interface";
import { showHidingTextVariant } from "./../../../animations/index";

export const TabBar: React.FC<ITabBar> = ({
  tab,
  index,
  selectedTab,
  setSelectedTab,
  showHidingTextControl,
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className={`tab tab-${index + 1}`}>
      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setSelectedTab(tab)}
        variants={showHidingTextVariant}
        initial="initial"
        animate={showHidingTextControl}
        custom={1.2}
      >
        <motion.div
          className={`tab-expand-line ${
            isHovered || selectedTab === tab ? "expand-line" : ""
          }`}
        />
        <h4>{tab}</h4>
      </motion.button>
      <motion.div className="tab-hider" />
    </div>
  );
};
