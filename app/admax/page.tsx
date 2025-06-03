"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  Users,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode, FC } from "react";
import { Video } from "@/components/sections";
import { VelocityText } from "@/components/ui/VelocityText";

// SlideUp animation wrapper
const SlideUp: FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

// Content configuration
const content = {
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

const Admax: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideUp>
              <div className="text-left">
                <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 inline-block">
                  {content.hero.badge}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 leading-tight">
                  {content.hero.title}
                  <br />
                  <span className="text-blue-600">
                    {content.hero.titleHighlight}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  {content.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    {content.hero.primaryCTA}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    {content.hero.secondaryCTA}
                  </Button>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="lg:justify-self-end">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden ">
                  <Image
                    src="/illustrations/business-ideas(1).svg"
                    alt="High-converting video ads illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </SlideUp>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {content.stats.map((stat, index) => (
              <SlideUp delay={index * 0.1} key={index}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>


            {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {content.features.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.features.items.map((feature, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up ${feature.popular ? 'ring-2 ring-blue-500' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                {feature.popular && (
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                    🔥 Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <div className="text-2xl font-bold text-blue-600">{feature.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="space-y-2">
                        {feature.includes.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Popular Add-ons:</h4>
                      <ul className="space-y-1">
                        {feature.addons.map((addon, i) => (
                          <li key={i} className="text-sm text-gray-500">• {addon}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

            <section id="video">
              <Video></Video>
              <VelocityText></VelocityText>

            </section>
      
      {/* How it Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.process.title}
            </h2>
            <p className="text-xl text-gray-600">{content.process.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.process.steps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">{content.testimonials.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {content.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100">
              {content.cta.primaryCTA}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              {content.cta.secondaryCTA}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admax;


