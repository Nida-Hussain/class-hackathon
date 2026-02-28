"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * NavLink Component - A client component that highlights the active link
 *
 * @param {string} href - The URL to link to
 * @param {React.ReactNode} children - The link content
 */
export default function NavLink({ href, children }) {
  const pathname = usePathname();

  // Check if the current path matches the link's href
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        }
      `}
    >
      {children}
    </Link>
  );
}
