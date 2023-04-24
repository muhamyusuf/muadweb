'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`yPaddings`} id="Home">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col mx-auto innerWidth pb-[35px]"
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row items-baseline justify-center"
        >
          <h1 className="heroHeading">SMP Mu</h1>
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-col justify-center gap-1 text-center lg:gap-10"
        >
          <h1 className="heroHeading">AHMAD DAHLAN</h1>
          <p className="font-semibold text-secondary-white">
            School of Holictic Education
          </p>
        </motion.div>
      </div>
      {/* <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src="/cover.png"
          alt="cover"
          width={1920}
          height={1080}
          className="w-full sm:h-[350px] h-[300px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <Image
            src="/stamp.png"
            alt="stamp"
            width={155}
            height={155}
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
          />
        </div>
      </motion.div> */}
    </motion.div>
  </section>
);

export default Hero;
