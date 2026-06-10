import { motion } from "framer-motion"

const stats = [

  {
    number: "50K+",
    label: "Websites Generated",
  },

  {
    number: "12K+",
    label: "Active Creators",
  },

  {
    number: "99.9%",
    label: "AI Uptime",
  },

  {
    number: "4.9/5",
    label: "User Satisfaction",
  },

]

export default function Stats() {

  return (

    <section className="relative py-28 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
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
            duration: 0.7,
          }}

          className="text-center mb-20"
        >

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">

            Live Platform Stats

          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">

            Trusted by creators
            <br />

            worldwide.

          </h2>

        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (

            <motion.div
              key={index}

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
                duration: 0.6,
                delay: index * 0.15,
              }}

              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

              <div className="relative z-10">

                <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">

                  {stat.number}

                </h3>

                <p className="text-gray-400 text-lg">

                  {stat.label}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}