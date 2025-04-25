"use client"

// TrustedBy.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Logo {
  id: number;
  name: string;
  path: string;
}

const TrustedBy: React.FC = () => {
  // Logo data with company names and paths
  const allLogos: Logo[] = [
    { id: 1, name: 'Huge', path: '/logos/logoipsum-1.svg' },
    { id: 2, name: 'Spotify', path: '/logos/logoipsum-2.svg' },
    { id: 3, name: 'AKQA', path: '/logos/logoipsum-3.svg' },
    { id: 4, name: 'Linktree', path: '/logos/logoipsum-4.svg' },
    { id: 5, name: '27b', path: '/logos/logoipsum-5.svg' },
    { id: 6, name: 'Ogilvy', path: '/logos/logoipsum-6.svg' },
    // Add more logos as needed
  ];

    // Number of logos to display at once
    const displayCount: number = 5;
  
    // State to keep track of current logos
    const [visibleLogos, setVisibleLogos] = useState<Logo[]>(allLogos.slice(0, displayCount));
    
    // Animation timing
    useEffect(() => {
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
    }, [visibleLogos]);
  
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
                <div className="h-16 flex items-center">
                  <Image 
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={48}
                    style={{ objectFit: 'contain' }}
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