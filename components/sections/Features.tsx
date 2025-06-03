"use client"
import { motion, useInView } from 'framer-motion';
import { Award, ChevronDown, Clock, Edit, Film, Layers,  Package2, Sparkles, Users, Video, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

// Types
interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: FeatureItem[];
  imageUrl: string;
  href: string;
  imageAlt: string;
  accentColor: string;
  reversed?: boolean;
}

interface LenisInstance {
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number; immediate?: boolean }) => void;
  on: (event: string, callback: (...args: any[]) => void) => void;
  off: (event: string, callback: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    lenis?: LenisInstance;
  }
}

export default function Features(): JSX.Element {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  
  const [isScrolling, setIsScrolling] = useState(false);

  // Section in-view detection
  const section1InView = useInView(section1Ref, { amount: 0.5 });
  const section2InView = useInView(section2Ref, { amount: 0.5 });
  const section3InView = useInView(section3Ref, { amount: 0.5 });
  const section4InView = useInView(section4Ref, { amount: 0.5 });
  
  // Update current section based on which is in view


  // Integration with Lenis for smooth scrolling
  useEffect(() => {
    const handleScrollStart = () => {
      setIsScrolling(true);
    };
    
    const handleScrollEnd = () => {
      setIsScrolling(false);
    };
    
    if (window.lenis) {
      window.lenis.on('scroll', handleScrollStart);
      
      let scrollTimeout: NodeJS.Timeout;
      const scrollListener = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScrollEnd, 150);
      };
      
      window.lenis.on('scroll', scrollListener);
      
      return () => {
        window.lenis?.off('scroll', handleScrollStart);
        window.lenis?.off('scroll', scrollListener);
      };
    }
  }, []);

  // Scroll to section function with Lenis support
  const scrollToSection = (index: number): void => {
    if (isScrolling) return;
    
    const sections = [section1Ref, section2Ref, section3Ref, section4Ref];
    const targetSection = sections[index]?.current;
    
    if (targetSection) {
      if (window.lenis) {
        window.lenis.scrollTo(targetSection, { 
          offset: 0,
          duration: 1.5,
          immediate: false
        });
      } else {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 1, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 60,
        damping: 15,
        mass: 1.2,
        velocity: 0.5
      }
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-xl md:max-w-6xl px-6">
        <div className="text-center mb-12 pt-16 md:pt-24">
          <h2 className="text-4xl font-bold lg:text-5xl">Products</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Empower your brand with high-quality video content tailored for your needs
          </p>
        </div>
        
        <div className="relative">
          {/* Section 1: EDITMAX */}
          <div ref={section1Ref} className="min-h-screen flex items-center scroll-mt-16">
            <motion.div
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
              variants={cardVariants}
              className="w-full py-16 md:py-24"
            >
              <FeatureCard 
                title="EDIT MAX"
                description="Professional video editing services that transform your raw footage into polished content"
                icon={<Edit className="size-8" />}
                features={[
                  { icon: <Clock className="size-5" />, text: "Options for short, standard & premium durations" },
                  { icon: <Zap className="size-5" />, text: "Quick turnaround options available" },
                  { icon: <Sparkles className="size-5" />, text: "Professional captions & audio mastering" }
                ]}
                imageUrl="/illustrations/business-video-presentation.svg"
                imageAlt="EDITMAX illustration"
                accentColor="bg-blue-500"
                href='/editmax'
              />
              <div className="flex justify-center mt-16">
                <button 
                  onClick={() => scrollToSection(1)} 
                  className="animate-bounce p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Scroll to next section"
                >
                  <ChevronDown className="size-6" />
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Section 2: ADMAX */}
          <div ref={section2Ref} className="min-h-screen flex items-center scroll-mt-16">
            <motion.div
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
              variants={cardVariants}
              className="w-full py-16 md:py-24"
            >
              <FeatureCard 
                title="AD MAX"
                description="High-quality video ads using stock footage or creator-based content for maximum engagement"
                icon={<Video className="size-8" />}
                features={[
                  { icon: <Users className="size-5" />, text: "Professional creators matched to your brand" },
                  { icon: <Film className="size-5" />, text: "Stock-based or creator-based options" },
                  { icon: <Layers className="size-5" />, text: "Multiple hooks & custom script options" }
                ]}
                imageUrl="/illustrations/business-pitch.svg"
                imageAlt="ADMAX illustration"
                accentColor="bg-green-500"
                reversed={true}
                href='/admax'
              />
              <div className="flex justify-center mt-16">
                <button 
                  onClick={() => scrollToSection(2)} 
                  className="animate-bounce p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Scroll to next section"
                >
                  <ChevronDown className="size-6" />
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Section 3: CONTENTMAX */}
          <div ref={section3Ref} className="min-h-screen flex items-center scroll-mt-16">
            <motion.div
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
              variants={cardVariants}
              className="w-full py-16 md:py-24"
            >
              <FeatureCard 
                title="CONTENT MAX"
                description="End-to-end video content production from concept to finished product"
                icon={<Film className="size-8" />}
                features={[
                  { icon: <Award className="size-5" />, text: "Professional scripting & research" },
                  { icon: <Users className="size-5" />, text: "Expert creators matched to your content" },
                  { icon: <Sparkles className="size-5" />, text: "Advanced graphics & SEO thumbnails" }
                ]}
                imageUrl="/illustrations/business-ideas(1).svg"
                imageAlt="CONTENTMAX illustration"
                accentColor="bg-purple-500"
                href='/contentmax'
              />
              <div className="flex justify-center mt-16">
                <button 
                  onClick={() => scrollToSection(3)} 
                  className="animate-bounce p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Scroll to next section"
                >
                  <ChevronDown className="size-6" />
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Section 4: SUBSCRIPTION BUNDLES */}
          <div ref={section4Ref} className="min-h-screen flex items-center scroll-mt-16 pb-16 md:pb-24">
            <motion.div
              initial="hidden"
              animate={section4InView ? "visible" : "hidden"}
              variants={cardVariants}
              className="w-full py-16 md:py-24"
            >
              <FeatureCard 
                title="SUBSCRIPTION BUNDLES"
                description="Monthly video packages for SMBs and regular content creators"
                icon={<Package2 className="size-8" />}
                features={[
                  { icon: <Zap className="size-5" />, text: "Save up to 35% compared to standalone pricing" },
                  { icon: <Package2 className="size-5" />, text: "Flexible plans for different content needs" },
                  { icon: <Award className="size-5" />, text: "Priority service for subscribers" }
                ]}
                imageUrl="/illustrations/business-sales-growth.svg"
                imageAlt="Subscription Bundles illustration"
                accentColor="bg-amber-500"
                reversed={true}
                href='/subscription'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  title, 
  description, 
  icon, 
  features, 
  imageUrl, 
  imageAlt,
  href, 
  accentColor, 
  reversed = false 
}: FeatureCardProps): JSX.Element {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <div className={`grid ${reversed ? 'md:grid-cols-2 md:grid-flow-col-dense' : 'md:grid-cols-2'} gap-8`}>
        <div className={`p-8 md:p-12 flex flex-col justify-center ${reversed ? 'md:order-2' : ''}`}>
          <div className={`${accentColor} rounded-full p-2 inline-flex items-center justify-center w-12 h-12 mb-5 text-white`}>
            {icon}
          </div>
          
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-6">{description}</p>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className={`${accentColor} bg-opacity-20 dark:bg-opacity-30 rounded-full p-1.5`}>
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.text}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 flex ">
            <Link href={href} className='cursor-pointer'>
            <button className={`${accentColor} text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer`}>
              Learn more
            </button>
            </Link>
          </div>
        </div>
        
        <div className={`bg-gradient-to-b relative ${reversed ? 'md:order-1' : ''} from-zinc-100 to-transparent p-px dark:from-zinc-800`}>
          <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
            <Image 
              src={imageUrl} 
              className="w-full h-full object-cover"
              alt={imageAlt} 
              width={500}
              height={500}
            />
          </div>
          <div className={`absolute top-0 left-0 w-full h-1 ${accentColor}`}></div>
        </div>
      </div>
    </div>
  );
}