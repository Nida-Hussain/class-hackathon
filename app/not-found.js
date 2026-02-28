import Link from "next/link";

/**
 * Custom 404 Page
 * Displayed when a page is not found
 */
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      {/* 404 Animation Container */}
      <div className="mb-8">
        {/* Large 404 Text */}
        <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
          404
        </h1>
        
        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 text-4xl sm:text-5xl">
          <span className="animate-bounce" style={{ animationDelay: "0ms" }}>🔍</span>
          <span className="animate-bounce" style={{ animationDelay: "150ms" }}>❓</span>
          <span className="animate-bounce" style={{ animationDelay: "300ms" }}>🤔</span>
        </div>
      </div>

      {/* Error Message */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Oops! Page Not Found
      </h2>
      
      <p className="text-lg text-gray-600 max-w-md mb-8">
        The page you're looking for seems to have wandered off into the digital void. 
        Don't worry, even the best URLs get lost sometimes!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          🏠 Back to Home
        </Link>
        
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-200"
        >
          📚 Browse Blog
        </Link>
      </div>

      {/* Helpful Links */}
      <div className="mt-12 p-6 bg-gray-100 rounded-xl">
        <p className="text-gray-600 mb-3 font-medium">You might be looking for:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/about"
            className="px-4 py-2 bg-white rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-white rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 bg-white rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
          >
            Blog Posts
          </Link>
        </div>
      </div>

      {/* Fun Illustration */}
      <div className="mt-12 text-6xl sm:text-7xl">
        🚀
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        This page has been launched into orbit
      </p>
    </div>
  );
}
