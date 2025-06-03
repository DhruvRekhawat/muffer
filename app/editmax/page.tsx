"use client"
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Camera, Clock, Eye } from 'lucide-react';
import { useEffect } from 'react';

const EditMaxPage = () => {
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
        <h2 className="text-3xl font-bold mb-8 text-blue-500 animate-fade-in" 
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          What is EditMax?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in" 
               style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <p className="text-lg mb-6 leading-relaxed">
              EditMax is our premium video editing service that transforms your raw footage into polished, professional videos ready for any platform or purpose.
            </p>
            <p className="text-lg leading-relaxed">
              Our team of expert editors combines technical skill with creative vision to enhance your content while maintaining your authentic style and message.
            </p>
            <div className="mt-8">
              <a href="#features" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                Explore features
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg  animate-fade-in transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
               style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Professional polish that elevates your raw footage</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Quick turnaround times to meet your deadlines</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Consistent style that reinforces your brand identity</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                <span className="text-blue-900">Industry-standard techniques and creative effects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-blue-500  animate-on-scroll"
            style={{ opacity: 0 }}>
          Who is EditMax For?
        </h2>
        
        <Tabs defaultValue="creators" className=" animate-on-scroll"
              style={{ opacity: 0 }}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="creators" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Camera size={18} /> Content Creators
            </TabsTrigger>
            <TabsTrigger value="businesses" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Eye size={18} /> Businesses
            </TabsTrigger>
            <TabsTrigger value="agencies" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Clock size={18} /> Agencies
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="creators" className="pt-4">
            <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">For Content Creators</h3>
                <p className="mb-6 text-lg">
                  EditMax helps content creators focus on what they do best—creating—while we handle the time-consuming editing process. Our service lets you maintain your distinct style and voice while benefiting from professional editing techniques that enhance your content&apos;s appeal.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">YouTubers</h4>
                    <p className="text-blue-700">Get more content published by outsourcing the editing process while maintaining your unique style.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Social Media Creators</h4>
                    <p className="text-blue-700">Transform your footage into platform-specific formats optimized for engagement.</p>
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
                  EditMax provides businesses with professional video editing services that maintain brand consistency and quality across all video content. From internal training videos to customer-facing content, we ensure every video represents your brand at its best.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Marketing Teams</h4>
                    <p className="text-blue-700">Get professionally edited videos that align with your brand guidelines and marketing objectives.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Sales Teams</h4>
                    <p className="text-blue-700">Transform product demos and pitches into compelling visual presentations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="agencies" className="pt-4">
            <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">For Agencies</h3>
                <p className="mb-6 text-lg">
                  EditMax serves as your agency&apos;s editing department, providing scalable editing resources without the overhead. We work with your creative direction to deliver client-ready videos that maintain your agency&apos;s standards and creative vision.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Creative Agencies</h4>
                    <p className="text-blue-700">Scale your video production capabilities without expanding your in-house team.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-lg mb-2 text-blue-800">Production Companies</h4>
                    <p className="text-blue-700">Handle overflow work or specialized editing needs with our expert editing team.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      
      <section id="features" className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-blue-500  animate-on-scroll"
            style={{ opacity: 0 }}>
          Features of EditMax
        </h2>
        <div className="grid md:grid-cols-3 gap-8  animate-on-scroll"
             style={{ opacity: 0 }}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 transform transition-transform hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">Color Grading</h3>
              <p className="text-gray-700 leading-relaxed">Professional color enhancement that gives your videos a cinematic look.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 transform transition-transform hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">Audio Enhancement</h3>
              <p className="text-gray-700 leading-relaxed">Crystal clear sound that complements your visuals perfectly.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 transform transition-transform hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-600">Motion Graphics</h3>
              <p className="text-gray-700 leading-relaxed">Custom animations and text effects that elevate your visual storytelling.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12  animate-on-scroll" style={{ opacity: 0 }}>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Ready to elevate your video quality?</h3>
              <p className="text-lg text-blue-800">
                Let our expert editors transform your footage into professional, engaging content.
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

export default EditMaxPage;
