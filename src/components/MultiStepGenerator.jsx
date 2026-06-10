import { useState } from "react"
import { motion } from "framer-motion"

export default function MultiStepGenerator() {

  const [step, setStep] = useState(1)

  const [websiteType, setWebsiteType] = useState("")
  const [style, setStyle] = useState("")
  const [theme, setTheme] = useState("")

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            AI Website Builder
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Build websites
            <br />
            step by step.
          </h2>

        </div>

        {/* Main Box */}
        <div className="rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-10">

          {/* Progress Bar */}
          <div className="flex gap-3 mb-12">

            {[1,2,3,4].map((item) => (

              <div
                key={item}
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                  step >= item
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-white/10"
                }`}
              />

            ))}

          </div>

          {/* STEP 1 */}
          {step === 1 && (

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >

              <h3 className="text-3xl font-semibold mb-8">
                Choose Website Type
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                {[
                  "AI Startup",
                  "Agency",
                  "Portfolio",
                  "Ecommerce"
                ].map((item) => (

                  <button
                    key={item}
                    onClick={() => setWebsiteType(item)}
                    className={`p-8 rounded-3xl border transition-all duration-300 text-left ${
                      websiteType === item
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >

                    <h4 className="text-2xl font-semibold mb-3">
                      {item}
                    </h4>

                    <p className="text-gray-400">
                      Premium {item} website experience.
                    </p>

                  </button>

                ))}

              </div>

            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >

              <h3 className="text-3xl font-semibold mb-8">
                Choose Style
              </h3>

              <div className="grid md:grid-cols-3 gap-6">

                {[
                  "Minimal",
                  "Futuristic",
                  "Glassmorphism"
                ].map((item) => (

                  <button
                    key={item}
                    onClick={() => setStyle(item)}
                    className={`p-8 rounded-3xl border transition-all duration-300 ${
                      style === item
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >

                    <h4 className="text-2xl font-semibold">
                      {item}
                    </h4>

                  </button>

                ))}

              </div>

            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
            >

              <h3 className="text-3xl font-semibold mb-8">
                Choose Color Theme
              </h3>

              <div className="grid md:grid-cols-3 gap-6">

                {[
                  "Blue / Purple",
                  "Black / White",
                  "Emerald / Cyan"
                ].map((item) => (

                  <button
                    key={item}
                    onClick={() => setTheme(item)}
                    className={`p-8 rounded-3xl border transition-all duration-300 ${
                      theme === item
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >

                    <h4 className="text-xl font-semibold">
                      {item}
                    </h4>

                  </button>

                ))}

              </div>

            </motion.div>
          )}

          {/* STEP 4 */}
          {step === 4 && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >

              <h3 className="text-3xl font-semibold mb-10">
                AI Generated Preview
              </h3>

              <div className="rounded-[32px] border border-white/10 overflow-hidden bg-black/20">

                {/* Browser Top */}
                <div className="flex gap-2 px-5 py-4 border-b border-white/10">

                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>

                </div>

                {/* Preview */}
                <div className="p-8">

                  <div className="h-14 w-60 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-10"></div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="h-64 rounded-3xl bg-white/5"></div>

                    <div className="space-y-4">

                      <div className="h-12 rounded-2xl bg-white/5"></div>

                      <div className="h-12 rounded-2xl bg-white/5"></div>

                      <div className="h-12 rounded-2xl bg-white/5"></div>

                      <div className="h-40 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Summary */}
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Website Type:
                  </span>{" "}
                  {websiteType}
                </p>

                <p className="text-gray-300 mt-3">
                  <span className="font-semibold text-white">
                    Style:
                  </span>{" "}
                  {style}
                </p>

                <p className="text-gray-300 mt-3">
                  <span className="font-semibold text-white">
                    Theme:
                  </span>{" "}
                  {theme}
                </p>

              </div>

            </motion.div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-12">

            <button
              onClick={prevStep}
              className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5"
            >
              Back
            </button>

            <button
              onClick={nextStep}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_35px_rgba(59,130,246,0.35)]"
            >
              {step === 4 ? "Finish" : "Continue"}
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}