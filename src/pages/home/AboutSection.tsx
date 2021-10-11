import React, { useEffect } from "react";
import { IAboutInfo, ISection } from "../../types/interface";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import aboutEducation from "../../assets/images/aboutEducation.png";
import aboutLeadership from "../../assets/images/aboutLeadership.png";
import aboutAmbitions from "../../assets/images/aboutAmbitions.png";
import aboutProgramming from "../../assets/images/aboutProgramming.png";
import { showHidingTextVariant } from "../../animations";
import "../../styles/components/aboutInfo.scss";
import {AboutInfoCard} from '../../components/nonReusable/aboutInfoCard/AboutInfoCard'

export const AboutSection: React.FC<ISection> = ({
  heading1,
  paragraph,
  textColor,
  section,
  background,
  setComponentInView,
  componentInView,
}) => {
  const { ref, inView } = useInView({
    threshold: [0.1, 0.9],
  });

  const h1Controls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (inView) {
      h1Controls.start("animate");
      paragraphControls.start("animate");
      setComponentInView({ section, textColor, background });
    }
  }, [
    inView,
    background,
    h1Controls,
    paragraphControls,
    section,
    setComponentInView,
    textColor,
  ]);

  const aboutInfo: IAboutInfo[] = [
    {
      img: aboutEducation,
      section: "Education",
      text: "I'm a Temple University graduate in biochemistry. As much as I loved the biochemical world, my interest began to gravitate toward programming post-graduation. Which ultimately led me to learn to program on my own.",
    },
    {
      img: aboutLeadership,
      section: "Leadership",
      text: "Since 2015, I've taken the role as praise team leader and president of the young adult group in my church. Through the experience, I've gained a whole new perspective of what it takes to be a leader. Most important realization was this: no matter what position you are in, keep the heart humble, as there is always room to learn from others.",
    },
    {
      img: aboutAmbitions,
      section: "Ambitions",
      text: "Aside from programming, there are many things I'm addicted to: such as playing the drums and basketball, reading, and teaching. I came to understand my craftsmanship in these addictions derived from my obsession to improve. My competitive nature is what fuels me to what I do.",
    },
    {
      img: aboutProgramming,
      section: "Programming",
      text: "Ever since I've learned programming, I've never looked back. Through this skill, I am able to freely create anything I want to, bounded only by my own imagination and capabilities. The endless room for improvement this craft offers is too appealing to let go.",
    },
  ];

  return (
    <div ref={ref} className="about-section section">
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
      </div>

      <div className="about-info-cards-container">
        {aboutInfo.map((info, i) => {
          return (
            <AboutInfoCard
              key={i}
              section={info.section}
              text={info.text}
              img={info.img}
              componentInView={componentInView}
            />
          );
        })}
      </div>
    </div>
  );
};
