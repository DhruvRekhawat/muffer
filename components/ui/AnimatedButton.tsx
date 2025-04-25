// components/AnimatedButton.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { JSX } from 'react';

const AnimatedButton = ({ text, href, icon }: { text: string, href: string, icon?: JSX.Element }) => {
  return (
    <Link href={href}>
      <motion.a
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-800 text-white rounded cursor-pointer"
        whileHover={{ 
          scale: 1.05,
          backgroundColor: '#333',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg font-medium">{text}</span>
        {icon && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="ml-1"
          >
            {icon}
          </motion.span>
        )}
      </motion.a>
    </Link>
  );
};

export default AnimatedButton;