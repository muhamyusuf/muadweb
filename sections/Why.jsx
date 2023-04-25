'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Why = () => (
  <section className="relative z-10 paddings" id="Why">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex-col mx-auto innerWidth flexCenter"
    >
      <TypingText
        title="Mengapa Harus SMP Mu Ahmad Dahlan ?"
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[5px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <div className="px-[30px] md:px-[80px] lg:px-[150px] py-[30px] md:py-[50px]">
          <p className="text-lg font-normal text-black md:text-xl">
            <span className="font-extrabold text-gradient">
              SMP Mu Ahmad Dahlan
            </span>{' '}
            adalah lembaga pendidikan berbasis keagamaan yang sudah
            berpengalaman dan mendunia lebih dari{' '}
            <span className="text-orange-500">7</span> tahun sejak{' '}
            <span className="text-orange-500">2015</span>
          </p>
        </div>
      </motion.div>

      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/stamp.png"
        alt="arrow down"
        className="w-[30px] h-[30px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default Why;
