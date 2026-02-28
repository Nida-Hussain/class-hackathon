import Link from "next/link";

/**
 * About Page
 * Information about the blog and team
 */
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn more about our mission and the team behind DevBlog
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <div className="prose prose-indigo max-w-none text-gray-600">
          <p className="mb-4">
            Welcome to <strong>DevBlog</strong>! We're passionate about sharing 
            knowledge and helping developers grow their skills. Our blog covers 
            a wide range of topics including web development, programming languages, 
            frameworks, and best practices.
          </p>
          <p className="mb-4">
            Founded in 2024, DevBlog started as a small project to document our 
            learning journey. Today, we've grown into a community of developers 
            who believe in the power of sharing knowledge.
          </p>
          <p>
            Whether you're a beginner just starting out or an experienced developer 
            looking to learn something new, we have content for everyone. Our articles 
            are carefully crafted to be clear, practical, and easy to follow.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMember
            name="Alex Johnson"
            role="Founder & Editor"
            avatar="👨‍💻"
            bio="Full-stack developer with 10+ years of experience"
          />
          <TeamMember
            name="Sarah Chen"
            role="Senior Writer"
            avatar="👩‍💻"
            bio="Frontend specialist and UI/UX enthusiast"
          />
          <TeamMember
            name="Mike Rodriguez"
            role="Tech Lead"
            avatar="🧑‍💻"
            bio="React expert and open-source contributor"
          />
          <TeamMember
            name="Emily Watson"
            role="Community Manager"
            avatar="👩‍🎤"
            bio="Accessibility advocate and speaker"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard number="50+" label="Articles" />
        <StatCard number="10K+" label="Readers" />
        <StatCard number="100+" label="Tutorials" />
        <StatCard number="24/7" label="Support" />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
        <p className="mb-6 text-indigo-100 max-w-xl mx-auto">
          We're always looking for guest writers and contributors. 
          If you have expertise to share, we'd love to hear from you!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-200"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}

/**
 * Team Member Card Component
 */
function TeamMember({ name, role, avatar, bio }) {
  return (
    <div className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
      <span className="text-5xl mb-3 block">{avatar}</span>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-indigo-600 text-sm mb-2">{role}</p>
      <p className="text-gray-500 text-sm">{bio}</p>
    </div>
  );
}

/**
 * Stat Card Component
 */
function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
      <div className="text-3xl font-bold text-indigo-600 mb-1">{number}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}
