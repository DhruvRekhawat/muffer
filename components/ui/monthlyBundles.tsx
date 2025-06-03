import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

interface MonthlyBundlesProps {
  activeTab: boolean;
}

const MonthlyBundles = ({ activeTab }: MonthlyBundlesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const bundlesRef = useRef<HTMLDivElement>(null);
  
// Handle intersection observer for scroll animation
useEffect(() => {
  const currentRef = bundlesRef.current; // Store the current ref value
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
}, []); // Empty dependency array means this runs once on mount and cleanup on unmount

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

  return (
    <div ref={bundlesRef}>
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={(isVisible && activeTab) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={(isVisible && activeTab) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-muffer-dark-text">
            Monthly Subscription Bundles
          </h3>
          <p className="text-muffer-light-text mt-2">
            For SMBs & Regular Content Creators
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={(isVisible && activeTab) ? "show" : "hidden"}
        >
          {bundles.map((bundle, index) => (
            <BundleCard
              key={index}
              bundle={bundle}
              isPopular={bundle.name === "Growth Bundle"}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

interface Bundle {
  name: string;
  price: number;
  deliverables: string[];
  savings: string;
}

interface BundleCardProps {
  bundle: Bundle;
  isPopular: boolean;
  index: number;
}

const BundleCard = ({ bundle, isPopular, index }: BundleCardProps) => {
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
          ? 'border-muffer-purple bg-muffer-popular-accent shadow-md'
          : 'border-gray-200 hover:border-muffer-purple hover:bg-muffer-card-hover'
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
        {bundle.name}
      </h3>
     
      <div className="mt-4">
        <span className="text-3xl font-bold text-muffer-dark-text">
          ₹{bundle.price.toLocaleString()}
        </span>
        <span className="text-sm text-muffer-light-text">/month</span>
      </div>
     
      <div className="mt-6">
        <h4 className="text-sm font-medium text-muffer-dark-text mb-2">
          Deliverables:
        </h4>
        <ul className="space-y-2">
          {bundle.deliverables.map((item, i) => (
            <li key={i} className="text-sm text-muffer-light-text flex items-start">
              <Badge className="h-5 w-5 rounded-full p-0.5 bg-muffer-purple/10 text-muffer-purple mr-2 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BadgeCheck className="h-3.5 w-3.5" />
              </Badge>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
     
      <motion.div 
        className="mt-6 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
      >
        <BadgeDollarSign className="h-5 w-5 text-green-600 mr-2" />
        <span className="text-sm font-medium text-green-600">
          {bundle.savings} savings vs. standalone
        </span>
      </motion.div>
    </motion.div>
  );
};

const bundles: Bundle[] = [
  {
    name: "Starter Bundle",
    price: 9999,
    deliverables: [
      "4 Short-form (up to 3 min each) OR",
      "1 Standard Long-form (upto 10 min) videos/month"
    ],
    savings: "~20% off"
  },
  {
    name: "Growth Bundle",
    price: 19999,
    deliverables: [
      "4 Standard Long-form videos (3-5 min each)",
      "2 AdMax Ads/month"
    ],
    savings: "~30% off"
  },
  {
    name: "Pro Bundle",
    price: 34999,
    deliverables: [
      "8 Long-form videos (upto 10 min each)",
      "4 AdMax Creator Ads/month"
    ],
    savings: "~35% off"
  }
];

export default MonthlyBundles;