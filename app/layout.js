import Link from "next/link";
import NavLink from "@/components/NavLink";
import "./globals.css";

export const metadata = {
  title: "NextStore - Modern E-commerce",
  description: "A modern Next.js application showcasing the power of App Router, dynamic routing, and beautiful UI design.",
};

/**
 * Root Layout Component
 * Wraps all pages with navigation and footer
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-zinc-950">
        {/* Header with Navigation */}
        <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Logo / Site Name */}
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                NextStore
              </Link>

              {/* Navigation Links */}
              <div className="flex flex-wrap items-center gap-2">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-zinc-900 dark:bg-black text-white py-12 mt-auto border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">NextStore</h3>
                <p className="text-gray-400 text-sm">
                  A modern Next.js application showcasing the power of App Router, 
                  dynamic routing, and beautiful UI design.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>📧 support@nextstore.com</li>
                  <li>📍 San Francisco, CA</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} NextStore. Built with Next.js App Router.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
