'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            WELCOME TO <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">NEXTSTORE</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            A modern Next.js application showcasing the power of App Router, 
            dynamic routing, and beautiful UI design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Browse Products
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Read Our Blog
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-16">
            WHY CHOOSE US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white text-center mb-4">
                LIGHTNING FAST
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center">
                Built with Next.js 14 for optimal performance and speed. Experience blazing fast page loads.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                🎨
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white text-center mb-4">
                MODERN DESIGN
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center">
                Beautiful UI with Tailwind CSS. Every pixel is crafted with attention to detail.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white text-center mb-4">
                FULLY RESPONSIVE
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center">
                Works perfectly on all devices. Desktop, tablet, or mobile - always looks great.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              FEATURED BLOG POSTS
            </h2>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2">
              View All <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
                  alt="Next.js Development"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  GETTING STARTED WITH NEXT.JS 14
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                  Learn how to build modern web applications with the latest features of Next.js 14 including App Router, Server Components, and more...
                </p>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
                  alt="React Components"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  MASTERING REACT SERVER COMPONENTS
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                  Deep dive into React Server Components and learn how to optimize your applications for better performance and user experience...
                </p>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="group bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-cyan-400 to-blue-500 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop"
                  alt="Tailwind CSS Design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  BUILDING MODERN UIS WITH TAILWIND CSS
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                  Master Tailwind CSS and create stunning, responsive user interfaces with utility-first CSS framework...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              FEATURED PRODUCTS
            </h2>
            <Link href="/products" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2">
              View All <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-600 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
                  alt="Premium Headphones"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  SALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  🎧 PREMIUM HEADPHONES
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  High-quality wireless headphones with noise cancellation
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$299</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-600 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop"
                  alt="Wireless Keyboard"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  ⌨️ WIRELESS KEYBOARD
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Mechanical keyboard with RGB backlighting
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$149</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-700 dark:to-zinc-600 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
                  alt="Smart Watch"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  ⌚ SMART WATCH
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Advanced fitness tracking and health monitoring
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$399</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Explore our products, read our blog, or get in touch with us.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-purple-600 font-bold rounded-full text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-900 dark:bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-400 dark:text-zinc-500">
            © 2026 NextStore. Built with Next.js App Router.
          </p>
        </div>
      </footer>
    </main>
  );
}
