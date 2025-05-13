"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Star rating animation
  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200
      }
    })
  };

  // Avatar animation
  const avatarContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0, x: 20 },
    visible: {
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-16 text-center mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Available Badge */}
      <motion.div 
        className="flex justify-center mb-6"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          ></motion.div>
          <span>Available for work</span>
        </motion.div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-8"
        variants={itemVariants}
      >
        <motion.span 
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Short-Form video{" "}
        </motion.span>
        <motion.span 
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          editing
        </motion.span>
        <br />
        <motion.span 
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          that skyrockets your views
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="text-xl text-gray-700 max-w-3xl mx-auto mb-10"
        variants={itemVariants}
      >
        Stand out in the fast-paced world of short-form content. We create high-energy, engaging edits that keep viewers hooked and help you grow your audience.
      </motion.p>

      {/* CTA Button and Trust Badges */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-6"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <InteractiveHoverButton>
            Start Your Journey
          </InteractiveHoverButton>
        </motion.div>

        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <motion.div 
            className="flex -space-x-2"
            variants={avatarContainerVariants}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div 
                key={i} 
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                variants={avatarVariants}
                custom={i}
              >
                <Image src={`/client-${i}.png`} width={40} height={40} alt={`Client ${i}`} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="ml-4"
            variants={itemVariants}
          >
            <motion.div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.svg 
                  key={i} 
                  className="w-5 h-5 text-gray-900" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  custom={i}
                  variants={starVariants}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </motion.div>
            <motion.p 
              className="text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              Trusted by 40+ clients
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating objects in background for added visual interest */}
      <div className="relative">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute hidden md:block w-6 h-6 rounded-full bg-gray-200 opacity-30"
            initial={{ 
              x: Math.random() * 600 - 300, 
              y: Math.random() * 200 - 100,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * 600 - 300, 
              y: Math.random() * 200 - 100,
              opacity: 0.3
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5 + (i * 2),
              delay: i * 0.5
            }}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 20)}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;