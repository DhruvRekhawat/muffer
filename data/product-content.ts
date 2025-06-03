import { Play, Star, Users, VideoIcon } from "lucide-react";

// Theme configurations
const themes = {
    editmax: {
      primary: 'blue-600',
      primaryHover: 'blue-700',
      gradient: 'from-blue-50 via-white to-blue-100',
      accent: 'blue-100',
      accentText: 'blue-800',
      accentBorder: 'blue-200',
      ring: 'ring-blue-500',
      background: 'bg-blue-600',
      textPrimary: 'text-blue-600'
    },
    admax: {
      primary: 'green-600',
      primaryHover: 'green-700',
      gradient: 'from-green-50 via-white to-green-100',
      accent: 'green-100',
      accentText: 'green-800',
      accentBorder: 'green-200',
      ring: 'ring-green-500',
      background: 'bg-green-600',
      textPrimary: 'text-green-600'
    },
    contentmax: {
      primary: 'purple-600',
      primaryHover: 'purple-700',
      gradient: 'from-purple-50 via-white to-purple-100',
      accent: 'purple-100',
      accentText: 'purple-800',
      accentBorder: 'purple-200',
      ring: 'ring-purple-500',
      background: 'bg-purple-600',
      textPrimary: 'text-purple-600'
    },
    subscriptions: {
      primary: 'yellow-600',
      primaryHover: 'yellow-700',
      gradient: 'from-yellow-50 via-white to-yellow-100',
      accent: 'yellow-100',
      accentText: 'yellow-800',
      accentBorder: 'yellow-200',
      ring: 'ring-yellow-500',
      background: 'bg-yellow-600',
      textPrimary: 'text-yellow-600'
    }
  };

  // Content configuration
const admaxContent = {
    brand: {
      name: "ADMAX",
      tagline: "High-Converting Video Ads",
    },
    hero: {
      badge: "🚀 High-Converting Video Ads",
      title: "Create winning ads with",
      titleHighlight: "stock footage or creators",
      description:
        "Transform your marketing with professional video ads. Choose between premium stock footage or authentic creator content - both optimized for maximum conversions.",
      primaryCTA: "Start Creating Ads",
      secondaryCTA: "Watch Demo",
    },
    stats: [
      { value: "500+", label: "Successful Campaigns" },
      { value: "340%", label: "Average Conversion Increase" },
      { value: "48hr", label: "Delivery Time" },
    ],
    features: {
      title: "Choose your perfect ad format",
      description:
        "Whether you need polished stock footage or authentic creator content, we've got the perfect solution for your brand.",
      items: [
        {
          icon: VideoIcon,
          title: "Stock Footage Ads",
          description:
            "Professional ads using premium stock footage with licensed music and expert editing",
          price: "₹3,999",
          includes: [
            "Basic script writing",
            "Licensed music library",
            "Professional stock footage",
            "Expert editing",
          ],
          addons: [
            "Custom Script (+₹999)",
            "Professional VO (+₹1,500)",
            "Multiple Hooks (+₹1,499)",
          ],
        },
        {
          icon: Users,
          title: "Creator UGC Ads",
          description:
            "Authentic user-generated content with real creators for maximum engagement",
          price: "₹7,499",
          includes: [
            "Creator selection (gender/age)",
            "Basic script writing",
            "Licensed music",
            "Professional editing",
          ],
          addons: [
            "Additional Creator (+₹2,500)",
            "Professional VO (+₹1,500)",
            "Multiple Hooks (+₹1,499)",
          ],
          popular: true,
        },
      ],
    },
    process: {
      title: "Simple process, amazing results",
      description: "Get your professional ads in just 3 easy steps",
      steps: [
        {
          number: 1,
          title: "Choose Your Format",
          description:
            "Select between stock footage ads or creator UGC ads based on your campaign needs.",
        },
        {
          number: 2,
          title: "Share Your Brief",
          description:
            "Tell us about your product, target audience, and campaign goals. We handle the rest.",
        },
        {
          number: 3,
          title: "Get Your Ads",
          description:
            "Receive your professionally edited, conversion-optimized ads within 48 hours.",
        },
      ],
    },
    testimonials: {
      title: "Trusted by growing brands",
      description: "See what our clients say about their results",
      items: [
        {
          name: "Priya Sharma",
          role: "Marketing Director",
          company: "TechStart India",
          content:
            "ADMAX transformed our ad campaigns. The creator UGC ads increased our conversion rate by 340%!",
          rating: 5,
        },
        {
          name: "Rajesh Kumar",
          role: "Founder",
          company: "FitLife Supplements",
          content:
            "Professional quality at unbeatable prices. The stock footage ads look like they cost 10x more.",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "Ready to create ads that convert?",
      description:
        "Join hundreds of brands that have transformed their marketing with ADMAX",
      primaryCTA: "Start Your First Campaign",
      secondaryCTA: "Talk to Our Team",
    },
  };
  
  // EDITMAX Content
  const editmaxContent = {
    brand: {
      name: "EDITMAX",
      tagline: "Professional Video Editing",
    },
    hero: {
      badge: "🎬 Professional Video Editing",
      title: "Transform raw videos into",
      titleHighlight: "polished masterpieces",
      description:
        "Upload your raw footage and receive professionally edited videos with BGM, captions, and expert post-production. From short clips to 30-minute productions.",
      primaryCTA: "Start Editing Now",
      secondaryCTA: "View Samples",
    },
    stats: [
      { value: "2000+", label: "Videos Edited" },
      { value: "24-48hr", label: "Delivery Time" },
      { value: "95%", label: "Client Satisfaction" },
    ],
    features: {
      title: "Professional editing for every need",
      description:
        "From quick social media clips to comprehensive long-form content, we handle all your video editing requirements.",
      items: [
        {
          icon: VideoIcon,
          title: "Short Videos",
          description:
            "Perfect for social media posts, quick promotional content, and bite-sized marketing videos",
          price: "₹2,499",
          duration: "1-3 minutes",
          includes: [
            "Background music selection",
            "Basic captions & text overlays",
            "Color correction",
            "Smooth transitions",
          ],
          addons: [
            "Voice Over (+₹990)",
            "Custom Captions (+₹275)",
            "Rush Delivery (+₹499)",
          ],
        },
        {
          icon: Play,
          title: "Standard Videos",
          description:
            "Ideal for product demos, testimonials, and medium-length promotional content",
          price: "₹4,999",
          duration: "3-10 minutes",
          includes: [
            "Professional editing & transitions",
            "Licensed background music",
            "Professional captions",
            "Color grading & audio sync",
          ],
          addons: [
            "Voice Over (+₹2,500)",
            "Audio Mastering (+₹975)",
            "Additional Formats (+₹275 each)",
            "Rush Delivery (+₹999)",
          ],
          popular: true,
        },
        {
          icon: Star,
          title: "Premium Videos",
          description:
            "Comprehensive editing for documentaries, webinars, and high-end marketing content",
          price: "₹9,999",
          duration: "Up to 30 minutes",
          includes: [
            "Premium editing & effects",
            "Professional audio mastering",
            "Advanced graphics & animations",
            "Multiple format delivery",
          ],
          addons: [
            "Voice Over (+₹1,500)",
            "Additional Formats (+₹775 each)",
            "Rush Delivery (+₹1,999)",
          ],
        },
      ],
    },
    process: {
      title: "Simple upload, professional results",
      description: "Get your videos professionally edited in just 3 easy steps",
      steps: [
        {
          number: 1,
          title: "Upload Your Footage",
          description:
            "Share your raw videos, audio files, and any specific editing requirements through our secure platform.",
        },
        {
          number: 2,
          title: "We Edit & Enhance",
          description:
            "Our expert editors add music, captions, transitions, and professional touches to bring your vision to life.",
        },
        {
          number: 3,
          title: "Download Your Video",
          description:
            "Receive your professionally edited video in your preferred format, ready for publishing across all platforms.",
        },
      ],
    },
    testimonials: {
      title: "Trusted by content creators",
      description: "See what our clients say about their edited videos",
      items: [
        {
          name: "Arjun Mehta",
          role: "YouTuber",
          company: "Tech Reviews India",
          content:
            "EDITMAX transformed my raw footage into professional-looking videos. The editing quality exceeded my expectations!",
          rating: 5,
        },
        {
          name: "Sneha Patel",
          role: "Marketing Manager",
          company: "Digital Solutions Co.",
          content:
            "Quick turnaround, professional quality, and affordable pricing. Perfect for our marketing video needs.",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "Ready to make your videos shine?",
      description:
        "Join thousands of creators who trust EDITMAX for professional video editing",
      primaryCTA: "Upload Your First Video",
      secondaryCTA: "Schedule a Consultation",
    },
  };
  
  // CONTENTMAX Content
  const contentmaxContent = {
    brand: {
      name: "CONTENTMAX",
      tagline: "End-to-End Video Production",
    },
    hero: {
      badge: "🎯 Complete Video Production",
      title: "From concept to publish",
      titleHighlight: "we create everything",
      description:
        "Full-service video production including concept development, scripting, creator casting, filming, and post-production. Perfect for brands wanting comprehensive video content.",
      primaryCTA: "Start Your Project",
      secondaryCTA: "View Portfolio",
    },
    stats: [
      { value: "800+", label: "Videos Produced" },
      { value: "150+", label: "Brands Served" },
      { value: "7-10 days", label: "Production Time" },
    ],
    features: {
      title: "Complete video production solutions",
      description:
        "From initial concept to final delivery, we handle every aspect of video creation to bring your brand's story to life.",
      items: [
        {
          icon: VideoIcon,
          title: "Short Content",
          description:
            "Perfect for social media campaigns, product launches, and quick promotional content",
          price: "₹4,999",
          duration: "1-3 minutes",
          includes: [
            "Concept development",
            "Professional script writing",
            "Creator casting & filming",
            "Professional editing & BGM",
          ],
          addons: [
            "Advanced Graphics (+₹2,250)",
            "Pro Thumbnails (+₹999)",
          ],
        },
        {
          icon: Users,
          title: "Standard Content",
          description:
            "Comprehensive content for product demos, brand stories, and marketing campaigns",
          price: "₹9,999",
          duration: "Up to 10 minutes",
          includes: [
            "Advanced scripting & research",
            "Professional creator selection",
            "Multi-angle filming",
            "Professional editing & graphics",
            "Licensed background music",
          ],
          addons: [
            "Voice Over (+₹1,500)",
            "Additional Formats (+₹775 each)",
          ],
          popular: true,
        },
        {
          icon: Star,
          title: "Premium Content",
          description:
            "High-end production for documentaries, brand films, and premium marketing content",
          price: "₹19,999",
          duration: "10-30 minutes",
          includes: [
            "Detailed research & planning",
            "Expert creator & crew",
            "Premium equipment & lighting",
            "Professional voice over included",
            "Advanced graphics & animations",
            "SEO-optimized thumbnails",
          ],
          addons: [
            "Additional Formats (+₹775 each)",
          ],
        },
      ],
    },
    process: {
      title: "Complete production process",
      description: "Professional video creation from start to finish",
      steps: [
        {
          number: 1,
          title: "Concept & Planning",
          description:
            "We develop the concept, write scripts, plan shooting schedules, and cast the perfect creators for your brand.",
        },
        {
          number: 2,
          title: "Production & Filming",
          description:
            "Professional filming with expert creators, proper lighting, and high-quality equipment to capture your content.",
        },
        {
          number: 3,
          title: "Post-Production & Delivery",
          description:
            "Expert editing, graphics, sound design, and final delivery in multiple formats ready for all platforms.",
        },
      ],
    },
    testimonials: {
      title: "Brands love our productions",
      description: "See what companies say about our complete video solutions",
      items: [
        {
          name: "Vikram Singh",
          role: "Brand Manager",
          company: "Fashion Forward",
          content:
            "CONTENTMAX handled everything from concept to delivery. The final videos perfectly captured our brand essence and drove amazing engagement.",
          rating: 5,
        },
        {
          name: "Meera Reddy",
          role: "Startup Founder",
          company: "EcoTech Solutions",
          content:
            "Professional quality that would have cost us 10x more with traditional agencies. The ROI on our video content has been incredible.",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "Ready to create amazing content?",
      description:
        "Join leading brands that trust CONTENTMAX for complete video production",
      primaryCTA: "Start Your Production",
      secondaryCTA: "Discuss Your Project",
    },
  };
  
  // SUBSCRIPTIONS Content
  const subscriptionsContent = {
    brand: {
      name: "MUFFER BUNDLES",
      tagline: "Monthly Video Subscriptions",
    },
    hero: {
      badge: "📦 Monthly Video Bundles",
      title: "Consistent content with",
      titleHighlight: "subscription savings",
      description:
        "Get regular, professional video content delivered monthly. Perfect for SMBs and content creators who need consistent, high-quality videos at predictable costs.",
      primaryCTA: "Choose Your Bundle",
      secondaryCTA: "Compare Plans",
    },
    stats: [
      { value: "200+", label: "Active Subscribers" },
      { value: "35%", label: "Average Savings" },
      { value: "Monthly", label: "Fresh Content" },
    ],
    features: {
      title: "Subscription plans for every need",
      description:
        "Choose the perfect monthly bundle based on your content requirements and budget. All plans include significant savings over standalone pricing.",
      items: [
        {
          icon: VideoIcon,
          title: "Starter Bundle",
          description:
            "Perfect for small businesses and individual creators just getting started with video content",
          price: "₹9,999/month",
          duration: "Monthly delivery",
          includes: [
            "4 Short-form videos (up to 3 min each)",
            "OR 1 Standard Long-form video (up to 10 min)",
            "Professional editing & BGM",
            "Basic graphics & captions",
          ],
          addons: [
            "Additional Videos (+₹2,000 each)",
            "Priority Support (+₹500/month)",
          ],
          savings: "~20% savings vs standalone",
        },
        {
          icon: Users,
          title: "Growth Bundle",
          description:
            "Ideal for growing businesses and active content creators who need regular video content",
          price: "₹19,999/month",
          duration: "Monthly delivery",
          includes: [
            "4 Standard Long-form videos (3-5 min each)",
            "2 AdMax Creator Ads",
            "Professional editing & graphics",
            "Priority delivery",
          ],
          addons: [
            "Additional Videos (+₹3,500 each)",
            "Custom Thumbnails (+₹200 each)",
          ],
          popular: true,
          savings: "~30% savings vs standalone",
        },
        {
          icon: Star,
          title: "Pro Bundle",
          description:
            "Complete video solution for established businesses and professional content creators",
          price: "₹34,999/month",
          duration: "Monthly delivery",
          includes: [
            "8 Long-form videos (up to 10 min each)",
            "4 AdMax Creator Ads",
            "Premium editing & graphics",
            "Dedicated account manager",
          ],
          addons: [
            "ContentMax Videos (+₹8,000 each)",
            "Rush Delivery (+₹2,000/month)",
          ],
          savings: "~35% savings vs standalone",
        },
      ],
    },
    process: {
      title: "Seamless monthly delivery",
      description: "Consistent video content delivered on schedule every month",
      steps: [
        {
          number: 1,
          title: "Choose Your Bundle",
          description:
            "Select the monthly bundle that fits your content needs and budget. Upgrade or downgrade anytime.",
        },
        {
          number: 2,
          title: "Submit Monthly Briefs",
          description:
            "Share your monthly content requirements, brand guidelines, and creative briefs through our dashboard.",
        },
        {
          number: 3,
          title: "Receive Your Content",
          description:
            "Get your professionally created videos delivered monthly, with tracking and revision support included.",
        },
      ],
    },
    testimonials: {
      title: "Subscribers love the consistency",
      description: "See what our monthly subscribers say about their results",
      items: [
        {
          name: "Rohit Agarwal",
          role: "Digital Marketing Head",
          company: "StartupHub India",
          content:
            "The Growth Bundle has been perfect for our content needs. Consistent quality, predictable costs, and amazing savings compared to standalone projects.",
          rating: 5,
        },
        {
          name: "Kavya Nair",
          role: "Content Creator",
          company: "Lifestyle Blogger",
          content:
            "Having a reliable video partner has transformed my content strategy. The Starter Bundle gives me professional videos every month without breaking the bank.",
          rating: 5,
        },
      ],
    },
    cta: {
      title: "Ready for consistent video content?",
      description:
        "Join smart businesses and creators who choose subscription savings over one-off costs",
      primaryCTA: "Start Your Subscription",
      secondaryCTA: "Calculate Your Savings",
    },
  };
  
  // Export all content objects
  export {
    themes,
    editmaxContent,
    contentmaxContent,
    subscriptionsContent,
    admaxContent
  };