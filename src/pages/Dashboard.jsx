import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

export default function Dashboard() {

  const location = useLocation()

  return (

    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-72 min-h-screen border-r border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 flex flex-col justify-between">

        <div>

          {/* Logo */}
          <Link to="/">

            <h1 className="text-3xl font-semibold text-white mb-12">

              Velora

            </h1>

          </Link>

          {/* Navigation */}
          <div className="space-y-3">

            {/* Dashboard */}
            <Link to="/dashboard">

              <motion.div

                whileHover={{
                  x: 5,
                }}

                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/dashboard"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >

                Dashboard

              </motion.div>

            </Link>

            {/* Projects */}
            <Link to="/dashboard/projects">

              <motion.div

                whileHover={{
                  x: 5,
                }}

                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/dashboard/projects"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >

                Projects

              </motion.div>

            </Link>

            {/* Templates */}
            <Link to="/dashboard/templates">

              <motion.div

                whileHover={{
                  x: 5,
                }}

                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/dashboard/templates"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >

                Templates

              </motion.div>

            </Link>

            {/* AI Builder */}
            <Link to="/dashboard/aibuilder">

              <motion.div

                whileHover={{
                  x: 5,
                }}

                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/dashboard/aibuilder"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >

                AI Builder

              </motion.div>

            </Link>

            {/* AI Chat */}
            <Link to="/dashboard/ai-chat">

              <motion.div

                whileHover={{
                  x: 5,
                }}

                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/dashboard/ai-chat"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >

                AI Chat

              </motion.div>

            </Link>

            {/* Analytics */}
            <Link to="/dashboard/analytics">

              <motion.div

                whileHover={{
                  x: 5,
                }}

                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/dashboard/analytics"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >

                Analytics

              </motion.div>

            </Link>

            {/* Settings */}
            <Link to="/dashboard/settings">

              <motion.div

                whileHover={{
                  x: 5,
                }}

                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/dashboard/settings"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >

                Settings

              </motion.div>

            </Link>

          </div>

        </div>

        {/* Bottom Status */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

          <p className="text-gray-400 text-sm mb-2">

            System Status

          </p>

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <p className="text-white">

              All Systems Operational

            </p>

          </div>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">

              Dashboard

            </p>

            <h1 className="text-5xl font-semibold leading-tight">

              Welcome to Velora

            </h1>

          </div>

          <Link to="/dashboard/aibuilder">

            <motion.button

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_35px_rgba(59,130,246,0.35)]"
            >

              Create with AI

            </motion.button>

          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-gray-400 mb-3">

              Total Projects

            </p>

            <h2 className="text-5xl font-semibold">

              12

            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-gray-400 mb-3">

              AI Generations

            </p>

            <h2 className="text-5xl font-semibold">

              38

            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-gray-400 mb-3">

              Active Users

            </p>

            <h2 className="text-5xl font-semibold">

              1.2K

            </h2>

          </div>

        </div>

        {/* Recent Projects */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-semibold">

              Recent Projects

            </h2>

            <Link to="/dashboard/projects">

              <button className="text-blue-400 hover:text-white transition">

                View All

              </button>

            </Link>

          </div>

          <div className="space-y-5">

            {[
              "AI Startup Landing Page",
              "Crypto Dashboard UI",
              "Portfolio Website",
              "SaaS Analytics Platform",
            ].map((project, index) => (

              <motion.div
                key={index}

                whileHover={{
                  scale: 1.01,
                }}

                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex items-center justify-between"
              >

                <div>

                  <h3 className="text-xl font-medium">

                    {project}

                  </h3>

                  <p className="text-gray-400 mt-1">

                    Generated with Velora AI

                  </p>

                </div>

                <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">

                  Open

                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </main>

    </div>

  )

}