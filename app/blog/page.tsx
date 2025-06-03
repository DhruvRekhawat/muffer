"use client"
import React, { useEffect, useRef } from 'react';
import { BlogCard } from '@/components/blogs/BlogCard';
import { BlogFeatured } from '@/components/blogs/BlogFeatured';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search } from 'lucide-react';

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Maximizing Your Digital Ad Performance",
    excerpt: "Learn how to optimize your digital advertising strategy for better ROI and broader reach.",
    date: "May 10, 2025",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Content Creation Best Practices for 2025",
    excerpt: "Discover the latest techniques and tools for creating engaging content that resonates with your audience.",
    date: "May 8, 2025",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Art of Professional Video Editing",
    excerpt: "Master the fundamental techniques that separate amateur videos from professional productions.",
    date: "May 5, 2025",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1574717024453-354056a0984e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building Your Brand Through Social Media",
    excerpt: "Strategies for consistent brand messaging and growth across multiple social platforms.",
    date: "May 2, 2025",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Understanding Analytics for Content Strategy",
    excerpt: "How to interpret data to inform your content decisions and improve engagement metrics.",
    date: "April 29, 2025",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "The Future of AI in Creative Industries",
    excerpt: "Exploring how artificial intelligence is transforming content creation, editing, and distribution.",
    date: "April 25, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "9 min read"
  }
];

const featuredBlog = {
  id: 0,
  title: "The Evolution of Digital Marketing: Trends to Watch in 2025",
  excerpt: "An in-depth look at how digital marketing is changing and what strategies will dominate in the coming year.",
  date: "May 12, 2025",
  category: "Digital Strategy",
  image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  readTime: "12 min read",
  author: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
};

const BlogsPage: React.FC = () => {
  const blogsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for blog cards on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class based on index to stagger the animations
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              if (entry.target instanceof HTMLElement) {
                entry.target.style.opacity = '1';
              }
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col mt-0">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                Latest Insights & Trends
              </h1>
              <div className="w-24 h-2 bg-blue-500 mx-auto mb-6 rounded opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}></div>
              <p className="text-xl text-gray-700 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                Dive into our collection of expert articles on digital marketing, content creation, 
                and multimedia production to stay ahead in the ever-evolving digital landscape.
              </p>
              
              {/* Search bar */}
              <div className="relative max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Search for articles, topics, or keywords..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Article</h2>
            <BlogFeatured blog={featuredBlog} />
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 bg-gray-50" ref={blogsSectionRef}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">All Articles</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                  All
                </button>
                <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition duration-200">
                  Marketing
                </button>
                <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition duration-200">
                  Content
                </button>
                <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition duration-200">
                  Video
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div key={blog.id} className="blog-card" data-index={index}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-700 rounded-2xl p-8 md:p-12 shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
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

export default BlogsPage;
