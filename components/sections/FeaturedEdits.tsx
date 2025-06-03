"use client"
// components/VideoCarousel.tsx
import { useRef, useEffect, useState, JSX } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { VelocityText } from '../ui/VelocityText';
import { Video } from 'lucide-react';

// Define TypeScript interfaces
interface CarouselItem {
  id: number;
  videoSrc: string;
  thumbnailSrc: string;
  views: string;
}

interface VideoCarouselItemProps {
  item: CarouselItem;
  onPlayStateChange: (isPaused: boolean) => void;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    videoSrc: '/video/editmax.mp4',
    thumbnailSrc: '/illustrations/business-pitch.svg',
    views: '1.1M',
  },
  {
    id: 2,
    videoSrc: '/videos/beach-house.mp4',
    thumbnailSrc: '/images/beach-house-thumb.jpg',
    views: '2.3M',
  },
  {
    id: 3,
    videoSrc: '/videos/mirror-selfie.mp4',
    thumbnailSrc: '/images/mirror-selfie-thumb.jpg',
    views: '10.7M',
  },
  {
    id: 4,
    videoSrc: '/videos/food.mp4',
    thumbnailSrc: '/images/food-thumb.jpg',
    views: '2.1M',
  },
  {
    id: 5,
    videoSrc: '/videos/desert.mp4',
    thumbnailSrc: '/images/desert-thumb.jpg',
    views: '3.7M',
  },
];

export default function VideoCarousel(): JSX.Element {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoplayActive, setIsAutoplayActive] = useState<boolean>(true);
  
  // Function to handle video autoplay pause/resume
  const toggleAutoplay = (pause: boolean): void => {
    setIsAutoplayActive(!pause);
    if (pause) {
      controls.stop();
    } else {
      startCarouselAnimation();
    }
  };

  const startCarouselAnimation = async (): Promise<void> => {
    while (isAutoplayActive) {
      await controls.start({
        x: '-100%',
        transition: { duration: 15, ease: 'linear' },
      });
      
      // Reset position without animation
      controls.set({ x: 0 });
    }
  };

  useEffect(() => {
    if (isAutoplayActive) {
      startCarouselAnimation();
    }
    
    return () => {
      controls.stop();
    };
  }, [isAutoplayActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <h2 className="flex items-center text-md font-medium text-blue-500 bg-accent w-fit px-4 py-2 rounded-full mb-8">
          <Video className='h-4'></Video> Highlighted edits
        </h2>

        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Carousel container */}
          <motion.div 
            className="flex gap-4"
            animate={controls}
          >
            {/* Original set of items */}
            {carouselItems.map((item) => (
              <VideoCarouselItem 
                key={item.id} 
                item={item} 
                onPlayStateChange={toggleAutoplay}
              />
            ))}
            
            {/* Duplicated set for seamless loop */}
            {carouselItems.map((item) => (
              <VideoCarouselItem 
                key={`duplicate-${item.id}`} 
                item={item} 
                onPlayStateChange={toggleAutoplay}
              />
            ))}
          </motion.div>
        </div>
        
      </div>
        <VelocityText ></VelocityText>
    </div>
  );
}

function VideoCarouselItem({ item, onPlayStateChange }: VideoCarouselItemProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const togglePlay = (): void => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        onPlayStateChange(false); // Resume carousel autoplay
      } else {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
            onPlayStateChange(true); // Pause carousel autoplay
          })
          .catch((error) => {
            console.error("Error playing video:", error);
          });
      }
    }
  };

  // Handle video end
  const handleVideoEnd = (): void => {
    setIsPlaying(false);
    onPlayStateChange(false); // Resume carousel autoplay
    // Reset video to beginning
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative min-w-[280px] w-[280px] h-[480px] rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
      <div className="relative w-full h-full">
        {/* Video thumbnail when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.thumbnailSrc})` }}
            ></div>
          </div>
        )}
        
        {/* Actual video element */}
        <video
          ref={videoRef}
          src={item.videoSrc}
          className={`absolute inset-0 w-full h-full object-cover ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          
        />
        
        {/* Play button overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="bg-black bg-opacity-40 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Views counter */}
        <div className="absolute bottom-4 left-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          <span className="ml-2 text-white font-medium">{item.views}</span>
        </div>
      </div>
    </div>
  );
}