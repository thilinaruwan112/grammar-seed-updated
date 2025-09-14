'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.1-.6s.2-.2.4-.4c.1-.1.2-.2.2-.3.1-.1 0-.3-.1-.4-.1-.1-.6-1.5-.8-2.1s-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.8.8-1 1.7-.2.9 0 1.8.2 2.1.2.3.8 1.6 2.4 3.2.8.8 1.4 1.1 2 1.3.4.1.9.1 1.2.1.4-.1.8-.4.9-.8.1-.4.1-.8 0-.9-.1-.1-.2-.2-.4-.3zM12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
  </svg>
);

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href="https://wa.me/94707879292"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </Link>
    </motion.div>
  );
}
