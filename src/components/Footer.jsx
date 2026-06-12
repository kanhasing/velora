import { Link } from "react-router-dom"

export default function Footer() {

  return (

    <footer className="border-t border-white/10 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-2xl font-bold text-white mb-4">
              Velora
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Build beautiful websites with AI.
              Faster, smarter and easier than ever.
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                to="/dashboard"
                className="hover:text-white transition"
              >
                Dashboard
              </Link>

              <Link
                to="/dashboard/templates"
                className="hover:text-white transition"
              >
                Templates
              </Link>

              <Link
                to="/dashboard/aibuilder"
                className="hover:text-white transition"
              >
                AI Builder
              </Link>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                to="/about"
                className="hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                to="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-white transition"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-sm">
            © 2026 Velora. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Made with ❤️ by Velora
          </p>

        </div>

      </div>

    </footer>

  )

}