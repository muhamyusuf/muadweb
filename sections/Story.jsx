'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { Carousel } from '../components';

const imagesItems = [
  <Image
    className="w-full h-full"
    src="/book.png"
    alt="teste"
    width={1}
    height={1}
  />,
  <Image
    className="w-full h-full"
    src="/book.png"
    alt="teste"
    width={1}
    height={1}
  />,
  <Image
    className="w-full h-full"
    src="/book.png"
    alt="teste"
    width={1}
    height={1}
  />,
  <Image
    className="w-full h-full"
    src="/book.png"
    alt="teste"
    width={1}
    height={1}
  />,
  <Image
    className="w-full h-full"
    src="/book.png"
    alt="teste"
    width={1}
    height={1}
  />,
];

const Story = () => {
  return (
    <section className="relative z-10 paddings" id="Story">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex-col mx-auto innerWidth flexCenter"
      >
        <TypingText title="Alumni's Story.." textStyles="text-center" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="font-normal sm:text-[32px] text-[20px] text-center text-black"
        >
          <div className="container flex-col flexCenter">
            <p className="mt-5 text-lg font-normal text-center text-black md:text-xl lg:text-left">
              <span className="font-extrabold text-gradient">
                Pendapat dan Cerita
              </span>{' '}
              Alumni selama menempuh pendidikan di{' '}
              <span className="font-extrabold text-gradient">
                SMP Mu Ahmad Dahlan
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 1)}
          className="flex-col w-full mt-10 flexCenter"
        >
          {/* <div className="flex flex-col justify-center mb-10 space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl">
              Beautiful animated gradients
            </h1>
            <p className="text-xs text-center opacity-75">
              Explore, generate and use seamless animation gradients for your
              next projects
            </p>
          </div> */}
          <Carousel items={imagesItems} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Story;
