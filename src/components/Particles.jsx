import { motion } from "framer-motion"

const particles = Array.from({ length: 25 })

export default function Particles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {particles.map((_, index) => {

        const size = Math.random() * 6 + 2

        return (
          <motion.div
            key={index}

            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2,
            }}

            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 200,
              ],

              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth + 100,
              ],

              opacity: [0.2, 0.7, 0.2],
            }}

            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}

            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-[1px]"
            style={{
              width: size,
              height: size,
            }}
          />
        )
      })}

    </div>
  )
}