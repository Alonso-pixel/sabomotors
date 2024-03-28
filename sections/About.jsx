"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="¿Quiénes somos?" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Sabo Motors </span>
es una empresa que se dedica a la venta de vehículos seminuevos,
      otorgamos crédito en seminuevos auditados, seriedad y confianza a un precio competitivo. Comprometidos con la mejora continua y la protección de tu patrimonio.Nos hemos consolidado como una
      de las mejores opciones para adquirir un vehículo en Ixtapaluca. Nuestro principal objetivo es ofrecer a nuestros clientes
      vehículos de calidad a precios accesibles.
        <br />
        <span className="font-extrabold text-white"> Propuesta de proyecto</span>
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-6"
      />
    </motion.div>
  </section>
);

export default About;
