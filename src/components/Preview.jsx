import { motion } from "framer-motion"

export default function Preview() {

  return (

    <section className="relative py-32 px-6 overflow-hidden bg-[#050505]">

      {/* Glow Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">

            AI Powered Experience

          </p>

          <h2 className="text-5xl md:text-7xl font-semibold leading-tight">

            Build websites
            <br />

            visually with AI.

          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">

            Generate entire startup-quality websites with futuristic layouts, intelligent design systems, and cinematic UI experiences.

          </p>

        </div>

        {/* Dashboard Container */}
        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{
            once: true,
          }}

          className="relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(59,130,246,0.12)] overflow-hidden"
        >

          {/* Top Bar */}
          <div className="flex items-center justify-between mb-10">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>

            </div>

            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">

              Velora AI Builder

            </div>

          </div>

          {/* Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT PANEL */}
            <div className="space-y-6">

              {/* AI Prompt */}
              <motion.div

                whileHover={{
                  scale: 1.02,
                }}

                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >

                <p className="text-gray-400 text-sm mb-4">

                  AI Prompt

                </p>

                <div className="rounded-2xl bg-black/40 border border-white/10 px-4 py-4 text-gray-300">

                  Create a futuristic AI startup website with glassmorphism UI.

                </div>

              </motion.div>

              {/* Metrics */}
              <motion.div

                whileHover={{
                  scale: 1.02,
                }}

                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >

                <p className="text-gray-400 text-sm mb-6">

                  AI Performance

                </p>

                <div className="space-y-5">

                  <div>

                    <div className="flex justify-between mb-2 text-sm">

                      <span>Generation Speed</span>

                      <span>98%</span>

                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                      <div className="w-[98%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                    </div>

                  </div>

                  <div>

                    <div className="flex justify-between mb-2 text-sm">

                      <span>Design Quality</span>

                      <span>95%</span>

                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                      <div className="w-[95%] h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

            {/* CENTER PANEL */}
            <motion.div

              whileHover={{
                scale: 1.01,
              }}

              className="lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 overflow-hidden relative"
            >

              {/* Fake Website Preview */}
              <div className="space-y-6">

                {/* Navbar */}
                <div className="flex items-center justify-between">

                  <div className="text-2xl font-semibold">

                    Velora

                  </div>

                  <div className="flex gap-6 text-gray-300">

                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Templates</span>

                  </div>

                </div>

                {/* Hero */}
                <div className="pt-10">

                  <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">

                    The future of
                    <br />

                    AI website creation.

                  </h1>

                  <p className="mt-6 text-gray-300 max-w-xl text-lg">

                    Build cinematic startup websites with AI-generated layouts and intelligent design systems.

                  </p>

                  <button className="mt-8 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">

                    Start Building

                  </button>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-5 pt-10">

                  {[
                    "AI Layouts",
                    "Smart Components",
                    "Realtime Editing",
                  ].map((item, index) => (

                    <div
                      key={index}

                      className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl"
                    >

                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>

                      <h3 className="text-xl font-medium">

                        {item}

                      </h3>

                      <p className="text-gray-400 mt-3 text-sm">

                        AI-powered premium generation system.

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>

  )

}