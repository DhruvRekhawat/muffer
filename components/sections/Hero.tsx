"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center mt-16">
      {/* Available Badge */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Available for work</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl font-bold mb-8">
        Short-Form video{" "}
        editing
        <br />
        that skyrockets your views
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
        Stand out in the fast-paced world of short-form content. We create high-energy, engaging edits that keep viewers hooked and help you grow your audience.
      </p>

      {/* CTA Button and Trust Badges */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         <InteractiveHoverButton>
          Start Your Journey
         </InteractiveHoverButton>
        </motion.div>

        <div className="flex items-center">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image src={`/client-${i}.png`} width={40} height={40} alt={`Client ${i}`} />
              </div>
            ))}
          </div>
          <div className="ml-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-medium">Trusted by 40+ clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;