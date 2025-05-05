import { Badge } from "@/components/ui/badge";
import { BadgeCheck, BadgeDollarSign } from "lucide-react";

interface MonthlyBundlesProps {
  activeTab: boolean;
}

const MonthlyBundles = ({ activeTab }: MonthlyBundlesProps) => {
  return (
    <div className={`space-y-8 ${activeTab ? 'animate-fade-in-up' : ''}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-muffer-dark-text">
          Monthly Subscription Bundles
        </h3>
        <p className="text-muffer-light-text mt-2">
          For SMBs & Regular Content Creators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bundles.map((bundle, index) => (
          <BundleCard 
            key={index} 
            bundle={bundle} 
            isPopular={bundle.name === "Growth Bundle"} 
            delay={index * 0.1}
            activeTab={activeTab}
          />
        ))}
      </div>
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
  delay: number;
  activeTab: boolean;
}

const BundleCard = ({ bundle, isPopular, delay, activeTab }: BundleCardProps) => {
  const animationDelay = activeTab ? `${delay}s` : "0s";
  
  return (
    <div 
      className={`rounded-xl p-6 border transition-all duration-300 ${
        isPopular 
          ? 'border-muffer-purple bg-muffer-popular-accent shadow-md' 
          : 'border-gray-200 hover:border-muffer-purple hover:bg-muffer-card-hover'
      }`}
      style={{ 
        opacity: activeTab ? 1 : 0,
        transform: activeTab ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease, transform 0.5s ease`,
        transitionDelay: animationDelay
      }}
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
      
      <div className="mt-6 flex items-center">
        <BadgeDollarSign className="h-5 w-5 text-green-600 mr-2" />
        <span className="text-sm font-medium text-green-600">
          {bundle.savings} savings vs. standalone
        </span>
      </div>
    </div>
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
