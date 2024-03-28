"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFeatures } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Construcción página web" />
        <TitleText title={<>Para un catálogo de autos que pueda ser consultado fácilmente</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://cdn.dribbble.com/userupload/3146499/file/original-c3a121c93f63c27cf9788e05210c71ce.png"
          alt="autos"
          className="w-[90%] h-[90%] object-contain rounded-lg"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
