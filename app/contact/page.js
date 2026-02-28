/**
 * Contact Page
 * Contact form and information
 */
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 outline-none"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 outline-none bg-white"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Info Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <ContactInfoItem
                icon="📧"
                label="Email"
                value="hello@devblog.com"
              />
              <ContactInfoItem
                icon="📍"
                label="Location"
                value="San Francisco, CA"
              />
              <ContactInfoItem
                icon="📱"
                label="Phone"
                value="+1 (555) 123-4567"
              />
              <ContactInfoItem
                icon="🕐"
                label="Business Hours"
                value="Mon - Fri, 9AM - 6PM PST"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <SocialButton label="Twitter" emoji="🐦" />
              <SocialButton label="GitHub" emoji="🐙" />
              <SocialButton label="LinkedIn" emoji="💼" />
              <SocialButton label="YouTube" emoji="📺" />
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Quick Question?</h3>
            <p className="text-indigo-100 mb-4">
              Check out our FAQ page for quick answers to common questions.
            </p>
            <button className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-200">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Contact Info Item Component
 */
function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}

/**
 * Social Button Component
 */
function SocialButton({ label, emoji }) {
  return (
    <button
      className="flex-1 py-3 px-4 bg-gray-100 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition-colors duration-200"
      title={label}
    >
      <span className="text-2xl">{emoji}</span>
    </button>
  );
}
