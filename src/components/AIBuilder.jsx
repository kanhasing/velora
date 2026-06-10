import React, { useState } from "react"

import {

  collection,
  addDoc,
  serverTimestamp,

} from "firebase/firestore"

import { db, auth } from "../firebase"

export default function AIBuilder() {

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState([

    {
      type: "ai",
      text: "Welcome to Velora AI. Describe the website you want to generate.",
    },

  ])

  const handleGenerate = async () => {

    if (!input.trim()) return

    const userMessage = {

      type: "user",

      text: input,

    }

    setMessages((prev) => [

      ...prev,
      userMessage,

    ])

    setLoading(true)

    try {

      const response = await fetch(

        "http://localhost:5000/generate",

        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            prompt: input,
          }),

        }

      )

      const data = await response.json()

      const aiMessage = {

        type: "ai",

        text:
          data.result ||
          "AI website generation completed.",

      }

      await addDoc(

        collection(db, "generations"),

        {

          userId: auth.currentUser?.uid || "guest",

          prompt: input,

          response: data.result,

          createdAt: serverTimestamp(),

        }

      )

      setMessages((prev) => [

        ...prev,
        aiMessage,

      ])

    } catch (error) {

      console.log(error)

      setMessages((prev) => [

        ...prev,

        {
          type: "ai",
          text: "Server connection failed.",
        },

      ])

    }

    setLoading(false)

    setInput("")

  }

  return (

    <div className="min-h-screen bg-[#050505] text-white flex flex-col">

      {/* Header */}
      <div className="border-b border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center justify-between">

        <div>

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-2">

            Velora AI

          </p>

          <h1 className="text-4xl font-semibold">

            AI Website Builder

          </h1>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

          <p className="text-gray-300">

            Online

          </p>

        </div>

      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">

        {messages.map((message, index) => (

          <div
            key={index}

            className={`max-w-3xl rounded-3xl p-6 border transition-all duration-300 ${
              message.type === "ai"
                ? "bg-white/[0.05] border-white/10"
                : "bg-gradient-to-r from-blue-500 to-purple-500 border-transparent ml-auto"
            }`}
          >

            <p className="text-lg leading-relaxed">

              {message.text}

            </p>

          </div>

        ))}

        {loading && (

          <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 max-w-xl animate-pulse">

            Velora AI is generating...

          </div>

        )}

      </div>

      {/* Input */}
      <div className="border-t border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

        <div className="flex gap-4">

          <input

            value={input}

            onChange={(e) => setInput(e.target.value)}

            placeholder="Describe your futuristic AI website..."

            className="flex-1 rounded-2xl bg-white/5 border border-white/10 px-6 py-5 outline-none focus:border-blue-500/40 transition-all duration-300"

          />

          <button

            onClick={handleGenerate}

            disabled={loading}

            className="px-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:scale-105 transition-all duration-300 disabled:opacity-50"
          >

            {loading ? "Generating..." : "Generate"}

          </button>

        </div>

      </div>

    </div>

  )

}
