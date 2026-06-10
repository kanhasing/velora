import { motion } from "framer-motion"

const templates = [

  {
    title: "AI SaaS",
    desc: "Modern AI startup landing page with futuristic UI.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Crypto Dashboard",
    desc: "Premium crypto analytics and trading interface.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Portfolio",
    desc: "Elegant personal portfolio for creators and developers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },

]

export default function Templates() {

  return (

    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

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

          <p className="text-blue-400 mb-4 text-sm uppercase tracking-[0.3em]">

            Templates

          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">

            Ready-made futuristic
            <br />

            website experiences.

          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {templates.map((template, index) => (

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
                y: -12,
                scale: 1.02,
              }}

              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-72">

                <motion.img
                  src={template.image}
                  alt={template.title}

                  whileHover={{
                    scale: 1.08,
                  }}

                  transition={{
                    duration: 0.6,
                  }}

                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10"></div>

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-3xl font-semibold mb-4">

                  {template.title}

                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">

                  {template.desc}

                </p>

                <motion.button

                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.97,
                  }}

                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_35px_rgba(59,130,246,0.35)]"
                >

                  Preview Template

                </motion.button>

              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-blue-500/0 group-hover:border-blue-500/30 transition duration-500 pointer-events-none"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}