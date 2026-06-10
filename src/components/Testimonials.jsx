import { motion } from "framer-motion"

const testimonials = [

  {
    name: "Alex Carter",
    role: "Startup Founder",
    text:
      "Velora completely changed the way we build landing pages. The AI feels futuristic and insanely fast.",
  },

  {
    name: "Sophia Lee",
    role: "UI Designer",
    text:
      "The design quality is unbelievable. It feels like using a premium Silicon Valley product.",
  },

  {
    name: "Daniel Kim",
    role: "Developer",
    text:
      "The smooth animations, templates, and AI workflow are next-level. Velora feels years ahead.",
  },

]

export default function Testimonials() {

  return (

    <section className="relative py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

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

            Testimonials

          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">

            Loved by creators
            <br />

            around the world.

          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

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
                y: -10,
                scale: 1.02,
              }}

              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

              <div className="relative z-10">

                {/* Stars */}
                <div className="flex gap-1 mb-6 text-yellow-400">

                  {"★★★★★"}

                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed mb-8">

                  "{item.text}"

                </p>

                {/* User */}
                <div>

                  <h3 className="text-xl font-semibold">

                    {item.name}

                  </h3>

                  <p className="text-gray-500">

                    {item.role}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}