import { motion } from "framer-motion"

export default function Footer() {

  return (

    <footer className="border-t border-white/10 bg-[#050505] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.35)]">

                <span className="font-bold text-lg">
                  V
                </span>

              </div>

              <div>

                <h2 className="text-2xl font-semibold">
                  Velora
                </h2>

                <p className="text-gray-400 text-sm">
                  AI Website Studio
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-relaxed">
              Build futuristic AI-powered websites with premium templates,
              smart automation, and modern SaaS tools.
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Product
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                Features
              </p>

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                Templates
              </p>

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                Dashboard
              </p>

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                Pricing
              </p>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Company
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                About
              </p>

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                Careers
              </p>

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                Contact
              </p>

              <p className="hover:text-white transition-all duration-300 cursor-pointer">
                Blog
              </p>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-6">
              Get latest AI website trends and updates.
            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none text-white"
              />

              <motion.button

                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              >
                Subscribe
              </motion.button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500">
            © 2026 Velora. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-400">

            <p className="hover:text-white transition-all duration-300 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white transition-all duration-300 cursor-pointer">
              Terms
            </p>

            <p className="hover:text-white transition-all duration-300 cursor-pointer">
              Cookies
            </p>

          </div>

        </div>

      </div>

    </footer>

  )

}