import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { HomeSection } from  "./pages/home/HomeSection";
import {
  IScrollState,
  ISectionInfo,
  IProjectOverlayState,
} from "./types/interface";
import { motion } from "framer-motion";
import { WorkSection } from "./pages/home/WorkSection";
import { ProjectOverlay } from "./components/nonReusable/projectOverlay/ProjectOverlay";
import { Carousel } from "./components/nonReusable/carousel/Carousel";

function App() {
  // Colors
  const colors: { [key: string]: string } = {
    black: "#17171d",
    yellow: "#fee17c",
    blue: "#0766f5",
    green: "#73BB8A",
    white: "#ffffff",
  };

  // State to change background/text colors
  const [componentInView, setComponentInView] = useState<IScrollState>({
    section: "home",
    background: colors["white"],
    textColor: "black",
  });

  // State to show project overlay
  const [showProjectOverlay, setShowProjectOverlay] =
    useState<IProjectOverlayState>({
      show: false,
      problem: null,
      solution: null,
      result: null,
      technologies: null,
      learned: null,
      name: null,
      link: null,
      github: null,
      type: null,
    });

  // Section Info
  const sectionInfo: ISectionInfo = {
    homeSection: {
      heading1: { line1: "Full Stack", line2: "Developer" },
      paragraph:
        "I am a developer who welcomes any opportunities to solve real world problems with my continually growing skill set. As an engineer, I am constantly eager to learn new technologies, build applications, and make an impact in our societies. Some of my work include a donation website for a non-profit church organization as well as a educational platform application for students in saturday school.",
      section: "home",
      background: colors["white"],
      textColor: "black",
    },
    workSection: {
      heading1: { line1: "My Work" },
      paragraph:
        "Thanks for checking out my work. The following websites were built using modern technologies and frameworks such as React, Redux, Typescript, MongoDB, Express, Sass and much more! I am always looking to create new projects with any new technologies I pick up along my journey. The goal is simple: learn to create and create to solve problems.",
      section: "work",
      background: colors["yellow"],
      textColor: "black",
    },
  };

  return (
    <motion.div
      className="app background"
      style={{
        background: componentInView.background,
        transition: "0.8s ease-in-out",
      }}
    >
      {/* <ProjectOverlay 
          showProjectOverlay={showProjectOverlay}
      /> */}
      <HomeSection
        heading1={sectionInfo.homeSection.heading1}
        paragraph={sectionInfo.homeSection.paragraph}
        section={sectionInfo.homeSection.section}
        textColor={sectionInfo.homeSection.textColor}
        background={sectionInfo.homeSection.background}
        setComponentInView={setComponentInView}
        componentInView={componentInView}
      />
      <WorkSection
        heading1={sectionInfo.workSection.heading1}
        paragraph={sectionInfo.workSection.paragraph}
        section={sectionInfo.workSection.section}
        textColor={sectionInfo.workSection.textColor}
        background={sectionInfo.workSection.background}
        setComponentInView={setComponentInView}
        componentInView={componentInView}
        setProjectOverlay={setShowProjectOverlay}
      />
    </motion.div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
