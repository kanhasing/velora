import { motion } from "framer-motion"

const templates = [

  {
    title: "AI Startup",
    category: "Startup",
  },

  {
    title: "SaaS Dashboard",
    category: "SaaS",
  },

  {
    title: "Agency Website",
    category: "Agency",
  },

  {
    title: "Portfolio",
    category: "Personal",
  },

]

export default function TemplatesPage() {

  return (

    <div className="min-h-screen bg-[#050505] text-white p-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-14">

        <div>

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
            Templates
          </p>

          <h1 className="text-5xl font-semibold">
            Explore Templates
          </h1>

        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap">

          {[
            "All",
            "Startup",
            "SaaS",
            "Agency",
            "Portfolio",
          ].map((filter) => (

            <button
              key={filter}
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all duration-300"
            >

              {filter}

            </button>

          ))}

        </div>

      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {templates.map((template, index) => (

          <motion.div
            key={index}

            whileHover={{
              y: -8,
              scale: 1.02,
            }}

            className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-2xl hover:border-blue-500/30 transition-all duration-500"
          >

            {/* Preview */}
            <div className="h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">

              <div className="flex gap-2 mb-6">

                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

              </div>

              <div className="space-y-4">

                <div className="h-12 w-44 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                <div className="h-28 rounded-3xl bg-white/5"></div>

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
                  {template.title}
                </h2>

                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300 border border-blue-500/20">

                  {template.category}

                </span>

              </div>

              <p className="text-gray-400 mb-6">
                Premium futuristic AI-powered website template.
              </p>

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_25px_rgba(59,130,246,0.35)]">

                Preview Template

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  )

}