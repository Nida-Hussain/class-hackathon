import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/data/posts";

/**
 * Dynamic Blog Post Page
 * Displays a single blog post based on the URL parameter [id]
 * 
 * @param {Object} params - Route parameters
 * @param {string} params.id - The post ID from the URL
 */
export default function BlogPostPage({ params }) {
  // Get the post by ID
  const post = getPostById(params.id);

  // If post not found, trigger the custom 404 page
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors duration-200"
      >
        <svg
          className="mr-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Post Header */}
      <header className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 border border-gray-100">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
          Tutorial
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-500 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </span>
            <span className="font-medium text-gray-700">{post.author}</span>
          </div>
          <span>•</span>
          <span>📅 {formatDate(post.date)}</span>
          <span>•</span>
          <span>⏱️ 5 min read</span>
        </div>
      </header>

      {/* Featured Image Placeholder */}
      <div className="h-64 md:h-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-8 flex items-center justify-center shadow-lg">
        <span className="text-8xl">📖</span>
      </div>

      {/* Post Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 border border-gray-100">
        <div className="prose prose-indigo max-w-none">
          {/* Render content with basic formatting */}
          {post.content.split("\n\n").map((paragraph, index) => {
            // Check if it's a code block
            if (paragraph.includes("```")) {
              const lines = paragraph.split("\n");
              const codeContent = lines
                .filter((line) => !line.includes("```"))
                .join("\n");
              return (
                <pre
                  key={index}
                  className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
                >
                  <code>{codeContent}</code>
                </pre>
              );
            }

            // Check if it's a heading
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            // Check if it's a list
            if (paragraph.includes("- ")) {
              const items = paragraph
                .split("\n")
                .filter((line) => line.startsWith("- "))
                .map((line) => line.replace("- ", ""));
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-4 text-gray-600">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            // Check if it's a numbered list
            if (paragraph.match(/^\d+\./)) {
              const items = paragraph
                .split("\n")
                .filter((line) => line.match(/^\d+\./))
                .map((line) => line.replace(/^\d+\.\s*/, ""));
              return (
                <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-gray-600">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              );
            }

            // Regular paragraph
            return (
              <p key={index} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["Next.js", "React", "Web Development", "Tutorial"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Share & Navigation */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Share */}
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">Share:</span>
            <ShareButton emoji="🐦" label="Twitter" />
            <ShareButton emoji="💼" label="LinkedIn" />
            <ShareButton emoji="📋" label="Copy Link" />
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors duration-200"
            >
              ← Previous
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors duration-200"
            >
              Next →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * Share Button Component
 */
function ShareButton({ emoji, label }) {
  return (
    <button
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 hover:scale-110 transition-all duration-200"
      title={label}
      aria-label={label}
    >
      <span className="text-lg">{emoji}</span>
    </button>
  );
}

/**
 * Format date string to readable format
 */
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
