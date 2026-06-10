import { motion } from "framer-motion"

const features = [
  {
    title: "Premium UI",
    desc: "Modern startup-quality interfaces inspired by elite SaaS brands.",
  },
  {
    title: "AI Powered",
    desc: "Generate complete websites instantly using intelligent workflows.",
  },
  {
    title: "Responsive",
    desc: "Perfect layouts across desktop, tablet, and mobile devices.",
  },
  {
    title: "Fast Performance",
    desc: "Optimized modern frontend architecture for blazing speed.",
  },
  {
    title: "Glassmorphism",
    desc: "Futuristic visual effects with blur, glow, and depth.",
  },
  {
    title: "Smooth Animations",
    desc: "Cinematic interactions powered by Framer Motion.",
  },
]

export default function Features() {
  return (
    <section className="py-32 px-6 relative">

      {/* Section Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <p className="text-blue-400 mb-4 text-sm uppercase tracking-[0.3em]">
            Features
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Built for the future
            <br />
            of web creation.
          </h2>

        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6"></div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}