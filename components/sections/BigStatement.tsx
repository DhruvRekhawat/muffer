"use client"
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateWords } from "../ui/rotate-words";

const BigStatement = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <AnimatePresence>
        <motion.div
          className="text-center"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <RotateWords text="Need" words={["Content?", "Ads?", "Editing?", "Podcasts?"]}></RotateWords>{" "}
            <span className="relative inline-block">
              <motion.span
                className="relative text-blue-600 z-10"
                initial={{ y: 0 }}
                animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  repeatDelay: 2
                }}
              >
               Just muffer
              </motion.span>
            </span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              It!
            </motion.span>
          </h1>
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium"
          >
            Your one-stop platform for affordable, high-quality creative services.
            <span className="block mt-2 text-blue-600">Fast, reliable, and built for India's creators & SMBs</span>
          </motion.p> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BigStatement;