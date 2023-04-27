'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col items-center justify-center gap-4 md:flex-row"
  >
    <Image
      src={imgUrl}
      alt="planet-01"
      width={270}
      height={250}
      className="md:w-[370px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="flex items-center justify-center w-full">
      <div className="flex-1 md:ml-[10px] flex flecCenter flex-col max-w-[650px] ml-3">
        <h4 className="font-semibold lg:text-[32px] text-[24px] text-gradient">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[18px] text-[8px] text-black">
          {subtitle}
        </p>
        <button
          type="button"
          className="flexCenter mt-[24px] md:w-[200px] w-full h-[50px] rounded-md bg-primary-blue hover:border-[#132d3ad4] hover:border-2 hover:bg-transparent hover:text-primary-blue transition duration-200 ease-out  text-white font-semibold text-[18px]"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
