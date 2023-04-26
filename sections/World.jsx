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
      <TypingText title="Educational Scope.." textStyles="text-center" />

      <div className="flex flex-wrap items-center justify-around w-full">
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative flex w-full lg:w-1/2"
        >
          <Image
            src="/world.png"
            alt="map"
            width={1}
            height={1}
            className="object-contain w-full h-full"
          />
        </motion.div>

        <div className="flex-col w-full gap-2 text-center lg:text-left lg:w-1/2">
          <TextGradient title={<>MuAD goes INTERNATIONAL</>} />

          <motion.div
            variants={fadeIn('up', 'tween', 0.05, 0.5)}
            className="flex flex-wrap items-baseline justify-center gap-2"
          >
            <p className="mt-5 text-lg font-normal text-center text-black md:text-xl lg:text-left">
              <span className="font-extrabold text-gradient">
                Kolaborasi dan Bertukar Informasi
              </span>{' '}
              dengan berbagai lembaga pendidikan baik di dalam negeri maupun di
              luar negeri melalui program{' '}
              <span className="font-extrabold text-gradient">
                Student's Exchange
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default World;
