'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { newFeatures } from '../constants';
import {
  NewFeatures,
  TitleText,
  TypingText,
  TextGradient,
} from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className="relative z-10 paddings" id="Superiority">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-8 mx-auto innerWidth lg:flex-row"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="Superiority" />
        <TitleText title={<>What's superiority of</>} />
        <TextGradient title={<>Simplicity Design ?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className="flex-1 flexCenter"
      >
        <Image
          src="/hand.png"
          alt="get-started"
          width={1}
          height={1}
          className="w-[90%] h-90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
