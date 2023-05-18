import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Title from "../UI/title/title";
import Subtitle from "../UI/subtitle/subtitle";
import Paragraph from "../UI/paragraph/paragraph";
import Button from "../UI/button/button";
import Modal from "../UI/modal/modal";
import RegisterForm from "../UI/register-form/register-form";

import { textAnimation } from "@/utils/motion";

import styles from "./hero.module.scss";

const MotionTitle = motion(Title);
const MotionSubtitle = motion(Subtitle);
const MotionParagraph = motion(Paragraph);
const MotionButton = motion(Button);

const Hero = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.hero}
    >
      <div className={styles.heroBg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <MotionTitle variant="h1" custom={1} variants={textAnimation()}>
              Major advertising network
            </MotionTitle>

            <MotionSubtitle size="lg" custom={2} variants={textAnimation()}>
              To buy and sell traffic
            </MotionSubtitle>
          </div>

          <MotionParagraph
            variants={textAnimation()}
            custom={3}
            className={styles.text}
          >
            uniting webmasters, arbitrageurs, website and app owners,
            media-bayers, advertisers and more more
          </MotionParagraph>

          <MotionButton
            variants={textAnimation()}
            custom={4}
            className={styles.button}
            handleClick={() => setIsRegisterModalOpen(!isRegisterModalOpen)}
          >
            Register
          </MotionButton>
        </div>

        <Modal
          handleClose={() => setIsRegisterModalOpen(false)}
          isOpen={isRegisterModalOpen}
        >
          <RegisterForm handleClose={() => setIsRegisterModalOpen(false)} />
        </Modal>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero.png"
            width={724}
            height={467}
            alt="adds on webpage"
            className={styles.image}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
