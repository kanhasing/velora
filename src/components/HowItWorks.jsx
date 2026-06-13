export default function HowItWorks() {

  return (

    <section className="py-24 px-6 bg-[#050505]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-semibold text-center mb-4">
          How It Works
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Build a website in three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl font-bold text-blue-400 mb-4">
              01
            </div>

            <h3 className="text-2xl font-medium mb-3">
              Describe Your Idea
            </h3>

            <p className="text-gray-400">
              Tell Velora what type of website you want to create.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl font-bold text-purple-400 mb-4">
              02
            </div>

            <h3 className="text-2xl font-medium mb-3">
              Generate Instantly
            </h3>

            <p className="text-gray-400">
              Velora uses AI to generate a professional website structure.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl font-bold text-green-400 mb-4">
              03
            </div>

            <h3 className="text-2xl font-medium mb-3">
              Launch Faster
            </h3>

            <p className="text-gray-400">
              Customize your website and publish it quickly.
            </p>
          </div>

        </div>

      </div>

    </section>

  )

}