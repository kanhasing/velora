import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,

} from "recharts"

const data = [

  {
    month: "Jan",
    users: 400,
  },

  {
    month: "Feb",
    users: 900,
  },

  {
    month: "Mar",
    users: 1400,
  },

  {
    month: "Apr",
    users: 2200,
  },

  {
    month: "May",
    users: 3200,
  },

  {
    month: "Jun",
    users: 4500,
  },

]

export default function Analytics() {

  return (

    <div className="min-h-screen bg-[#050505] text-white p-10">

      {/* Header */}
      <div className="mb-14">

        <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
          Analytics
        </p>

        <h1 className="text-5xl font-semibold">
          Growth Dashboard
        </h1>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {[
          {
            title: "Users",
            value: "45K",
          },

          {
            title: "Revenue",
            value: "$18K",
          },

          {
            title: "AI Generations",
            value: "120K",
          },

        ].map((card) => (

          <div
            key={card.title}
            className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8"
          >

            <p className="text-gray-400 mb-4">
              {card.title}
            </p>

            <h2 className="text-5xl font-semibold">
              {card.value}
            </h2>

          </div>

        ))}

      </div>

      {/* Chart */}
      <div className="rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
              Performance
            </p>

            <h2 className="text-3xl font-semibold">
              User Growth
            </h2>

          </div>

        </div>

        <div className="h-[400px]">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.08)"
              />

              <XAxis
                dataKey="month"
                stroke="#888"
              />

              <YAxis stroke="#888" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  )

}