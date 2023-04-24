'use client';

import { useState } from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { navbarLinks } from '../constants';
import { navVariants } from '../utils/motion';

import muad from '../public/muad.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative z-30 py-8 xPaddings"
    >
      <div className="flex justify-between gap-8 mx-auto innerWidth">
        <Link to="Home" className="cursor-pointer z-[10]">
          <Image src={muad} alt="logo" height={25} width={100} />
        </Link>

        <button
          type="button"
          onClick={() => {
            setNavOpen(!navOpen);
            const body = document.querySelector('body');
            body.style.overflow = navOpen ? 'auto' : 'hidden';
          }}
          className="z-[30] md:hidden"
        >
          {navOpen ? (
            <Image
              src="/close.svg"
              width={40}
              height={40}
              alt="logo"
              className="object-contain"
            />
          ) : (
            <Image
              src="/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="object-contain"
            />
          )}
        </button>

        <div className="hidden md:block">
          <ul className="flex gap-3">
            {navbarLinks.map((item) => (
              <Link to={item.link} spy smooth offset={20} duration={200}>
                <li className="font-bold text-center text-white cursor-pointer text-md">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div
          className={`${
            navOpen ? 'absolute' : 'hidden'
          } transition-all duration-500 ease-out md:hidden bg-primary-black h-screen inset-0 z-[20]`}
        >
          <ul className="flex flex-col justify-start pt-[20%] gap-[50px] z-[22] text-5xl cursor-pointer">
            {navbarLinks.map((item) => (
              <Link to={item.link} spy smooth offset={20} duration={200}>
                <li
                  className="font-bold text-center text-white cursor-pointer text-md"
                  onClick={() => {
                    setNavOpen(!navOpen);
                    const body = document.querySelector('body');
                    body.style.overflow = navOpen ? 'auto' : 'hidden';
                  }}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
