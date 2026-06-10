import { motion } from "framer-motion"

export default function CTA() {

  return (

    <section className="relative py-40 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>

      {/* Floating Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}

          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-14 md:p-24 text-center shadow-[0_0_60px_rgba(0,0,0,0.45)]"
        >

          {/* Card Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>

          <div className="relative z-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8">

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              AI-Powered Website Builder

            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-7xl font-semibold leading-[1] tracking-tight mb-8">

              Start building
              <br />

              the future with Velora.

            </h2>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-12">

              Generate stunning modern websites with artificial intelligence, premium templates, and futuristic workflows.

            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-5 flex-wrap">

              <motion.button

                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              >

                Start Creating

              </motion.button>

              <motion.button

                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-lg hover:bg-white/10 transition"
              >

                View Demo

              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )

}