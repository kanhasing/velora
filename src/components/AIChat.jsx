import { motion } from "framer-motion"

const messages = [

  {
    type: "ai",
    text: "Welcome to Velora AI. Describe your dream website.",
  },

  {
    type: "user",
    text: "Build a futuristic AI startup landing page.",
  },

  {
    type: "ai",
    text: "Generating premium startup interface with glowing gradients and modern sections...",
  },

]

export default function AIBuilder() {

  return (

    <div className="min-h-screen bg-[#050505] text-white flex flex-col">

      {/* Header */}
      <div className="border-b border-white/10 p-6 flex items-center justify-between">

        <div>

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-2">
            AI Builder
          </p>

          <h1 className="text-3xl font-semibold">
            Generate Websites with AI
          </h1>

        </div>

        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>

      </div>

      {/* Chat */}
      <div className="flex-1 p-8 overflow-y-auto space-y-6">

        {messages.map((message, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.4,
              delay: index * 0.2,
            }}

            className={`max-w-3xl rounded-[28px] p-6 border ${
              message.type === "ai"
                ? "bg-white/[0.04] border-white/10"
                : "bg-gradient-to-r from-blue-500 to-purple-500 border-transparent ml-auto"
            }`}
          >

            <p className="text-lg leading-relaxed">
              {message.text}
            </p>

          </motion.div>

        ))}

      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-6">

        <div className="flex gap-4">

          <input
            placeholder="Describe your website idea..."
            className="flex-1 rounded-2xl bg-white/5 border border-white/10 px-6 py-5 outline-none"
          />

          <button className="px-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_35px_rgba(59,130,246,0.35)]">

            Generate

          </button>

        </div>

      </div>

    </div>

  )

}