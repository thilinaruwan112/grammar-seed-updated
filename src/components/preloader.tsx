'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
      when: 'afterChildren',
    },
  },
};

const bookVariants = {
  initial: {
    y: '0%',
    opacity: 1,
  },
  animate: {
    y: ['0%', '-20%', '0%'],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Simple animated book character
const AnimatedBook = () => (
  <motion.div variants={bookVariants} initial="initial" animate="animate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  </motion.div>
);

export default function Preloader({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
      variants={containerVariants}
    >
      <AnimatedBook />
    </motion.div>
  );
}
