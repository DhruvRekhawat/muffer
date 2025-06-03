"use client"

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Import all logo components
import Logoipsum1 from "@/public/logos/logoipsum-1.svg";
import Logoipsum2 from "@/public/logos/logoipsum-2.svg";
import Logoipsum3 from "@/public/logos/logoipsum-3.svg";
import Logoipsum4 from "@/public/logos/logoipsum-4.svg";
import Logoipsum5 from "@/public/logos/logoipsum-5.svg";
import SBILogo from "@/public/logos/sbi-state-bank-of-india.svg";
import KUKULogo from "@/public/logos/KukuFM192-192.svg";
import StardewLogo from "@/public/logos/stardew_logo.svg";

interface Logo {
  id: number;
  name: string;
  img: any; // SVG component type
}

const TrustedBy: React.FC = () => {
  // Memoize the logos array
  const allLogos: Logo[] = useMemo(() => [
    { id: 1, name: 'Huge', img: Logoipsum1 },
    { id: 2, name: 'Spotify', img: Logoipsum2 },
    { id: 3, name: 'AKQA', img: Logoipsum3 },
    { id: 4, name: 'Linktree', img: Logoipsum4 },
    { id: 5, name: '27b', img: Logoipsum5 },
    { id: 6, name: 'Ogilvy', img: SBILogo },
    { id: 7, name: 'KUKU FM', img: KUKULogo },
    { id: 8, name: 'Stardew Labs', img: StardewLogo },
  ], []);

  // Number of logos to display at once
  const displayCount: number = 5;
  
  // State to keep track of current logos
  const [visibleLogos, setVisibleLogos] = useState<Logo[]>(allLogos.slice(0, displayCount));
  
  // Animation timing
  useEffect(() => {
    if (allLogos.length === 0) return;
    
    const interval = setInterval(() => {
      // Rotate logos
      const currentIndex = allLogos.findIndex(logo => logo.id === visibleLogos[0].id);
      const newIndex = (currentIndex + 1) % allLogos.length;
      const endIndex = (newIndex + displayCount > allLogos.length) 
        ? (newIndex + displayCount) % allLogos.length
        : newIndex + displayCount;
      
      if (endIndex > newIndex) {
        setVisibleLogos(allLogos.slice(newIndex, endIndex));
      } else {
        // Handle wrapping around the array
        setVisibleLogos([...allLogos.slice(newIndex), ...allLogos.slice(0, endIndex)]);
      }
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, [visibleLogos, allLogos]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center">
          <div className="h-px bg-gray-200 w-24"></div>
          <h2 className="text-gray-800 mx-6">
            Over <span className="font-semibold">2000</span> creative teams use <span className="font-semibold">muffer</span> to create stunning videos online.
          </h2>
          <div className="h-px bg-gray-200 w-24"></div>
        </div>
      </div>
      
      <div className="flex justify-center items-center space-x-12 md:space-x-16 lg:space-x-20 overflow-hidden">
        <AnimatePresence mode="sync">
          {visibleLogos.map((logo) => (
            <motion.div 
              key={logo.id}
              className="hover:grayscale-0 transition-all duration-200"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                duration: 0.4
              }}
            >
              <div className="h-20 flex items-center">
                <Image 
                  src={logo.img}
                  alt={`${logo.name} logo`}
                  width={70}
                  height={50}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TrustedBy;