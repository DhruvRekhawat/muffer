"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';

import { Calendar, Clock, User, Tag, ArrowLeft, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useParams } from 'next/navigation';
import Image from 'next/image';
// Sample blog data - this will be replaced with dynamic data later
const blogPost = {
  id: 1,
  title: "The Evolution of Digital Marketing: Trends to Watch in 2025",
  content: `
    <p class="mb-4">Digital marketing has evolved significantly over the past decade, transforming from simple banner ads to sophisticated, data-driven campaigns that leverage artificial intelligence and machine learning to target specific audiences with personalized content.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Rise of AI-Powered Marketing</h2>
    <p class="mb-4">Artificial intelligence is revolutionizing how brands connect with their audiences. From chatbots that provide instant customer service to algorithms that predict consumer behavior, AI tools are helping marketers create more efficient and effective campaigns.</p>
    <p class="mb-4">In 2025, we expect to see AI becoming even more integrated into marketing strategies, with advanced predictive analytics helping brands anticipate customer needs and personalize communications at scale.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Video Marketing Dominance</h2>
    <p class="mb-4">Video continues to be the most engaging content format across platforms. With the rise of short-form video on platforms like TikTok and Instagram Reels, brands are finding new ways to connect with audiences through quick, engaging visual stories.</p>
    <p class="mb-4">The key to success in video marketing is authenticity. Consumers are increasingly drawn to genuine, unpolished content that feels real and relatable rather than highly produced advertisements.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Voice Search Optimization</h2>
    <p class="mb-4">As smart speakers and voice assistants become more prevalent in homes and on mobile devices, optimizing for voice search has become a crucial aspect of SEO strategy.</p>
    <p class="mb-4">Marketers must adapt their content to match how people speak rather than how they type, focusing on natural language patterns and conversational keywords to ensure their content is discoverable through voice search.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Privacy-First Marketing</h2>
    <p class="mb-4">With increasing concerns about data privacy and new regulations being implemented globally, marketers are having to adapt their strategies to respect user privacy while still delivering personalized experiences.</p>
    <p class="mb-4">This shift is leading to more emphasis on first-party data collection and transparent communication about how customer data is being used.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
    <p class="mb-4">As we look ahead to the rest of 2025 and beyond, it's clear that digital marketing will continue to evolve at a rapid pace. The most successful marketers will be those who stay adaptable, embracing new technologies and approaches while maintaining a focus on creating genuine connections with their audiences.</p>
  `,
  date: "May 12, 2025",
  category: "Digital Strategy",
  image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  readTime: "12 min read",
  author: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    role: "Content Strategist"
  },
  tags: ["Digital Marketing", "AI", "Video Content", "SEO", "Privacy"]
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    // This will be replaced with a real API call later
    console.log(`Fetching blog post with id: ${id}`);
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Animation for content sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all content sections
    const sections = document.querySelectorAll('.blog-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col mt-32">
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-blue-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blogs</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{blogPost.title}</span>
            </div>
          </div>
        </div>
        
        <article className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back button */}
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all blogs
            </Link>
            
            {/* Title Section */}
            <div className="blog-section mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{blogPost.title}</h1>
              
              <div className="flex flex-wrap items-center text-gray-600 gap-y-2">
                <div className="flex items-center mr-6">
                  <User className="h-4 w-4 mr-2" />
                  <span>{blogPost.author.name}</span>
                </div>
                <div className="flex items-center mr-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{blogPost.category}</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="blog-section mb-10">
              <AspectRatio ratio={16/9} className="rounded-xl overflow-hidden shadow-lg">
                <Image src={blogPost.image} alt={blogPost.title} className="w-full h-full object-cover" />
              </AspectRatio>
            </div>
            
            {/* Author Info */}
            <div className="blog-section mb-10 flex items-center p-6 bg-blue-50 rounded-xl">
              <Image src={blogPost.author.avatar} alt={blogPost.author.name} className="h-16 w-16 rounded-full mr-6 border-2 border-white" />
              <div>
                <h3 className="font-bold text-lg text-gray-900">{blogPost.author.name}</h3>
                <p className="text-gray-600">{blogPost.author.role}</p>
              </div>
            </div>
            
            {/* Blog Content */}
            <div className="blog-section prose prose-blue max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>
            
            {/* Tags */}
            <div className="blog-section mt-10">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="blog-section mt-10 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Share this article:</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Just showing placeholders for now */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-blue-100"></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Related Article {i}</h3>
                    <p className="text-gray-600">This is a placeholder for a related article that would be dynamically loaded.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-700 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get the latest insights, tips, and trends
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 bg-blue-800 text-white placeholder-blue-300 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white flex-grow"
                  />
                  <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-200 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPostPage;
