import { motion, useAnimation } from "framer-motion";
import React, {useEffect} from "react";
import { IAboutInfo } from "../../../types/interface";
import { useInView } from 'react-intersection-observer';
import { paragraphVariant, showHidingTextVariant } from "../../../animations";

export const AboutInfoCard: React.FC<IAboutInfo> = ({
  section,
  text,
  img,
  componentInView,
}) => {

  const showImgControls = useAnimation();
  const paragraphControls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if(inView) {
      showImgControls.start('animate');
      paragraphControls.start('animate');
    }
  }, [inView])

   return (
    <div className="about-info-card" ref={ref}>
      <div className="about-img-container">
        <motion.img src={img} alt={section + img} 
        variants={showHidingTextVariant}
        initial="initial"
        animate={showImgControls}
        />
        <div
          className="about-img-hider"
          style={{
            background: componentInView?.background,
            transition: "0.8s ease-in-out",
          }}
        />
      </div>
      <motion.h4 className='about-info-title'
           variants={paragraphVariant}
           initial="initial"
           animate={paragraphControls}
           custom={0.2}
      >{section}</motion.h4>
      <motion.p className='about-info-text'
       variants={paragraphVariant}
       initial="initial"
       animate={paragraphControls}
       custom={0.5}
      >{text}</motion.p>
    </div>
  );
};
