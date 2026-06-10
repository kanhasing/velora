import { motion } from "framer-motion"

const logos = [

  "Google",
  "Microsoft",
  "OpenAI",
  "Vercel",
  "Framer",
  "Webflow",

]

export default function LogoCloud() {

  return (

    <section className="relative py-24 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.div

          initial={{
            opacity: 0,
            y: 30,
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

          className="mb-14"
        >

          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">

            Trusted by modern creators

          </p>

        </motion.div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {logos.map((logo, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -5,
                scale: 1.03,
              }}

              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-6 px-4 text-lg font-semibold text-gray-300 hover:text-white transition duration-300 shadow-[0_0_25px_rgba(0,0,0,0.25)]"
            >

              {logo}

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}