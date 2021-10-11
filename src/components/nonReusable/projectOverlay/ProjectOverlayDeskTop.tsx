import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IProjectOverlay } from "../../../types/interface";
import "../../../styles/components/projectOverlay.scss";
import {
  backdropVariant,
  contentVariant,
  showHidingTextVariant,
  paragraphVariant,
  warningVariant,
  slideInProjectOverLayMobileVariant,
} from "./../../../animations/index";
import { TabBar } from "./TabBar";
import { ILinkListItem } from "./../../../types/interface";
import { Link } from "./Link";
import { setTimeout } from "timers";

import { IconContext } from "react-icons/lib";
import { IoIosArrowBack } from "react-icons/io";

export const ProjectOverlayDesktop: React.FC<IProjectOverlay> = ({
  showProjectOverlay,
  setShowProjectOverlay,
  isMobile,
  isTablet,
}) => {
  const { show, problem, solution, technologies, name, link, github, warning } =
    showProjectOverlay;

  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(false);

  const backdropControls = useAnimation();
  const contentControls = useAnimation();
  const showHidingTextControl = useAnimation();
  const slideInProjectOverLayMobileControls = useAnimation();
  const warningControls = useAnimation();

  useEffect(() => {
    if (show === "desktop") {
      backdropControls.start("fadeIn");
      contentControls.start("fadeIn");
      showHidingTextControl.start("animate");
      setTimeout(() => {
        setSelectedTab("Problem");
      }, 1700);
    }
    if (show === "mobile") {
      slideInProjectOverLayMobileControls.start("slideIn");
      warningControls.start('animate')
      showHidingTextControl.start("animate");

      setTimeout(() => {
        setSelectedTab("Problem");
      }, 1500);
    }
  }, [show]);

  const tabList: string[] = ["Problem", "Solution", "Technologies"];
  const linkList: ILinkListItem[] = [
    {
      text: "Visit Site",
      link: link,
    },
    {
      text: "View Code",
      link: github,
    },
  ];

  const removeOverlay = async () => {
    if (isMobile) {
      await slideInProjectOverLayMobileControls.start("slideOut");
      warningControls.start('hide');
    }
    if (!isMobile) await contentControls.start("fadeOut");
    await backdropControls.start("fadeOut");
    await showHidingTextControl.start("hide");
    setShowProjectOverlay({ ...showProjectOverlay, show: false });
    setSelectedTab(null);
  };

  return (
    <motion.div
      className={`project-overlay-desktop ${
        show === "desktop" || show === "mobile"
          ? "project-overlay-desktop-show"
          : null
      }`}
      variants={slideInProjectOverLayMobileVariant}
      initial={isMobile && "initial"}
      animate={slideInProjectOverLayMobileControls}
    >
      {isMobile && (
        <motion.button
          className="back-arrow-button"
          onClick={() => removeOverlay()}
          whileTap={{ scale: 0.8 }}
        >
          <IconContext.Provider value={{ className: "back-arrow" }}>
            <IoIosArrowBack />
          </IconContext.Provider>
        </motion.button>
      )}
      <motion.div
        className="content"
        initial={!isMobile && "initial"}
        variants={contentVariant}
        animate={contentControls}
      >
        <div className="h1-container h1-line1 side-ways">
          <motion.h4
            className="desktop-project-name"
            variants={showHidingTextVariant}
            initial="initial"
            animate={showHidingTextControl}
            custom={isMobile ? 0.5 : 1}
          >
            {name}
          </motion.h4>
          <motion.div
            className="h1-hider"
            style={{
              background: "white",
              transition: "0.8s ease-in-out",
            }}
          />
        </div>

        <div className="tabs-container">
          {tabList.map((tab, i) => {
            return (
              <TabBar
                key={i}
                tab={tab}
                index={i}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                showHidingTextControl={showHidingTextControl}
                isMobile={isMobile}
              />
            );
          })}
        </div>

        <motion.div className="texts-container">
          {selectedTab === "Problem" &&
            problem.map((line, i) => {
              return (
                <motion.p
                  key={"problem" + i}
                  variants={paragraphVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={i * 0.2}
                >
                  {line}
                </motion.p>
              );
            })}
          {selectedTab === "Solution" &&
            solution.map((line, i) => {
              return (
                <motion.p
                  key={"solution" + i}
                  variants={paragraphVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={i * 0.2}
                >
                  {line}
                </motion.p>
              );
            })}
          {selectedTab === "Technologies" &&
            technologies.map((tech, i) => {
              return (
                <motion.div
                  key={"solution" + i}
                  className={`tech-container tech-${i}`}
                  variants={paragraphVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={i * 0.1}
                >
                  <p className="tech">{tech.tech}</p>
                  <p className="desc">{tech.desc}</p>
                </motion.div>
              );
            })}
        </motion.div>

        <div className="links-container">
          {linkList.map((link, i) => {
            return (
              <Link
                key={i}
                text={link.text}
                link={link.link}
                index={i}
                showHidingTextControl={showHidingTextControl}
                setShowWarning={setShowWarning}
                isMobile={isMobile}
              />
            );
          })}
          {isMobile && warning ?  <motion.div
              className="warning"
              initial="initial"
              animate={warningControls}
              variants={warningVariant}
              custom={1.1}
            >
              {warning}
            </motion.div>: null}
          {warning && (
            <motion.div
              className="warning"
              initial="initial"
              animate={showWarning ? "animate" : "hide"}
              variants={warningVariant}
            >
              {warning}
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        onClick={() => removeOverlay()}
        className="backdrop"
        variants={backdropVariant}
        animate={backdropControls}
      />
    </motion.div>
  );
};
