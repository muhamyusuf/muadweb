'use client';

import { motion } from 'framer-motion';

import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import {
  InsightCard,
  TypingText,
} from '../components';

const Insights = () => (
  <section className="relative z-10 paddings" id="Insight">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col mx-auto innerWidth"
    >
      <TypingText title="More.." textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
