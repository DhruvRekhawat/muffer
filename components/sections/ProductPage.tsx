"use client"

import { Video } from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VelocityText } from "@/components/ui/VelocityText";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  LucideIcon,
  Play,
  Star
} from "lucide-react";
import Image from "next/image";
import { FC, ReactNode } from "react";

// Type definitions
interface Theme {
  primary: string;
  primaryHover: string;
  gradient: string;
  accent: string;
  accentText: string;
  accentBorder: string;
  ring: string;
  background: string;
  textPrimary: string;
}

interface Stat {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration?: string;
  savings?: string;
  includes: string[];
  addons?: string[];
  popular?: boolean;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface Brand {
  name: string;
  tagline: string;
}

interface Hero {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

interface Features {
  title: string;
  description: string;
  items: FeatureItem[];
}

interface Process {
  title: string;
  description: string;
  steps: ProcessStep[];
}

interface Testimonials {
  title: string;
  description: string;
  items: Testimonial[];
}

interface CTA {
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

interface Content {
  brand: Brand;
  hero: Hero;
  stats: Stat[];
  features: Features;
  process: Process;
  testimonials: Testimonials;
  cta: CTA;
}

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
}

interface ProductPageProps {
  content: Content;
  theme: Theme;
}

// SlideUp animation wrapper
const SlideUp: FC<SlideUpProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const ProductPage: FC<ProductPageProps> = ({ content, theme }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient}`}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideUp>
              <div className="text-left">
                <Badge className={`mb-6 ${theme.accent} ${theme.accentText} ${theme.accentBorder} inline-block`}>
                  {content.hero.badge}
                </Badge>
                <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${theme.textPrimary} leading-tight`}>
                  {content.hero.title}
                  <br />
                  <span className={theme.textPrimary}>
                    {content.hero.titleHighlight}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  {content.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 text-lg`}>
                    {content.hero.primaryCTA}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`px-8 py-4 text-lg border-2 border-gray-300 hover:border-${theme.primary} hover:text-${theme.primary}`}
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
                    alt={`${content.brand.name} illustration`}
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
                  <div className={`text-3xl font-bold ${theme.textPrimary} mb-2`}>{stat.value}</div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.items.map((feature, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up ${feature.popular ? `ring-2 ${theme.ring}` : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                {feature.popular && (
                  <Badge className={`absolute top-4 right-4 bg-${theme.primary} text-white`}>
                    🔥 Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${theme.accent} to-${theme.accent} rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 ${theme.textPrimary}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <div className={`text-2xl font-bold ${theme.textPrimary}`}>{feature.price}</div>
                      {feature.duration && (
                        <div className="text-sm text-gray-500">{feature.duration}</div>
                      )}
                      {feature.savings && (
                        <div className="text-sm text-green-600 font-medium">{feature.savings}</div>
                      )}
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
                    {feature.addons && (
                      <div>
                        <h4 className="font-semibold mb-2">Popular Add-ons:</h4>
                        <ul className="space-y-1">
                          {feature.addons.map((addon, i) => (
                            <li key={i} className="text-sm text-gray-500">• {addon}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button className={`w-full mt-4 bg-${theme.primary} hover:bg-${theme.primaryHover} text-white`}>
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
                <div className={`w-16 h-16 bg-${theme.primary} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
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
      <section className={`py-20 px-4 bg-${theme.primary} text-white`}>
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {content.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className={`px-8 py-4 text-lg bg-white text-${theme.primary} hover:bg-gray-100`}>
              {content.cta.primaryCTA}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className={`px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-${theme.primary}`}>
              {content.cta.secondaryCTA}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;