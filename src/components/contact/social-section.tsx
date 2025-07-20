'use client';

import { Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// WhatsApp icon as an SVG component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-white"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M18.413 5.587A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.742.448 3.395 1.258 4.84L2.05 22l5.286-1.205A9.95 9.95 0 0 0 12 22a9.996 9.996 0 0 0 9.98-9.923c0-1.742-.448-3.395-1.258-4.84l-2.309-4.65zM12 20.005a7.95 7.95 0 0 1-4.243-1.22l-.303-.18-3.153.72.73-3.085-.198-.315a7.957 7.957 0 0 1-1.24-4.927c0-4.41 3.59-8.001 8-8.001a7.994 7.994 0 0 1 7.985 8.006c0 4.41-3.59 8.001-8 8.001zm4.312-5.462c-.22-.11-.736-.363-1.09-.405-.353-.042-.61-.062-.868.105-.258.167-.867.867-1.063 1.043s-.393.208-.736.062c-.343-.146-1.44-.53-2.743-1.693-.976-.87-1.63-1.947-1.826-2.29-.196-.343-.02-.53.084-.69.094-.146.208-.258.313-.393.104-.134.167-.22.25-.373.083-.15.04-.28-.02-.393-.06-.11-.867-2.083-1.185-2.853-.31-.747-.63-.645-.867-.645h-.22c-.258 0-.52.062-.79.373-.27.31-.963.94-1.2 1.846-.238.908-.042 1.847.167 2.394.21.547.962 2.126 3.02 4.14 2.587 2.52 4.13 2.98 4.7 3.23.57.25 1.06.21 1.46.126.46-.094 1.24-.51 1.41-.983.17-.473.17-.886.126-1.002s-.21-.19-.43-.3z"
      clipRule="evenodd"
    />
  </svg>
);


const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', bgColor: 'bg-blue-600' },
  { icon: WhatsAppIcon, href: '#', label: 'WhatsApp', bgColor: 'bg-green-500' },
  { icon: Youtube, href: '#', label: 'YouTube', bgColor: 'bg-red-600' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function SocialSection() {
  return (
    <motion.section
      className="py-16 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-headline text-foreground mb-6">
            Follow Grammar Seed for updates and tips!
          </h2>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.label} href={link.href} aria-label={link.label}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${link.bgColor} hover:opacity-90 transition-opacity`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
