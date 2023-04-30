import { forwardRef } from 'react';
import Image from "next/image";

import { motion } from 'framer-motion';

import Title from "../UI/title/title";
import Subtitle from "../UI/subtitle/subtitle";
import Paragraph from "../UI/paragraph/paragraph";
import Button from '../UI/button/button';

import { textAnimation, zoomIn } from '@/utils/motion';

import styles from "./hero.module.scss";

const ImageRef = forwardRef(
  (_, ref) => {

    return <Image
      src="/images/hero.png"
      width={724}
      height={467}
      alt="adds on webpage"
      className={styles.image}
      ref={ref} />;
  }
);

ImageRef.displayName = 'ImageRef'



const MotionTitle = motion(Title)
const MotionSubtitle = motion(Subtitle)
const MotionParagraph = motion(Paragraph)
const MotionButton = motion(Button)
const MotionImage = motion(ImageRef)

const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.heading}>
            <MotionTitle
              variant="h1"
              custom={1}
              variants={textAnimation()}>
              Major advertising network
            </MotionTitle>

            <MotionSubtitle
              custom={2}
              variants={textAnimation()}>
              To buy and sell traffic
            </MotionSubtitle>
          </div>

          <MotionParagraph
            variants={textAnimation()}
            custom={3}
            className={styles.text}>
            uniting webmasters, arbitrageurs, website and app owners,
            media-bayers, advertisers and more
          </MotionParagraph>

          <MotionButton
            variants={textAnimation()}
            custom={4}
            className={styles.button}>
            Register
          </MotionButton>
        </div>

        <MotionImage variants={zoomIn(0.5)} />
      </div>
    </motion.section>
  );
};

export default Hero;
