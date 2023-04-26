'use client';

// import Image from 'next/image';
import { motion } from 'framer-motion';
import { newFeatures } from '../constants';
import { NewFeatures, TypingText, TextGradient } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className="relative z-10 mt-10 paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-8 mx-auto innerWidth lg:flex-row"
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="z-20 flex flex-col justify-center text-center"
      >
        <TypingText title="Science.." />
        <div className="flex items-baseline justify-center gap-2">
          <p className="px-3 mt-5 text-lg font-normal text-black md:text-xl">
            <span className="font-extrabold text-gradient">Keilmuan</span>{' '}
            adalah hal yang menjadi penentu karakter seseorang
          </p>
        </div>

        <TextGradient title="Bidang Keilmuan yang ada di SMP Mu Ahmad Dahlan" />
        <div className="mt-[48px] flex flex-wrap justify-center gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
    {/* <Image
      src="/science.jpg"
      alt="get-started"
      width={1}
      height={1}
      className="absolute inset-0 z-10 object-fill w-[100%] h-[100%] blur-sm grayscale"
    /> */}
  </section>
);

export default WhatsNew;
