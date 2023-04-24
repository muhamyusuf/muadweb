'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TextGradient, TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className="relative z-10 paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col mx-auto innerWidth"
    >
      <TypingText title="Simplicity is Trend" textStyles="text-center" />
      <div className="flex-col gap-2 flexCenter">
        <TitleText
          title={<>Apply simplicity and be</>}
          textStyles="text-center"
        />
        <TextGradient title={<>GLOBAL</>} />
      </div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          src="/map.png"
          alt="map"
          width={1}
          height={1}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
