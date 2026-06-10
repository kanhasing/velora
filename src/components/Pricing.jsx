import { motion } from "framer-motion"

const plans = [
  {
    title: "Starter",
    price: "$99",
    desc: "Perfect for personal brands and small projects.",
  },
  {
    title: "Pro",
    price: "$299",
    desc: "Advanced startup-quality websites with premium UI.",
    featured: true,
  },
  {
    title: "Enterprise",
    price: "$699",
    desc: "Complete custom experiences for serious businesses.",
  },
]

export default function Pricing() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

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
            Pricing
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Flexible plans for
            <br />
            modern creators.
          </h2>

        </motion.div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`relative rounded-[32px] border backdrop-blur-xl p-10 transition-all duration-500 overflow-hidden
              
              ${
                plan.featured
                  ? "border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 shadow-[0_0_60px_rgba(168,85,247,0.25)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >

              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium">
                  Popular
                </div>
              )}

              {/* Plan Title */}
              <h3 className="text-3xl font-semibold mb-4">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-2 mb-6">

                <span className="text-6xl font-semibold">
                  {plan.price}
                </span>

                <span className="text-gray-400 mb-2">
                  /project
                </span>

              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-10">
                {plan.desc}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10">

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p>Premium UI Design</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p>Responsive Layout</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p>Modern Animations</p>
                </div>

              </div>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-2xl font-medium transition-all duration-300
                ${
                  plan.featured
                    ? "bg-white text-black hover:scale-105"
                    : "bg-white/10 hover:bg-white hover:text-black"
                }`}
              >
                Get Started
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}