import Link from "next/link";
import { getAllPosts } from "@/data/posts";

/**
 * Blog Listing Page
 * Displays all blog posts in a card grid layout
 */
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our latest articles, tutorials, and insights about web development
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Stay Updated
        </h2>
        <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter and never miss a new article. 
          Get the latest posts delivered right to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Blog Card Component
 * Displays a single post preview
 */
function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Card Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <span className="text-6xl">📝</span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            📅 {formatDate(post.date)}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            👤 {post.author}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.id}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200"
        >
          Read More
          <svg
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

/**
 * Format date string to readable format
 */
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
