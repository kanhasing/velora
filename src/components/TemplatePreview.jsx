import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const templates = [
  {
    id: 1,
    title: "AI Startup",
    description: "Futuristic SaaS startup experience",
  },

  {
    id: 2,
    title: "Creative Agency",
    description: "Modern animated agency layout",
  },

  {
    id: 3,
    title: "Portfolio",
    description: "Minimal premium portfolio website",
  },
]

export default function TemplatePreview() {

  const [selected, setSelected] = useState(null)

  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Templates
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Explore premium
            <br />
            AI-generated templates.
          </h2>

        </div>

        {/* Template Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {templates.map((template) => (

            <motion.div
              key={template.id}

              whileHover={{
                y: -10,
              }}

              className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl overflow-hidden"
            >

              {/* Fake Preview */}
              <div className="h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-b border-white/10 p-6">

                {/* Browser */}
                <div className="flex gap-2 mb-6">

                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>

                </div>

                {/* Fake UI */}
                <div className="space-y-4">

                  <div className="h-10 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                  <div className="h-40 rounded-3xl bg-white/5"></div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="h-20 rounded-2xl bg-white/5"></div>

                    <div className="h-20 rounded-2xl bg-white/5"></div>

                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {template.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {template.description}
                </p>

                <button
                  onClick={() => setSelected(template)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                >
                  Preview Template
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
          >

            {/* Modal */}
            <motion.div

              initial={{
                scale: 0.9,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.9,
                opacity: 0,
              }}

              className="w-full max-w-6xl rounded-[40px] border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]"
            >

              {/* Top */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">

                <div>

                  <h3 className="text-3xl font-semibold">
                    {selected.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {selected.description}
                  </p>

                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-xl"
                >
                  ✕
                </button>

              </div>

              {/* Preview */}
              <div className="p-8">

                {/* Fake Browser */}
                <div className="rounded-[32px] overflow-hidden border border-white/10 bg-black/30">

                  {/* Browser Top */}
                  <div className="flex gap-2 px-6 py-5 border-b border-white/10">

                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>

                  </div>

                  {/* Website Preview */}
                  <div className="p-10">

                    <div className="h-16 w-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-10"></div>

                    <div className="grid md:grid-cols-2 gap-8">

                      <div className="space-y-6">

                        <div className="h-14 rounded-2xl bg-white/5"></div>

                        <div className="h-14 rounded-2xl bg-white/5"></div>

                        <div className="h-64 rounded-[32px] bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

                      </div>

                      <div className="space-y-6">

                        <div className="h-40 rounded-[32px] bg-white/5"></div>

                        <div className="h-40 rounded-[32px] bg-white/5"></div>

                        <div className="h-20 rounded-[32px] bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  )
}