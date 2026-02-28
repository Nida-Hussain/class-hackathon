import Link from "next/link";

/**
 * Home Page
 * Welcoming message with a call-to-action to visit the blog
 */
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      {/* Hero Section */}
      <div className="max-w-3xl">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
          Welcome to DevBlog 🎉
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Discover Amazing
          <span className="text-indigo-600"> Articles </span>
          & Resources
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our collection of tutorials, guides, and insights about 
          web development, programming, and the latest tech trends.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            📚 Browse Blog Posts
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
        <FeatureCard
          icon="🚀"
          title="Fast & Modern"
          description="Built with Next.js 14+ for optimal performance"
        />
        <FeatureCard
          icon="🎨"
          title="Beautiful Design"
          description="Styled with Tailwind CSS for a clean look"
        />
        <FeatureCard
          icon="📱"
          title="Fully Responsive"
          description="Works perfectly on all devices"
        />
      </div>
    </div>
  );
}

/**
 * Feature Card Component
 */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100">
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
