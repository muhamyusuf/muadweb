'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <div className="absolute w-full h-full">
      <Image
        src={imgUrl}
        alt="planet-04"
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-[24px]"
      />
    </div>
    {active !== id ? (
      <h2 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] transition duration-1000 ease-in-out lg:origin-[0,0]">
        {title}
      </h2>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className="flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
          <Image
            src="/headset.svg"
            alt="headset"
            width={32}
            height={32}
            className="object-contain w-1/2 h-1/2"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Try it now
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
