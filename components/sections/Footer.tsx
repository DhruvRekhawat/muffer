// components/Footer.jsx

import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <div className="bg-blue-600 text-white rounded-3xl md:p-16 p-8 shadow-xl">
        {/* Logo and Tagline */}
        <div className="mb-10">
          <h1 className="text-white text-6xl font-bold mb-6">muffer<span className="text-yellow-400 inline-block -rotate-12 -translate-y-0.5">{" "}it!</span>
          

          </h1>
          <p className="text-xl">
            The next big thing starts here—<br />
            drop us a line and let&apos;s get creating!
          </p>
        </div>
        
        {/* Important Links */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="uppercase text-sm text-blue-100 font-semibold">Important Links</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about-us" className="hover:underline">About Us</a></li>
                <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
                {/* <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li> */}
                {/* <li><a href="/careers" className="hover:underline">Careers</a></li> */}
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Products</h3>
              <ul className="space-y-2">
                <li><a href="/admax" className="hover:underline">Ad Max</a></li>
                <li><a href="/content-max" className="hover:underline">Content Max</a></li>
                <li><a href="/edit-max" className="hover:underline">Edit Max</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Support</h3>
              <ul className="space-y-2">
                <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                {/* <li><a href="/support" className="hover:underline">Help Center</a></li> */}
                {/* <li><a href="/faq" className="hover:underline">FAQ</a></li> */}
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
        

        
        {/* Copyright and credits */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>©Devaxtrous Studios LLP</p>
          </div>
          <div>
            <p>muffer&trade;</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}