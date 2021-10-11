import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { PositionIndicator } from "./PositionIndicator";
import { CarouselButton } from "./CarouselButton";

import "../../../styles/components/carousel.scss";
import {
  carouselImageVariant,
  carouselVariant,
  dummyVariant,
  learnMoreVariant,
  scrollGuideVariant,
} from "./../../../animations/index";
import jlcAcademyImg from "../../../assets/images/jlcAcademyImg.png";
import jlcServesImg from "../../../assets/images/jlcServesImg.png";
import {
  IProjectInfo,
  ICarousel,
  IProjectList,
} from "../../../types/interface";
import useWindowDimensions from "./../../../hooks/index";

import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

export const Carousel: React.FC<ICarousel> = ({
  setShowProjectOverlay,
  showProjectOverlay,
  isMobile,
  isTablet
}) => {
  // Animation Set Up
  const carouselItemControls = useAnimation();
  const carouselImageControls = useAnimation();


  // List of projects with its information
  let projectList: IProjectList = [
    {
      abbreviation: "jlcServes",
      name: "JLC Serves",
      link: "https://www.jlcserves.org/",
      github: "https://github.com/pjaew94/JLC-Serves-v2-FrontEnd",
      image: jlcServesImg,
      problem: [
        "Jesus Love Church is a small church located in Lansdale, PA. Despite it's size, the congregation is involved in numerous charities and missions.",
        "These include building/funding 3 schools in Haiti, feeding 100-150 homeless in Philadelphia weekly, and funding missionaries in North Korea and Russia.",
        "While most of the funds used are from the people within the church, there are outsiders who are willing to contribute. However, the only way to accept donations were through cash and checks delivered by hand or mail.",
      ],

      solution: [
        "In hopes of reducing friction for people who were willing to donate, jlcserves.org was built. The full stack application is able to accept payments via. Stripe and Paypal to cover all types of payments.",
        "Since launch, the church received thousands in donations and gained major recognition from locals. Through the extra donations, the church was able to fund tens of teachers and build 3 schools in haiti and increase weekly food donations from 100 bags to 200 bags.",
      ],
      technologies: [
        {
          tech: "React",
          desc: "Optimal front-end framework for easy implementation and maintainability",
        },
        {
          tech: "Redux",
          desc: "Global state manager for simpler readability and maintenance",
        },
        {
          tech: "NodeJS",
          desc: "Effortless method of developing fast web servers for the project",
        },
        {
          tech: "ExpressJS",
          desc: "Minimal framework for NodeJS that provides great performance as well as scalability",
        },
        {
          tech: "MongoDB",
          desc: "Great database for storing and mutating undemanding data sets",
        },
        {
          tech: "Mongoose",
          desc: "No-brainer pair for MongoDB for seamless data management and schema validation",
        },
        {
          tech: "Amazon S3",
          desc: "Exceptional cloud storage for media files to increase the website's performance",
        },
        {
          tech: "Stripe",
          desc: "Online payment processing for variety of payment methods for accepting donations",
        },
        {
          tech: "Paypal Dev.",
          desc: "Implemented as some donors may want to PayPal for the transaction",
        },
        {
          tech: "Styled-Components",
          desc: "Component-level styling library chosen to test it's implementation efficiency against my ideal styling method (SCSS)",
        },
        {
          tech: "RESTful API",
          desc: "Used to allow client and the server to evolve individually",
        },
        {
          tech: "Netlify",
          desc: "Amazing platform to host the client side of application - Avoided hosting client on Heroku, as Heroku's IP address evolves based on activity of site, which produces abysmal rendering times",
        },
        {
          tech: "Heroku",
          desc: "Used to host server side of application - Simple method of creating a server that runs 24/7",
        },
      ],
    },
    {
      abbreviation: "jlcAcademy",
      name: "JLC Academy",
      link: "https://www.jlcacademy.com/",
      github: "https://github.com/pjaew94/JLC-Tutor-FrontEnd",
      image: jlcAcademyImg,
      problem: [
        "In the summer of 2019, Jesus Love Church began hosting Saturday school program for students in middle to high school. The program assisted students excel in school curriculums as well as help prepare for standardized tests.",
        "Problem arose when teachers quickly realized there was no system to remind the students of homework and upcoming tests. This issue took a toll on the student's performances, in which impacted the classroom's experiences negatively.",
      ],
      solution: [
        "In order to combat this issue, jlcacademy.com was developed. The site is a simple web application, which gives the teachers the tools to upload reminders for the students. The students can also post questions or comments on the reminders for teacher to student interaction.",
        "The web application increased homework completion from merely 45% to astounding 96% in a span of few weeks.",
      ],
      technologies: [
        {
          tech: "React",
          desc: "Optimal front-end framework for easy implementation and maintainability",
        },
        {
          tech: "Redux",
          desc: "Global state manager for simpler readability and maintenance",
        },
        {
          tech: "NodeJS",
          desc: "Effortless method of developing fast web servers for the project",
        },
        {
          tech: "ExpressJS",
          desc: "Minimal framework for NodeJS that provides great performance as well as scalability",
        },
        {
          tech: "MongoDB",
          desc: "Great database for storing and mutating undemanding data sets",
        },
        {
          tech: "Mongoose",
          desc: "No-brainer pair for MongoDB for seamless data management and schema validation",
        },
        {
          tech: "Axios",
          desc: "Exceptional library for making API calls as it allows HTTP request interception",
        },
        {
          tech: "SCSS",
          desc: "Fabulous way of styling the application as it provides extra functions for great maintainability and readability",
        },
        {
          tech: "RESTful API",
          desc: "Used to allow client and the server to evolve individually",
        },
        {
          tech: "Netlify",
          desc: "Amazing platform to host the client side of application - Avoided hosting client on Heroku, as Heroku's IP address evolves based on activity of site, which produces abysmal rendering times",
        },
        {
          tech: "Heroku",
          desc: "Used to host server side of application - Simple method of creating a server that runs 24/7",
        },
      ],
      warning:
        "If you would like to test the website, please feel free use the following credentials: User: guest@jlcacademy.com | Password: guest123",
    },
  ];

  // State for which slide the carousel is in
  const [currentPosition, setCurrentPosition] = useState(0);
  //   State for if the image is being dragged
  const [isBeingDragged, setIsBeingDragged] = useState({
    isIt: false,
    xValue: 1000,
  });

  //   Function for adjusting carousel position based on clicks
  const onCarouselButtonClick = async (
    type: "prev" | "next"
  ): Promise<void> => {
    switch (type) {
      case "prev":
        if (currentPosition === 0) {
          await carouselItemControls.start("fadeOutRight");
          setCurrentPosition(projectList.length - 1);
          setIsBeingDragged({ isIt: false, xValue: 1000 });
          await carouselItemControls.start("fadeInRight");
          await carouselImageControls.start("dragReset");
        } else {
          await carouselItemControls.start("fadeOutRight");
          setCurrentPosition(currentPosition - 1);
          setIsBeingDragged({ isIt: false, xValue: 1000 });
          await carouselItemControls.start("fadeInRight");
          await carouselImageControls.start("dragReset");
        }
        break;
      case "next":
        if (currentPosition === projectList.length - 1) {
          await carouselItemControls.start("fadeOutLeft");
          setCurrentPosition(0);
          setIsBeingDragged({ isIt: false, xValue: 1000 });
          await carouselItemControls.start("fadeInLeft");
          await carouselImageControls.start("dragReset");
        } else {
          await carouselItemControls.start("fadeOutLeft");
          setCurrentPosition(currentPosition + 1);
          setIsBeingDragged({ isIt: false, xValue: 1000 });
          await carouselItemControls.start("fadeInLeft");
          await carouselImageControls.start("dragReset");
        }
        break;
      default:
        break;
    }
  };

  // Function for opening project overlay desktop when image is clicked
  const openProjectOverlay = (projectInfo: IProjectInfo): void => {
    const { problem, solution, name, link, github, technologies, warning } =
      projectInfo;

    setShowProjectOverlay({
      show: isMobile ? "mobile" : "desktop",
      problem,
      solution,
      name,
      link,
      github,
      technologies,
      warning,
    });
  };

  const { width, height } = useWindowDimensions();
  let imageHeight = height * 0.69 * 1.715;

  const dragDirectionFunc = (xPos: number): void => {
    if (xPos < isBeingDragged.xValue) {
      setIsBeingDragged({ isIt: true, xValue: xPos });
    } else {
      setIsBeingDragged({ isIt: false, xValue: xPos });
    }
  };

  return (
    <motion.div className="carousel-container">
      {isTablet || isMobile ? (
        <div className="mobile-carousel-guides-container">
          <motion.button
            className="project-info-expand-button"
            variants={learnMoreVariant}
            whileTap="animate"
            onClick={() => openProjectOverlay(projectList[currentPosition])}
          >
            <h4>Learn More</h4>
          </motion.button>
          <motion.div
            variants={scrollGuideVariant}
            animate={isBeingDragged.isIt ? "hide" : "animate"}
            className="scroll-guide"
          >
            <IconContext.Provider value={{ className: "scroll-guide-arrow" }}>
              <IoIosArrowForward />
            </IconContext.Provider>
          </motion.div>
        </div>
      ) : null}
      <motion.div className="carousel">
        {projectList.map((item, i) => {
          return (
            <motion.div
              key={i}
              variants={currentPosition === i ? carouselVariant : dummyVariant}
              animate={carouselItemControls}
              className={`carousel-item carousel-item-${i} carousel-item-${
                i !== currentPosition ? "hide" : "show"
              }`}
            >
              <motion.img
                className={item.abbreviation}
                variants={carouselImageVariant}
                animate={carouselImageControls}
                drag={isTablet || isMobile ? "x" : false}
                dragElastic={0.1}
                dragConstraints={{ left: width - imageHeight, right: 0 }}
                src={item.image}
                onDragEnd={(_, info) => dragDirectionFunc(info.point.x)}
                alt=""
                whileHover={!isTablet ? "onHover" : ""}
                custom={item.abbreviation !== "jlcAcademy"}
                onClick={() => openProjectOverlay(item)}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <div className="carousel-button-position-indicator-container">
        <CarouselButton
          type="prev"
          currentPosition={currentPosition}
          onCarouselButtonClick={onCarouselButtonClick}
        />
        <PositionIndicator
          currentPosition={currentPosition}
          projectListLength={projectList.length}
        />
        <CarouselButton
          type="next"
          currentPosition={currentPosition}
          onCarouselButtonClick={onCarouselButtonClick}
        />
      </div>
    </motion.div>
  );
};
