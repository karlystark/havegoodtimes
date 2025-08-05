'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-stone-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/seascoot" className="text-black hover:underline decoration-2 decoration-wavy font-light">
              CLICK ME :P
            </Link>
            {/* <a href="#" className="text-black hover:underline decoration-2 decoration-wavy font-light">
              About
            </a>
            <a href="#" className="text-black hover:underline decoration-2 decoration-wavy font-light">
              Contact
            </a>
            <a href="#" className="text-black hover:underline decoration-2 decoration-wavy font-light">
              Blog
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-black hover:text-stone-600 transition-colors duration-200"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-black hover:text-stone-600 transition-colors duration-200 font-light py-2">
              Work
            </a>
            <a href="#" className="text-black hover:text-stone-600 transition-colors duration-200 font-light py-2">
              About
            </a>
            <a href="#" className="text-black hover:text-stone-600 transition-colors duration-200 font-light py-2">
              Contact
            </a>
            <a href="#" className="text-black hover:text-stone-600 transition-colors duration-200 font-light py-2">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}