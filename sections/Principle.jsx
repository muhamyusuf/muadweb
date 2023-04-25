'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { startingFeatures } from '../constants';
import { StartSteps, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Keunggulan = () => (
  <section className="relative z-10 paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-wrap gap-8 mx-auto innerWidth"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="z-10 flex flex-col justify-center"
      >
        <TypingText title="Prinsip.." />
        <p className="mt-5 font-normal text-black text-md md:text-xl">
          Hal yang membedakan{' '}
          <span className="font-bold text-gradient">SMP Mu Ahmad Dahlan</span>{' '}
          dari sekolah lainnya adalah
        </p>
        <div className="mt-[31px] flexStart w-full gap-[20px] flex-wrap">
          {startingFeatures.map((feature) => (
            <StartSteps key={feature} text={feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className="flex-1 flexCenter"
      >
        <a href="https://id.pngtree.com/so/pendidikan">
          <Image
            src="/book.png"
            alt="get-started"
            width={1}
            height={1}
            className="w-[400px] h-[400px] object-contain"
          />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Keunggulan;
