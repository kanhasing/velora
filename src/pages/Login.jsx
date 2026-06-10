import { useState } from "react"

import {

  signInWithEmailAndPassword,

} from "firebase/auth"

import { auth } from "../firebase"

import { useNavigate } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(

        auth,
        email,
        password

      )

      navigate("/dashboard")

    } catch (error) {

      alert(error.message)

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-4xl font-bold mb-8">

          Login

        </h1>

        <div className="space-y-4">

          <input
            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            className="w-full bg-white/10 rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

            className="w-full bg-white/10 rounded-xl px-4 py-4 outline-none"
          />

          <button

            onClick={handleLogin}

            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500"
          >

            Login

          </button>

        </div>

      </div>

    </div>

  )

}
         