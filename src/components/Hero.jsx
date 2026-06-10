import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-[#050505]">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Blue Glow */}
      <motion.div

        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.15, 1],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"
      />

      {/* Purple Glow */}
      <motion.div

        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(20)].map((_, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 100,
            }}

            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [-20, -120],
              x: [0, Math.random() * 100 - 50],
            }}

            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}

            className="absolute w-2 h-2 rounded-full bg-blue-400/30 blur-sm"

            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />

        ))}

      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          {/* Badge */}
          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.6,
            }}

            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >

            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            AI Website Builder

          </motion.div>

          {/* Heading */}
          <motion.h1

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight"
          >

            Build stunning
            <br />

            <span className="bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent">

              websites with AI.

            </span>

          </motion.h1>

          {/* Description */}
          <motion.p

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.3,
              duration: 0.8,
            }}

            className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-gray-400 leading-relaxed"
          >

            Launch premium startup-quality websites with modern AI-powered workflows and futuristic design systems.

          </motion.p>

          {/* Buttons */}
          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.5,
              duration: 0.8,
            }}

            className="flex justify-center gap-4 mt-10 flex-wrap"
          >

            {/* Start Building */}
            <Link to="/dashboard/aibuilder">

              <motion.button

                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              >

                Start Building

              </motion.button>

            </Link>

            {/* Templates */}
            <Link to="/dashboard/templates">

              <motion.button

                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}

                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
              >

                View Templates

              </motion.button>

            </Link>

          </motion.div>

        </motion.div>

      </div>

    </section>

  )

}
      