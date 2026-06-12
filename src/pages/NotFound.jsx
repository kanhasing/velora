import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  )
}