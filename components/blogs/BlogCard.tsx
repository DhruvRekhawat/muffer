import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import  Link  from 'next/link';
import Image from 'next/image';
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg bg-white border-0 shadow-md hover:translate-y-[-5px]">
      <Link href={`/blog/${blog.id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {blog.category}
          </div>
        </div>
      </Link>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-800 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4 flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>{blog.readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
