// VideoViewsCard.jsx
import Link from 'next/link';

export default function VideoViewsCard() {
  return (
    <div className="bg-white rounded-3xl p-12 max-w-6xl mx-auto shadow-sm">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Ready to 10x your video views?</h1>
      
      <p className="text-xl text-gray-700 mb-2">
        Let&aposl;s turn your content into scroll-stopping videos that grow your audience and boost your engagement.
      </p>
      <p className="text-xl text-gray-700 mb-8">
        Book a call and let&apos;s bring your vision to life.
      </p>
      
      <div className="mb-8">
        <Link href="#book-call" className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
          Book a call
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      
    </div>
  );
}