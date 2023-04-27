'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className="mt-10 paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-6 mx-auto innerWidth lg:flex-row"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[500px] flex justify-evenly flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative glassmorphism cursor-default"
      >
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-black">
            Pesan Singkat..
          </h4>
          <p className="mt-[8px] sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-gradient font-semibold">
            Untuk generasi muda Indonesia
          </p>
        </div>

        <p className="mt-[10px] font-normal sm:text-[24px] text-[18px] sm:leading-[30.6px] leading-[25.6px] text-black pt-2 md:pt-10">
          “Ingat jadi apapun kalian, jadilah orang yg apabila diseru seruan adzan kalian bangkit dan memenuhi panggilanNya, jadikanlah Sholat sebagai perisaimu dan Al Quran penuntunmu.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex items-center justify-center flex-1"
      >
        <Image
          src="/gradientweb.png"
          alt="planet-09"
          width={600}
          height={600}
          className="w-full lg:h-[400px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/stamp.png"
            alt="stamp"
            width={155}
            height={155}
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
