import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import  Link  from 'next/link';
import Image from 'next/image';
interface Author {
  name: string;
  avatar: string;
}

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  author?: Author;
}

interface BlogFeaturedProps {
  blog: Blog;
}

export const BlogFeatured = ({ blog }: BlogFeaturedProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-full">
          <Link href={`/blog/${blog.id}`}>
            <AspectRatio ratio={16/9} className="lg:hidden">
              <Image src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </AspectRatio>
            <div className="hidden lg:block h-full">
              <Image src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          </Link>
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
            {blog.category}
          </div>
        </div>
        
        <div className="p-6 lg:p-10 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 hover:text-blue-600 transition-colors">
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </h2>
          
          <p className="text-gray-600 mb-6 line-clamp-3 lg:line-clamp-4">{blog.excerpt}</p>
          
          {blog.author && (
            <div className="flex items-center mb-6">
              <Image src={blog.author.avatar} alt={blog.author.name} className="h-12 w-12 rounded-full mr-4 border-2 border-blue-100" />
              <div>
                <p className="font-medium text-gray-900">{blog.author.name}</p>
                <p className="text-gray-500 text-sm">Content Strategist</p>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">{blog.date}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{blog.readTime}</span>
            </div>
          </div>
          
          <Link href={`/blog/${blog.id}`} className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group">
            Read full article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
