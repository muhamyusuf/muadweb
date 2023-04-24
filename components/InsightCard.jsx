'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <Image
      src={imgUrl}
      alt="planet-01"
      width={270}
      height={250}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={40}
          height={40}
          className="object-contain rotate-[29deg]"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
