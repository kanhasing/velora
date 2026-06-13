export default function DemoShowcase() {

  return (

    <section className="py-24 px-6 bg-[#050505]">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-semibold text-center mb-4">

          See What Velora Can Build

        </h2>

        <p className="text-center text-gray-400 mb-16">

          Generate modern websites with AI in seconds.

        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="h-64 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
            <h3 className="mt-4 text-xl font-medium">SaaS Startup</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="h-64 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            <h3 className="mt-4 text-xl font-medium">Portfolio</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="h-64 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
            <h3 className="mt-4 text-xl font-medium">Ecommerce Store</h3>
          </div>

        </div>

      </div>

    </section>

  )

}