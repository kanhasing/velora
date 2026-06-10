import { useState } from "react"

import {
  createUserWithEmailAndPassword,
} from "firebase/auth"

import { auth } from "../firebase"

export default function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert("Account Created!")

    } catch (error) {

      alert(error.message)

    }

  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8">

        <h1 className="text-4xl font-semibold text-white mb-8">
          Create Account
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none"
          />

          <button
            onClick={handleSignup}

            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          >
            Sign Up
          </button>

        </div>

      </div>

    </div>
  )
}