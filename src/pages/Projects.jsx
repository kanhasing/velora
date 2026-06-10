import { motion } from "framer-motion"

const projects = [

  {
    title: "AI Startup Landing",
    status: "Live",
  },

  {
    title: "SaaS Dashboard",
    status: "In Progress",
  },

  {
    title: "Portfolio Website",
    status: "Draft",
  },

]

export default function Projects() {

  return (

    <div className="min-h-screen bg-[#050505] text-white p-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-14">

        <div>

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
            Projects
          </p>

          <h1 className="text-5xl font-semibold">
            Your Websites
          </h1>

        </div>

        <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_35px_rgba(59,130,246,0.35)]">

          New Project

        </button>

      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            whileHover={{
              y: -8,
              scale: 1.02,
            }}

            className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl"
          >

            {/* Preview */}
            <div className="h-56 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">

              {/* Browser dots */}
              <div className="flex gap-2 mb-6">

                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

              </div>

              {/* Fake UI */}
              <div className="space-y-4">

                <div className="h-10 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                <div className="h-24 rounded-3xl bg-white/5"></div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="h-16 rounded-2xl bg-white/5"></div>

                  <div className="h-16 rounded-2xl bg-white/5"></div>

                </div>

              </div>

            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex items-center justify-between mb-4">

                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300 border border-blue-500/20">

                  {project.status}

                </span>

              </div>

              <p className="text-gray-400 mb-6">
                Premium AI-generated futuristic website experience.
              </p>

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">

                Open Project

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  )

}