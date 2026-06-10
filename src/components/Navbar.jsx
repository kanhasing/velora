import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Navbar() {

  return (

    <motion.nav

      initial={{
        opacity: 0,
        y: -30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      className="fixed top-0 left-0 w-full z-50 px-6 py-5"
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl px-8 py-4 shadow-[0_0_40px_rgba(255,255,255,0.03)]">

        {/* Logo */}
        <Link to="/">

          <h1 className="text-2xl font-semibold tracking-tight text-white">

            Velora

          </h1>

        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

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
            to="/dashboard/analytics"
            className="hover:text-white transition"
          >
            Analytics
          </Link>

          <Link
            to="/dashboard/aibuilder"
            className="hover:text-white transition"
          >
            AI Builder
          </Link>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <Link to="/login">

            <motion.button

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
            >

              Login

            </motion.button>

          </Link>

          {/* Start Building */}
          <Link to="/dashboard/aibuilder">

            <motion.button

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >

              Start Building

            </motion.button>

          </Link>

        </div>

      </div>

    </motion.nav>

  )

}