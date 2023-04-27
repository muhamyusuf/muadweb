'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { socials } from '../constants';

import { footerVariants } from '../utils/motion';
import muad from '../public/muad.png';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="relative py-8 xPaddings"
  >
    <div className="flex flex-col gap-8 mx-auto innerWidth">
      {/* <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="font-bold md:text-[50px] text-[30px] text-white">
          Let's do simplicity and upgrade ur skills
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 glassmorphism rounded-[32px] gap-[12px]"
        >
          <Image
            src="/headset.svg"
            alt="headset"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Learn Simplicity
          </span>
        </button>
      </div> */}

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="nav" className="cursor-pointer z-[10]">
            <Image src={muad} alt="logo" height={25} width={100} />
          </Link>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.href}>
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[30px] h-[2px] bg-white opacity-10" />
      </div>

      <p className="text-center text-white">
        2018 © Copyright SMP Muhammadiyah Ahmad Dahlan. All Right Reserved.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
