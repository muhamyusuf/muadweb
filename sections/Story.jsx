'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Story = () => (
  <section className="relative z-10 paddings" id="Story">
    <div className="z-0 gradient-02" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex-col mx-auto innerWidth flexCenter"
    >
      <TypingText title="About Simplicity" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Simplicity</span> is a new
        thing in design, where you can enjoy the catching visual and statisfy
        look with
        <span className="font-extrabold text-white">
          Value & Meaningfully
        </span>{' '}
        of design, using consistency{' '}
        <span className="font-extrabold text-white">Component</span> structure,
        you can easily design and develop design system whatever you want, turn
        your web design into{' '}
        <span className="font-extrabold text-white">Simplicity</span> concepts.
        Let's <span className="font-extrabold text-white">explore</span> the
        simplicity application for web development
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default Story;
