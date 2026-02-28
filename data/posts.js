// Hard-coded blog posts data
// In a real app, this would come from a CMS, database, or API

export const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn the fundamentals of Next.js and build your first React application with server-side rendering.",
    content: `Next.js is a powerful React framework that makes building web applications a breeze. 
In this post, we'll explore the key features that make Next.js stand out from other frameworks.

## Why Next.js?

Next.js provides an excellent developer experience with features like:
- File-based routing
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Image optimization

## Getting Started

To create a new Next.js project, simply run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up everything you need to start building amazing web applications.

## Conclusion

Next.js is the perfect choice for modern web development. Give it a try!`,
    date: "2024-01-15",
    author: "Alex Johnson",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    excerpt: "Discover how to build beautiful, responsive designs quickly with utility-first CSS framework.",
    content: `Tailwind CSS has revolutionized how we style web applications. Instead of writing custom CSS, 
you use utility classes directly in your HTML.

## The Utility-First Approach

With Tailwind, you don't need to come up with class names anymore:

\`\`\`html
<!-- Instead of this -->
<div class="card">...</div>

<!-- You write this -->
<div class="bg-white rounded-lg shadow-md p-6">...</div>
\`\`\`

## Responsive Design Made Easy

Tailwind makes responsive design incredibly simple with prefixes like sm:, md:, lg:, and xl:.

## Customization

You can easily customize Tailwind through the tailwind.config.js file to match your brand colors and design system.

## Conclusion

Tailwind CSS speeds up development and ensures consistency across your application.`,
    date: "2024-01-20",
    author: "Sarah Chen",
  },
  {
    id: "3",
    title: "Understanding React Hooks",
    excerpt: "Deep dive into useState, useEffect, and custom hooks to write cleaner React components.",
    content: `React Hooks have transformed how we write React components. Let's explore the most important ones.

## useState

The useState hook allows you to add state to functional components:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## useEffect

UseEffect handles side effects in your components:

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

You can create your own hooks to reuse stateful logic:

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  // Custom hook implementation
}
\`\`\`

## Best Practices

- Always call hooks at the top level
- Only call hooks from React functions
- Use the dependency array correctly

## Conclusion

Mastering hooks is essential for modern React development.`,
    date: "2024-01-25",
    author: "Mike Rodriguez",
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    excerpt: "Learn essential accessibility practices to make your web apps usable by everyone.",
    content: `Web accessibility ensures that websites and applications are usable by people with disabilities. 
Let's explore key principles.

## The Four Principles (POUR)

1. **Perceivable**: Information must be presentable to users in ways they can perceive.
2. **Operable**: Users must be able to operate the interface.
3. **Understandable**: Information and operation must be clear.
4. **Robust**: Content must be robust enough for various assistive technologies.

## Semantic HTML

Use proper HTML elements:
- <button> for buttons
- <nav> for navigation
- <main> for main content
- <article> for articles

## ARIA Labels

When semantic HTML isn't enough, use ARIA attributes:

\`\`\`html
<button aria-label="Close modal">×</button>
\`\`\`

## Keyboard Navigation

Ensure all interactive elements are keyboard accessible.

## Conclusion

Accessibility is not optional – it's essential for inclusive web development.`,
    date: "2024-02-01",
    author: "Emily Watson",
  },
];

// Helper function to find a post by ID
export function getPostById(id) {
  return posts.find((post) => post.id === id);
}

// Helper function to get all posts (for listing)
export function getAllPosts() {
  return posts;
}
