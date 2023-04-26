'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-semibold text-[20px] md:text-[32px] text-black text- ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[50px] text-[40px] text-gradient ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const TextGradient = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="font-extrabold md:text-[45px] text-[40px] text-transparent bg-gradient-to-r from-orange-500 from-90% to-teal-400 to-10% bg-clip-text"
  >
    {title}
  </motion.h2>
);
