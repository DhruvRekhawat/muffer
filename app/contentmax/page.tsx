"use client"
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, FileText, ArrowRight } from 'lucide-react';

const ContentMaxPage = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-zoom-in');
          // Fix: Cast the Element to HTMLElement to use style property
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1';
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-500 opacity-0 animate-fade-in" 
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          What is ContentMax?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in" 
               style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <p className="text-lg mb-6 leading-relaxed">
              ContentMax is our comprehensive content creation service that delivers a steady stream of high-quality video content to fuel your digital channels and engage your audience.
            </p>
            <p className="text-lg leading-relaxed">
              From planning and scripting to production and delivery, we handle the entire content creation process, allowing you to maintain a consistent and professional content schedule without the hassle.
            </p>
            <div className="mt-8">
              <a href="#features" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                Explore features
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg opacity-0 animate-fade-in transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
               style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Regular, high-quality video content for all your platforms</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Content calendar planning and strategic guidance</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Audience growth through consistent engagement</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Trending formats and styles adapted to your brand</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-blue-500 opacity-0 animate-on-scroll"
            style={{ opacity: 0 }}>
          Who is ContentMax For?
        </h2>
        
        <Tabs defaultValue="brands" className="opacity-0 animate-on-scroll"
              style={{ opacity: 0 }}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="brands" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Users size={18} /> Brands
            </TabsTrigger>
            <TabsTrigger value="creators" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <FileText size={18} /> Content Creators
            </TabsTrigger>
            <TabsTrigger value="businesses" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Calendar size={18} /> Businesses
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="brands" className="pt-4">
            <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">For Brands</h3>
                <p className="mb-6 text-lg">
                  ContentMax helps brands build a consistent and engaging online presence through regular, high-quality video content. Our service ensures your brand stays relevant and top-of-mind with your audience while maintaining your unique brand voice and visual identity.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Established Brands</h4>
                    <p className="text-blue-700">Maintain brand consistency across all video content while exploring new formats and channels.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Growing Brands</h4>
                    <p className="text-blue-700">Develop a recognizable brand presence and voice through consistent, professional video content.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="creators" className="pt-4">
            <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">For Content Creators</h3>
                <p className="mb-6 text-lg">
                  ContentMax supports content creators in scaling their production capabilities and maintaining consistent posting schedules. We help you focus on creativity and audience engagement while we handle the production logistics.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">YouTubers & Vloggers</h4>
                    <p className="text-blue-700">Maintain consistent posting schedules with professionally produced videos that match your style.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Social Media Influencers</h4>
                    <p className="text-blue-700">Diversify your content with high-quality videos optimized for each platform you&apos;re on.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="businesses" className="pt-4">
            <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">For Businesses</h3>
                <p className="mb-6 text-lg">
                  ContentMax helps businesses of all sizes establish and maintain a professional video presence without the need for in-house video teams. Our service scales with your needs, from occasional content to regular series production.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">SMBs & Startups</h4>
                    <p className="text-blue-700">Access professional-quality video content without the overhead of an in-house production team.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Enterprise Organizations</h4>
                    <p className="text-blue-700">Supplement your existing marketing capabilities with specialized video content at scale.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      
      <section id="features" className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-blue-500 opacity-0 animate-on-scroll"
            style={{ opacity: 0 }}>
          Features of ContentMax
        </h2>
        <div className="grid md:grid-cols-3 gap-8 opacity-0 animate-on-scroll"
             style={{ opacity: 0 }}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 transform transition-transform hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">Content Calendar</h3>
              <p className="text-gray-700 leading-relaxed">Strategic planning of your content schedule to maximize engagement and growth.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 transform transition-transform hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">Trend Adaptation</h3>
              <p className="text-gray-700 leading-relaxed">Stay relevant with content that incorporates the latest trends and formats.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 transform transition-transform hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">Multi-Platform Delivery</h3>
              <p className="text-gray-700 leading-relaxed">Content optimized and formatted for each platform&apos;s specific requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 opacity-0 animate-on-scroll" style={{ opacity: 0 }}>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Ready to maximize your content strategy?</h3>
              <p className="text-lg text-blue-800">
                Let us handle your content creation while you focus on growing your audience and business.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <a 
                href="#" 
                className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentMaxPage;
