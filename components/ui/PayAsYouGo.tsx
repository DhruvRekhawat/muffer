"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BadgeCheck, CirclePlus, Film, Package2, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PulsatingButton } from "../magicui/pulsating-button";

interface PayAsYouGoPricingProps {
  activeTab: boolean;
}

const PayAsYouGoPricing = ({ activeTab }: PayAsYouGoPricingProps) => {
  const [activeProduct, setActiveProduct] = useState("editmax");
  const [isVisible, setIsVisible] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

// Handle intersection observer for scroll animation
useEffect(() => {
  const currentRef = pricingRef.current; // Store the current ref value
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 }
  );

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, []); 

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const productTypes = [
    {
      id: "editmax",
      name: "EDITMAX",
      description: "Upload raw videos → Receive professional edits",
      icon: <Film className="h-5 w-5" />
    },
    {
      id: "admax",
      name: "ADMAX",
      description: "High-quality ads with Stock or Creator footage",
      icon: <Video className="h-5 w-5" />
    },
    {
      id: "contentmax",
      name: "CONTENTMAX",
      description: "Fully produced end-to-end video content",
      icon: <Package2 className="h-5 w-5" />
    }
  ];

  return (
    <div ref={pricingRef}>
      <div className="flex flex-col items-center mb-10 space-y-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible && activeTab ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {productTypes.map((product) => (
            <Button
              key={product.id}
              variant={activeProduct === product.id ? "default" : "outline"}
              className={cn(
                "flex items-center gap-2 h-16 text-base font-medium transition-all duration-300",
                activeProduct === product.id ? "bg-blue-600 text-white shadow-md" : "hover:border-blue-200"
              )}
              onClick={() => setActiveProduct(product.id)}
            >
              {product.icon}
              {product.name}
            </Button>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible && activeTab ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muffer-light-text mt-1">
            {productTypes.find(p => p.id === activeProduct)?.description}
          </p>
        </motion.div>
      </div>

      <div>
        {activeProduct === "editmax" && (
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate={(isVisible && activeTab) ? "show" : "hidden"}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {editMaxPlans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  plan={plan}
                  isPopular={plan.name === "Standard"}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {activeProduct === "admax" && (
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate={(isVisible && activeTab) ? "show" : "hidden"}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {adMaxPlans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  plan={plan}
                  isPopular={plan.name === "Creator Ad (UGC)"}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {activeProduct === "contentmax" && (
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate={(isVisible && activeTab) ? "show" : "hidden"}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contentMaxPlans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  plan={plan}
                  isPopular={plan.name === "Standard"}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface Plan {
  name: string;
  duration?: string;
  type?: string;
  price: number;
  includes: string[];
  addons: Addon[];
}

interface Addon {
  name: string;
  price: number;
}

interface PricingCardProps {
  plan: Plan;
  isPopular: boolean;
  index: number;
}

const PricingCard = ({ plan, isPopular }: PricingCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };
  
  return (
    <motion.div 
      className={`rounded-xl p-6 border ${
        isPopular 
          ? 'border-blue-600 bg-blue-600 shadow-md text-white' 
          : 'border-gray-200 '
      }`}
      variants={item}
      whileHover={{ 
        scale: 1.02,
        boxShadow: isPopular ? "0px 8px 20px rgba(0, 0, 0, 0.12)" : "0px 6px 15px rgba(0, 0, 0, 0.08)"
      }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <Badge 
          className="bg-muffer-purple hover:bg-muffer-purple/90 mb-4 animate-pulse-soft"
        >
          <BadgeCheck className="h-3.5 w-3.5 mr-1" />
          Popular
        </Badge>
      )}
      
      <h3 className="text-xl font-bold text-muffer-dark-text">
        {plan.name}
      </h3>
      
      <div className="text-sm text-muffer-light-text mt-1">
        {plan.duration && <span>{plan.duration}</span>}
        {plan.type && <span>{plan.type}</span>}
      </div>
      
      <div className="mt-4">
        <span className="text-3xl font-bold text-muffer-dark-text">₹{plan.price.toLocaleString()}</span>
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm font-medium text-muffer-dark-text mb-2">Includes:</h4>
        <ul className="space-y-2">
          {plan.includes.map((item, i) => (
            <li key={i} className="text-sm text-muffer-light-text flex">
              <Badge className="h-5 w-5 rounded-full p-0.5 bg-muffer-purple/10 text-muffer-purple mr-2 flex items-center justify-center">
                <BadgeCheck className="h-3.5 w-3.5" />
              </Badge>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6">
        <h4 className={`text-sm font-medium ${isPopular ? 'text-white font-semibold' : 'text-blue-800'} mb-2`}>
          Popular Add-ons:
        </h4>
        <ul className="space-y-2">
          {plan.addons.map((addon, i) => (
            <li key={i} className="text-sm text-muffer-light-text flex">
              <CirclePlus className="h-4 w-4 text-muffer-purple mr-2 flex-shrink-0" />
              {addon.name} <span className="ml-1">(+₹{addon.price})</span>
            </li>
          ))}
        </ul>
      </div>

      <PulsatingButton className="w-full mt-4 h-16 "> Get Started </PulsatingButton>
    </motion.div>
  );
};

const editMaxPlans: Plan[] = [
  {
    name: "Short",
    duration: "1-3 min",
    price: 2499,
    includes: ["BGM", "Basic captions"],
    addons: [
      { name: "VO", price: 990 },
      { name: "Custom Captions", price: 275 },
      { name: "Rush", price: 499 }
    ]
  },
  {
    name: "Standard",
    duration: "3-10 min",
    price: 4999,
    includes: ["Pro editing", "BGM", "Pro captions"],
    addons: [
      { name: "VO", price: 2500 },
      { name: "Audio Mastering", price: 975 },
      { name: "Additional Format", price: 275 },
      { name: "Rush", price: 999 }
    ]
  },
  {
    name: "Premium",
    duration: "Upto 30 min",
    price: 9999,
    includes: ["Premium editing", "Audio mastering", "BGM", "Pro captions"],
    addons: [
      { name: "VO", price: 1500 },
      { name: "Additional Formats", price: 775 },
      { name: "Rush", price: 1999 }
    ]
  }
];

const adMaxPlans: Plan[] = [
  {
    name: "Stock Footage Ad",
    type: "Stock-based",
    price: 3999,
    includes: ["Basic script", "Licensed music", "Stock footage editing"],
    addons: [
      { name: "Custom Script", price: 999 },
      { name: "VO", price: 1500 },
      { name: "Multiple Hooks", price: 1499 }
    ]
  },
  {
    name: "Creator Ad (UGC)",
    type: "Creator-based",
    price: 7499,
    includes: ["Creator (choice: gender/age)", "Basic script", "Licensed music"],
    addons: [
      { name: "Additional Creator", price: 2500 },
      { name: "VO", price: 1500 },
      { name: "Multiple Hooks", price: 1499 }
    ]
  }
];

const contentMaxPlans: Plan[] = [
  {
    name: "Short",
    duration: "1-3 min",
    price: 4999,
    includes: ["Concept", "Script", "Creator", "Pro editing", "BGM"],
    addons: [
      { name: "Advanced Graphics", price: 2250 },
      { name: "Pro Thumbnails", price: 999 }
    ]
  },
  {
    name: "Standard",
    duration: "Upto 10 min",
    price: 9999,
    includes: ["Advanced scripting", "Creator", "Pro editing", "Graphics", "BGM"],
    addons: [
      { name: "VO", price: 1500 },
      { name: "Additional Format", price: 775 }
    ]
  },
  {
    name: "Premium",
    duration: "10-30 min",
    price: 19999,
    includes: [
      "Detailed research", 
      "Expert creator", 
      "Premium editing", 
      "VO included", 
      "Graphics", 
      "SEO thumbnails"
    ],
    addons: [
      { name: "Additional Formats", price: 775 }
    ]
  }
];

export default PayAsYouGoPricing;